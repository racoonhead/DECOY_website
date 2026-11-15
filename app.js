const I18N = {
  cs: {
    div_sound: "ZVUK",
    div_light: "SVĚTLO",
    div_video: "VIDEO",
    enter_section: "VSTOUPIT >>>",
    sec_pedals: "PEDÁLY",
    sec_blog: "BLOK",
    sec_merch: "TRIČKA & MERCH",
    new_post_btn: "+ NAPSAT PŘÍSPĚVEK",
    save_post_btn: "ULOŽIT PŘÍSPĚVEK",
    cancel_btn: "ZRUŠIT",
    post_title_ph: "Nadpis příspěvku...",
    post_body_ph: "Sem piš text, poznámky z vývoje nebo report ze zkoušky...",
    detail_btn: "DETAIL",
    soon_badge: "PROTOTYP / PŘIPRAVUJEME",
  },
  en: {
    div_sound: "SOUND",
    div_light: "LIGHT",
    div_video: "VIDEO",
    enter_section: "ENTER >>>",
    sec_pedals: "PEDALS",
    sec_blog: "JOURNAL",
    sec_merch: "TEES & MERCH",
    new_post_btn: "+ NEW ENTRY",
    save_post_btn: "SAVE ENTRY",
    cancel_btn: "CANCEL",
    post_title_ph: "Entry title...",
    post_body_ph: "Write notes, devlog thoughts, or rehearsal reports here...",
    detail_btn: "VIEW",
    soon_badge: "PROTOTYPE / UPCOMING",
  },
};

const DIVISIONS = {
  AUD: {
    code: "AUD // 01 — MATTE BLACK PCB",
    title: { cs: "ZVUK", en: "SOUND" },
    lead: {
      cs: "Nástroje pro signálovou cestu do moduláru i ven, kytarové a experimentální pedály, zvukové poznámky a živá vystoupení.",
      en: "Instruments for getting sound in and out of the rack, experimental stompboxes, audio notes, and live performances.",
    },
    eurorack: [
      {
        id: "the-in",
        name: "THE IN",
        hp: "16 HP",
        image: "assets/the_in_panel.png",
        desc: {
          cs: "Jediný vstupní modul, co kdy budeš potřebovat. Mikrofon, nástroj, linka, CV, Gate, MIDI i USB a MicroSD záznam v jednom panelu.",
          en: "The only input module you will ever need. Mic, instrument, line, CV, Gate, MIDI, plus USB and MicroSD recording.",
        },
      },
      {
        id: "the-out",
        name: "THE OUT",
        hp: "20 HP",
        image: "assets/the_out_panel.png",
        desc: {
          cs: "Čtyřkanálový mix, symetrické XLR výstupy do PA, dvoje sluchátka, interní klik a USB rozhraní v matně černém provedení.",
          en: "Four-channel mixer, balanced XLR main outs, dual headphones, internal click, and USB audio interface.",
        },
      },
    ],
    pedals: [
      {
        name: "DECØY // FUZZ-01",
        tag: { cs: "ANALOGOVÝ PEDÁL", en: "ANALOG STOMPBOX" },
        desc: {
          cs: "Surové zkreslení a feedback smyčka v hliníkovém šasi s PCB předním panelem ve stylu DECØY AUDIO.",
          en: "Raw saturation and feedback loop in an aluminum enclosure with a DECØY AUDIO PCB faceplate.",
        },
      },
      {
        name: "DECØY // TAPE-GLITCH",
        tag: { cs: "GRANULÁRNÍ DELAY", en: "GRANULAR DELAY" },
        desc: {
          cs: "Pódiový pedál pro zmrazování zvuku, krátké smyčky a CV/Expression modulaci.",
          en: "Stage stompbox for sound freeze, micro-loops, and CV/Expression modulation.",
        },
      },
    ],
    teatro: {
      title: "TEATRO\\\\\\SVJÖTLO — AUDIO LAB",
      desc: {
        cs: "Zvuková složka kolektivu Teatro\\\\\\Svjötlo. Živá elektroakustika, modulární syntezátory propojené se scénickým světlem a prostorový zvuk na míru inscenacím.",
        en: "The sound wing of Teatro\\\\\\Svjötlo. Live electroacoustics, modular synthesizers linked to stage lighting, and spatial sound for performances.",
      },
    },
  },
  LUX: {
    code: "LUX // 02 — MATTE ASH PCB",
    title: { cs: "SVĚTLO", en: "LIGHT" },
    lead: {
      cs: "Řízení divadelních a koncertních světel přímo z modulárního syntezátoru. CV-to-DMX převodníky, světelné loopery a scénické ovladače.",
      en: "Controlling theatrical and concert lighting directly from a modular synthesizer. CV-to-DMX bridges, light loopers, and scene controllers.",
    },
    eurorack: [
      {
        id: "dmx-out",
        name: "DMX_OUT",
        hp: "12 HP",
        image: "assets/dmx_out_panel.png",
        views: [
          { label: "2D PANEL", src: "assets/dmx_out_panel.png" },
          { label: "3D PANEL", src: "assets/dmx_out_3d.png" },
          { label: "3D PCB", src: "assets/dmx_out_pcb_3d.png" },
        ],
        desc: {
          cs: "Srdce světelného racku. Převádí CV signály z patchbayů přes běžné síťové kabely přímo na DMX512 pro světla.",
          en: "The heart of the lighting rack. Converts CV signals over standard RJ45 cables straight into DMX512 for stage fixtures.",
        },
      },
      {
        id: "lux-core",
        name: "LUX_CORE",
        hp: "14 HP",
        image: "assets/lux_core_panel.png",
        desc: {
          cs: "Světelný procesor a looper. Nahrává DMX pohyby, zpomaluje čas, plynule prolíná scény a hlídá chování světel.",
          en: "Lighting processor and looper. Records DMX choreography, warps time, blends scenes, and handles fixture profiles.",
        },
      },
      {
        id: "key-frames",
        name: "KEY_FRAMES",
        hp: "20 HP",
        image: "assets/key_frames_panel.png",
        desc: {
          cs: "Osm otočných ovladačů pro přímé míchání světelných scén a plynulé přechody mezi uloženými stavy.",
          en: "Eight direct knobs for hands-on lighting scene mixing and smooth morphing between stored keyframes.",
        },
      },
    ],
    pedals: [
      {
        name: "LUX // FOOT-DMX",
        tag: { cs: "NOŽNÍ KONTROLÉR", en: "FOOT CONTROLLER" },
        desc: {
          cs: "Robustní pódiový pedál pro přepínání světelných scén, tap-tempo a blackout přímo nohou během hraní.",
          en: "Rugged stage pedal for cue switching, tap-tempo, and instant blackout while playing.",
        },
      },
      {
        name: "LUX // STROBE-GATE",
        tag: { cs: "OPTICKÝ TRIGGER", en: "OPTICAL TRIGGER" },
        desc: {
          cs: "Pedál převádějící dynamiku kytary nebo bicích na bleskové DMX záblesky a změny barev.",
          en: "Stompbox translating guitar or drum dynamics into reactive DMX strobe bursts and color shifts.",
        },
      },
    ],
    teatro: {
      title: "TEATRO\\\\\\SVJÖTLO — SVĚTELNÁ SCÉNA",
      desc: {
        cs: "Světlo jako živý hudební nástroj. Teatro\\\\\\Svjötlo staví inscenace a site-specific instalace, kde každý záblesk a pohyb hlavy reaguje na analogové napětí v reálném čase.",
        en: "Light as a live musical instrument. Teatro\\\\\\Svjötlo builds stage works and site-specific installations where every beam reacts to analog voltage in real time.",
      },
    },
  },
  VID: {
    code: "VID // 03 — CYBER PURPLE PCB",
    title: { cs: "VIDEO", en: "VIDEO" },
    lead: {
      cs: "Analogová a digitální video syntéza, CRT experimenty, synchronizace obrazu se zvukem a světlem v kyber-fialové estetice.",
      en: "Analog and digital video synthesis, CRT experiments, and syncing visuals with sound and stage light in cyber-purple.",
    },
    eurorack: [
      {
        id: "raster-vid",
        name: "RASTER",
        hp: "20 HP",
        image: "assets/category_comparison.png",
        desc: {
          cs: "Připravované jádro video divize. RGB barevná syntéza, synchronizace obrazu a vizuální modulace přímo v racku.",
          en: "Upcoming core of the video division. RGB color synthesis, sync generation, and visual modulation inside the rack.",
        },
      },
    ],
    pedals: [
      {
        name: "VID // GLITCH-BOX",
        tag: { cs: "ANALOG VIDEO FX", en: "ANALOG VIDEO FX" },
        desc: {
          cs: "Kompozitní video pedál pro ohýbání synchronizace, barevné posuny a hmatové rušení CRT obrazu.",
          en: "Composite video stompbox for sync bending, color shifting, and tactile CRT glitching.",
        },
      },
      {
        name: "VID // SYNC-SPLIT",
        tag: { cs: "DISTRIBUCE OBRAZU", en: "VIDEO UTILITY" },
        desc: {
          cs: "Kompaktní pódiový box pro rozbočení a převod video signálu mezi projektory a starými televizory.",
          en: "Compact stage utility for splitting and routing video signals between projectors and vintage CRTs.",
        },
      },
    ],
    teatro: {
      title: "TEATRO\\\\\\SVJÖTLO — VIZUÁLNÍ PROJEKCE",
      desc: {
        cs: "CRT televize na jevišti, živé projekce a vizuální zpětná vazba propojená s divadelním svícením a modulárním zvukem.",
        en: "On-stage CRT televisions, live projections, and visual feedback loops tied into theatrical lighting and modular sound.",
      },
    },
  },
};

const MERCH_ITEMS = [
  {
    code: "DD-TEE-01",
    name: { cs: "TRIČKO DECØY // Ø", en: "DECØY // Ø TEE" },
    price: "790 Kč",
    desc: {
      cs: "Ťěžká černá bavlna (240 g/m²), bílý sítotisk s emblémem Ø na hrudi a servisním kódem na zádech.",
      en: "Heavyweight black cotton (240 gsm), white screenprint with the Ø emblem and service code on the back.",
    },
    svg: `<svg viewBox="0 0 120 120" width="110" height="110"><path d="M35 24 L48 20 Q60 28 72 20 L85 24 L104 42 L92 56 L82 48 L82 100 L38 100 L38 48 L28 56 L16 42 Z" fill="#0c0c0e" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="54" r="10" fill="none" stroke="#eaeae4" stroke-width="2"/><line x1="51" y1="63" x2="69" y2="45" stroke="#eaeae4" stroke-width="2"/></svg>`,
  },
  {
    code: "TS-HOOD-02",
    name: { cs: "MIKINA TEATRO\\\\\\SVJÖTLO", en: "TEATRO\\\\\\SVJÖTLO HOODIE" },
    price: "1 690 Kč",
    desc: {
      cs: "Volnější střih, hazard pruhy na rukávu a reflexní stříbrný potisk na zádech.",
      en: "Relaxed fit, hazard stripes on the sleeve, and reflective silver print on the back.",
    },
    svg: `<svg viewBox="0 0 120 120" width="110" height="110"><path d="M40 22 Q60 12 80 22 L102 44 L90 58 L82 50 L82 102 L38 102 L38 50 L30 58 L18 44 Z" fill="#18181c" stroke="currentColor" stroke-width="2"/><text x="60" y="64" text-anchor="middle" fill="#eaeae4" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2">T\\\\\\S</text></svg>`,
  },
  {
    code: "DD-TOTE-03",
    name: { cs: "PLÁTĚNKA HAZARD // PATCH", en: "HAZARD TOTE // PATCH" },
    price: "420 Kč",
    desc: {
      cs: "Pevná taška na kabely a moduly s 45° hazard motivem a nášivkou DECØY DEVICES.",
      en: "Sturdy bag for patch cables and modules with 45° hazard motif and DECØY DEVICES woven patch.",
    },
    svg: `<svg viewBox="0 0 120 120" width="110" height="110"><path d="M44 38 V24 Q60 14 76 24 V38" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="30" y="38" width="60" height="62" fill="#0c0c0e" stroke="currentColor" stroke-width="2"/><line x1="36" y1="86" x2="84" y2="86" stroke="#b9bec7" stroke-width="4" stroke-dasharray="6 4"/></svg>`,
  },
];

const DHOGH_POST = {
  id: "dhogh-1",
  date: "2026-11-15",
  title: "DHOGH // SVĚTLO, ZVUK & ŽIŽKÁRNA",
  body: "První zápis patří projektu DHOGH — elektronické klubové sérii a festivalu v českobudějovické Žižkárně (od roku 2019), kde se potkává současná klubová scéna s důrazem na prostorový design, scénické svícení a audiovizuální zážitky. Právě na akcích DHOGH a ve spolupráci s Teatro\\\\\\Svjötlo testujeme hardware DECØY DEVICES v ostrém provozu.",
  links: [
    { label: "DHOGH.COM", url: "https://dhogh.com/" },
    { label: "@DHOGHTEAM", url: "https://www.instagram.com/dhoghteam/" },
  ],
};

const DEFAULT_POSTS = {
  AUD: [
    DHOGH_POST,
    {
      id: "aud-1",
      date: "2026-11-10",
      title: "Testování THE IN a THE OUT na zkoušce",
      body: "První ostrý test kompletní audio cesty z mikrofonu přímo do moduláru a zpět do PA přes symetrické XLR. Interní klik v THE OUT drží tempo bez jediného výpadku.",
    },
  ],
  LUX: [
    DHOGH_POST,
    {
      id: "lux-1",
      date: "2026-11-12",
      title: "Propojení Key_frames a DMX_out jedním kabelem",
      body: "Světla na rampě reagují na LFO z moduláru okamžitě. Žádné zamotané svazky kabelů, jen jeden stíněný RJ45 do hlavního DMX_out.",
    },
  ],
  VID: [
    DHOGH_POST,
    {
      id: "vid-1",
      date: "2026-11-14",
      title: "Fialová maska pro video divizi",
      body: "Ladíme vizuální identitu pro RASTER a první CRT glitch krabičky. Kyber-fialová PCB s bílým potiskem vypadá pod UV světlem na pódiu skvěle.",
    },
  ],
};

let currentLang = "cs";
let currentDivision = null;
let currentTab = "eurorack";

function getPosts(divKey) {
  const saved = localStorage.getItem(`decoy_blog_${divKey}`);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return DEFAULT_POSTS[divKey] || [];
    }
  }
  return DEFAULT_POSTS[divKey] || [];
}

function savePost(divKey, title, body) {
  const posts = getPosts(divKey);
  const today = new Date().toISOString().slice(0, 10);
  posts.unshift({
    id: `${divKey}-${Date.now()}`,
    date: today,
    title,
    body,
  });
  localStorage.setItem(`decoy_blog_${divKey}`, JSON.stringify(posts));
}

function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const html =
    currentLang === "cs"
      ? '<span class="lang-active">CZ</span> / <span>EN</span>'
      : '<span>CZ</span> / <span class="lang-active">EN</span>';
  const l1 = document.getElementById("langToggleLanding");
  const l2 = document.getElementById("langToggleDiv");
  if (l1) l1.innerHTML = html;
  if (l2) l2.innerHTML = html;
}

function renderDivision(divKey, tabKey = currentTab) {
  currentDivision = divKey;
  currentTab = tabKey || "eurorack";
  const div = DIVISIONS[divKey];
  if (!div) return;

  const landing = document.getElementById("landingView");
  const divView = document.getElementById("divisionView");
  const content = document.getElementById("divisionContent");
  const footerCode = document.getElementById("footerDivCode");

  landing.hidden = true;
  divView.hidden = false;
  divView.className = `division-view theme-${divKey}`;

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-switch-div") === divKey);
  });

  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === currentTab);
  });

  if (footerCode) footerCode.textContent = div.code;

  const posts = getPosts(divKey);
  const dict = I18N[currentLang];

  const tabSections = {
    eurorack: `
      <section class="div-section">
        <div class="container">
          <div class="sec-head">
            <div>
              <div class="sec-num">01 // MODULAR</div>
              <h2>EURORACK</h2>
            </div>
          </div>
          <div class="cards-grid">
            ${div.eurorack
              .map((m) => {
                const viewButtons = m.views
                  ? `<div class="view-switcher">
                      ${m.views
                        .map(
                          (v, idx) =>
                            `<button type="button" class="view-pill ${idx === 0 ? "active" : ""}" data-mod="${m.id}" data-src="${v.src}">${v.label}</button>`
                        )
                        .join("")}
                    </div>`
                  : "";
                return `
                  <article class="hud-card">
                    <div class="hud-card-head">
                      <span>${m.name}</span>
                      <span>${m.hp}</span>
                    </div>
                    <div class="hud-card-media">
                      <img id="img-${m.id}" src="${m.image}" alt="${m.name}" loading="lazy" />
                      ${viewButtons}
                    </div>
                    <div class="hud-card-body">
                      <h3>${m.name}</h3>
                      <p>${m.desc[currentLang]}</p>
                      <button type="button" class="btn-outline" data-open-mod="${m.id}">${dict.detail_btn}</button>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </div>
      </section>
    `,
    pedals: `
      <section class="div-section">
        <div class="container">
          <div class="sec-head">
            <div>
              <div class="sec-num">02 // STOMPBOXES</div>
              <h2>${dict.sec_pedals}</h2>
            </div>
            <span class="sec-num">${dict.soon_badge}</span>
          </div>
          <div class="cards-grid-2">
            ${div.pedals
              .map(
                (p) => `
              <article class="hud-card">
                <div class="hud-card-head">
                  <span>${p.tag[currentLang]}</span>
                  <span>PCB FACEPLATE</span>
                </div>
                <div class="hud-card-body">
                  <h3>${p.name}</h3>
                  <p>${p.desc[currentLang]}</p>
                </div>
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `,
    blog: `
      <section class="div-section">
        <div class="container">
          <div class="sec-head">
            <div>
              <div class="sec-num">03 // NOTES &amp; JOURNAL</div>
              <h2>${dict.sec_blog}</h2>
            </div>
            <button type="button" id="toggleEditorBtn" class="btn-outline">${dict.new_post_btn}</button>
          </div>

          <form id="blogEditor" class="blog-editor" hidden>
            <input id="blogTitleInput" class="blog-input" type="text" placeholder="${dict.post_title_ph}" required />
            <textarea id="blogBodyInput" class="blog-textarea" placeholder="${dict.post_body_ph}" required></textarea>
            <div style="display:flex; gap:10px;">
              <button type="submit" class="btn-outline">${dict.save_post_btn}</button>
              <button type="button" id="cancelEditorBtn" class="btn-outline" style="opacity:0.7;">${dict.cancel_btn}</button>
            </div>
          </form>

          <div class="blog-list" id="blogList">
            ${posts
              .map(
                (post) => `
              <article class="blog-post">
                <div class="blog-post-meta">
                  <span>${divKey} // LOG</span>
                  <span>${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                ${
                  post.links
                    ? `<div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:6px;">
                        ${post.links
                          .map(
                            (l) =>
                              `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`
                          )
                          .join("")}
                      </div>`
                    : ""
                }
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `,
    teatro: `
      <section class="div-section">
        <div class="container">
          <div class="sec-head">
            <div>
              <div class="sec-num">04 // COLLECTIVE &amp; STAGE</div>
              <h2>TEATRO\\\\\\SVJÖTLO</h2>
            </div>
          </div>
          <div class="teatro-banner">
            <div>
              <div class="teatro-mark">${div.teatro.title}</div>
              <p style="margin:0 0 18px; color:var(--fg-muted); font-size:0.94rem;">${div.teatro.desc[currentLang]}</p>
              <div style="display:flex; flex-wrap:wrap; gap:10px; align-items:center;">
                <a class="btn-outline" href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a>
                <a class="btn-outline" href="https://www.instagram.com/divokyvojta/" target="_blank" rel="noopener noreferrer">VOJTĚCH DIVOKÝ (@DIVOKYVOJTA) ↗</a>
              </div>
            </div>
            <div style="border:1px solid var(--border-col); padding:20px; text-align:center;">
              <div style="font-family:var(--font-display); font-size:2.4rem; letter-spacing:0.16em;">T\\\\\\S</div>
              <div style="font-size:0.74rem; color:var(--fg-muted); letter-spacing:0.16em; margin-top:6px;">CO-FOUNDERS: VOJTĚCH DIVOKÝ &amp; LADISLAV MAREŠ</div>
            </div>
          </div>
        </div>
      </section>
    `,
    merch: `
      <section class="div-section">
        <div class="container">
          <div class="sec-head">
            <div>
              <div class="sec-num">05 // APPAREL &amp; OBJECTS</div>
              <h2>${dict.sec_merch}</h2>
            </div>
          </div>
          <div class="cards-grid">
            ${MERCH_ITEMS.map(
              (item) => `
              <article class="hud-card">
                <div class="hud-card-head">
                  <span>${item.code}</span>
                  <span class="merch-price">${item.price}</span>
                </div>
                <div class="merch-art">${item.svg}</div>
                <div class="hud-card-body">
                  <h3>${item.name[currentLang]}</h3>
                  <p>${item.desc[currentLang]}</p>
                </div>
              </article>
            `
            ).join("")}
          </div>
        </div>
      </section>
    `,
  };

  content.innerHTML = `
    <section class="div-hero">
      <div class="container">
        <div class="div-hero-code">${div.code}</div>
        <h1>${div.title[currentLang]}</h1>
        <p class="div-hero-lead">${div.lead[currentLang]}</p>
      </div>
    </section>
    ${tabSections[currentTab] || tabSections.eurorack}
  `;

  window.scrollTo({ top: 0, behavior: "instant" });
  bindDivisionEvents();
}

function bindDivisionEvents() {
  const editor = document.getElementById("blogEditor");
  document.getElementById("toggleEditorBtn")?.addEventListener("click", () => {
    if (editor) editor.hidden = !editor.hidden;
  });
  document.getElementById("cancelEditorBtn")?.addEventListener("click", () => {
    if (editor) editor.hidden = true;
  });
  editor?.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("blogTitleInput").value.trim();
    const body = document.getElementById("blogBodyInput").value.trim();
    if (!title || !body || !currentDivision) return;
    savePost(currentDivision, title, body);
    renderDivision(currentDivision);
  });

  document.querySelectorAll(".view-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mod = btn.getAttribute("data-mod");
      const src = btn.getAttribute("data-src");
      const img = document.getElementById(`img-${mod}`);
      if (img && src) img.src = src;
      btn.parentElement?.querySelectorAll(".view-pill").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  document.querySelectorAll("[data-open-mod]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modId = btn.getAttribute("data-open-mod");
      const mod = DIVISIONS[currentDivision]?.eurorack.find((m) => m.id === modId);
      if (!mod) return;
      const modal = document.getElementById("itemModal");
      const body = document.getElementById("modalBody");
      body.innerHTML = `
        <div class="modal-grid">
          <div class="modal-img-box">
            <img src="${mod.image}" alt="${mod.name}" />
          </div>
          <div>
            <div style="font-size:0.75rem; color:var(--silver-hasl); margin-bottom:8px;">${currentDivision} // ${mod.hp}</div>
            <h2 style="margin-bottom:12px;">${mod.name}</h2>
            <p style="margin:0; color:var(--silver-hasl);">${mod.desc[currentLang]}</p>
          </div>
        </div>
      `;
      modal.hidden = false;
    });
  });
}

function goHome() {
  currentDivision = null;
  document.getElementById("divisionView").hidden = true;
  document.getElementById("landingView").hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();

  document.querySelectorAll("[data-open-division]").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderDivision(btn.getAttribute("data-open-division"), "eurorack");
    });
  });

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderDivision(btn.getAttribute("data-switch-div"), currentTab);
    });
  });

  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!currentDivision) return;
      renderDivision(currentDivision, btn.getAttribute("data-tab"));
    });
  });

  document.getElementById("backToSplit")?.addEventListener("click", goHome);

  const toggleLang = () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    applyTranslations();
    if (currentDivision) renderDivision(currentDivision);
  };
  document.getElementById("langToggleLanding")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleDiv")?.addEventListener("click", toggleLang);

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("itemModal").hidden = true;
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("itemModal").hidden = true;
    }
  });
});
