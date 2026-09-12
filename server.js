import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { OAuth2Client } from 'google-auth-library';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath=path.join(__dirname,'.env');
if(fs.existsSync(envPath)){
  for(const line of fs.readFileSync(envPath,'utf8').split(/\r?\n/)){
    const m=line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if(m && process.env[m[1]]===undefined) process.env[m[1]]=m[2].replace(/^['"]|['"]$/g,'');
  }
}
const PORT = Number(process.env.PORT || 5500);
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '215037630867-m14ubvuv3k0tln27rr7e93o1bf2bmdnc.apps.googleusercontent.com';
const SESSION_SECRET = process.env.SESSION_SECRET || '';
const isProd = process.env.NODE_ENV === 'production';
if (isProd && SESSION_SECRET.length < 32) throw new Error('SESSION_SECRET must be at least 32 characters in production.');

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);
const ipBuckets = new Map();
const ipFailureStore = new Map();
const googleNonceStore = new Map();
const sessions = new Map();

const MAX_LOGIN_FAILURES = 5;
const LOCK_MS = 60 * 60 * 1000;
const SESSION_MS = 8 * 60 * 60 * 1000;

function now(){ return Date.now(); }
function hash(v){ return crypto.createHash('sha256').update(v).digest('hex'); }
function randomToken(bytes=32){ return crypto.randomBytes(bytes).toString('base64url'); }
function clientIp(req){
  // Do not trust X-Forwarded-For unless you configure a trusted reverse proxy.
  return req.socket.remoteAddress || 'unknown';
}
function cleanup(){
  const t=now();
  for(const [k,v] of sessions) if(v.expiresAt<=t) sessions.delete(k);
  for(const [k,v] of ipBuckets) if(v.resetAt<=t) ipBuckets.delete(k);
  for(const [k,v] of ipFailureStore) if(v.lockedUntil && v.lockedUntil<=t) ipFailureStore.delete(k);
  for(const [k,v] of googleNonceStore) if(v.expiresAt<=t) googleNonceStore.delete(k);
}
setInterval(cleanup, 60_000).unref();

function rateLimit(req, key, limit, windowMs){
  const k=`${key}:${clientIp(req)}`;
  const t=now(); let b=ipBuckets.get(k);
  if(!b || b.resetAt<=t) b={count:0,resetAt:t+windowMs};
  b.count++; ipBuckets.set(k,b);
  return b.count<=limit;
}
function ipLoginState(req){
  const k=clientIp(req); const s=ipFailureStore.get(k);
  if(s?.lockedUntil>now()) return s;
  if(s) ipFailureStore.delete(k);
  return {failures:0,lockedUntil:0};
}
function registerIpFailure(req){
  const k=clientIp(req); const s=ipLoginState(req); s.failures=(s.failures||0)+1;
  if(s.failures>=MAX_LOGIN_FAILURES){s.lockedUntil=now()+LOCK_MS;s.failures=0;}
  ipFailureStore.set(k,s); return s;
}
function clearIpFailures(req){ipFailureStore.delete(clientIp(req));}
function genericDelay(ms=250){ return new Promise(r=>setTimeout(r,ms)); }

function sendJson(res,status,data,headers={}){
  const body=JSON.stringify(data);
  res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...headers});
  res.end(body);
}
function securityHeaders(){
  return {
    'X-Content-Type-Options':'nosniff',
    'X-Frame-Options':'DENY',
    'Referrer-Policy':'strict-origin-when-cross-origin',
    'Permissions-Policy':'camera=(), microphone=(), geolocation=()',
    'Cross-Origin-Opener-Policy':'same-origin-allow-popups',
    'Content-Security-Policy':"default-src 'self'; script-src 'self' https://accounts.google.com https://accounts.google.com/gsi/client; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://accounts.google.com https://*.googleusercontent.com; frame-src https://www.youtube-nocookie.com https://accounts.google.com; connect-src 'self' https://accounts.google.com https://content.googleapis.com; media-src 'self' https://download.quranicaudio.com; object-src 'none'; base-uri 'self'; form-action 'self'"
  };
}
function setCookie(res,name,value,maxAge){
  const secure=isProd?' Secure;':'';
  res.setHeader('Set-Cookie',`${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(maxAge/1000)};${secure}`);
}
function parseCookies(req){
  const out={}; for(const part of (req.headers.cookie||'').split(';')){ const i=part.indexOf('='); if(i<0)continue; out[part.slice(0,i).trim()]=decodeURIComponent(part.slice(i+1)); } return out;
}
function createSession(user){
  const token=randomToken(32); sessions.set(hash(token),{user,expiresAt:now()+SESSION_MS}); return token;
}
function createGoogleNonce(req,res){
  const nonce=randomToken(24);
  const key=randomToken(18);
  googleNonceStore.set(key,{nonceHash:hash(nonce),expiresAt:now()+5*60*1000});
  setCookie(res,'google_challenge',key,5*60*1000);
  return nonce;
}
function verifyGoogleNonce(req,nonce){
  const key=parseCookies(req).google_challenge;
  const record=key?googleNonceStore.get(key):null;
  if(!record || record.expiresAt<=now() || typeof nonce!=='string' || hash(nonce)!==record.nonceHash) return false;
  googleNonceStore.delete(key);
  return true;
}
function getSession(req){
  const token=parseCookies(req).nur_session; if(!token)return null; const s=sessions.get(hash(token)); if(!s || s.expiresAt<=now())return null; return s;
}
async function readBody(req){
  let data=''; for await(const chunk of req){ data+=chunk; if(data.length>20_000) throw new Error('Body too large'); }
  return JSON.parse(data||'{}');
}
function validEmail(email){return typeof email==='string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length<=254;}
function makeOtp(){return String(crypto.randomInt(0,1_000_000)).padStart(6,'0');}

async function handle(req,res){
  const headers=securityHeaders();
  for(const [k,v] of Object.entries(headers)) res.setHeader(k,v);
  const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);
  if(req.method==='GET' && url.pathname==='/health') return sendJson(res,200,{ok:true,googleConfigured:Boolean(GOOGLE_CLIENT_ID),port:PORT});
  if(req.method==='GET' && url.pathname==='/auth/config') return sendJson(res,200,{googleClientId:GOOGLE_CLIENT_ID});
  if(req.method==='GET' && url.pathname==='/auth/me'){
    const s=getSession(req); return sendJson(res,200,{authenticated:!!s,user:s?.user||null});
  }
  if(req.method==='GET' && url.pathname==='/auth/google/nonce'){
    if(!rateLimit(req,'google-challenge',10,10*60*1000)) return sendJson(res,429,{ok:false,message:'Too many requests. Please try again later.'});
    const nonce=createGoogleNonce(req,res); return sendJson(res,200,{ok:true,nonce});
  }
  if(req.method==='POST' && url.pathname==='/auth/guest'){
    if(!rateLimit(req,'guest-login',8,10*60*1000)) return sendJson(res,429,{ok:false,message:'Too many requests. Please try again later.'});
    const user={id:`guest:${randomToken(12)}`,name:'Guest',email:'',picture:'',role:'guest'};
    const token=createSession(user); setCookie(res,'nur_session',token,2*60*60*1000);
    return sendJson(res,200,{ok:true,user});
  }
  if(req.method==='POST' && url.pathname==='/auth/logout'){
    const c=parseCookies(req); if(c.nur_session)sessions.delete(hash(c.nur_session)); setCookie(res,'nur_session','',0); return sendJson(res,200,{ok:true});
  }
  if(req.method==='POST' && url.pathname==='/auth/google'){
    const ipState=ipLoginState(req); if(ipState.lockedUntil>now()) return sendJson(res,429,{ok:false,message:'Too many failed sign-in attempts. Login is locked for 1 hour.'});
    if(!rateLimit(req,'google-login',20,10*60*1000)) return sendJson(res,429,{ok:false,message:'Too many requests. Please try again later.'});
    try{
      const body=await readBody(req); const credential=body.credential;
      if(!verifyGoogleNonce(req,body.nonce)) return sendJson(res,401,{ok:false,message:'Google sign-in could not be completed.'});
      if(typeof credential!=='string' || credential.length>10000) return sendJson(res,400,{ok:false,message:'Invalid sign-in request.'});
      const ticket=await googleClient.verifyIdToken({idToken:credential,audience:GOOGLE_CLIENT_ID});
      const p=ticket.getPayload();
      if(!p?.sub || !p.email || p.email_verified!==true || p.nonce!==body.nonce) return sendJson(res,401,{ok:false,message:'Google sign-in could not be completed.'});
      const user={id:`google:${p.sub}`,name:p.name||'Google user',email:p.email,picture:p.picture||'',role:'member'};
      const token=createSession(user); clearIpFailures(req); setCookie(res,'nur_session',token,SESSION_MS); return sendJson(res,200,{ok:true,user});
    }catch(e){ console.error('Google auth failure:',e.message); const failed=registerIpFailure(req); await genericDelay(); return sendJson(res,failed.lockedUntil>now()?429:401,{ok:false,message:failed.lockedUntil>now()?'Too many failed sign-in attempts. Login is locked for 1 hour.':'Google sign-in could not be completed.'}); }
  }
  // Static files
  let file=url.pathname==='/'?'/index.html':url.pathname;
  file=path.normalize(file).replace(/^([.][.][\\/])+/, '');
  const full=path.join(__dirname,file);
  if(!full.startsWith(__dirname)) return sendJson(res,403,{error:'Forbidden'});
  try{
    const stat=fs.statSync(full); if(!stat.isFile()) throw new Error('not file');
    const ext=path.extname(full); const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8'};
    res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','Cache-Control':ext==='.html'?'no-store':'public, max-age=3600'}); fs.createReadStream(full).pipe(res);
  }catch{sendJson(res,404,{error:'Not found'});}
}
http.createServer((req,res)=>handle(req,res).catch(e=>{console.error(e); if(!res.headersSent)sendJson(res,500,{error:'Server error'}); else res.end();})).listen(PORT,()=>console.log(`Nūr al-Haramayn secure server: http://127.0.0.1:${PORT}`));
