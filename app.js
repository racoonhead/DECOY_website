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

const DIV_TO_CAT = { AUD: "audio", LUX: "light", VID: "video" };


function getBrandFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search || "");
    const raw = (params.get("brand") || "").trim().toLowerCase();
    return raw === "teatro" ? "teatro" : "decoy";
  } catch {
    return "decoy";
  }
}

let currentLang = getLang();
let currentBrand = getBrandFromUrl(); // "decoy" | "teatro"
let currentSection = "landing"; // "landing" | "division"
let currentDivision = null;
let currentTab = "eurorack";
let currentSecIdx = 0;
let currentSectionItems = [];
let currentModalId = null;

if (typeof document !== "undefined") applyBrandProfileDOM(currentBrand);

function buildUrlWithBrand(brand = currentBrand, hashStr = "") {
  const pathPart = (window.location && window.location.pathname) || "index.html";
  const cleanHash = hashStr ? (hashStr.startsWith("#") ? hashStr : `#${hashStr}`) : "";
  return `${pathPart}?brand=${brand}${cleanHash}`;
}

function applyBrandProfileDOM(brand = currentBrand) {
  const normalized = brand && String(brand).toLowerCase() === "teatro" ? "teatro" : "decoy";
  currentBrand = normalized;
  document.body?.setAttribute("data-brand", normalized);
  document.getElementById("landingView")?.setAttribute("data-brand", normalized);
  document.getElementById("divisionView")?.setAttribute("data-brand", normalized);
}

function setActiveBrand(brand, { updateUrl = true, replaceHistory = false } = {}) {
  const normalized = brand && String(brand).toLowerCase() === "teatro" ? "teatro" : "decoy";
  applyBrandProfileDOM(normalized);
  if (updateUrl) {
    const targetUrl = buildUrlWithBrand(normalized, currentSection === "division" && currentDivision ? `${currentDivision}/${currentTab}` : "");
    if (replaceHistory) history.replaceState(null, "", targetUrl);
    else history.pushState(null, "", targetUrl);
  }
}

let hudFilter = {
  q: "",
  category: "all",
  subcategory: "all",
  availability: "all",
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
  ["langToggleLanding", "langToggleDiv"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
  updateCartCountUI();
}

function updateCartCountUI(pulse = false) {
  const count = String(DECOY_STORE.getCount());
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
    const pill = el.closest(".cart-count-pill") || el;
    if (pulse) {
      pill.classList.remove("cart-pulse");
      void pill.offsetWidth;
      pill.classList.add("cart-pulse");
    }
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
  const divParam = `${currentDivision && item.kind === "hardware" ? `&div=${currentDivision}` : ""}&brand=decoy`;
  const name = itemDisplayName(item, currentLang);
  const priceText = DECOY_STORE.formatPrice(item, currentLang);
  const availText = DECOY_STORE.availabilityLabel(item, currentLang);
  const inCart = DECOY_STORE.getItems().some((e) => e.id === item.id);
  const availClass = `avail-${item.availability || "tbd"}`;

  let mediaHtml = "";
  if (imgSrc) {
    mediaHtml = `<img src="${imgSrc}" alt="${escapeHtml(name)}" loading="lazy" />`;
  } else if (item.svg) {
    mediaHtml = `<div class="merch-art-inline">${item.svg}</div>`;
  } else {
    mediaHtml = `<div class="hud-card-wireframe"><span>${escapeHtml(item.serial)}</span><small>${escapeHtml(textVal(item.status))}</small></div>`;
  }

  return `
    <article class="hud-card hud-card-click ${showSelectState && isSelected ? "hud-card-selected" : ""}" id="card-${item.id}" data-open-mod="${item.id}" tabindex="0" role="article" aria-label="${escapeHtml(name)}">
      <div class="hud-card-head">
        <span>${escapeHtml(item.serial)}</span>
        <span class="hud-card-head-right">
          <span class="${item.isOriginal ? "hud-badge-orig" : "hud-badge-partner"}">${item.isOriginal ? dict.original_badge : escapeHtml(item.brand)}</span>
          <span>${idx + 1}/${total} · ${escapeHtml(item.hp)}</span>
        </span>
      </div>
      <div class="hud-card-media">
        ${mediaHtml}
      </div>
      <div class="hud-card-body">
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(textVal(item.short))}</p>
        <div class="hud-card-commerce">
          <span class="hud-avail-meta"><i class="avail-dot ${availClass}" aria-hidden="true"></i>${escapeHtml(item.brand)} · ${escapeHtml(availText)}</span>
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
function renderHudFilterStrip(subcategories, dict, { showCatSelect = false, showAvailSelect = false, showSearch = true, totalShown = null, totalAll = null } = {}) {
  const hasActiveFilter =
    Boolean(hudFilter.q.trim()) ||
    hudFilter.category !== "all" ||
    hudFilter.subcategory !== "all" ||
    hudFilter.availability !== "all" ||
    hudFilter.originalOnly ||
    hudFilter.sort !== "featured";

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
        ${showSearch ? `<input id="hudSearchInput" class="hud-input" type="search" value="${escapeHtml(hudFilter.q)}" placeholder="${dict.search_ph}" aria-label="${dict.search_ph}" />` : ""}
        ${
          showCatSelect
            ? `<select id="hudCatSelect" class="hud-select" aria-label="${dict.all_categories}">
                <option value="all">${dict.all_categories} (${CATALOG_ITEMS.length})</option>
                ${CATEGORIES.map((c) => {
                  const cnt = CATALOG_ITEMS.filter((item) => (item.categories || [item.category]).includes(c.id)).length;
                  return `<option value="${c.id}" ${hudFilter.category === c.id ? "selected" : ""}>${escapeHtml(textVal(c.name))} (${cnt})</option>`;
                }).join("")}
              </select>`
            : ""
        }
        ${
          showAvailSelect
            ? `<select id="hudAvailSelect" class="hud-select" aria-label="${dict.all_avail}">
                <option value="all" ${hudFilter.availability === "all" ? "selected" : ""}>${dict.all_avail}</option>
                <option value="on_order" ${hudFilter.availability === "on_order" ? "selected" : ""}>${dict.avail_on_order}</option>
                <option value="prototype" ${hudFilter.availability === "prototype" ? "selected" : ""}>${dict.avail_prototype}</option>
                <option value="in_development" ${hudFilter.availability === "in_development" ? "selected" : ""}>${dict.avail_in_development}</option>
                <option value="concept" ${hudFilter.availability === "concept" ? "selected" : ""}>${dict.avail_concept}</option>
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
        ${hasActiveFilter ? `<button type="button" class="btn-outline btn-xs" id="hudInlineResetBtn">${dict.reset_filters}</button>` : ""}
        ${totalShown !== null && totalAll !== null ? `<span class="hud-filter-count">${totalShown} / ${totalAll}</span>` : ""}
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
  if (
    hudFilter.subcategory !== "all" ||
    hudFilter.availability !== "all" ||
    hudFilter.q.trim() ||
    hudFilter.originalOnly ||
    hudFilter.sort !== "featured"
  ) {
    const queried = DECOY_STORE.queryProducts({
      q: hudFilter.q,
      subcategory: hudFilter.subcategory,
      availability: hudFilter.availability,
      originalOnly: hudFilter.originalOnly,
      sort: hudFilter.sort,
      lang: currentLang,
    });
    const filteredSet = new Set(queried.map((i) => i.id));
    items =
      hudFilter.sort !== "featured"
        ? queried.filter((i) => baseIds.includes(i.id))
        : items.filter((i) => filteredSet.has(i.id));
  }

  currentSectionItems = items;
  if (currentSecIdx >= items.length) currentSecIdx = 0;
  const activeProd = items[currentSecIdx] || null;
  const divParam = `${currentDivision ? `&div=${currentDivision}` : ""}&brand=decoy`;

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
        ${baseIds.length ? renderHudFilterStrip(relevantSubcats, dict, { totalShown: items.length, totalAll: baseIds.length }) : ""}
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
    availability: hudFilter.availability,
    q: hudFilter.q,
    originalOnly: hudFilter.originalOnly,
    sort: hudFilter.sort,
    lang: currentLang,
  });
  currentSectionItems = items;

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
            <article class="hud-card brand-card-interactive ${hudFilter.originalOnly ? "hud-card-selected" : ""}" data-toggle-orig-brand tabindex="0" role="button" aria-pressed="${hudFilter.originalOnly}">
              <div class="hud-card-head">
                <span class="hud-badge-orig">${dict.original_badge}</span>
                <span>${escapeHtml(textVal(b.origin))}</span>
              </div>
              <div class="hud-card-body">
                <h3>${escapeHtml(b.name)}</h3>
                <p>${escapeHtml(textVal(b.focus))}</p>
                <div class="hud-card-commerce">
                  <span>${CATALOG_ITEMS.filter((i) => i.isOriginal).length} ${currentLang === "cs" ? "vlastních produktů" : "in-house products"}</span>
                  <strong>${hudFilter.originalOnly ? (currentLang === "cs" ? "FILTR AKTIVNÍ ✓" : "FILTER ACTIVE ✓") : (currentLang === "cs" ? "FILTROVAT →" : "FILTER →")}</strong>
                </div>
              </div>
            </article>`
          ).join("")}
          <article class="hud-card">
            <div class="hud-card-head">
              <span class="hud-badge-partner">${dict.partner_badge}</span>
              <span>SLOT // READY</span>
            </div>
            <div class="hud-card-body">
              <h3>${currentLang === "cs" ? "DALŠÍ VÝROBCI V PŘÍPRAVĚ" : "PARTNER BRANDS UPCOMING"}</h3>
              <p>${currentLang === "cs"
                ? "Katalogové rozhraní je připraveno pro přidání externích výrobců bez zásahu do architektury."
                : "Catalog interface ready for onboarding verified external manufacturers."}</p>
              <div class="hud-card-commerce">
                <span>EURORACK · DMX · VIDEO · DIY</span>
                <strong class="is-tbd">DISTRIBUCE // TBD</strong>
              </div>
            </div>
          </article>
        </div>

        ${renderHudFilterStrip(activeCat ? activeCat.subcategories : [], dict, {
          showCatSelect: true,
          showAvailSelect: true,
          totalShown: items.length,
          totalAll: CATALOG_ITEMS.length,
        })}
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
/* ---------------------------------------------------- společné komponenty podsekcí (obě značky) */
function renderSecHead(num, title, aside = "") {
  return `
    <div class="sec-head">
      <div>
        <div class="sec-num">${num}</div>
        <h2>${title}</h2>
      </div>
      ${aside}
    </div>`;
}

function renderTeatroCard({ head, tag, title, desc, links = null }) {
  return `
    <article class="hud-card teatro-card">
      <div class="hud-card-head">
        <span>${head}</span>
        <span>${tag}</span>
      </div>
      <div class="hud-card-body">
        <h3>${title}</h3>
        <p>${desc}</p>
        ${
          links && links.length
            ? `<div class="link-row">${links
                .map((l) => `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`)
                .join("")}</div>`
            : ""
        }
      </div>
    </article>`;
}

/* ---------------------------------------------------- TEATRO podsekce (ZVUK / SVĚTLO / VIDEO) */
function renderTeatroTab(tab, divKey, dict) {
  const td = TEATRO_DATA;
  const area = TEATRO_AREAS[divKey];
  const lang = currentLang;
  const nav = getBrandNav("teatro", divKey);
  const navIdx = nav.findIndex((n) => n.id === tab);
  const num = `${String(Math.max(0, navIdx) + 1).padStart(2, "0")} // ${area.serialLeft}`;
  const title = navIdx >= 0 ? navLabel(nav[navIdx], divKey, lang) : "";
  let content = "";

  if (tab === "design") {
    const items = area.pillarIdx.map((i) => td.pillars[i]).filter(Boolean);
    content = `<div class="cards-grid">${items
      .map((p) => renderTeatroCard({ head: p.num, tag: p.tag[lang], title: p.title[lang], desc: p.desc[lang] }))
      .join("")}</div>`;
  } else if (tab === "rental") {
    const items = td.rental.filter((r) => area.rentalCodes.includes(r.code));
    content = `<div class="cards-grid-2">${items
      .map((r) => renderTeatroCard({ head: r.code, tag: r.tag[lang], title: r.name[lang], desc: r.desc[lang] }))
      .join("")}</div>`;
  } else if (tab === "custom") {
    const items = td.custom.filter((c) => area.customCodes.includes(c.code));
    content = `<div class="cards-grid-2">${items
      .map((c) => renderTeatroCard({ head: c.code, tag: c.tag[lang], title: c.name[lang], desc: c.desc[lang] }))
      .join("")}</div>`;
  } else if (tab === "events") {
    const events = td.events.filter((ev) => area.eventCodes.includes(ev.code));
    const specs = area.specialtyIdx.map((i) => td.specialties[i]).filter(Boolean);
    const people = PEOPLE.filter((p) => area.peopleNames.includes(p.name));
    content = `
      <div class="cards-grid">${events
        .map((ev) => renderTeatroCard({ head: ev.code, tag: TS, title: ev.name[lang], desc: ev.desc[lang], links: ev.links }))
        .join("")}</div>
      <div class="teatro-crew-banner">
        <div>
          <div class="sec-num">${dict.sec_num_crew}</div>
          <h2>${dict.people}</h2>
          <p>${td.crewSummary[lang]}</p>
        </div>
        <div class="teatro-specs-tags">${specs.map((s) => `<span class="modal-chip">${s[lang]}</span>`).join("")}</div>
      </div>
      ${
        people.length
          ? `<div class="people-grid">${people
              .map(
                (p) => `
            <article class="person-card">
              <div class="person-initials">${p.name
                .split(" ")
                .map((w) => w[0])
                .join("")}</div>
              <h3>${p.name}</h3>
              <p>${p.role[lang]}</p>
              ${p.url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.handle} ↗</a>` : ""}
            </article>`
              )
              .join("")}</div>`
          : ""
      }`;
  } else if (tab === "inquiry") {
    const scopes = [
      { value: "Stage Design", label: "Stage Design" },
      { value: "Light Design", label: "Light Design" },
      { value: "Sound Design", label: "Sound Design" },
      { value: "Rental", label: dict.ts_tab_rental },
      { value: "Custom Production", label: dict.ts_tab_custom },
    ];
    content = `
      <form id="teatroBriefForm" class="blog-editor">
        <div class="brief-scopes">
          ${scopes
            .map(
              (s) =>
                `<label class="hud-check"><input type="checkbox" name="scope" value="${s.value}" ${area.defaultScopes.includes(s.value) ? "checked" : ""} /><span>${s.label}</span></label>`
            )
            .join("")}
        </div>
        <input id="briefEventInput" class="blog-input" type="text" placeholder="${lang === "cs" ? "Název akce / termín / lokalita..." : "Event name / date / venue..."}" />
        <textarea id="briefNotesInput" class="blog-textarea" placeholder="${lang === "cs" ? "Popište požadavky na techniku, scénu, světla nebo zakázkovou výrobu..." : "Describe stage, lighting, sound, rental, or custom build requirements..."}"></textarea>
        <div class="link-row">
          <button type="submit" class="btn-outline">${dict.cart_copy}</button>
          <a class="btn-outline" href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a>
        </div>
        <div id="briefFeedback" class="brief-feedback" aria-live="polite"></div>
      </form>`;
  }

  return `
    <section class="div-section">
      <div class="container">
        ${renderSecHead(num, title)}
        ${content}
      </div>
    </section>`;
}

/* ---------------------------------------------------- SOFTWARE (samostatná sekce obou značek, oddělený obsah) */
function renderSoftware(brand, divKey, dict) {
  const brandKey = normalizeBrand(brand);
  const items = (SOFTWARE_CATALOG[brandKey] && SOFTWARE_CATALOG[brandKey][divKey]) || [];
  const div = DIVISIONS[divKey];
  const lang = currentLang;
  const nav = getBrandNav(brandKey, divKey);
  const navIdx = nav.findIndex((n) => n.id === "software");
  const leftCode = brandKey === "teatro" ? TEATRO_AREAS[divKey].serialLeft : div.serialLeft;
  const num = `${String(Math.max(0, navIdx) + 1).padStart(2, "0")} // ${leftCode}`;
  const count = `<span class="sec-num">${items.length} ${lang === "cs" ? "POLOŽEK" : "ITEMS"}</span>`;

  const cards = items
    .map((item) =>
      renderTeatroCard({
        head: escapeHtml(item.code || item.id.toUpperCase()),
        tag: escapeHtml(textVal(item.status)),
        title: escapeHtml(textVal(item.name)),
        desc: escapeHtml(textVal(item.short)),
        links: item.url ? [{ label: lang === "cs" ? "OTEVŘÍT" : "OPEN", url: item.url }] : null,
      })
    )
    .join("");

  return `
    <section class="div-section">
      <div class="container">
        ${renderSecHead(num, `${dict.sec_software} — ${div.title[lang]}`, count)}
        <p class="software-intro">${dict[`software_intro_${brandKey}`]}</p>
        ${
          items.length
            ? `<div class="cards-grid">${cards}</div>`
            : `<div class="hud-empty-box"><p>${dict.software_empty}</p></div>`
        }
      </div>
    </section>`;
}

/* ---------------------------------------------------- navigace podsekcí (dynamicky podle značky a oblasti) */
function renderBrandNav(navItems, divKey) {
  const navEl = document.getElementById("divSubNav");
  if (!navEl) return;
  navEl.innerHTML = navItems
    .map((item) => {
      const active = item.id === currentTab;
      return `<button type="button" class="sub-tab ${active ? "active" : ""}" role="tab" aria-selected="${active}" data-tab="${item.id}">${escapeHtml(navLabel(item, divKey, currentLang))}</button>`;
    })
    .join("");
  navEl.setAttribute("data-brand", currentBrand);
  navEl.setAttribute("aria-label", currentBrand === "teatro" ? "Sekce TEATRO" : "Sekce DECØY");
}

function defaultHudFilter(divKey = null) {
  return {
    q: "",
    category: (divKey && DIV_TO_CAT[divKey]) || "all",
    subcategory: "all",
    availability: "all",
    originalOnly: false,
    sort: "featured",
  };
}

function getDefaultDivisionTab(divKey, brand = currentBrand) {
  const brandKey = normalizeBrand(brand);
  const nav = getBrandNav(brandKey, divKey);
  if (brandKey === "teatro") return nav.length ? nav[0].id : "design";
  const div = DIVISIONS[divKey];
  if (!div) return "eurorack";
  if (div.eurorack && div.eurorack.length) return "eurorack";
  if (div.desktop && div.desktop.length) return "desktop";
  return "eurorack";
}

/* ---------------------------------------------------- division view (společná komponenta obou značek) */
function renderDivision(divKey, tabKey = currentTab, { fx = false, preserveScroll = false, replaceHistory = false, brand = currentBrand } = {}) {
  const div = DIVISIONS[divKey];
  if (!div) return;
  applyBrandProfileDOM(brand);
  const isTeatro = currentBrand === "teatro";
  const area = TEATRO_AREAS[divKey];
  const navItems = getBrandNav(currentBrand, divKey);
  const allowedTabs = navItems.map((item) => item.id);
  const divisionChanged = currentDivision !== divKey;
  currentSection = "division";
  currentDivision = divKey;
  currentTab = tabKey && allowedTabs.includes(tabKey) ? tabKey : getDefaultDivisionTab(divKey, currentBrand);
  if (divisionChanged) {
    hudFilter.category = DIV_TO_CAT[divKey] || "all";
    hudFilter.subcategory = "all";
  }

  if (fx) triggerDivisionFx(divKey);

  document.getElementById("landingView").hidden = true;
  const divView = document.getElementById("divisionView");
  divView.hidden = false;
  divView.className = `division-view theme-${divKey}`;
  divView.setAttribute("data-brand", currentBrand);

  const dict = I18N[currentLang];
  const brandName = isTeatro ? TS : "DECØY DEVICES";

  const backBtn = document.getElementById("backToSplit");
  if (backBtn) backBtn.innerHTML = `<span>←</span><span>${brandName}</span>`;
  const switchBtn = document.getElementById("openTeatroFromDiv");
  if (switchBtn) switchBtn.textContent = isTeatro ? dict.brand_switch_to_decoy : dict.brand_switch_to_teatro;
  const cartBtn = document.getElementById("cartToggleDiv");
  if (cartBtn) cartBtn.hidden = isTeatro;

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    const active = btn.getAttribute("data-switch-div") === divKey;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  renderBrandNav(navItems, divKey);

  const leftCode = isTeatro ? area.serialLeft : div.serialLeft;
  const siteFooter = document.getElementById("siteFooter");
  if (siteFooter) {
    siteFooter.innerHTML = renderModuleFooterHTML(
      divKey,
      leftCode,
      isTeatro ? "DECØY DEVICES" : div.serialRight,
      brandName
    );
  }

  let body;
  if (isTeatro) {
    body = currentTab === "software" ? renderSoftware("teatro", divKey, dict) : renderTeatroTab(currentTab, divKey, dict);
  } else {
    body = {
      eurorack: () => renderEurorack(div, dict),
      desktop: () => renderDesktop(div, dict),
      pedals: () => renderPedals(div, dict),
      diy: () => renderDiy(dict),
      software: () => renderSoftware("decoy", divKey, dict),
      catalog: () => renderCatalogAndBrands(dict),
      blog: () => renderBlog(divKey, dict),
      merch: () => renderMerch(dict),
    }[currentTab]();
  }

  const currentNavItem = navItems.find((item) => item.id === currentTab);
  const tabLabel = currentNavItem ? navLabel(currentNavItem, divKey, currentLang) : currentTab.toUpperCase();
  const heroCode = isTeatro ? area.code : div.code;
  const heroLead = isTeatro ? area.lead[currentLang] : div.lead[currentLang];

  const content = document.getElementById("divisionContent");
  content.innerHTML = `
    <section class="div-hero">
      <div class="container">
        <div class="div-context-bar" aria-label="Orientace v sekci">
          <button type="button" class="context-crumb" data-crumb-home>${brandName}</button>
          <span class="context-sep">//</span>
          <span class="context-crumb">${div.serialLeft} · ${div.title[currentLang]}</span>
          <span class="context-sep">//</span>
          <strong class="context-crumb is-current">${escapeHtml(tabLabel)}</strong>
        </div>
        <div class="div-hero-code">${heroCode}</div>
        <h1>${div.title[currentLang]}</h1>
        <p class="div-hero-lead">${heroLead}</p>
      </div>
    </section>
    ${body}
  `;
  /* Scénický nástup (divadelní opona / dimmer) se používá výhradně pro TEATRO; DECØY používá vlastní původní FX */
  content.classList.toggle("teatro-enter", isTeatro && !preserveScroll);

  const targetUrl = buildUrlWithBrand(currentBrand, `${divKey}/${currentTab}`);
  if (`${location.pathname || "index.html"}${location.search || ""}${location.hash || ""}` !== targetUrl) {
    if (replaceHistory) history.replaceState(null, "", targetUrl);
    else history.pushState(null, "", targetUrl);
  }
  if (!preserveScroll) window.scrollTo({ top: 0, behavior: "instant" });
  bindDivisionEvents();
}


function goHome({ replaceHistory = false } = {}) {
  currentSection = "landing";
  currentDivision = null;
  document.getElementById("divisionView").hidden = true;
  document.getElementById("landingView").hidden = false;
  applyBrandProfileDOM(currentBrand);
  const targetUrl = buildUrlWithBrand(currentBrand, "");
  if (replaceHistory) history.replaceState(null, "", targetUrl);
  else history.pushState(null, "", targetUrl);
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
  const divParam = `${item.kind === "hardware" ? `&div=${activeDiv}` : ""}&brand=decoy`;
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
                        (s) => {
                          const srcKey = s.s || "doc";
                          const srcLabel = dict[`src_${srcKey}`] || srcKey.toUpperCase();
                          return `
                      <tr>
                        <th>${escapeHtml(s.p[currentLang])}</th>
                        <td>${escapeHtml(specVal(s.v, currentLang))}</td>
                        <td style="text-align:right; width:90px;"><span class="src-tag src-${srcKey}">${escapeHtml(srcLabel)}</span></td>
                      </tr>`;
                        }
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
  document.getElementById("teatroBriefForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const scopes = Array.from(e.target.querySelectorAll('input[name="scope"]:checked')).map((i) => i.value);
    const ev = document.getElementById("briefEventInput")?.value.trim() || "—";
    const notes = document.getElementById("briefNotesInput")?.value.trim() || "—";
    navigator.clipboard?.writeText(`TEATRO\\\\\\SVJÖTLO BRIEF (${currentDivision || "STAGE"})\nScope: ${scopes.join(", ") || "—"}\nEvent: ${ev}\nNotes: ${notes}`).catch(() => {});
    const fb = document.getElementById("briefFeedback");
    if (fb) fb.textContent = `${I18N[currentLang].cart_copied}: ${scopes.join(", ")}`;
  });

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

  document.querySelectorAll("[data-crumb-home]").forEach((btn) => {
    btn.addEventListener("click", () => goHome());
  });

  document.querySelectorAll("[data-toggle-orig-brand]").forEach((card) => {
    const toggle = () => {
      hudFilter.originalOnly = !hudFilter.originalOnly;
      renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });

  document.querySelectorAll("[data-sec-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!currentDivision) return;
      const list = currentSectionItems.length ? currentSectionItems.map((i) => i.id) : DIVISIONS[currentDivision][currentTab];
      if (!Array.isArray(list) || !list.length) return;
      const step = parseInt(btn.getAttribute("data-sec-step"), 10) || 1;
      currentSecIdx = (currentSecIdx + step + list.length) % list.length;
      renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
    });
  });

  document.querySelectorAll("[data-open-mod]").forEach((el) => {
    const activate = (e) => {
      if (e.target.closest("a") || e.target.closest("[data-add-cart]")) return;
      e.stopPropagation();
      const id = el.getAttribute("data-open-mod");
      if (currentDivision) {
        const list = currentSectionItems.length ? currentSectionItems.map((i) => i.id) : DIVISIONS[currentDivision][currentTab];
        const idx = Array.isArray(list) ? list.indexOf(id) : -1;
        if (idx >= 0) currentSecIdx = idx;
      }
      openProductModal(id);
    };
    el.addEventListener("click", activate);
    if (el.tagName === "ARTICLE") {
      el.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target === el) {
          e.preventDefault();
          activate(e);
        }
      });
    }
  });

  document.querySelectorAll("[data-hud-subcat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      hudFilter.subcategory = btn.getAttribute("data-hud-subcat");
      currentSecIdx = 0;
      renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
    });
  });

  const hudSearch = document.getElementById("hudSearchInput");
  if (hudSearch) {
    hudSearch.addEventListener("input", (e) => {
      hudFilter.q = e.target.value;
      currentSecIdx = 0;
      renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
      const refocused = document.getElementById("hudSearchInput");
      if (refocused) {
        refocused.focus();
        if (typeof refocused.setSelectionRange === "function") {
          refocused.setSelectionRange(refocused.value.length, refocused.value.length);
        }
      }
    });
  }

  document.getElementById("hudCatSelect")?.addEventListener("change", (e) => {
    hudFilter.category = e.target.value;
    hudFilter.subcategory = "all";
    renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
  });

  document.getElementById("hudAvailSelect")?.addEventListener("change", (e) => {
    hudFilter.availability = e.target.value;
    renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
  });

  document.getElementById("hudOrigCheck")?.addEventListener("change", (e) => {
    hudFilter.originalOnly = e.target.checked;
    renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
  });

  document.getElementById("hudSortSelect")?.addEventListener("change", (e) => {
    hudFilter.sort = e.target.value;
    renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
  });

  const resetFilterHandler = () => {
    hudFilter = defaultHudFilter(currentDivision);
    renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
  };
  document.getElementById("hudResetBtn")?.addEventListener("click", resetFilterHandler);
  document.getElementById("hudInlineResetBtn")?.addEventListener("click", resetFilterHandler);
}

function routeFromHash() {
  const urlBrand = getBrandFromUrl();
  applyBrandProfileDOM(urlBrand);

  const cleanHash = location.hash.replace("#", "").trim();
  if (!cleanHash) {
    if (currentSection !== "landing") goHome({ replaceHistory: true });
    return;
  }
  const [divKey, tab] = cleanHash.split("/");
  if (divKey === "TEATRO" || divKey === "teatro") {
    applyBrandProfileDOM("teatro");
    if (tab && DIVISIONS[tab.toUpperCase()]) {
      renderDivision(tab.toUpperCase(), null, { replaceHistory: true, brand: "teatro" });
    } else {
      goHome({ replaceHistory: true });
    }
    return;
  }
  if (DIVISIONS[divKey]) renderDivision(divKey, tab || null, { replaceHistory: true, brand: currentBrand });
}

document.addEventListener("DOMContentLoaded", () => {
  applyBrandProfileDOM(getBrandFromUrl());
  applyTranslations();

  /* Výběr aktivní značky na úvodní stránce (DECØY / TEATRO) bez opuštění úvodní stránky */
  document.querySelectorAll("[data-select-brand]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetBrand = btn.getAttribute("data-select-brand");
      setActiveBrand(targetBrand, { updateUrl: true });
    });
  });

  document.querySelectorAll("[data-open-division]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSecIdx = 0;
      hudFilter = defaultHudFilter(currentDivision);
      renderDivision(btn.getAttribute("data-open-division"), null, { fx: true, brand: currentBrand });
    });
  });

  document.getElementById("openTeatroFromDiv")?.addEventListener("click", () => {
    const nextBrand = currentBrand === "teatro" ? "decoy" : "teatro";
    if (nextBrand === "teatro") closeCartDrawer();
    setActiveBrand(nextBrand, { updateUrl: false });
    if (currentDivision) {
      renderDivision(currentDivision, currentTab, { fx: true, brand: nextBrand });
    }
  });

  const subNavBtn = document.getElementById("mobileSubNavBtn");
  const divSubNav = document.getElementById("divSubNav");
  subNavBtn?.addEventListener("click", () => {
    const open = divSubNav.classList.toggle("is-open");
    subNavBtn.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("[data-switch-div]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSecIdx = 0;
      hudFilter.subcategory = "all";
      const targetDiv = btn.getAttribute("data-switch-div");
      const targetTab = currentBrand === "decoy" && (currentTab === "eurorack" || currentTab === "desktop") ? null : currentTab;
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

  document.getElementById("backToSplit")?.addEventListener("click", () => goHome());

  const toggleLang = () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    applyTranslations();
    if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
    if (currentModalId) openProductModal(currentModalId);
    if (!document.getElementById("cartDrawer").hidden) renderCartDrawer();
  };
  document.getElementById("langToggleLanding")?.addEventListener("click", toggleLang);
  document.getElementById("langToggleDiv")?.addEventListener("click", toggleLang);

  document.getElementById("cartToggleLanding")?.addEventListener("click", openCartDrawer);
  document.getElementById("cartToggleDiv")?.addEventListener("click", openCartDrawer);
  document.querySelectorAll("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCartDrawer));
  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));

  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-cart]");
    if (addBtn) {
      e.stopPropagation();
      const id = addBtn.getAttribute("data-add-cart");
      DECOY_STORE.addItem(id, 1);
      updateCartCountUI(true);
      if (currentModalId === id) openProductModal(id);
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
      return;
    }

    const incBtn = e.target.closest("[data-cart-inc]");
    if (incBtn) {
      DECOY_STORE.updateQty(incBtn.getAttribute("data-cart-inc"), 1);
      updateCartCountUI(true);
      renderCartDrawer();
      return;
    }
    const decBtn = e.target.closest("[data-cart-dec]");
    if (decBtn) {
      DECOY_STORE.updateQty(decBtn.getAttribute("data-cart-dec"), -1);
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
      return;
    }
    const rmBtn = e.target.closest("[data-cart-rm]");
    if (rmBtn) {
      DECOY_STORE.removeItem(rmBtn.getAttribute("data-cart-rm"));
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
      return;
    }
    if (e.target.id === "clearCartBtn") {
      DECOY_STORE.clear();
      updateCartCountUI();
      renderCartDrawer();
      if (currentDivision) renderDivision(currentDivision, currentTab, { preserveScroll: true, replaceHistory: true });
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
      return;
    }
    const tag = e.target && e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (currentModalId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const nav = getSectionProductNav(currentModalId, currentDivision);
      if (nav) openProductModal(e.key === "ArrowLeft" ? nav.prevId : nav.nextId);
    }
  });

  window.addEventListener("hashchange", routeFromHash);
  window.addEventListener("popstate", routeFromHash);

  routeFromHash();
});
