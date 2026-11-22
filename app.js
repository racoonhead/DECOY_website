/* DECØY DEVICES — index.html (úvodní 3-barevný split + divize AUD/LUX/VID + katalog + TEATRO\\\SVJÖTLO) */

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
    pedals: ["fuzz-01", "tape-glitch"],
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
  },
};

const TABS = ["eurorack", "desktop", "pedals", "diy", "catalog", "blog", "merch"];

const DIV_TO_CAT = { AUD: "audio", LUX: "light", VID: "video" };

let currentLang = getLang();
let currentSection = "landing"; // "landing" | "decoy" | "teatro"
let currentDivision = null;
let currentTab = "eurorack";
let currentSecIdx = 0;
let currentModalId = null;

let hudFilter = {
  q: "",
  category: "all",
  subcategory: "all",
  originalOnly: false,
  sort: "featured",
};

function textVal(val) {
  if (!val) return "";
  return typeof val === "string" ? val : val[currentLang] || val.cs || "";
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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
  return DEFAULT_NEWS_POSTS.filter((p) => p.division === divKey || !p.division);
}

function savePost(divKey, title, body) {
  const posts = [...getPosts(divKey)];
  posts.unshift({ id: `${divKey}-${Date.now()}`, division: divKey, date: new Date().toISOString().slice(0, 10), title, body });
  localStorage.setItem(`decoy_blog_v3_${divKey}`, JSON.stringify(posts));
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
  updateCartCountUI();
}

function updateCartCountUI() {
  const count = String(DECOY_STORE.getCount());
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });
}

/* ---------------------------------------------------- visual FX (zachované původní přechody) */
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

/* ---------------------------------------------------- Native HUD Card (původní .hud-card + integrované obchodní údaje) */
function renderHudProductCard(item, { idx = 0, total = 1, isSelected = false, showSelectState = false } = {}) {
  const dict = I18N[currentLang];
  const imgSrc = (item.imageByDiv && item.imageByDiv[currentDivision]) || item.image;
  const divParam = currentDivision && item.kind === "hardware" ? `&div=${currentDivision}` : "";
  const name = itemDisplayName(item, currentLang);
  const priceText = DECOY_STORE.formatPrice(item, currentLang);
  const availText = DECOY_STORE.availabilityLabel(item, currentLang);
  const inCart = DECOY_STORE.getItems().some((e) => e.id === item.id);

  let mediaHtml = "";
  if (imgSrc) {
    mediaHtml = `<img src="${imgSrc}" alt="${escapeHtml(name)}" loading="lazy" />`;
  } else if (item.svg) {
    mediaHtml = `<div class="merch-art-inline">${item.svg}</div>`;
  } else {
    mediaHtml = `<div class="hud-card-wireframe"><span>${escapeHtml(item.serial)}</span><small>${escapeHtml(textVal(item.status))}</small></div>`;
  }

  return `
    <article class="hud-card hud-card-click ${showSelectState && isSelected ? "hud-card-selected" : ""}" id="card-${item.id}" data-open-mod="${item.id}" tabindex="0">
      <div class="hud-card-head">
        <span>${escapeHtml(item.serial)}</span>
        <span>${item.isOriginal ? dict.original_badge : escapeHtml(item.brand)} · ${idx + 1}/${total} · ${escapeHtml(item.hp)}</span>
      </div>
      <div class="hud-card-media">
        ${mediaHtml}
      </div>
      <div class="hud-card-body">
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(textVal(item.short))}</p>
        <div class="hud-card-commerce">
          <span>${escapeHtml(item.brand)} · ${escapeHtml(availText)}</span>
          <strong class="${item.price === null ? "is-tbd" : ""}">${escapeHtml(priceText)}</strong>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-outline" data-open-mod="${item.id}">${dict.specs_btn}</button>
          <button type="button" class="btn-outline ${inCart ? "is-added" : ""}" data-add-cart="${item.id}">${inCart ? dict.cart_added : dict.add_list_btn}</button>
          <a class="btn-outline btn-solid" href="product.html?id=${item.id}${divParam}">${dict.detail_btn}</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------------------------------------------------- HUD Filter Bar (native DECØY strip) */
function renderHudFilterStrip(subcategories, dict, { showCatSelect = false, showSearch = true } = {}) {
  return `
    <div class="hud-filter-strip">
      ${
        subcategories && subcategories.length
          ? `<div class="hud-subcat-row" role="group" aria-label="Podkategorie">
              <button type="button" class="view-pill ${hudFilter.subcategory === "all" ? "active" : ""}" data-hud-subcat="all">${dict.all_subcategories}</button>
              ${subcategories
                .map(
                  (sc) => `
                <button type="button" class="view-pill ${hudFilter.subcategory === sc.id ? "active" : ""}" data-hud-subcat="${sc.id}">
                  ${escapeHtml(textVal(sc.name))}
                </button>`
                )
                .join("")}
            </div>`
          : ""
      }
      <div class="hud-controls-row">
        ${showSearch ? `<input id="hudSearchInput" class="hud-input" type="search" value="${escapeHtml(hudFilter.q)}" placeholder="${dict.search_ph}" />` : ""}
        ${
          showCatSelect
            ? `<select id="hudCatSelect" class="hud-select" aria-label="${dict.all_categories}">
                <option value="all">${dict.all_categories}</option>
                ${CATEGORIES.map((c) => `<option value="${c.id}" ${hudFilter.category === c.id ? "selected" : ""}>${escapeHtml(textVal(c.name))}</option>`).join("")}
              </select>`
            : ""
        }
        <label class="hud-check">
          <input id="hudOrigCheck" type="checkbox" ${hudFilter.originalOnly ? "checked" : ""} />
          <span>${dict.original_badge}</span>
        </label>
        <select id="hudSortSelect" class="hud-select" aria-label="Řazení">
          <option value="featured" ${hudFilter.sort === "featured" ? "selected" : ""}>${dict.sort_featured}</option>
          <option value="newest" ${hudFilter.sort === "newest" ? "selected" : ""}>${dict.sort_newest}</option>
          <option value="name" ${hudFilter.sort === "name" ? "selected" : ""}>${dict.sort_name}</option>
          <option value="price_asc" ${hudFilter.sort === "price_asc" ? "selected" : ""}>${dict.sort_price_asc}</option>
        </select>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------- tab renderers */
function renderProductCollection(div, dict, { key, secNum, heading }) {
  const baseIds = div[key] || [];
  const catObj = CATEGORIES.find((c) => c.id === DIV_TO_CAT[currentDivision]);
  const relevantSubcats = key === "eurorack" && catObj ? catObj.subcategories : [];

  let items = baseIds.map((id) => getCatalogItem(id)).filter(Boolean);
  if (hudFilter.subcategory !== "all" || hudFilter.q.trim() || hudFilter.originalOnly || hudFilter.sort !== "featured") {
    const filteredSet = new Set(
      DECOY_STORE.queryProducts({
        q: hudFilter.q,
        subcategory: hudFilter.subcategory,
        originalOnly: hudFilter.originalOnly,
        sort: hudFilter.sort,
        lang: currentLang,
      }).map((i) => i.id)
    );
    items = items.filter((i) => filteredSet.has(i.id));
    if (hudFilter.sort !== "featured") {
      items = DECOY_STORE.queryProducts({
        q: hudFilter.q,
        subcategory: hudFilter.subcategory,
        originalOnly: hudFilter.originalOnly,
        sort: hudFilter.sort,
        lang: currentLang,
      }).filter((i) => baseIds.includes(i.id));
    }
  }

  if (currentSecIdx >= items.length) currentSecIdx = 0;
  const activeProd = items[currentSecIdx] || null;
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
                    <strong>${currentSecIdx + 1} / ${items.length}</strong> — ${escapeHtml(itemDisplayName(activeProd, currentLang))}
                  </span>
                  <button type="button" class="pager-arrow" data-sec-step="1" title="${dict.next_prod}">→</button>
                  <button type="button" class="btn-outline" data-open-mod="${activeProd.id}">${dict.specs_btn}</button>
                  <a class="btn-outline btn-solid" href="product.html?id=${activeProd.id}${divParam}">${dict.detail_btn}</a>
                </div>`
              : `<span class="sec-num">${dict.soon_badge}</span>`
          }
        </div>
        ${baseIds.length ? renderHudFilterStrip(relevantSubcats, dict) : ""}
        ${
          items.length
            ? `<div class="cards-grid">
                ${items.map((item, idx) => renderHudProductCard(item, { idx, total: items.length, isSelected: idx === currentSecIdx, showSelectState: true })).join("")}
              </div>`
            : `<div class="hud-empty-box">
                <p>${baseIds.length ? dict.no_results : dict.soon_badge}</p>
                ${baseIds.length ? `<button type="button" class="btn-outline" id="hudResetBtn">${dict.reset_filters}</button>` : ""}
              </div>`
        }
      </div>
    </section>
  `;
}

function renderEurorack(div, dict) {
  return renderProductCollection(div, dict, {
    key: "eurorack",
    secNum: dict.sec_num_modular,
    heading: "EURORACK",
  });
}

function renderDesktop(div, dict) {
  return renderProductCollection(div, dict, {
    key: "desktop",
    secNum: dict.sec_num_desktop,
    heading: dict.sec_desktop,
  });
}

function renderPedals(div, dict) {
  const items = (div.pedals || []).map((id) => getCatalogItem(id)).filter(Boolean);
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
          ${items.map((item, idx) => renderHudProductCard(item, { idx, total: items.length })).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderDiy(dict) {
  const catObj = CATEGORIES.find((c) => c.id === "electronics");
  const items = DECOY_STORE.queryProducts({
    category: "electronics",
    subcategory: hudFilter.subcategory,
    q: hudFilter.q,
    originalOnly: hudFilter.originalOnly,
    sort: hudFilter.sort,
    lang: currentLang,
  });

  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_diy}</div>
            <h2>${dict.sec_diy}</h2>
          </div>
          <span class="sec-num">${items.length} ${currentLang === "cs" ? "POLOŽEK" : "ITEMS"}</span>
        </div>
        ${renderHudFilterStrip(catObj ? catObj.subcategories : [], dict)}
        ${
          items.length
            ? `<div class="cards-grid">
                ${items.map((item, idx) => renderHudProductCard(item, { idx, total: items.length })).join("")}
              </div>`
            : `<div class="hud-empty-box">
                <p>${dict.empty_category_msg}</p>
                <button type="button" class="btn-outline" id="hudResetBtn">${dict.reset_filters}</button>
              </div>`
        }
      </div>
    </section>
  `;
}

function renderCatalogAndBrands(dict) {
  const activeCat = CATEGORIES.find((c) => c.id === hudFilter.category);
  const items = DECOY_STORE.queryProducts({
    category: hudFilter.category,
    subcategory: hudFilter.subcategory,
    q: hudFilter.q,
    originalOnly: hudFilter.originalOnly,
    sort: hudFilter.sort,
    lang: currentLang,
  });

  return `
    <section class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_catalog}</div>
            <h2>${dict.sec_catalog}</h2>
          </div>
          <span class="sec-num">${items.length} / ${CATALOG_ITEMS.length}</span>
        </div>

        <!-- Výrobci / Zastoupené značky -->
        <div class="cards-grid-2" style="margin-bottom:26px;">
          ${BRANDS.map(
            (b) => `
            <article class="hud-card">
              <div class="hud-card-head">
                <span>${dict.original_badge}</span>
                <span>${escapeHtml(textVal(b.origin))}</span>
              </div>
              <div class="hud-card-body">
                <h3>${escapeHtml(b.name)}</h3>
                <p>${escapeHtml(textVal(b.focus))}</p>
              </div>
            </article>`
          ).join("")}
          <article class="hud-card">
            <div class="hud-card-head">
              <span>${dict.partner_badge}</span>
              <span>SLOT // READY</span>
            </div>
            <div class="hud-card-body">
              <h3>${currentLang === "cs" ? "DALŠÍ VÝROBCI V PŘÍPRAVĚ" : "PARTNER BRANDS UPCOMING"}</h3>
              <p>${currentLang === "cs"
                ? "Katalogové rozhraní je připraveno pro přidání externích výrobců bez zásahu do architektury."
                : "Catalog interface ready for onboarding verified external manufacturers."}</p>
            </div>
          </article>
        </div>

        ${renderHudFilterStrip(activeCat ? activeCat.subcategories : [], dict, { showCatSelect: true })}
        ${
          items.length
            ? `<div class="cards-grid">
                ${items.map((item, idx) => renderHudProductCard(item, { idx, total: items.length })).join("")}
              </div>`
            : `<div class="hud-empty-box">
                <p>${dict.no_results}</p>
                <button type="button" class="btn-outline" id="hudResetBtn">${dict.reset_filters}</button>
              </div>`
        }
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
              <h3>${textVal(post.title)}</h3>
              <p>${textVal(post.body)}</p>
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

    <section id="ts-inquiry" class="div-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">05 // SERVICE INQUIRY (SEPARATE FROM STORE)</div>
            <h2>${dict.service_inquiry_btn}</h2>
          </div>
        </div>
        <form id="teatroBriefForm" class="blog-editor" style="border-color:var(--pantone-orange);">
          <div style="display:flex; flex-wrap:wrap; gap:14px;">
            <label class="hud-check"><input type="checkbox" name="scope" value="Stage Design" checked /><span>Stage Design</span></label>
            <label class="hud-check"><input type="checkbox" name="scope" value="Light Design" /><span>Light Design</span></label>
            <label class="hud-check"><input type="checkbox" name="scope" value="Sound Design" /><span>Sound Design</span></label>
            <label class="hud-check"><input type="checkbox" name="scope" value="Rental" /><span>${dict.ts_tab_rental}</span></label>
            <label class="hud-check"><input type="checkbox" name="scope" value="Custom Production" /><span>${dict.ts_tab_custom}</span></label>
          </div>
          <input id="briefEventInput" class="blog-input" type="text" placeholder="${currentLang === "cs" ? "Název akce / termín / lokalita..." : "Event name / date / venue..."}" />
          <textarea id="briefNotesInput" class="blog-textarea" placeholder="${currentLang === "cs" ? "Popište požadavky na techniku, scénu, světla nebo zakázkovou výrobu..." : "Describe stage, lighting, sound, rental, or custom build requirements..."}"></textarea>
          <div class="link-row">
            <button type="submit" class="btn-outline">${dict.cart_copy}</button>
            <a class="btn-outline" href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a>
          </div>
          <div id="briefFeedback" style="color:var(--pantone-orange); font-size:0.82rem;" aria-live="polite"></div>
        </form>
      </div>
    </section>
  `;
}

function renderMerch(dict) {
  const items = MERCH_ITEMS.map((m) => getCatalogItem(m.id)).filter(Boolean);
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
          ${items.map((item, idx) => renderHudProductCard(item, { idx, total: items.length })).join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- division & teatro views */
function renderDivision(divKey, tabKey = currentTab, { fx = false, preserveScroll = false } = {}) {
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
    diy: () => renderDiy(dict),
    catalog: () => renderCatalogAndBrands(dict),
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
  if (!preserveScroll) window.scrollTo({ top: 0, behavior: "instant" });
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

  document.getElementById("teatroBriefForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const scopes = Array.from(e.target.querySelectorAll('input[name="scope"]:checked')).map((i) => i.value);
    const ev = document.getElementById("briefEventInput")?.value.trim() || "—";
    const notes = document.getElementById("briefNotesInput")?.value.trim() || "—";
    navigator.clipboard?.writeText(`TEATRO\\\\\\SVJÖTLO BRIEF\nScope: ${scopes.join(", ") || "—"}\nEvent: ${ev}\nNotes: ${notes}`).catch(() => {});
    const fb = document.getElementById("briefFeedback");
    if (fb) fb.textContent = `${I18N[currentLang].cart_copied}: ${scopes.join(", ")}`;
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
  const item = getCatalogItem(id);
  if (!item) return;
  currentModalId = id;
  const dict = I18N[currentLang];
  const activeDiv = currentDivision || item.division || "AUD";
  const nav = PRODUCTS[id] ? getSectionProductNav(id, activeDiv) : null;
  triggerOverlayFx("fx-mod");

  const modal = document.getElementById("itemModal");
  modal.className = `modal theme-${activeDiv} mod-${id}`;
  const keySpecs = (item.specs || []).filter((s) => s.key);
  const imgSrc = (item.imageByDiv && item.imageByDiv[activeDiv]) || item.image;
  const divParam = item.kind === "hardware" ? `&div=${activeDiv}` : "";
  const inCart = DECOY_STORE.getItems().some((e) => e.id === item.id);

  const prevArrow = document.getElementById("modalPrevArrow");
  const nextArrow = document.getElementById("modalNextArrow");
  const prevLabel = document.getElementById("modalPrevLabel");
  const nextLabel = document.getElementById("modalNextLabel");
  if (prevArrow && nextArrow) {
    if (nav) {
      prevArrow.hidden = false;
      nextArrow.hidden = false;
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
    } else {
      prevArrow.hidden = true;
      nextArrow.hidden = true;
    }
  }

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        ${imgSrc ? `<img src="${imgSrc}" alt="${escapeHtml(itemDisplayName(item, currentLang))}" />` : item.svg ? item.svg : `<div class="hud-card-wireframe"><span>${escapeHtml(item.serial)}</span></div>`}
      </div>
      <div>
        <div class="modal-serial">${escapeHtml(item.serial)}${nav ? ` · ${nav.index + 1}/${nav.total}` : ""}</div>
        <h2 style="margin-bottom:6px;">${escapeHtml(itemDisplayName(item, currentLang))}</h2>
        <div class="modal-tagline">${escapeHtml(textVal(item.tagline))}</div>
        <div class="modal-meta-row">
          <span class="modal-chip">${escapeHtml(item.brand)}</span>
          <span class="modal-chip">${escapeHtml(item.hp)}</span>
          <span class="modal-chip">${escapeHtml(DECOY_STORE.formatPrice(item, currentLang))}</span>
          <span class="modal-chip">${escapeHtml(DECOY_STORE.availabilityLabel(item, currentLang))}</span>
        </div>
        ${
          keySpecs.length
            ? `<div class="modal-spec-box">
                <div class="modal-spec-title">${dict.key_specs}</div>
                <table class="spec-table">
                  <tbody>
                    ${keySpecs
                      .map(
                        (s) => `
                      <tr>
                        <th>${escapeHtml(s.p[currentLang])}</th>
                        <td>${escapeHtml(specVal(s.v, currentLang))}</td>
                      </tr>`
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>`
            : `<p style="color:var(--silver-hasl);">${escapeHtml(textVal(item.short))}</p>`
        }
        <div class="link-row" style="margin-top:18px;">
          <a class="btn-detail" style="margin-top:0;" href="product.html?id=${id}${divParam}">${dict.detail_btn}</a>
          <button type="button" class="btn-outline" data-add-cart="${item.id}">${inCart ? dict.cart_added : dict.add_list_btn}</button>
        </div>
      </div>
    </div>
  `;

  modal.hidden = false;
}

function closeModal() {
  currentModalId = null;
  document.getElementById("itemModal").hidden = true;
}

/* ---------------------------------------------------- Cart Drawer */
function renderCartDrawer() {
  const body = document.getElementById("cartDrawerBody");
  if (!body) return;
  body.innerHTML = renderCartDrawerHTML(currentLang, "#AUD/catalog", "data-close-cart-nav");
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawer").hidden = false;
  document.getElementById("cartToggleDiv")?.setAttribute("aria-expanded", "true");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").hidden = true;
  document.getElementById("cartToggleDiv")?.setAttribute("aria-expanded", "false");
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
      renderDivision(currentDivision, currentTab, { preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-open-mod]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest("[data-add-cart]")) return;
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

  document.querySelectorAll("[data-hud-subcat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      hudFilter.subcategory = btn.getAttribute("data-hud-subcat");
      currentSecIdx = 0;
      renderDivision(currentDivision, currentTab, { preserveScroll: true });
    });
  });

  const hudSearch = document.getElementById("hudSearchInput");
  if (hudSearch) {
    hudSearch.addEventListener("input", (e) => {
      hudFilter.q = e.target.value;
      currentSecIdx = 0;
      renderDivision(currentDivision, currentTab, { preserveScroll: true });
      const refocused = document.getElementById("hudSearchInput");
      if (refocused) {
        refocused.focus();
        refocused.setSelectionRange(refocused.value.length, refocused.value.length);
      }
    });
  }

  document.getElementById("hudCatSelect")?.addEventListener("change", (e) => {
    hudFilter.category = e.target.value;
    hudFilter.subcategory = "all";
    renderDivision(currentDivision, currentTab, { preserveScroll: true });
  });

  document.getElementById("hudOrigCheck")?.addEventListener("change", (e) => {
    hudFilter.originalOnly = e.target.checked;
    renderDivision(currentDivision, currentTab, { preserveScroll: true });
  });

  document.getElementById("hudSortSelect")?.addEventListener("change", (e) => {
    hudFilter.sort = e.target.value;
    renderDivision(currentDivision, currentTab, { preserveScroll: true });
  });

  document.getElementById("hudResetBtn")?.addEventListener("click", () => {
    hudFilter = { q: "", category: "all", subcategory: "all", originalOnly: false, sort: "featured" };
    renderDivision(currentDivision, currentTab, { preserveScroll: true });
  });
}

function routeFromHash() {
  const [divKey, tab] = location.hash.replace("#", "").split("/");
  if (divKey === "TEATRO" || divKey === "teatro" || tab === "teatro") {
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
      hudFilter = { q: "", category: "all", subcategory: "all", originalOnly: false, sort: "featured" };
      renderDivision(btn.getAttribute("data-open-division"), null, { fx: true });
    });
  });

  document.getElementById("openTeatroLanding")?.addEventListener("click", () => openTeatroView({ fx: true }));
  document.getElementById("openTeatroFromDiv")?.addEventListener("click", () => openTeatroView({ fx: true }));
  document.getElementById("backFromTeatro")?.addEventListener("click", goHome);

  const subNavBtn = document.getElementById("mobileSubNavBtn");
  const divSubNav = document.getElementById("divSubNav");
  subNavBtn?.addEventListener("click", () => {
    const open = divSubNav.classList.toggle("is-open");
    subNavBtn.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("[data-teatro-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-teatro-jump");
      document.querySelectorAll("[data-teatro-jump]").forEach((b) => b.classList.toggle("active", b === btn));
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSecIdx = 0;
      hudFilter.subcategory = "all";
      const targetDiv = btn.getAttribute("data-switch-div");
      const targetTab = currentTab === "eurorack" || currentTab === "desktop" ? null : currentTab;
      renderDivision(targetDiv, targetTab, { fx: true });
    });
  });

  document.getElementById("divisionView")?.addEventListener("click", (e) => {
    const tabBtn = e.target.closest("[data-tab]");
    if (!tabBtn || !currentDivision) return;
    currentSecIdx = 0;
    hudFilter.subcategory = "all";
    divSubNav?.classList.remove("is-open");
    subNavBtn?.setAttribute("aria-expanded", "false");
    renderDivision(currentDivision, tabBtn.getAttribute("data-tab"));
  });

  document.getElementById("backToSplit")?.addEventListener("click", goHome);

  const toggleLang = () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    applyTranslations();
    if (currentSection === "teatro") openTeatroView();
    else if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true });
    if (currentModalId) openProductModal(currentModalId);
    if (!document.getElementById("cartDrawer").hidden) renderCartDrawer();
  };
  document.getElementById("langToggleLanding")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleDiv")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleTeatro")?.addEventListener("click", toggleLang);

  document.getElementById("cartToggleDiv")?.addEventListener("click", openCartDrawer);
  document.querySelectorAll("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCartDrawer));
  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));

  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-cart]");
    if (addBtn) {
      e.stopPropagation();
      const id = addBtn.getAttribute("data-add-cart");
      DECOY_STORE.addItem(id, 1);
      updateCartCountUI();
      if (currentModalId === id) openProductModal(id);
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true });
      return;
    }

    const incBtn = e.target.closest("[data-cart-inc]");
    if (incBtn) {
      DECOY_STORE.updateQty(incBtn.getAttribute("data-cart-inc"), 1);
      updateCartCountUI();
      renderCartDrawer();
      return;
    }
    const decBtn = e.target.closest("[data-cart-dec]");
    if (decBtn) {
      DECOY_STORE.updateQty(decBtn.getAttribute("data-cart-dec"), -1);
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true });
      return;
    }
    const rmBtn = e.target.closest("[data-cart-rm]");
    if (rmBtn) {
      DECOY_STORE.removeItem(rmBtn.getAttribute("data-cart-rm"));
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true });
      return;
    }
    if (e.target.id === "clearCartBtn") {
      DECOY_STORE.clear();
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true });
      return;
    }
    if (e.target.id === "copyCartBtn") {
      const summary = DECOY_STORE.getSummary();
      const lines = summary.entries.map(
        ({ product, qty }) => `- ${qty}× ${itemDisplayName(product, currentLang)} (${product.serial}) — ${DECOY_STORE.formatPrice(product, currentLang)}`
      );
      navigator.clipboard?.writeText(`DECØY ORDER / INQUIRY LIST\n${lines.join("\n")}`).catch(() => {});
      const fb = document.getElementById("cartCopyFeedback");
      if (fb) fb.textContent = I18N[currentLang].cart_copied;
      return;
    }
    if (e.target.closest("[data-close-cart-nav]")) {
      closeCartDrawer();
      renderDivision(currentDivision || "AUD", "catalog");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCartDrawer();
    }
    if (currentModalId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const nav = getSectionProductNav(currentModalId, currentDivision);
      if (nav) openProductModal(e.key === "ArrowLeft" ? nav.prevId : nav.nextId);
    }
  });

  routeFromHash();
});
