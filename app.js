/* DECØY DEVICES — index.html (úvodní split + divize se záložkami) */

const DIVISIONS = {
  AUD: {
    code: "AUD // 01 — MATTE BLACK PCB",
    serialLeft: "AUD // 01",
    serialRight: "TEATRO\\\\\\SVJÖTLO",
    title: { cs: "ZVUK", en: "SOUND" },
    lead: {
      cs: "Nástroje pro signálovou cestu do moduláru i ven, kytarové a experimentální pedály, zvukové poznámky a živá vystoupení.",
      en: "Instruments for getting sound in and out of the rack, experimental stompboxes, audio notes, and live performances.",
    },
    eurorack: ["the-in", "the-out", "elements-v04", "cue-frames", "cube-seq", "monobox"],
    desktop: [],
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
      title: { cs: `${TS} — AUDIO LAB`, en: `${TS} — AUDIO LAB` },
      desc: {
        cs: `Zvuková složka kolektivu ${TS}. Živá elektroakustika, modulární syntezátory propojené se scénickým světlem a prostorový zvuk na míru inscenacím.`,
        en: `The sound wing of ${TS}. Live electroacoustics, modular synthesizers linked to stage lighting, and spatial sound for performances.`,
      },
    },
  },
  LUX: {
    code: "LUX // 02 — MATTE ASH PCB",
    serialLeft: "LUX // 02",
    serialRight: "TEATRO\\\\\\SVJÖTLO",
    title: { cs: "SVĚTLO", en: "LIGHT" },
    lead: {
      cs: "Řízení divadelních a koncertních světel přímo z modulárního syntezátoru. CV-to-DMX převodníky, světelné loopery a scénické ovladače.",
      en: "Controlling theatrical and concert lighting directly from a modular synthesizer. CV-to-DMX bridges, light loopers, and scene controllers.",
    },
    eurorack: ["dmx-out", "patchbay-8ch", "patchbay-16ch", "lux-core", "cue-frames"],
    desktop: [],
    teatro: {
      title: { cs: `${TS} — SVĚTELNÁ SCÉNA`, en: `${TS} — LIGHTING STAGE` },
      desc: {
        cs: `Světlo jako živý hudební nástroj. ${TS} staví inscenace a site-specific instalace, kde každý záblesk a pohyb hlavy reaguje na analogové napětí v reálném čase.`,
        en: `Light as a live musical instrument. ${TS} builds stage works and site-specific installations where every beam reacts to analog voltage in real time.`,
      },
    },
  },
  VID: {
    code: "VID // 03 — CYBER PURPLE PCB",
    serialLeft: "VID // 03",
    serialRight: "TEATRO\\\\\\SVJÖTLO",
    title: { cs: "VIDEO", en: "VIDEO" },
    lead: {
      cs: "Analogová a digitální video syntéza, CRT experimenty, synchronizace obrazu se zvukem a světlem v kyber-fialové estetice.",
      en: "Analog and digital video synthesis, CRT experiments, and syncing visuals with sound and stage light in cyber-purple.",
    },
    eurorack: [],
    desktop: ["fvck-boy", "fvck-girl"],
    teatro: {
      title: { cs: `${TS} — VIZUÁLNÍ PROJEKCE`, en: `${TS} — VISUAL PROJECTION` },
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
      cs: "Těžká černá bavlna (240 g/m²), bílý sítotisk s emblémem Ø na hrudi a servisním kódem na zádech.",
      en: "Heavyweight black cotton (240 gsm), white screenprint with the Ø emblem and service code on the back.",
    },
    svg: `<svg viewBox="0 0 120 120" width="110" height="110"><path d="M35 24 L48 20 Q60 28 72 20 L85 24 L104 42 L92 56 L82 48 L82 100 L38 100 L38 48 L28 56 L16 42 Z" fill="#0c0c0e" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="54" r="10" fill="none" stroke="#eaeae4" stroke-width="2"/><line x1="51" y1="63" x2="69" y2="45" stroke="#eaeae4" stroke-width="2"/></svg>`,
  },
  {
    code: "TS-HOOD-02",
    name: { cs: `MIKINA ${TS}`, en: `${TS} HOODIE` },
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
  title: {
    cs: "DHOGH // SVĚTLO, ZVUK & ŽIŽKÁRNA",
    en: "DHOGH // LIGHT, SOUND & ŽIŽKÁRNA",
  },
  body: {
    cs: `První zápis patří projektu DHOGH — elektronické klubové sérii a festivalu v českobudějovické Žižkárně (od roku 2019), kde se potkává současná klubová scéna s důrazem na prostorový design, scénické svícení a audiovizuální zážitky. Na akcích DHOGH a ve spolupráci s ${TS} testujeme hardware DECØY DEVICES v ostrém provozu.`,
    en: `First entry goes to DHOGH — an electronic club series and festival at Žižkárna in České Budějovice (since 2019), bringing together contemporary club music, spatial design, stage lighting, and audiovisual experiences. At DHOGH events and with ${TS}, we field-test DECØY DEVICES hardware live.`,
  },
  links: [
    { label: "DHOGH.COM", url: "https://dhogh.com/" },
    { label: "@DHOGHTEAM", url: "https://www.instagram.com/dhoghteam/" },
    { label: "@ADAM_VEIT", url: "https://www.instagram.com/adam_veit/" },
  ],
};

const SYNTHETIC_POST = {
  id: "ssd-1",
  date: "2026-11-14",
  title: {
    cs: "SYNTHETIC SEX DRIVE // ŽIVÁ ELEKTRONIKA",
    en: "SYNTHETIC SEX DRIVE // LIVE ELECTRONICS",
  },
  body: {
    cs: "Projekt Synthetic Sex Drive, ve kterém hraju (Ladislav). Živá elektronika, modulární syntezátory a přímé napojení na světelný a vizuální rig.",
    en: "Synthetic Sex Drive, my live electronics project (Ladislav). Modular synthesizers wired directly into the stage lighting and visual rig.",
  },
  links: [{ label: "@SYNTHETICSEXDRIVE", url: "https://www.instagram.com/syntheticsexdrive/" }],
};

const DEFAULT_POSTS = {
  AUD: [
    DHOGH_POST,
    SYNTHETIC_POST,
    {
      id: "aud-1",
      date: "2026-11-10",
      title: {
        cs: "Testování THE IN a THE OUT na zkoušce",
        en: "Testing THE IN and THE OUT in rehearsal",
      },
      body: {
        cs: "První ostrý test kompletní audio cesty z mikrofonu přímo do moduláru a zpět do PA přes symetrické XLR. Interní klik v THE OUT drží tempo bez jediného výpadku.",
        en: "First live test of the full audio path from mic into the modular and back to the PA over balanced XLR. The internal click in THE OUT holds tempo without a hitch.",
      },
    },
  ],
  LUX: [
    DHOGH_POST,
    SYNTHETIC_POST,
    {
      id: "lux-1",
      date: "2026-11-12",
      title: {
        cs: "Propojení Patchbay a DMX_out jedním kabelem",
        en: "Linking Patchbay and DMX_out with a single cable",
      },
      body: {
        cs: "Světla na rampě reagují na LFO a CUE_FRAMES z moduláru okamžitě. Žádné zamotané svazky kabelů, jen jeden stíněný RJ45 z Patchbay do hlavního DMX_out.",
        en: "Truss fixtures react to LFOs and CUE_FRAMES from the modular immediately. No tangled cable looms—just one shielded RJ45 from Patchbay into the main DMX_out.",
      },
    },
  ],
  VID: [
    DHOGH_POST,
    SYNTHETIC_POST,
    {
      id: "vid-1",
      date: "2026-11-14",
      title: {
        cs: "Fialová maska pro video divizi",
        en: "Cyber-purple solder mask for the video division",
      },
      body: {
        cs: "Ladíme vizuální identitu pro RASTER a první CRT glitch krabičky. Kyber-fialová PCB s bílým potiskem vypadá pod UV světlem na pódiu skvěle.",
        en: "Dialing in the visual identity for RASTER and our first CRT glitch boxes. Cyber-purple PCB with white silkscreen pops under stage UV.",
      },
    },
  ],
};

const TABS = ["eurorack", "desktop", "pedals", "blog", "merch"];

function getDivisionTabs(divKey) {
  const div = DIVISIONS[divKey];
  if (!div) return TABS;
  return TABS.filter((tab) => tab !== "pedals" || Boolean(div.pedals));
}

function getDefaultDivisionTab(divKey) {
  const div = DIVISIONS[divKey];
  if (!div) return "eurorack";
  if (div.eurorack && div.eurorack.length) return "eurorack";
  if (div.desktop && div.desktop.length) return "desktop";
  return "eurorack";
}

let currentLang = getLang();
let currentSection = "landing"; // "landing" | "decoy" | "teatro"
let currentDivision = null;
let currentTab = "eurorack";
let currentSecIdx = 0;
let currentModalId = null;

/* ---------------------------------------------------- blog storage */
function getPosts(divKey) {
  const saved = localStorage.getItem(`decoy_blog_v3_${divKey}`);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      /* fall through */
    }
  }
  return DEFAULT_POSTS[divKey] || [];
}

function savePost(divKey, title, body) {
  const posts = getPosts(divKey);
  posts.unshift({ id: `${divKey}-${Date.now()}`, date: new Date().toISOString().slice(0, 10), title, body });
  localStorage.setItem(`decoy_blog_v3_${divKey}`, JSON.stringify(posts));
}

function postText(val) {
  return typeof val === "string" ? val : val[currentLang] || val.cs;
}

/* ---------------------------------------------------- i18n */
function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  document.title = dict.page_title_home;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  const html =
    currentLang === "cs"
      ? '<span class="lang-active">CZ</span> / <span>EN</span>'
      : '<span>CZ</span> / <span class="lang-active">EN</span>';
  ["langToggleLanding", "langToggleDiv", "langToggleTeatro"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
}

/* ---------------------------------------------------- visual FX (bez zvuku) */
function triggerOverlayFx(className) {
  const overlay = document.getElementById("fxOverlay");
  if (!overlay) return;
  overlay.className = "fx-overlay";
  void overlay.offsetWidth;
  overlay.classList.add(className);
}

function triggerDivisionFx(divKey) {
  triggerOverlayFx({ LUX: "fx-lux", AUD: "fx-aud", VID: "fx-vid" }[divKey]);
}

/* ---------------------------------------------------- tab renderers */
function renderProductCollection(div, dict, { key, soonKey, secNum, heading }) {
  const list = div[key] || [];
  const soonItems = (soonKey && div[soonKey]) || [];
  if (currentSecIdx >= list.length) currentSecIdx = 0;
  const activeId = list[currentSecIdx];
  const activeProd = activeId ? PRODUCTS[activeId] : null;
  const divParam = currentDivision ? `&div=${currentDivision}` : "";

  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${secNum}</div>
            <h2>${heading}</h2>
          </div>
          ${
            activeProd
              ? `<div class="sec-pager" aria-label="${dict.browse_section}">
                  <button type="button" class="pager-arrow" data-sec-step="-1" title="${dict.prev_prod}">←</button>
                  <span class="pager-status">
                    <strong>${currentSecIdx + 1} / ${list.length}</strong> — ${activeProd.name}
                  </span>
                  <button type="button" class="pager-arrow" data-sec-step="1" title="${dict.next_prod}">→</button>
                  <button type="button" class="btn-outline" data-open-mod="${activeId}">${dict.specs_btn}</button>
                  <a class="btn-outline btn-solid" href="product.html?id=${activeId}${divParam}">${dict.detail_btn}</a>
                </div>`
              : `<span class="sec-num">${dict.soon_badge}</span>`
          }
        </div>
        ${
          list.length
            ? `<div class="cards-grid">
                ${list
                  .map((id, idx) => {
                    const p = PRODUCTS[id];
                    const isSelected = idx === currentSecIdx;
                    const imgSrc = (p.imageByDiv && p.imageByDiv[currentDivision]) || p.image;
                    return `
                      <article class="hud-card hud-card-click ${isSelected ? "hud-card-selected" : ""}" id="card-${id}" data-open-mod="${id}" tabindex="0">
                        <div class="hud-card-head">
                          <span>${p.serial}</span>
                          <span>${idx + 1}/${list.length} · ${p.hp}</span>
                        </div>
                        <div class="hud-card-media">
                          <img src="${imgSrc}" alt="${p.name}" loading="lazy" />
                        </div>
                        <div class="hud-card-body">
                          <h3>${p.name}</h3>
                          <p>${p.short[currentLang]}</p>
                          <div class="card-actions">
                            <button type="button" class="btn-outline" data-open-mod="${id}">${dict.specs_btn}</button>
                            <a class="btn-outline btn-solid" href="product.html?id=${id}${divParam}">${dict.detail_btn}</a>
                          </div>
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>`
            : ""
        }
        ${
          soonItems.length
            ? `<div class="cards-grid-2" style="${list.length ? "margin-top:24px;" : ""}">
                ${soonItems
                  .map(
                    (item) => `
                  <article class="hud-card">
                    <div class="hud-card-head">
                      <span>${item.tag[currentLang]}</span>
                      <span>${item.hp} · ${dict.soon_badge}</span>
                    </div>
                    <div class="hud-card-body">
                      <h3>${item.name}</h3>
                      <p>${item.desc[currentLang]}</p>
                    </div>
                  </article>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderEurorack(div, dict) {
  return renderProductCollection(div, dict, {
    key: "eurorack",
    soonKey: "eurorackSoon",
    secNum: dict.sec_num_modular,
    heading: "EURORACK",
  });
}

function renderDesktop(div, dict) {
  return renderProductCollection(div, dict, {
    key: "desktop",
    soonKey: "desktopSoon",
    secNum: dict.sec_num_desktop,
    heading: dict.sec_desktop,
  });
}

function renderPedals(div, dict) {
  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_pedals}</div>
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
                <span>${dict.pcb_faceplate}</span>
              </div>
              <div class="hud-card-body">
                <h3>${p.name}</h3>
                <p>${p.desc[currentLang]}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderBlog(divKey, dict) {
  const posts = getPosts(divKey);
  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_blog}</div>
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

        <div class="blog-list">
          ${posts
            .map(
              (post) => `
            <article class="blog-post">
              <div class="blog-post-meta">
                <span>${divKey} // LOG</span>
                <span>${post.date}</span>
              </div>
              <h3>${postText(post.title)}</h3>
              <p>${postText(post.body)}</p>
              ${
                post.links
                  ? `<div class="link-row">${post.links
                      .map((l) => `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`)
                      .join("")}</div>`
                  : ""
              }
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTeatroPage(dict) {
  const td = TEATRO_DATA;
  return `
    <section class="div-hero teatro-hero">
      <div class="container">
        <div class="div-hero-code">${td.code}</div>
        <h1>${td.title}</h1>
        <p class="div-hero-lead">${td.lead[currentLang]}</p>
        <div class="link-row" style="margin-top:20px;">
          <a class="btn-outline" href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a>
          <a class="btn-outline" href="https://dhogh.com/" target="_blank" rel="noopener noreferrer">DHOGH ↗</a>
          <a class="btn-outline" href="https://www.instagram.com/syntheticsexdrive/" target="_blank" rel="noopener noreferrer">SYNTHETIC SEX DRIVE ↗</a>
        </div>
      </div>
    </section>

    <section id="ts-design" class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">01 // STAGE · LIGHT · SOUND</div>
            <h2>${dict.ts_tab_design}</h2>
          </div>
        </div>
        <div class="cards-grid">
          ${td.pillars
            .map(
              (p) => `
            <article class="hud-card teatro-card">
              <div class="hud-card-head">
                <span>${p.num}</span>
                <span>${p.tag[currentLang]}</span>
              </div>
              <div class="hud-card-body">
                <h3>${p.title[currentLang]}</h3>
                <p>${p.desc[currentLang]}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-rental" class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">02 // TECHNICAL RENTAL</div>
            <h2>${dict.ts_tab_rental}</h2>
          </div>
        </div>
        <div class="cards-grid-2">
          ${td.rental
            .map(
              (r) => `
            <article class="hud-card teatro-card">
              <div class="hud-card-head">
                <span>${r.code}</span>
                <span>${r.tag[currentLang]}</span>
              </div>
              <div class="hud-card-body">
                <h3>${r.name[currentLang]}</h3>
                <p>${r.desc[currentLang]}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-custom" class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">03 // CUSTOM LIGHTS &amp; HARDWARE</div>
            <h2>${dict.ts_tab_custom}</h2>
          </div>
        </div>
        <div class="cards-grid">
          ${td.custom
            .map(
              (c) => `
            <article class="hud-card teatro-card">
              <div class="hud-card-head">
                <span>${c.code}</span>
                <span>${c.tag[currentLang]}</span>
              </div>
              <div class="hud-card-body">
                <h3>${c.name[currentLang]}</h3>
                <p>${c.desc[currentLang]}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-events" class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">04 // EVENTS &amp; SPECIALISTS</div>
            <h2>${dict.ts_tab_events}</h2>
          </div>
        </div>
        <div class="cards-grid" style="margin-bottom:40px;">
          ${td.events
            .map(
              (ev) => `
            <article class="hud-card teatro-card">
              <div class="hud-card-head">
                <span>${ev.code}</span>
                <span>${TS}</span>
              </div>
              <div class="hud-card-body">
                <h3>${ev.name[currentLang]}</h3>
                <p>${ev.desc[currentLang]}</p>
                ${
                  ev.links
                    ? `<div class="link-row">${ev.links
                        .map((l) => `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`)
                        .join("")}</div>`
                    : ""
                }
              </div>
            </article>`
            )
            .join("")}
        </div>

        <div class="teatro-crew-banner">
          <div>
            <div class="sec-num">${dict.sec_num_crew}</div>
            <h2 style="margin-bottom:10px;">${dict.people}</h2>
            <p style="margin:0; color:var(--fg-muted); max-width:65ch;">${td.crewSummary[currentLang]}</p>
          </div>
          <div class="teatro-specs-tags">
            ${td.specialties.map((s) => `<span class="modal-chip">${s[currentLang]}</span>`).join("")}
          </div>
        </div>

        <div class="people-grid" style="margin-top:22px;">
          ${PEOPLE.map(
            (p) => `
            <article class="person-card">
              <div class="person-initials">${p.name
                .split(" ")
                .map((w) => w[0])
                .join("")}</div>
              <h3>${p.name}</h3>
              <p>${p.role[currentLang]}</p>
              ${p.url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.handle} ↗</a>` : ""}
            </article>`
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMerch(dict) {
  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_merch}</div>
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
            </article>`
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- division & teatro views */
function renderDivision(divKey, tabKey = currentTab, { fx = false } = {}) {
  const div = DIVISIONS[divKey];
  if (!div) return;
  const allowedTabs = getDivisionTabs(divKey);
  currentSection = "decoy";
  currentDivision = divKey;
  currentTab = tabKey && allowedTabs.includes(tabKey) ? tabKey : getDefaultDivisionTab(divKey);

  if (fx) triggerDivisionFx(divKey);

  document.getElementById("landingView").hidden = true;
  const teatroView = document.getElementById("teatroView");
  if (teatroView) teatroView.hidden = true;
  const divView = document.getElementById("divisionView");
  divView.hidden = false;
  divView.className = `division-view theme-${divKey}`;

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-switch-div") === divKey);
  });
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    const t = btn.getAttribute("data-tab");
    btn.hidden = !allowedTabs.includes(t);
    btn.classList.toggle("active", t === currentTab);
  });

  const siteFooter = document.getElementById("siteFooter");
  if (siteFooter) {
    siteFooter.innerHTML = renderModuleFooterHTML(divKey, div.serialLeft, div.serialRight);
  }

  const dict = I18N[currentLang];
  const body = {
    eurorack: () => renderEurorack(div, dict),
    desktop: () => renderDesktop(div, dict),
    pedals: () => renderPedals(div, dict),
    blog: () => renderBlog(divKey, dict),
    merch: () => renderMerch(dict),
  }[currentTab]();

  document.getElementById("divisionContent").innerHTML = `
    <section class="div-hero">
      <div class="container">
        <div class="div-hero-code">${div.code}</div>
        <h1>${div.title[currentLang]}</h1>
        <p class="div-hero-lead">${div.lead[currentLang]}</p>
      </div>
    </section>
    ${body}
  `;

  history.replaceState(null, "", `#${divKey}/${currentTab}`);
  window.scrollTo({ top: 0, behavior: "instant" });
  bindDivisionEvents();
}

function openTeatroView({ fx = false, anchorId = null } = {}) {
  currentSection = "teatro";
  currentDivision = null;
  if (fx) triggerOverlayFx("fx-mod");

  document.getElementById("landingView").hidden = true;
  document.getElementById("divisionView").hidden = true;
  const teatroView = document.getElementById("teatroView");
  if (!teatroView) return;
  teatroView.hidden = false;

  const dict = I18N[currentLang];
  document.getElementById("teatroContent").innerHTML = renderTeatroPage(dict);

  const teatroFooter = document.getElementById("teatroFooter");
  if (teatroFooter) {
    teatroFooter.innerHTML = renderModuleFooterHTML("LUX", "TEATRO\\\\\\SVJÖTLO", "STAGE · SOUND · LIGHT");
  }

  document.querySelectorAll("[data-teatro-jump]").forEach((btn) => {
    const target = btn.getAttribute("data-teatro-jump");
    btn.classList.toggle("active", anchorId ? target === anchorId : target === "ts-design");
  });

  history.replaceState(null, "", "#TEATRO");
  if (anchorId) {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function goHome() {
  currentSection = "landing";
  currentDivision = null;
  document.getElementById("divisionView").hidden = true;
  const teatroView = document.getElementById("teatroView");
  if (teatroView) teatroView.hidden = true;
  document.getElementById("landingView").hidden = false;
  history.replaceState(null, "", location.pathname);
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------------------------------------------------- product modal */
function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  currentModalId = id;
  const dict = I18N[currentLang];
  const nav = getSectionProductNav(id, currentDivision);
  triggerOverlayFx("fx-mod");

  const modal = document.getElementById("itemModal");
  modal.className = `modal theme-${currentDivision || p.division} mod-${id}`;
  const keySpecs = p.specs.filter((s) => s.key);
  const imgSrc = (p.imageByDiv && p.imageByDiv[currentDivision]) || p.image;
  const divParam = currentDivision ? `&div=${currentDivision}` : "";

  const prevArrow = document.getElementById("modalPrevArrow");
  const nextArrow = document.getElementById("modalNextArrow");
  const prevLabel = document.getElementById("modalPrevLabel");
  const nextLabel = document.getElementById("modalNextLabel");
  if (prevArrow && nextArrow && nav) {
    prevLabel.textContent = nav.prev.name;
    nextLabel.textContent = nav.next.name;
    prevArrow.onclick = (e) => {
      e.stopPropagation();
      openProductModal(nav.prevId);
    };
    nextArrow.onclick = (e) => {
      e.stopPropagation();
      openProductModal(nav.nextId);
    };
  }

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        <img src="${imgSrc}" alt="${p.name}" />
      </div>
      <div>
        <div class="modal-serial">${p.serial} · ${nav.index + 1}/${nav.total}</div>
        <h2 style="margin-bottom:6px;">${p.name}</h2>
        <div class="modal-tagline">${p.tagline[currentLang]}</div>
        <div class="modal-meta-row">
          <span class="modal-chip">${currentDivision || p.division}</span>
          <span class="modal-chip">${p.hp}</span>
        </div>
        <div class="modal-spec-box">
          <div class="modal-spec-title">${dict.key_specs}</div>
          <table class="spec-table">
            <tbody>
              ${keySpecs
                .map(
                  (s) => `
                <tr>
                  <th>${s.p[currentLang]}</th>
                  <td>${specVal(s.v, currentLang)}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <a class="btn-detail" href="product.html?id=${id}${divParam}">${dict.detail_btn}</a>
      </div>
    </div>
  `;

  modal.hidden = false;
}

function closeModal() {
  currentModalId = null;
  document.getElementById("itemModal").hidden = true;
}

/* ---------------------------------------------------- events */
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
    renderDivision(currentDivision, "blog");
  });

  document.querySelectorAll("[data-sec-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!currentDivision) return;
      const list = DIVISIONS[currentDivision][currentTab];
      if (!Array.isArray(list) || !list.length) return;
      const step = parseInt(btn.getAttribute("data-sec-step"), 10) || 1;
      currentSecIdx = (currentSecIdx + step + list.length) % list.length;
      renderDivision(currentDivision, currentTab);
    });
  });

  document.querySelectorAll("[data-open-mod]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // DETAIL link navigates normally
      e.stopPropagation();
      const id = el.getAttribute("data-open-mod");
      if (currentDivision) {
        const list = DIVISIONS[currentDivision][currentTab];
        const idx = Array.isArray(list) ? list.indexOf(id) : -1;
        if (idx >= 0) currentSecIdx = idx;
      }
      openProductModal(id);
    });
  });
}

function routeFromHash() {
  const [divKey, tab] = location.hash.replace("#", "").split("/");
  if (divKey === "TEATRO" || tab === "teatro") {
    openTeatroView();
    return;
  }
  if (DIVISIONS[divKey]) renderDivision(divKey, tab || null);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();

  document.querySelectorAll("[data-open-division]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSecIdx = 0;
      renderDivision(btn.getAttribute("data-open-division"), null, { fx: true });
    });
  });

  document.getElementById("openTeatroLanding")?.addEventListener("click", () => openTeatroView({ fx: true }));
  document.getElementById("openTeatroFromDiv")?.addEventListener("click", () => openTeatroView({ fx: true }));
  document.getElementById("backFromTeatro")?.addEventListener("click", goHome);

  document.querySelectorAll("[data-teatro-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-teatro-jump");
      document.querySelectorAll("[data-teatro-jump]").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSecIdx = 0;
      const targetDiv = btn.getAttribute("data-switch-div");
      const targetTab = (currentTab === "eurorack" || currentTab === "desktop") ? null : currentTab;
      renderDivision(targetDiv, targetTab, { fx: true });
    });
  });

  document.getElementById("divisionView")?.addEventListener("click", (e) => {
    const tabBtn = e.target.closest("[data-tab]");
    if (!tabBtn || !currentDivision) return;
    currentSecIdx = 0;
    renderDivision(currentDivision, tabBtn.getAttribute("data-tab"));
  });

  document.getElementById("backToSplit")?.addEventListener("click", goHome);

  const toggleLang = () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    applyTranslations();
    if (currentSection === "teatro") {
      openTeatroView();
    } else if (currentDivision) {
      renderDivision(currentDivision, currentTab);
    }
  };
  document.getElementById("langToggleLanding")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleDiv")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleTeatro")?.addEventListener("click", toggleLang);

  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if (currentModalId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const nav = getSectionProductNav(currentModalId, currentDivision);
      if (nav) {
        openProductModal(e.key === "ArrowLeft" ? nav.prevId : nav.nextId);
      }
    }
  });

  routeFromHash();
});
