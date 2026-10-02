const IMAMS = [
  {
    name: "Yasir bin Rashid Al-Dosari",
    ar: "ياسر بن راشد الدوسري",
    role: "Imam & Qur'an reciter",
    initial: "ي",
    text: "A prominent Qur'an reciter and imam associated with Masjid al-Haram.",
    search:
      "https://www.youtube.com/results?search_query=Yasser+Al+Dosari+Makkah+recitation",
  },
  {
    name: "Abdul Rahman Al-Sudais",
    ar: "عبد الرحمن السديس",
    role: "Imam & Khateeb",
    initial: "س",
    text: "A senior scholar and widely recognized voice associated with Masjid al-Haram.",
    search:
      "https://www.youtube.com/results?search_query=Abdul+Rahman+Al+Sudais+Makkah+recitation",
  },
  {
    name: "Maher Al-Muaiqly",
    ar: "ماهر المعيقلي",
    role: "Imam & Qur'an reciter",
    initial: "م",
    text: "Known internationally for Qur'an recitation and leading prayers.",
    search:
      "https://www.youtube.com/results?search_query=Maher+Al+Muaiqly+Makkah+recitation",
  },
  {
    name: "Bandar Baleela",
    ar: "بندر بليلة",
    role: "Imam & Khateeb",
    initial: "ب",
    text: "An imam and khateeb whose recitations are followed around the world.",
    search:
      "https://www.youtube.com/results?search_query=Bandar+Baleelah+Makkah+recitation",
  },
  {
    name: "Abdullah Al-Juhany",
    ar: "عبد الله الجهني",
    role: "Imam & Qur'an reciter",
    initial: "ج",
    text: "A prominent Qur'an reciter and imam associated with the Grand Mosque.",
    search:
      "https://www.youtube.com/results?search_query=Abdullah+Al+Juhany+Makkah+recitation",
  },
  {
    name: "Badr Al-Turki",
    ar: "بدر التركي",
    role: "Imam",
    initial: "ت",
    text: "Listed among the imams serving the Haramain.",
    search:
      "https://www.youtube.com/results?search_query=Badr+Al+Turki+Makkah+recitation",
  },
  {
    name: "Al-Waleed Al-Shamsan",
    ar: "الوليد الشمسان",
    role: "Imam",
    initial: "ش",
    text: "An imam associated with the Grand Mosque in Makkah.",
    search:
      "https://www.youtube.com/results?search_query=Al+Waleed+Al+Shamsan+Makkah+recitation",
  },
];
const PRAYERS = [
  ["Fajr", "04:50 AM", "Dawn"],
  ["Dhuhr", "12:17 PM", "Midday"],
  ["Asr", "03:43 PM", "Afternoon"],
  ["Maghrib", "06:27 PM", "Sunset"],
  ["Isha", "07:57 PM", "Night"],
];
const SURAH = [
  ["Al-Fatihah", "الفاتحة"],
  ["Al-Baqarah", "البقرة"],
  ["Ali 'Imran", "آل عمران"],
  ["An-Nisa", "النساء"],
  ["Al-Ma'idah", "المائدة"],
  ["Al-Anam", "الأنعام"],
  ["Al-A'raf", "الأعراف"],
  ["Al-Anfal", "الأنفال"],
  ["At-Tawbah", "التوبة"],
  ["Yunus", "يونس"],
  ["Hud", "هود"],
  ["Yusuf", "يوسف"],
  ["Ar-Ra'd", "الرعد"],
  ["Ibrahim", "إبراهيم"],
  ["Al-Hijr", "الحجر"],
  ["An-Nahl", "النحل"],
  ["Al-Isra", "الإسراء"],
  ["Al-Kahf", "الكهف"],
  ["Maryam", "مريم"],
  ["Taha", "طه"],
  ["Al-Anbya", "الأنبياء"],
  ["Al-Hajj", "الحج"],
  ["Al-Mu'minun", "المؤمنون"],
  ["An-Nur", "النور"],
  ["Al-Furqan", "الفرقان"],
  ["Ash-Shu'ara", "الشعراء"],
  ["An-Naml", "النمل"],
  ["Al-Qasas", "القصص"],
  ["Al-'Ankabut", "العنكبوت"],
  ["Ar-Rum", "الروم"],
  ["Luqman", "لقمان"],
  ["As-Sajdah", "السجدة"],
  ["Al-Ahzab", "الأحزاب"],
  ["Saba", "سبأ"],
  ["Fatir", "فاطر"],
  ["Ya-Sin", "يس"],
  ["As-Saffat", "الصافات"],
  ["Sad", "ص"],
  ["Az-Zumar", "الزمر"],
  ["Ghafir", "غافر"],
  ["Fussilat", "فصلت"],
  ["Ash-Shura", "الشورى"],
  ["Az-Zukhruf", "الزخرف"],
  ["Ad-Dukhan", "الدخان"],
  ["Al-Jathiyah", "الجاثية"],
  ["Al-Ahqaf", "الأحقاف"],
  ["Muhammad", "محمد"],
  ["Al-Fath", "الفتح"],
  ["Al-Hujurat", "الحجرات"],
  ["Qaf", "ق"],
  ["Adh-Dhariyat", "الذاريات"],
  ["At-Tur", "الطور"],
  ["An-Najm", "النجم"],
  ["Al-Qamar", "القمر"],
  ["Ar-Rahman", "الرحمن"],
  ["Al-Waqi'ah", "الواقعة"],
  ["Al-Hadid", "الحديد"],
  ["Al-Mujadilah", "المجادلة"],
  ["Al-Hashr", "الحشر"],
  ["Al-Mumtahanah", "الممتحنة"],
  ["As-Saff", "الصف"],
  ["Al-Jumuah", "الجمعة"],
  ["Al-Munafiqun", "المنافقون"],
  ["At-Taghabun", "التغابن"],
  ["At-Talaq", "الطلاق"],
  ["At-Tahrim", "التحريم"],
  ["Al-Mulk", "الملك"],
  ["Al-Qalam", "القلم"],
  ["Al-Haqqah", "الحاقة"],
  ["Al-Ma'arij", "المعارج"],
  ["Nuh", "نوح"],
  ["Al-Jinn", "الجن"],
  ["Al-Muzzammil", "المزمل"],
  ["Al-Muddaththir", "المدثر"],
  ["Al-Qiyamah", "القيامة"],
  ["Al-Insan", "الإنسان"],
  ["Al-Mursalat", "المرسلات"],
  ["An-Naba", "النبأ"],
  ["An-Nazi'at", "النازعات"],
  ["Abasa", "عبس"],
  ["At-Takwir", "التكوير"],
  ["Al-Infitar", "الانفطار"],
  ["Al-Mutaffifin", "المطففين"],
  ["Al-Inshiqaq", "الانشقاق"],
  ["Al-Buruj", "البروج"],
  ["At-Tariq", "الطارق"],
  ["Al-A'la", "الأعلى"],
  ["Al-Ghashiyah", "الغاشية"],
  ["Al-Fajr", "الفجر"],
  ["Al-Balad", "البلد"],
  ["Ash-Shams", "الشمس"],
  ["Al-Layl", "الليل"],
  ["Ad-Duha", "الضحى"],
  ["Ash-Sharh", "الشرح"],
  ["At-Tin", "التين"],
  ["Al-'Alaq", "العلق"],
  ["Al-Qadr", "القدر"],
  ["Al-Bayyinah", "البينة"],
  ["Az-Zalzalah", "الزلزلة"],
  ["Al-'Adiyat", "العاديات"],
  ["Al-Qari'ah", "القارعة"],
  ["At-Takathur", "التكاثر"],
  ["Al-'Asr", "العصر"],
  ["Al-Humazah", "الهمزة"],
  ["Al-Fil", "الفيل"],
  ["Quraysh", "قريش"],
  ["Al-Maun", "الماعون"],
  ["Al-Kawthar", "الكوثر"],
  ["Al-Kafirun", "الكافرون"],
  ["An-Nasr", "النصر"],
  ["Al-Masad", "المسد"],
  ["Al-Ikhlas", "الإخلاص"],
  ["Al-Falaq", "الفلق"],
  ["An-Nas", "الناس"],
];
const VIDEOS = [
  {
    id: "PXMajgiYTvk",
    title: "Taraweeh in Makkah — Yasser Al-Dosari",
    meta: "Surah Aal-e-Imran • Ramadan 2025",
    im: "Yasser Al-Dosari",
  },
  {
    id: "oIo-dqF8GzE",
    title: "Makkah Taraweeh — Maher Al-Muaiqly",
    meta: "Ramadan 2025 • Masjid al-Haram",
    im: "Maher Al-Muaiqly",
  },
  {
    id: "YGCHV6i6UjE",
    title: "Eid Prayer in Makkah — Abdul Rahman Al-Sudais",
    meta: "Eid al-Fitr 1446 • 2025",
    im: "Abdul Rahman Al-Sudais",
  },
  {
    id: "E_zgfdUtslI",
    title: "Makkah Jumu'ah — Bandar Baleelah",
    meta: "Surah Al-Fatihah • 2025",
    im: "Bandar Baleelah",
  },
];
const content = document.querySelector("#content"),
  toast = document.querySelector("#toast");
function note(x) {
  toast.textContent = x;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
function imamCard(x) {
  return `<article class="imam"><div class="portrait"><div class="initial">${x.initial}</div></div><div class="imam-body"><h3>${x.name}</h3><div class="arabic">${x.ar}</div><p>${x.role}. ${x.text}</p><div class="card-actions"><button class="small-btn" data-action="go" data-arg="quran">Listen</button><a class="small-link" href="${x.search}" target="_blank" rel="noopener">YouTube ↗</a></div></div></article>`;
}
function head(k, t, d) {
  return `<div class="head"><div><span class="eyebrow">${k}</span><h2>${t}</h2><p>${d}</p></div></div>`;
}
function videoCard(v) {
  return `<article class="video-card"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0" title="${v.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-info"><b>${v.title}</b><small>${v.meta}</small><span>${v.im}</span></div></article>`;
}
function home() {
  content.innerHTML = `<div class="page"><section class="hero"><span class="eyebrow">NŪR AL-HARAMAYN • PREMIUM PORTAL</span><h1>One place for Qur'an, prayer & reflection.</h1><p>Explore imam profiles, prayer times, recitations and Islamic learning through a calm, cinematic interface inspired by the atmosphere of Makkah.</p><div class="hero-actions"><button class="gold" data-action="go" data-arg="imams">Meet the Imams →</button><button class="ghost" data-action="go" data-arg="media">Watch recitations</button></div></section><div class="stats"><div class="stat"><small>Featured Imams</small><b>7+</b></div><div class="stat"><small>Video recitations</small><b>4+</b></div><div class="stat"><small>Languages</small><b>EN / AR</b></div><div class="stat"><small>Experience</small><b>24/7</b></div></div>${head("FEATURED VOICES", "Imams of the Haramain", "Profiles plus direct listening and video links.")}<div class="cards">${IMAMS.slice(0, 3).map(imamCard).join("")}</div>${head("WATCH NOW", "Featured recitations", "Embedded YouTube videos open from their original hosting source.")}<div class="video-grid">${VIDEOS.slice(0, 2).map(videoCard).join("")}</div></div>`;
}
function imams() {
  content.innerHTML = `<div class="page">${head("SCHOLARS & IMAMS", "Imams of Masjid al-Haram", "Explore profiles, listen to recitation searches and open YouTube sources.")}<div class="cards">${IMAMS.map(imamCard).join("")}</div></div>`;
}
const CITY_PRESETS = [
  {
    name: "Makkah, Saudi Arabia",
    lat: 21.4225,
    lon: 39.8262,
    tz: "Asia/Riyadh",
    method: "ummalqura",
  },
  {
    name: "Madinah, Saudi Arabia",
    lat: 24.5247,
    lon: 39.5692,
    tz: "Asia/Riyadh",
    method: "ummalqura",
  },
  {
    name: "Karachi, Pakistan",
    lat: 24.8607,
    lon: 67.0011,
    tz: "Asia/Karachi",
    method: "karachi",
  },
  {
    name: "Lahore, Pakistan",
    lat: 31.5204,
    lon: 74.3587,
    tz: "Asia/Karachi",
    method: "karachi",
  },
  {
    name: "Islamabad, Pakistan",
    lat: 33.6844,
    lon: 73.0479,
    tz: "Asia/Karachi",
    method: "karachi",
  },
  {
    name: "Hyderabad, Pakistan",
    lat: 25.396,
    lon: 68.3578,
    tz: "Asia/Karachi",
    method: "karachi",
  },
  {
    name: "Dubai, UAE",
    lat: 25.2048,
    lon: 55.2708,
    tz: "Asia/Dubai",
    method: "gulf",
  },
  {
    name: "London, UK",
    lat: 51.5072,
    lon: -0.1276,
    tz: "Europe/London",
    method: "mwl",
  },
  {
    name: "New York, USA",
    lat: 40.7128,
    lon: -74.006,
    tz: "America/New_York",
    method: "mwl",
  },
  {
    name: "Cairo, Egypt",
    lat: 30.0444,
    lon: 31.2357,
    tz: "Africa/Cairo",
    method: "egyptian",
  },
];
function tzOffsetMinutes(date, tz) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    timeZoneName: "shortOffset",
  }).formatToParts(date);
  const v = parts.find((x) => x.type === "timeZoneName")?.value || "GMT";
  const m = v.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!m) return 0;
  return (m[1] === "-" ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3] || 0));
}
function solarMinutes(lat, lon, date, zenith, tz) {
  const N = Math.floor(
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
      86400000,
  );
  const gamma = ((2 * Math.PI) / 365) * (N - 1);
  const eq =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));
  const decl =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);
  const cosH =
    (Math.cos((zenith * Math.PI) / 180) -
      Math.sin((lat * Math.PI) / 180) * Math.sin(decl)) /
    (Math.cos((lat * Math.PI) / 180) * Math.cos(decl));
  if (cosH > 1 || cosH < -1) return null;
  const H = (Math.acos(cosH) * 180) / Math.PI;
  const offset = tzOffsetMinutes(date, tz);
  const noon = 720 - 4 * lon - eq + offset;
  return { rise: noon - 4 * H, set: noon + 4 * H, noon };
}
function asrMinutes(lat, lon, date, tz, factor = 1) {
  const N = Math.floor(
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
      86400000,
  );
  const gamma = ((2 * Math.PI) / 365) * (N - 1),
    decl =
      0.006918 -
      0.399912 * Math.cos(gamma) +
      0.070257 * Math.sin(gamma) -
      0.006758 * Math.cos(2 * gamma) +
      0.000907 * Math.sin(2 * gamma) -
      0.002697 * Math.cos(3 * gamma) +
      0.00148 * Math.sin(3 * gamma);
  const solarNoon = solarMinutes(lat, lon, date, 90, tz)?.noon;
  if (solarNoon == null) return null;
  const phi = (lat * Math.PI) / 180,
    d = decl,
    angle =
      (-Math.atan(1 / (factor + Math.tan(Math.abs(phi - d)))) * 180) / Math.PI;
  const cosH =
    (Math.sin((angle * Math.PI) / 180) - Math.sin(phi) * Math.sin(d)) /
    (Math.cos(phi) * Math.cos(d));
  if (cosH > 1 || cosH < -1) return null;
  return solarNoon + (4 * Math.acos(cosH) * 180) / Math.PI;
}
function fmtTime(mins) {
  if (mins == null) return "--:--";
  mins = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(mins / 60),
    m = Math.round(mins % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function calculatePrayerTimes(city, date = new Date()) {
  const sun = solarMinutes(city.lat, city.lon, date, 90.833, city.tz);
  if (!sun) return null;
  const sunrise = sun.rise,
    sunset = sun.set,
    noon = sun.noon;
  const fajrZenith =
    90 +
    (city.method === "karachi" ? 18 : city.method === "egyptian" ? 19.5 : 18);
  const ishaAngle =
    city.method === "karachi"
      ? 18
      : city.method === "egyptian"
        ? 17.5
        : city.method === "mwl"
          ? 17
          : 18.5;
  const fajr = solarMinutes(city.lat, city.lon, date, fajrZenith, city.tz);
  let isha = solarMinutes(
    city.lat,
    city.lon,
    date,
    90 + ishaAngle,
    city.tz,
  )?.set;
  if (city.method === "ummalqura") isha = sunset + 90;
  if (city.method === "gulf") isha = sunset + 90;
  return {
    fajr: fajr?.rise,
    sunrise,
    noon,
    asr: asrMinutes(city.lat, city.lon, date, city.tz, 1),
    sunset,
    maghrib: sunset,
    isha,
  };
}
function prayer() {
  const saved = localStorage.getItem("nur-city") || "Makkah, Saudi Arabia";
  const city = CITY_PRESETS.find((x) => x.name === saved) || CITY_PRESETS[0];
  content.innerHTML = `<div class="page">${head("PRAYER TIMES", "Prayer times by city", "Choose your city. Times are calculated directly in your browser — no prayer-times API is used.")}
 <div class="panel city-picker"><div><span class="eyebrow">YOUR CITY</span><h3 id="prayerCityName">${city.name}</h3><p class="muted">Offline solar calculation • Method: ${city.method}</p></div><label class="audio-select"><span>SELECT CITY</span><select id="citySelect">${CITY_PRESETS.map((c) => `<option value="${c.name}" ${c.name === city.name ? "selected" : ""}>${c.name}</option>`).join("")}</select></label></div>
 <div class="prayer-date panel"><div><span class="eyebrow">LOCAL PRAYER SCHEDULE</span><h3 id="prayerDate"></h3><p class="muted">Times are calculated for the selected city and today's local date.</p></div><div class="qibla"><span>QIBLA</span><b id="qiblaValue">—</b></div></div>
 <div class="prayers"><div class="panel" id="prayerList"></div><div class="panel prayer-note"><span class="eyebrow">CALCULATION</span><h3>No API required</h3><p class="muted">The portal calculates sunrise and solar noon from the selected city's coordinates, then derives Fajr, Asr, Maghrib and Isha. Different authorities may use different calculation methods, so local mosque schedules can differ by a few minutes.</p><div class="prayer-mini"><span>Calculation method</span><b id="methodName"></b></div><div class="prayer-mini"><span>City coordinates</span><b id="coords"></b></div></div></div></div>`;
  function render() {
    const c =
      CITY_PRESETS.find(
        (x) => x.name === document.querySelector("#citySelect").value,
      ) || CITY_PRESETS[0];
    localStorage.setItem("nur-city", c.name);
    const d = new Date(),
      t = calculatePrayerTimes(c, d);
    document.querySelector("#prayerCityName").textContent = c.name;
    document.querySelector("#methodName").textContent = c.method;
    document.querySelector("#coords").textContent =
      `${c.lat.toFixed(3)}, ${c.lon.toFixed(3)}`;
    document.querySelector("#prayerDate").textContent = new Intl.DateTimeFormat(
      "en-US",
      { dateStyle: "full", timeZone: c.tz },
    ).format(d);
    const fmt = (x) => {
      const v = fmtTime(x);
      if (v === "--:--") return v;
      const [h, m] = v.split(":").map(Number);
      const ap = h >= 12 ? "PM" : "AM",
        hh = h % 12 || 12;
      return `${String(hh).padStart(2, "0")}:${String(m).padStart(2, "0")} ${ap}`;
    };
    const rows = [
      ["Fajr", t?.fajr, "Dawn"],
      ["Sunrise", t?.sunrise, "Sunrise"],
      ["Dhuhr", t?.noon, "Midday"],
      ["Asr", t?.asr, "Afternoon"],
      ["Maghrib", t?.maghrib, "Sunset"],
      ["Isha", t?.isha, "Night"],
    ];
    document.querySelector("#prayerList").innerHTML = rows
      .map(
        (p) =>
          `<div class="prayer"><div><strong>${p[0]}</strong><small style="display:block;color:var(--muted);font-size:10px;margin-top:4px">${p[2]}</small></div><span class="time">${fmt(p[1])}</span></div>`,
      )
      .join("");
    document.querySelector("#qiblaValue").textContent = c.name.startsWith(
      "Makkah",
    )
      ? "—"
      : "Calculated locally";
  }
  document.querySelector("#citySelect").onchange = render;
  render();
}
const RECITERS = [
  {
    id: "yasser",
    name: "Yasser ad-Dussary",
    ar: "ياسر الدوسري",
    base: "https://download.quranicaudio.com/quran/yasser_ad-dussary/",
  },
  {
    id: "sudais",
    name: "Abdur-Rahman as-Sudays",
    ar: "عبد الرحمن السديس",
    base: "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/",
  },
  {
    id: "juhani",
    name: "Abdullah Awad al-Juhani",
    ar: "عبد الله عواد الجهني",
    base: "https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/",
  },
  {
    id: "maher",
    name: "Maher al-Muaiqly",
    ar: "ماهر المعيقلي",
    base: "https://download.quranicaudio.com/quran/maher_256/",
  },
  {
    id: "shuraym",
    name: "Saud ash-Shuraym",
    ar: "سعود الشريم",
    base: "https://download.quranicaudio.com/quran/sa3ood_al-shuraym/",
  },
  {
    id: "huthaify",
    name: "Ali Abdur-Rahman al-Huthaify",
    ar: "علي عبد الرحمن الحذيفي",
    base: "https://download.quranicaudio.com/quran/huthayfi/",
  },
  {
    id: "ghamidi",
    name: "Saad al-Ghamdi",
    ar: "سعد الغامدي",
    base: "https://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/",
  },
];
function audioUrls(reciterId, surah) {
  const rec = RECITERS.find((x) => x.id === reciterId) || RECITERS[0];
  const file = String(surah).padStart(3, "0") + ".mp3";
  const urls = [rec.base + file];
  // Public fallback CDN for Yasser ad-Dussary if the primary QuranicAudio
  // host is unavailable from a visitor's network.
  if (rec.id === "yasser") urls.push(`https://cdn.mp3quran.net/audio/yasser-dosari/r1/${file}`);
  return urls;
}
function audioUrl(reciterId, surah) {
  return audioUrls(reciterId, surah)[0];
}
function audioPlayer() {
  if (window.currentUser?.role === "guest")
    return `<div class="audio-shell guest-audio-lock"><div class="audio-top"><div class="audio-avatar">♪</div><div><span class="eyebrow">QUR'AN AUDIO</span><h3>Audio is locked for Guest access</h3><small>Sign in with Google to unlock recitations.</small></div></div><button class="main-btn" data-action="requireLogin" data-arg="audio">Sign in with Google <span>→</span></button></div>`;
  return `<div class="audio-shell"><div class="audio-top"><div class="audio-avatar">♪</div><div><span class="eyebrow">NŪR AL-HARAMAYN • MP3</span><h3 id="audioTitle">Yasser ad-Dussary — Al-Fatihah</h3><small id="audioMeta">Surah 1 • Direct recitation stream</small></div><span class="source-pill">Nūr al-Haramayn</span></div><div class="audio-controls"><label class="audio-select"><span>RECITER</span><select id="reciterSelect">${RECITERS.map((r) => `<option value="${r.id}">${r.name}</option>`).join("")}</select></label><label class="audio-select"><span>SURAH</span><select id="surahSelect">${SURAH.map((x, i) => `<option value="${i + 1}">${String(i + 1).padStart(3, "0")} • ${x[0]} — ${x[1]}</option>`).join("")}</select></label></div><audio id="quranAudio" controls preload="metadata"></audio><div class="audio-actions"><span id="audioStatus">Select a reciter and Surah, then press play.</span></div><div class="audio-note">Streaming recitations for the portal. The MP3 files are not bundled with the portal.</div></div>`;
}
function initAudio() {
  const audio = document.querySelector("#quranAudio"),
    reciter = document.querySelector("#reciterSelect"),
    surah = document.querySelector("#surahSelect");
  if (!audio || !reciter || !surah) return;

  let currentSurah = Number(surah.value) || 1;
  let currentButton = null;
  let requestId = 0;

  const status = (message) => {
    const el = document.querySelector("#audioStatus");
    if (el) el.textContent = message;
  };

  const setButtonState = (button, playing) => {
    if (!button) return;
    button.textContent = playing ? "❚❚" : "▶";
    button.setAttribute("aria-label", playing ? "Pause Surah" : "Play Surah");
    button.classList.toggle("is-playing", playing);
  };

  const resetButtons = () => {
    document.querySelectorAll('.quran-row .play.is-playing').forEach((button) => {
      setButtonState(button, false);
    });
    currentButton = null;
  };

  function updateTrackInfo() {
    const rec = RECITERS.find((x) => x.id === reciter.value) || RECITERS[0];
    const title = SURAH[currentSurah - 1];
    if (!title) return;
    const titleEl = document.querySelector("#audioTitle");
    const metaEl = document.querySelector("#audioMeta");
    if (titleEl) titleEl.textContent = `${rec.name} — ${title[0]}`;
    if (metaEl) metaEl.textContent = `Surah ${currentSurah} • ${title[1]} • Nūr al-Haramayn MP3`;
  }

  async function playCurrent(button = null) {
    if (!audio.src) return;
    try {
      await audio.play();
      resetButtons();
      currentButton = button || document.querySelector(`.quran-row .play[data-arg="${currentSurah}"]`);
      setButtonState(currentButton, true);
      status("Playing — Nūr al-Haramayn MP3");
    } catch (err) {
      console.error("Qur'an audio playback failed:", err);
      resetButtons();
      status("Audio is ready, but playback was blocked. Press the player ▶ button below.");
    }
  }

  function load(autoplay = false, button = null) {
    const thisRequest = ++requestId;
    currentSurah = Number(surah.value) || 1;
    const rec = RECITERS.find((x) => x.id === reciter.value) || RECITERS[0];
    const title = SURAH[currentSurah - 1];
    if (!title) return;

    resetButtons();
    const sources = audioUrls(rec.id, currentSurah);
    let sourceIndex = 0;

    const setSource = () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audio.src = sources[sourceIndex];
      audio.preload = "metadata";
    };

    const handleSourceError = () => {
      if (thisRequest !== requestId) return;
      if (sourceIndex < sources.length - 1) {
        sourceIndex += 1;
        status("Primary audio source unavailable — trying backup…");
        audio.addEventListener("error", handleSourceError, { once: true });
        setSource();
        if (autoplay) playCurrent(button);
        return;
      }
      resetButtons();
      status("This recitation could not be loaded. Check your connection or choose another reciter.");
    };

    audio.addEventListener("error", handleSourceError, { once: true });
    setSource();
    updateTrackInfo();
    status("Loading Nūr al-Haramayn MP3…");

    // Calling play() after assigning the source is more reliable than waiting
    // for canplay, because waiting can lose the user's click activation.
    if (autoplay) playCurrent(button);
  }

  audio.addEventListener("loadstart", () => status("Loading Nūr al-Haramayn MP3…"));
  audio.addEventListener("loadedmetadata", () => status("Audio source loaded — press ▶ to play"));
  audio.addEventListener("canplay", () => {
    if (audio.paused) status("Ready — press ▶ to play");
  });
  audio.addEventListener("playing", () => {
    setButtonState(currentButton, true);
    status("Playing — Nūr al-Haramayn MP3");
  });
  audio.addEventListener("pause", () => {
    if (!audio.ended) {
      setButtonState(currentButton, false);
      status("Paused");
    }
  });
  audio.addEventListener("ended", () => {
    setButtonState(currentButton, false);
    currentButton = null;
    status("Finished — choose another Surah to listen again");
  });

  reciter.addEventListener("change", () => load(false));
  surah.addEventListener("change", () => load(false));

  window.playSurah = (n, button = null) => {
    const number = Number(n);
    if (!Number.isInteger(number) || number < 1 || number > SURAH.length) return;
    if (currentSurah === number && audio.src && !audio.paused) {
      audio.pause();
      return;
    }
    surah.value = String(number);
    load(true, button);
  };

  window.pauseSurah = () => audio.pause();
  load(false);
}

function quran() {
  content.innerHTML = `<div class="page">${head("THE QUR'AN", "Nūr al-Haramayn Recitation Studio", "Choose your favorite reciter, then any of the 114 Surahs. Names and numbering follow the Qur'an order.")}${audioPlayer()}<div class="panel" style="margin-top:18px"><div class="section-title"><span class="eyebrow">114 SURAH LIBRARY</span><h3>Choose a Surah</h3></div>${SURAH.map((x, i) => `<div class="quran-row"><button class="play" data-action="play" data-arg="${i + 1}">▶</button><div class="track"><b>${String(i + 1).padStart(3, "0")} • ${x[0]}</b><small>${x[1]} • Nūr al-Haramayn MP3</small><div class="bar"><i style="width:${35 + (i % 6) * 10}%"></i></div></div><span class="arabic">${x[1]}</span></div>`).join("")}</div></div>`;
  initAudio();
}
function media() {
  content.innerHTML = `<div class="page">${head("MEDIA ROOM", "Haramain recitations & videos", "Real YouTube-hosted recitations are embedded below. Nothing is downloaded into your website.")}<div class="media-banner"><div><span class="eyebrow">CURATED HARMAIN WATCH</span><h2>Listen. Watch. Reflect.</h2><p>Featuring recitations and prayer videos from YouTube sources. Availability can change if the original uploader removes a video.</p></div><button class="gold dark-text" data-action="openurl" data-arg="https://www.youtube.com/@HaramainOfficial">Open YouTube channel ↗</button></div><div class="video-grid">${VIDEOS.map(videoCard).join("")}</div><div class="source-note"><b>Media source note:</b> These players load from YouTube's embed service. The portal does not claim ownership of the recordings. For a public production deployment, verify the rights and terms of each source and prefer authorized channels.</div></div>`;
}
const LIBRARY_DATA = {
  quran: {
    icon: "☷",
    title: "Qur'an Reader",
    intro:
      "A focused reading area with the complete 114-surah index, revelation details and study notes.",
    items: SURAH.map((x, i) => ({
      title: `${i + 1}. ${x[0]}`,
      ar: x[1],
      text: `Surah ${x[0]} — ${x[1]}. Use the Qur'an player above to listen to this Surah, or open the reading card to see its study information.`,
    })),
  },
  tafsir: {
    icon: "◈",
    title: "Tafsir & Reflection",
    intro:
      "Concise original study notes designed for reflection rather than replacing a qualified tafsir.",
    items: [
      {
        title: "Al-Fatihah",
        ar: "الفاتحة",
        text: "A prayer for praise, mercy, worship, help and guidance. Reflect on the meaning of seeking the straight path every day.",
      },
      {
        title: "Ayat al-Kursi",
        ar: "آية الكرسي",
        text: "A reminder of Allah’s absolute life, knowledge, authority and protection. It centers the heart on tawhid and reliance upon Allah.",
      },
      {
        title: "Surah Al-Asr",
        ar: "العصر",
        text: "A compact reminder that time is precious. Faith, righteous action, truth and patience are presented as the path away from loss.",
      },
      {
        title: "Surah Al-Ikhlas",
        ar: "الإخلاص",
        text: "A concise declaration of Allah’s oneness, uniqueness and absolute independence.",
      },
    ],
  },
  hadith: {
    icon: "✦",
    title: "Hadith Collection",
    intro:
      "A curated in-site study collection. Each entry is presented as a concise meaning for learning, not as a replacement for checking the original scholarly wording.",
    items: [
      {
        title: "Intentions",
        ar: "النيات",
        text: "Actions are judged by intentions, and a person receives according to what they intended.",
      },
      {
        title: "Mercy",
        ar: "الرحمة",
        text: "Those who show mercy are shown mercy; cultivate mercy toward creation.",
      },
      {
        title: "Good character",
        ar: "حسن الخلق",
        text: "Good character is among the greatest qualities a believer can develop.",
      },
      {
        title: "Brotherhood",
        ar: "الأخوة",
        text: "Love for others what you love for yourself and avoid harming them.",
      },
      {
        title: "Seeking knowledge",
        ar: "طلب العلم",
        text: "The pursuit of beneficial knowledge is a path of worship when it is sought sincerely.",
      },
      {
        title: "Truthfulness",
        ar: "الصدق",
        text: "Truthfulness leads toward righteousness, while persistent falsehood damages the heart.",
      },
      {
        title: "Ease",
        ar: "التيسير",
        text: "Make matters easier where appropriate and avoid needless hardship.",
      },
      {
        title: "Cleanliness",
        ar: "الطهارة",
        text: "Purification and cleanliness are deeply connected to Muslim worship and daily life.",
      },
    ],
  },
  duas: {
    icon: "✧",
    title: "Duas & Adhkar",
    intro:
      "A practical collection of short daily supplications displayed directly inside the portal.",
    items: [
      {
        title: "Before eating",
        ar: "بِسْمِ اللَّهِ",
        text: "Say: Bismillah — In the name of Allah.",
      },
      {
        title: "After eating",
        ar: "الْحَمْدُ لِلَّهِ",
        text: "Say: Alhamdulillah — All praise belongs to Allah.",
      },
      {
        title: "Seeking knowledge",
        ar: "رَبِّ زِدْنِي عِلْمًا",
        text: "My Lord, increase me in knowledge.",
      },
      {
        title: "For goodness in both worlds",
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        text: "Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire.",
      },
      {
        title: "For forgiveness",
        ar: "رَبِّ اغْفِرْ لِي",
        text: "My Lord, forgive me.",
      },
      {
        title: "For guidance",
        ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        text: "Guide us to the straight path.",
      },
      {
        title: "Morning remembrance",
        ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        text: "Glory is to Allah and praise is for Him.",
      },
      {
        title: "Protection",
        ar: "أَعُوذُ بِاللَّهِ",
        text: "I seek refuge in Allah.",
      },
    ],
  },
  salah: {
    icon: "☾",
    title: "Salah & Wudu Guide",
    intro: "Step-by-step learning cards for purification and prayer.",
    items: [
      {
        title: "Wudu — 1",
        text: "Make the intention, say Bismillah, wash the hands and clean the mouth and nose.",
      },
      {
        title: "Wudu — 2",
        text: "Wash the face, then the arms including the elbows, wipe the head and ears, then wash the feet including the ankles.",
      },
      {
        title: "Salah — Standing",
        text: "Face the Qiblah, make the intention, begin with takbir and recite the opening of the prayer.",
      },
      {
        title: "Salah — Ruku",
        text: "Bow with humility, keep the back appropriately straight and glorify Allah.",
      },
      {
        title: "Salah — Sujud",
        text: "Prostrate with humility and make sincere supplication to Allah.",
      },
      {
        title: "Salah — Final sitting",
        text: "Complete the final sitting, recite the prescribed testimony and salutations, then conclude with salam.",
      },
    ],
  },
  seerah: {
    icon: "⌁",
    title: "Seerah of the Prophet ﷺ",
    intro:
      "A concise chronological learning path covering major moments from the Prophetic biography.",
    items: [
      {
        title: "Makkah before revelation",
        text: "The Prophet Muhammad ﷺ was known for truthfulness and trustworthiness before the beginning of revelation.",
      },
      {
        title: "First revelation",
        text: "The first revelation began in the Cave of Hira, opening the Prophetic mission.",
      },
      {
        title: "Early Makkah",
        text: "The message of tawhid was taught while the early believers faced opposition and hardship.",
      },
      {
        title: "The Hijrah",
        text: "The migration to Madinah marked a major turning point and the beginning of a new Muslim community.",
      },
      {
        title: "Madinah community",
        text: "The Prophet ﷺ established bonds of brotherhood, worship, justice and community responsibility.",
      },
      {
        title: "The Farewell Pilgrimage",
        text: "The final pilgrimage emphasized human dignity, rights, worship and responsibility before Allah.",
      },
      {
        title: "Legacy",
        text: "The Prophetic example remains a central source for Muslim worship, character and community life.",
      },
    ],
  },
  history: {
    icon: "◌",
    title: "Islamic History",
    intro:
      "An in-site timeline of important places, periods and turning points.",
    items: [
      {
        title: "Makkah",
        text: "The sacred city containing the Kaaba and Masjid al-Haram, central to Muslim pilgrimage and worship.",
      },
      {
        title: "Madinah",
        text: "The city of the Prophet ﷺ and the home of Masjid an-Nabawi, a major center of the early Muslim community.",
      },
      {
        title: "The Rightly Guided Caliphs",
        text: "The period of Abu Bakr, Umar, Uthman and Ali رضي الله عنهم shaped the early Muslim polity and preserved major aspects of the community’s tradition.",
      },
      {
        title: "Qur’anic scholarship",
        text: "Muslim scholars developed disciplines of recitation, Arabic, tafsir, hadith, fiqh and history across generations.",
      },
      {
        title: "The Haramain through history",
        text: "Makkah and Madinah have remained central destinations for worshippers, scholarship and service throughout Islamic history.",
      },
    ],
  },
  arabic: {
    icon: "م",
    title: "Arabic Learning",
    intro:
      "Small lessons for readers who want to become more comfortable with Qur’anic Arabic.",
    items: [
      {
        title: "Lesson 1 — Allah",
        ar: "اللَّهُ",
        text: "Allah — the proper name of the One worthy of worship.",
      },
      { title: "Lesson 2 — Book", ar: "كِتَاب", text: "Kitab — book." },
      { title: "Lesson 3 — Prayer", ar: "صَلَاة", text: "Salah — prayer." },
      { title: "Lesson 4 — Mercy", ar: "رَحْمَة", text: "Rahmah — mercy." },
      { title: "Lesson 5 — Knowledge", ar: "عِلْم", text: "Ilm — knowledge." },
      { title: "Lesson 6 — Guidance", ar: "هُدًى", text: "Huda — guidance." },
      { title: "Lesson 7 — Patience", ar: "صَبْر", text: "Sabr — patience." },
      {
        title: "Lesson 8 — Gratitude",
        ar: "شُكْر",
        text: "Shukr — gratitude.",
      },
    ],
  },
  hifz: {
    icon: "◎",
    title: "Hifz & Revision",
    intro:
      "A simple local revision dashboard for memorization, repetition and progress.",
    items: SURAH.slice(0, 30).map((x, i) => ({
      title: `Revision ${i + 1} — ${x[0]}`,
      ar: x[1],
      text: `Set a personal target for ${x[0]}. Listen, repeat, recite from memory, then mark your own progress.`,
    })),
  },
  khutbah: {
    icon: "▣",
    title: "Khutbah & Friday",
    intro:
      "Weekly reflection themes that can be used for personal study or khutbah preparation.",
    items: [
      {
        title: "Taqwa",
        text: "Reflect on living with awareness of Allah in private and public.",
      },
      {
        title: "Sincerity",
        text: "Review intentions and make worship for Allah rather than for praise.",
      },
      {
        title: "Family",
        text: "Strengthen mercy, responsibility and good character within the home.",
      },
      {
        title: "Community",
        text: "Support neighbors, the vulnerable and those who need practical help.",
      },
      {
        title: "Time",
        text: "Use the week intentionally; small consistent deeds can become a lasting habit.",
      },
      {
        title: "Repentance",
        text: "Return to Allah quickly after mistakes and do not allow guilt to block hope.",
      },
    ],
  },
  haramain: {
    icon: "◇",
    title: "Haramain Guide",
    intro:
      "An in-site educational guide to the two sacred mosques and key worship concepts.",
    items: [
      {
        title: "Masjid al-Haram",
        ar: "المسجد الحرام",
        text: "The Sacred Mosque in Makkah, home to the Kaaba and the central destination of Hajj and Umrah.",
      },
      {
        title: "Kaaba",
        ar: "الكعبة",
        text: "The sacred House toward which Muslims face in prayer.",
      },
      {
        title: "Mataf",
        ar: "المطاف",
        text: "The area around the Kaaba where pilgrims perform tawaf.",
      },
      {
        title: "Masjid an-Nabawi",
        ar: "المسجد النبوي",
        text: "The Prophet’s Mosque in Madinah, one of the most revered mosques in Islam.",
      },
      {
        title: "Rawdah",
        ar: "الروضة",
        text: "A blessed area within Masjid an-Nabawi associated with the famous hadith describing the area between the Prophet’s house and pulpit.",
      },
      {
        title: "Safa & Marwah",
        ar: "الصفا والمروة",
        text: "The two landmarks between which pilgrims perform sa’i during Hajj and Umrah.",
      },
    ],
  },
  recitations: {
    icon: "♫",
    title: "Recitation Library",
    intro:
      "A local index for the 114 Surahs connected to the portal’s built-in recitation player.",
    items: SURAH.map((x, i) => ({
      title: `${String(i + 1).padStart(3, "0")} — ${x[0]}`,
      ar: x[1],
      text: `Select ${x[0]} in the Qur’an player to listen. The reading index remains inside Nūr al-Haramayn.`,
    })),
  },
  favorites: {
    icon: "★",
    title: "My Favorites",
    intro:
      "Your private local shelf. Save Surahs and study cards here as you build your own routine.",
    items: [
      {
        title: "Favorites are local",
        text: "Use the bookmark buttons in this section to build a personal study list. Your selections can be kept in this browser.",
      },
      {
        title: "Daily target",
        text: "Choose one Surah, one dua and one study topic for a simple daily routine.",
      },
      {
        title: "Revision target",
        text: "Return to previously studied material before adding something new.",
      },
    ],
  },
};
function libraryCard(key, x) {
  return `<article class="panel library-card"><div class="library-icon">${x.icon}</div><h3>${x.title}</h3><p class="muted">${x.intro}</p><button class="library-open" data-action="openLibrarySection" data-arg="${key}">Open section →</button></article>`;
}
function library() {
  if (window.currentUser?.role === "guest") {
    showLoginPrompt("library");
    return;
  }
  content.innerHTML = `<div class="page">${head("NŪR AL-HARAMAYN LIBRARY", "Islamic Library", "A complete in-site study space. Read, learn, revise and explore without leaving the portal.")}<div class="library-tools"><input id="librarySearch" placeholder="Search your library..."><div class="library-count">${Object.keys(LIBRARY_DATA).length} sections • ${SURAH.length} Surahs</div></div><div id="libraryGrid" class="library">${Object.entries(
    LIBRARY_DATA,
  )
    .map(([k, x]) => libraryCard(k, x))
    .join(
      "",
    )}</div><div id="libraryReader" class="panel library-reader hidden"></div></div>`;
  document
    .querySelector("#librarySearch")
    .addEventListener("input", (e) => filterLibrary(e.target.value));
}
function filterLibrary(q) {
  const query = (q || "").toLowerCase().trim();
  document.querySelectorAll("#libraryGrid .library-card").forEach((card) => {
    card.style.display =
      !query || card.textContent.toLowerCase().includes(query)
        ? "flex"
        : "none";
  });
}
function openLibrarySection(key) {
  if (window.currentUser?.role === "guest") {
    showLoginPrompt("library");
    return;
  }
  const data = LIBRARY_DATA[key];
  if (!data) return;
  const reader = document.querySelector("#libraryReader");
  reader.classList.remove("hidden");
  reader.innerHTML = `<div class="reader-head"><div><span class="eyebrow">IN-SITE READER</span><h2>${data.title}</h2><p class="muted">${data.intro}</p></div><button class="ghost" data-action="closeReader">Close</button></div><div class="library-items">${data.items.map((it, i) => `<article class="library-item"><div class="item-number">${String(i + 1).padStart(2, "0")}</div><div class="item-body"><h3>${it.title}</h3>${it.ar ? `<div class="arabic library-arabic">${it.ar}</div>` : ""}<p>${it.text}</p>${key === "quran" || key === "recitations" || key === "hifz" ? `<button class="small-btn" data-action="listenSurah" data-arg="${SURAH.findIndex((s) => s[0] === it.title.split(" — ").pop()) + 1 || 1}">Listen</button>` : ""}</div></article>`).join("")}</div>`;
  reader.scrollIntoView({ behavior: "smooth", block: "start" });
}
function about() {
  content.innerHTML = `<div class="page"><div class="panel about">${head("ABOUT", "Nūr al-Haramayn", "An independent educational interface concept.")}<p>This website is a fan-made/educational design concept inspired by the atmosphere of the Two Holy Mosques. It is not affiliated with or endorsed by official Haramain authorities.</p><p>For authoritative information, current schedules and official media, always refer to the relevant official sources.</p><a href="https://prh.gov.sa/" target="_blank">Official Presidency website →</a></div></div>`;
}
const pages = { home, imams, prayer, quran, media, library, about };
function go(n) {
  document
    .querySelectorAll(".nav[data-page]")
    .forEach((x) => x.classList.toggle("active", x.dataset.page === n));
  (pages[n] || home)();
  document.querySelector("#side").classList.remove("open");
}
document
  .querySelectorAll(".nav[data-page]")
  .forEach((x) => (x.onclick = () => go(x.dataset.page)));
// Every dynamically-rendered button below uses data-action/data-arg instead
// of an inline onclick="" attribute. The page's Content-Security-Policy
// (see server.js) does not allow inline scripts, so onclick="..." attributes
// injected via innerHTML are silently blocked by the browser — that was why
// "Open section", the Surah play buttons, and similar buttons appeared to
// do nothing. A single delegated listener here handles all of them safely.
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;
  const arg = el.dataset.arg;
  switch (action) {
    case "go":
      go(arg);
      break;
    case "requireLogin":
      requireLogin(arg);
      break;
    case "play":
      if (window.currentUser?.role === "guest") requireLogin("audio");
      else window.playSurah?.(Number(arg), el);
      break;
    case "openurl":
      window.open(arg, "_blank");
      break;
    case "openLibrarySection":
      openLibrarySection(arg);
      break;
    case "closeReader":
      document.querySelector("#libraryReader")?.classList.add("hidden");
      break;
    case "listenSurah":
      go("quran");
      setTimeout(() => window.playSurah?.(Number(arg), document.querySelector(`.quran-row .play[data-arg="${arg}"]`)), 80);
      break;
  }
});
function initials(name) {
  return (
    String(name || "Google user")
      .trim()
      .split(/\s+/)
      .map((x) => x[0])
      .join("")
      .slice(0, 2) || "GU"
  ).toUpperCase();
}
window.currentUser = null;
function enterPortal(message = "Welcome to Nūr al-Haramayn") {
  document.querySelector("#login").classList.add("hidden");
  document.querySelector("#app").classList.remove("hidden");
  go("home");
  note(message);
}
function setProfile(user) {
  window.currentUser = user || null;
  const profile = document.querySelector(".profile");
  if (profile)
    profile.textContent = initials(user?.name || user?.email || "Guest");
}
function showLoginPrompt(feature) {
  const label = feature === "audio" ? "Qur'an audio" : "the Islamic Library";
  document.querySelector("#app").classList.add("hidden");
  document.querySelector("#login").classList.remove("hidden");
  document
    .querySelectorAll(".nav[data-page]")
    .forEach((x) => x.classList.toggle("active", x.dataset.page === "home"));
  const status = document.querySelector("#googleStatus");
  if (status) status.textContent = "Sign in with Google to continue.";
  document
    .querySelector("#googleSignInButton")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
  if (!window.google?.accounts?.id) initGoogleSignIn();
  // Use the in-app toast instead of a native alert(): alert() is a blocking
  // call that can throw/be blocked in embedded or sandboxed views (e.g. an
  // iframe preview), which would silently stop the rest of this function
  // from running and make the Library link look completely unresponsive.
  note(`Please sign in with Google to unlock ${label}.`);
}
function requireLogin(feature) {
  if (window.currentUser?.role === "guest") {
    showLoginPrompt(feature);
    return false;
  }
  return true;
}
async function api(path, body) {
  const r = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(body || {}),
  });
  let data = {};
  try {
    data = await r.json();
  } catch {}
  if (!r.ok)
    throw Object.assign(new Error(data.message || "Request failed"), {
      status: r.status,
      data,
    });
  return data;
}
async function handleGoogleCredentialResponse(response) {
  const status = document.querySelector("#googleStatus");
  try {
    if (!googleNonce || Date.now() - googleNonceIssuedAt > 4 * 60 * 1000) {
      googleInitialized = false;
      await initGoogleSignIn();
      if (status)
        status.textContent = "Please click Continue with Google again.";
      return;
    }
    if (status) status.textContent = "Verifying securely…";
    const data = await api("/auth/google", {
      credential: response.credential,
      nonce: googleNonce,
    });
    setProfile(data.user);
    enterPortal(`Welcome, ${data.user.name || data.user.email}`);
  } catch (err) {
    console.error(err);
    if (status)
      status.textContent =
        err.message || "Google sign-in could not be completed.";
  }
}
let googleInitTimer = null;
let googleNonce = null;
let googleClientId = null;
let googleInitialized = false;
let googleNonceIssuedAt = 0;
async function getGoogleConfig() {
  const r = await fetch("/auth/config", {
    credentials: "same-origin",
    cache: "no-store",
  });
  const data = await r.json();
  if (!r.ok || !data.googleClientId)
    throw new Error("Google sign-in is not configured.");
  googleClientId = data.googleClientId;
}
async function getGoogleNonce() {
  const r = await fetch("/auth/google/nonce", {
    credentials: "same-origin",
    cache: "no-store",
  });
  const data = await r.json();
  if (!r.ok || !data.nonce)
    throw new Error(data.message || "Unable to start Google sign-in.");
  return data.nonce;
}
async function initGoogleSignIn(attempt = 0) {
  const status = document.querySelector("#googleStatus");
  const button = document.querySelector("#googleSignInButton");
  if (!button) return;
  const origin = window.location.origin;
  if (window.location.protocol === "file:") {
    if (status) status.textContent = "Start Nūr al-Haramayn with npm start.";
    button.innerHTML =
      '<span class="google-disabled">Google sign-in requires the app server</span>';
    button.style.opacity = "0.7";
    button.style.pointerEvents = "none";
    return;
  }
  if (
    window.location.protocol !== "https:" &&
    !/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
  ) {
    if (status) status.textContent = "Production sign-in requires HTTPS.";
    button.innerHTML =
      '<span class="google-disabled">Google sign-in requires HTTPS</span>';
    button.style.opacity = "0.7";
    button.style.pointerEvents = "none";
    return;
  }
  try {
    if (!googleClientId) await getGoogleConfig();
    if (
      !googleClientId ||
      !googleClientId.includes(".apps.googleusercontent.com")
    ) {
      button.innerHTML =
        '<span class="google-disabled">Google sign-in is not configured for this project</span>';
      button.style.opacity = "0.7";
      button.style.pointerEvents = "none";
      if (status)
        status.textContent =
          "Add a valid Google OAuth Web Client ID in .env and authorize http://127.0.0.1:5500.";
      return;
    }
  } catch (err) {
    button.innerHTML =
      '<span class="google-disabled">Google sign-in is unavailable</span>';
    button.style.opacity = "0.7";
    button.style.pointerEvents = "none";
    if (status)
      status.textContent =
        "Google sign-in is not configured yet. Use guest access instead.";
    return;
  }
  if (!window.google?.accounts?.id) {
    if (status) status.textContent = "Connecting to Google…";
    if (attempt < 40) {
      clearTimeout(googleInitTimer);
      googleInitTimer = setTimeout(() => initGoogleSignIn(attempt + 1), 250);
    } else if (status)
      status.textContent =
        "Google sign-in is unavailable. Refresh and try again.";
    return;
  }
  try {
    if (googleInitialized) return;
    googleNonce = await getGoogleNonce();
    googleNonceIssuedAt = Date.now();
    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleGoogleCredentialResponse,
      nonce: googleNonce,
      color_scheme: "default",
      auto_select: false,
      ux_mode: "popup",
      cancel_on_tap_outside: true,
    });
    renderGoogleButton(button);
    googleInitialized = true;
    if (status) status.textContent = "";
    // The Google button is drawn inside an iframe at a fixed pixel width
    // chosen at render time, so it never tracks CSS the way the full-width
    // "Continue as Guest" button below it does. Without this, resizing the
    // window (or the very first layout pass before fonts/scrollbars settle)
    // leaves the two buttons different widths, which reads as "uneven".
    // Re-measuring and redrawing on resize keeps them the same width.
    if (!window.__googleBtnResizeBound) {
      window.__googleBtnResizeBound = true;
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const btn = document.querySelector("#googleSignInButton");
          if (btn && googleInitialized) renderGoogleButton(btn);
        }, 150);
      });
    }
  } catch (err) {
    console.error(err);
    if (status)
      status.textContent =
        "Google sign-in is temporarily unavailable. Refresh and try again.";
  }
}
function renderGoogleButton(button) {
  button.innerHTML = "";
  const buttonWidth = Math.min(400, Math.max(200, button.clientWidth || 400));
  google.accounts.id.renderButton(button, {
    type: "standard",
    theme: "outline",
    size: "large",
    text: "continue_with",
    shape: "rectangular",
    width: buttonWidth,
  });
}
async function restoreSession() {
  try {
    const r = await fetch("/auth/me", {
      credentials: "same-origin",
      cache: "no-store",
    });
    const data = await r.json();
    if (data.authenticated) {
      setProfile(data.user);
      enterPortal(`Welcome back, ${data.user.name || data.user.email}`);
    }
  } catch {}
}
document.querySelector("#guestLogin")?.addEventListener("click", async () => {
  const btn = document.querySelector("#guestLogin");
  btn.disabled = true;
  try {
    const data = await api("/auth/guest");
    setProfile(data.user);
    enterPortal("Welcome, Guest");
  } catch (err) {
    document.querySelector("#guestStatus").textContent =
      err.message || "Guest access is unavailable.";
  } finally {
    btn.disabled = false;
  }
});
document.querySelector("#logout").onclick = async () => {
  try {
    await fetch("/auth/logout", { method: "POST", credentials: "same-origin" });
  } catch {}
  setProfile(null);
  document.querySelector("#app").classList.add("hidden");
  document.querySelector("#login").classList.remove("hidden");
  document
    .querySelectorAll(".nav[data-page]")
    .forEach((x) => x.classList.toggle("active", x.dataset.page === "home"));
  document.querySelector("#googleStatus").textContent = "";
  note("Signed out");
};
document.querySelector("#dark").onclick = () => {
  document.body.classList.toggle("dark");
  note(
    document.body.classList.contains("dark")
      ? "Dark mode enabled"
      : "Light mode enabled",
  );
};
document.querySelector("#menu").onclick = () =>
  document.querySelector("#side").classList.toggle("open");
document.querySelector("#arabic").onclick = () => {
  document.documentElement.dir =
    document.documentElement.dir === "rtl" ? "ltr" : "rtl";
  note(document.documentElement.dir === "rtl" ? "RTL mode" : "LTR mode");
};
document.querySelector("#bell").onclick = () => note("No new notifications");
document.querySelector("#search").oninput = (e) => {
  const q = e.target.value.toLowerCase().trim();
  if (!q) return;
  const matches = IMAMS.filter((x) =>
    (x.name + x.ar + x.role).toLowerCase().includes(q),
  );
  if (matches.length) {
    content.innerHTML = `<div class="page">${head("SEARCH", "Results", "Matching imam profiles.")}<div class="cards">${matches.map(imamCard).join("")}</div></div>`;
  } else note("No matching imam found");
};
window.addEventListener("load", () => {
  initGoogleSignIn();
  restoreSession();
});
setTimeout(() => (document.querySelector("#splash").style.opacity = "0"), 800);
setTimeout(() => document.querySelector("#splash").remove(), 1450);
