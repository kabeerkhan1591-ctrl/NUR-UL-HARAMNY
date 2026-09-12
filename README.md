# Nūr al-Haramayn — Google + Guest

## Start
1. Install Node.js 20+
2. Open this folder in a terminal
3. Run `npm install`
4. Run `npm start`
5. Open `http://127.0.0.1:5500/`

Do not open `index.html` directly and do not use VS Code Live Server.

## Google Sign-In
The browser gets the Google client ID and a short-lived one-time nonce from the server. Google ID tokens are verified server-side and the nonce is checked before a session is created.

In Google Cloud, the OAuth client must be a **Web application** and the exact local origin must be authorized:
- `http://127.0.0.1:5500`
- optionally `http://localhost:5500`

Do not add `/index.html` or a trailing path.

## Guest mode
Guest sessions can browse the public portal. The in-site Library and Qur'an MP3 playback require Google sign-in. Attempting either from a guest session returns to the login screen.

## Production note
The included in-memory session/rate-limit stores are suitable for a single local/dev instance. Production deployments should move session/rate-limit state to a persistent/shared store and run behind HTTPS and a trusted reverse proxy/WAF.
