/* =========================================================
   DECØY — Hlavní aplikace (Router, Katalog, Home, Brands, Originals, Teatro, Support, About, Store Drawer)
   ========================================================= */

let currentLang = getLang();
let currentRoute = { page: "home", category: "all", subcategory: "all" };
let catalogFilters = {
  q: "",
  category: "all",
  subcategory: "all",
  brand: "all",
  originalOnly: false,
  availability: "all",
  sort: "featured",
};
let currentModalId = null;
let currentModalDiv = null;

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

/* ---------------------------------------------------- Blog / Devlog storage */
function getDevlogPosts() {
  try {
    const saved = localStorage.getItem("decoy_devlog_v4");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch {
    /* fall through */
  }
  return DEFAULT_NEWS_POSTS;
}

function saveDevlogPost(division, title, body) {
  const posts = [...getDevlogPosts()];
  posts.unshift({
    id: `post-${Date.now()}`,
    division: division || "AUD",
    date: new Date().toISOString().slice(0, 10),
    title,
    body,
  });
  localStorage.setItem("decoy_devlog_v4", JSON.stringify(posts));
}

/* ---------------------------------------------------- i18n & Header Sync */
function applyStaticTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) searchInput.placeholder = dict.search_ph;

  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.innerHTML =
      currentLang === "cs"
        ? '<span class="lang-active">CZ</span> / <span>EN</span>'
        : '<span>CZ</span> / <span class="lang-active">EN</span>';
  }
}

function updateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = String(DECOY_STORE.getCount());
}

function updateActiveNav(page) {
  document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
    const isActive = link.getAttribute("data-route") === page;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

/* ---------------------------------------------------- Unified Product Card Component */
function renderProductCard(item, { contextDiv = null, showQuickView = true } = {}) {
  const dict = I18N[currentLang];
  const activeDiv = contextDiv || item.division || "AUD";
  const divParam = contextDiv ? `&div=${contextDiv}` : item.division && item.kind === "hardware" ? `&div=${item.division}` : "";
  const imgSrc = (item.imageByDiv && item.imageByDiv[activeDiv]) || item.image;
  const priceText = DECOY_STORE.formatPrice(item, currentLang);
  const availText = DECOY_STORE.availabilityLabel(item, currentLang);
  const name = itemDisplayName(item, currentLang);
  const catObj = CATEGORIES.find((c) => c.id === item.category);
  const catName = catObj ? textVal(catObj.name) : item.category.toUpperCase();
  const inCart = DECOY_STORE.getItems().some((e) => e.id === item.id);

  let mediaHtml = "";
  if (imgSrc) {
    mediaHtml = `<img src="${imgSrc}" alt="${escapeHtml(name)}" loading="lazy" />`;
  } else if (item.svg) {
    mediaHtml = `<div class="card-svg-art">${item.svg}</div>`;
  } else {
    mediaHtml = `<div class="card-placeholder"><span>${escapeHtml(item.serial)}</span><small>${escapeHtml(textVal(item.status))}</small></div>`;
  }

  return `
    <article class="product-card theme-card-${activeDiv}" data-item-id="${item.id}">
      <div class="product-card-top">
        <span class="card-serial">${escapeHtml(item.serial)}</span>
        <div class="card-badges">
          ${item.isOriginal ? `<span class="badge badge-original">${dict.original_badge}</span>` : `<span class="badge">${dict.partner_badge}</span>`}
          ${item.isNew ? `<span class="badge badge-new">NEW</span>` : ""}
        </div>
      </div>

      <a class="product-card-media" href="product.html?id=${item.id}${divParam}" aria-label="${escapeHtml(name)}">
        ${mediaHtml}
      </a>

      <div class="product-card-body">
        <div class="card-meta-line">
          <span class="card-brand">${escapeHtml(item.brand)}</span>
          <span class="card-cat">${escapeHtml(catName)} · ${escapeHtml(item.hp)}</span>
        </div>

        <h3>
          <a href="product.html?id=${item.id}${divParam}">${escapeHtml(name)}</a>
        </h3>

        <p class="card-desc">${escapeHtml(textVal(item.short))}</p>

        <div class="card-commerce-row">
          <div>
            <div class="card-price ${item.price === null ? "is-tbd" : ""}">${escapeHtml(priceText)}</div>
            <div class="card-avail avail-${item.availability || "tbd"}">${escapeHtml(availText)}</div>
          </div>
        </div>

        <div class="card-actions">
          ${
            showQuickView
              ? `<button type="button" class="btn-outline" data-open-mod="${item.id}" data-mod-div="${activeDiv}">${dict.specs_btn}</button>`
              : ""
          }
          <button type="button" class="btn-outline ${inCart ? "is-added" : ""}" data-add-cart="${item.id}">
            ${inCart ? dict.cart_added : "+"}
          </button>
          <a class="btn-outline btn-solid" href="product.html?id=${item.id}${divParam}">${dict.detail_btn}</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------------------------------------------------- Section 1: HOME (9 steps from spec) */
function renderHome() {
  const dict = I18N[currentLang];
  const featured = CATALOG_ITEMS.filter((i) => i.featured).slice(0, 6);
  const originals = CATALOG_ITEMS.filter((i) => i.isOriginal && i.kind === "hardware").slice(0, 6);
  const newest = CATALOG_ITEMS.filter((i) => i.isNew).slice(0, 3);
  const posts = getDevlogPosts().slice(0, 2);

  const countByCat = (catId) => CATALOG_ITEMS.filter((i) => (i.categories || [i.category]).includes(catId)).length;

  return `
    <!-- 1. Výrazná úvodní prezentace DECØY -->
    <section class="hero-banner">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="hero-kicker">${dict.home_hero_kicker}</div>
          <h1>DECØY <span class="hero-accent">DEVICES</span></h1>
          <p class="hero-lead">${dict.home_hero_lead}</p>
          <div class="hero-cta-row">
            <a class="btn-primary" href="#products" data-route="products">${dict.home_cta_products} →</a>
            <a class="btn-outline" href="#originals" data-route="originals">${dict.home_cta_originals}</a>
            <a class="btn-outline btn-teatro-outline" href="#teatro" data-route="teatro">${dict.home_cta_teatro} ↗</a>
          </div>
        </div>

        <div class="hero-telemetry">
          <div class="telemetry-row">
            <span>${currentLang === "cs" ? "KATALOG ZAŘÍZENÍ" : "CATALOG DEVICES"}</span>
            <strong>${CATALOG_ITEMS.length}</strong>
          </div>
          <div class="telemetry-row">
            <span>DECØY ORIGINALS</span>
            <strong>${CATALOG_ITEMS.filter((i) => i.isOriginal && i.kind === "hardware").length}</strong>
          </div>
          <div class="telemetry-row">
            <span>${currentLang === "cs" ? "HLAVNÍ KATEGORIE" : "CORE CATEGORIES"}</span>
            <strong>AUDIO · LIGHT · VIDEO · DIY · MERCH</strong>
          </div>
          <div class="telemetry-row">
            <span>${currentLang === "cs" ? "STAGE & PRODUKCE" : "STAGE & PRODUCTION"}</span>
            <strong class="text-orange">TEATRO\\\SVJÖTLO</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Rozcestník AUDIO / LIGHT / VIDEO (+ Electronics & Merch) -->
    <section class="page-section home-split-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_split_num}</div>
            <h2>${dict.home_split_title}</h2>
          </div>
          <a class="btn-outline" href="#products" data-route="products">${dict.all_categories} →</a>
        </div>

        <div class="tri-portal">
          <a href="#products/audio" class="portal-tile portal-aud">
            <span class="portal-reg">+</span>
            <div class="portal-head">
              <span>AUD // 01</span>
              <span>${countByCat("audio")} ${currentLang === "cs" ? "POLOŽEK" : "ITEMS"}</span>
            </div>
            <h3>AUDIO</h3>
            <p>${currentLang === "cs" ? "Eurorack, syntezátory, pedály, audio rozhraní a studiová technika." : "Eurorack, synthesizers, pedals, audio interfaces, and studio equipment."}</p>
            <span class="portal-go">${dict.enter_section}</span>
          </a>

          <a href="#products/light" class="portal-tile portal-lux">
            <span class="portal-reg">+</span>
            <div class="portal-head">
              <span>LUX // 02</span>
              <span>${countByCat("light")} ${currentLang === "cs" ? "POLOŽEK" : "ITEMS"}</span>
            </div>
            <h3>LIGHT</h3>
            <p>${currentLang === "cs" ? "DMX kontroléry, převodníky CV-to-DMX, světelné loopery a patchbaye." : "DMX controllers, CV-to-DMX bridges, light loopers, and patchbays."}</p>
            <span class="portal-go">${dict.enter_section}</span>
          </a>

          <a href="#products/video" class="portal-tile portal-vid">
            <span class="portal-reg">+</span>
            <div class="portal-head">
              <span>VID // 03</span>
              <span>${countByCat("video")} ${currentLang === "cs" ? "POLOŽEK" : "ITEMS"}</span>
            </div>
            <h3>VIDEO</h3>
            <p>${currentLang === "cs" ? "Video syntezátory, FPGA enginy, kontroléry pro Resolume a vizuální nástroje." : "Video synthesizers, FPGA engines, Resolume controllers, and visual instruments."}</p>
            <span class="portal-go">${dict.enter_section}</span>
          </a>
        </div>

        <div class="sub-portal-row">
          <a href="#products/electronics" class="sub-portal-tile">
            <span>ELC // 04</span>
            <strong>ELECTRONICS / DIY</strong>
            <small>${currentLang === "cs" ? "Vývojové desky, FPGA, součástky & DIY kity" : "Dev boards, FPGA, components & DIY kits"}</small>
          </a>
          <a href="#products/merch" class="sub-portal-tile">
            <span>MRC // 05</span>
            <strong>MERCH (${countByCat("merch")})</strong>
            <small>${currentLang === "cs" ? "Oblečení a objekty DECØY & TEATRO\\\\\\SVJÖTLO" : "DECØY & TEATRO\\\\\\SVJÖTLO apparel & objects"}</small>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. Výběr zajímavých produktů -->
    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_featured_num}</div>
            <h2>${dict.home_featured_title}</h2>
          </div>
          <a class="btn-outline" href="#products" data-route="products">${dict.home_cta_products} →</a>
        </div>
        <div class="cards-grid">
          ${featured.map((item) => renderProductCard(item)).join("")}
        </div>
      </div>
    </section>

    <!-- 4. DECØY ORIGINALS -->
    <section class="page-section originals-band">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_originals_num}</div>
            <h2>${dict.home_originals_title}</h2>
          </div>
          <a class="btn-outline" href="#originals" data-route="originals">${dict.nav_originals} →</a>
        </div>
        <p class="section-intro">
          ${currentLang === "cs"
            ? "Vlastní hardware vyvíjený přímo v dílně DECØY — od schémat a dvouvrstvých/čtyřvrstvých PCB až po firmware pro ARM Cortex-M7/M33 a FPGA."
            : "Proprietary hardware engineered in-house by DECØY — from schematics and multi-layer PCBs to ARM Cortex-M7/M33 and FPGA firmware."}
        </p>
        <div class="cards-grid">
          ${originals.map((item) => renderProductCard(item)).join("")}
        </div>
      </div>
    </section>

    <!-- 5. Zastoupené značky -->
    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_brands_num}</div>
            <h2>${dict.home_brands_title}</h2>
          </div>
          <a class="btn-outline" href="#brands" data-route="brands">${dict.nav_brands} →</a>
        </div>
        <div class="cards-grid-2">
          ${BRANDS.map(
            (b) => `
            <article class="info-card">
              <div class="info-card-head">
                <span class="badge badge-original">${dict.original_badge}</span>
                <span>${escapeHtml(textVal(b.origin))}</span>
              </div>
              <h3>${escapeHtml(b.name)}</h3>
              <p>${escapeHtml(textVal(b.focus))}</p>
              <a class="btn-outline" href="#products">${CATALOG_ITEMS.length} ${currentLang === "cs" ? "položek v katalogu" : "catalog items"} →</a>
            </article>`
          ).join("")}
          <article class="info-card info-card-empty">
            <div class="info-card-head">
              <span class="badge">${dict.partner_badge}</span>
              <span>SLOT // READY</span>
            </div>
            <h3>${currentLang === "cs" ? "DALŠÍ VÝROBCI & DISTRIBUCE" : "PARTNER MANUFACTURERS"}</h3>
            <p>${currentLang === "cs"
              ? "Sekce je připravena pro nezávislé výrobce modulárních syntezátorů, světelné a video techniky a vývojových desek."
              : "Catalog slot prepared for independent synthesizer, lighting, video, and embedded electronics manufacturers."}</p>
            <a class="btn-outline" href="#brands">${dict.nav_brands} →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. Novinky a nové produkty -->
    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_news_num}</div>
            <h2>${dict.home_news_title}</h2>
          </div>
          <a class="btn-outline" href="#support" data-route="support">${dict.nav_support} →</a>
        </div>
        <div class="news-split">
          <div>
            <div class="sub-label">// ${currentLang === "cs" ? "POSLEDNÍ HARDWAROVÉ REVIZE" : "LATEST HARDWARE REVISIONS"}</div>
            <div class="cards-grid-1">
              ${newest
                .map(
                  (item) => `
                <article class="compact-news-row">
                  <div>
                    <div class="card-serial">${escapeHtml(item.serial)} · ${escapeHtml(textVal(item.status))}</div>
                    <h4><a href="product.html?id=${item.id}&div=${item.division}">${escapeHtml(itemDisplayName(item, currentLang))}</a></h4>
                  </div>
                  <a class="btn-outline" href="product.html?id=${item.id}&div=${item.division}">${dict.detail_btn}</a>
                </article>`
                )
                .join("")}
            </div>
          </div>
          <div>
            <div class="sub-label">// ${currentLang === "cs" ? "ZÁPISY Z PROVOZU & AKCÍ" : "FIELD & STAGE LOGS"}</div>
            <div class="cards-grid-1">
              ${posts
                .map(
                  (post) => `
                <article class="blog-post">
                  <div class="blog-post-meta">
                    <span>${escapeHtml(post.division || "DECØY")} // LOG</span>
                    <span>${escapeHtml(post.date)}</span>
                  </div>
                  <h3>${escapeHtml(textVal(post.title))}</h3>
                  <p>${escapeHtml(textVal(post.body))}</p>
                </article>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Prezentace TEATRO\\\SVJÖTLO -->
    <section class="page-section teatro-spotlight">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_teatro_num}</div>
            <h2>${dict.home_teatro_title}</h2>
          </div>
          <a class="btn-outline btn-teatro-outline" href="#teatro" data-route="teatro">${dict.enter_section}</a>
        </div>
        <div class="teatro-split-box">
          <div>
            <p class="teatro-lead">${escapeHtml(textVal(TEATRO_DATA.lead))}</p>
            <div class="teatro-pillars-mini">
              <span>STAGE DESIGN</span>
              <span>LIGHT DESIGN</span>
              <span>SOUND DESIGN</span>
              <span>RENTAL</span>
              <span>CUSTOM PRODUCTION</span>
              <span>EVENTS &amp; CREW</span>
            </div>
            <div class="hero-cta-row" style="margin-top:20px;">
              <a class="btn-primary btn-teatro-solid" href="#teatro" data-route="teatro">${dict.service_inquiry_btn} →</a>
            </div>
          </div>
          <div class="teatro-monogram">
            <div>T\\\S</div>
            <small>${currentLang === "cs" ? "ODDĚLENÁ PRODUKČNÍ DIVIZE · SLUŽBY & RENTÁL" : "DEDICATED PRODUCTION DIVISION · SERVICES & RENTAL"}</small>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. O značce a její činnosti -->
    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.home_about_num}</div>
            <h2>${dict.home_about_title}</h2>
          </div>
          <a class="btn-outline" href="#about" data-route="about">${dict.nav_about} →</a>
        </div>
        <div class="people-grid">
          ${PEOPLE.map(
            (p) => `
            <article class="person-card">
              <div class="person-initials">${p.name
                .split(" ")
                .map((w) => w[0])
                .join("")}</div>
              <h3>${escapeHtml(p.name)}</h3>
              <p>${escapeHtml(textVal(p.role))}</p>
              ${p.url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.handle)} ↗</a>` : ""}
            </article>`
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Section 2: PRODUCTS CATALOG */
function renderProductsPage() {
  const dict = I18N[currentLang];
  const activeCat = CATEGORIES.find((c) => c.id === catalogFilters.category);
  const subcats = activeCat ? activeCat.subcategories : [];
  const results = DECOY_STORE.queryProducts({ ...catalogFilters, lang: currentLang });

  const availOptions = ["prototype", "in_development", "concept", "on_order", "in_stock"];

  return `
    <section class="page-hero">
      <div class="container">
        <div class="sec-num">01 // CATALOG</div>
        <h1>${dict.nav_products}</h1>
        <p class="hero-lead">${currentLang === "cs"
          ? "Jednotný katalog vlastních zařízení DECØY DEVICES i budoucích partnerských výrobců rozdělený podle skutečné funkce a typu."
          : "Unified catalog of proprietary DECØY DEVICES hardware and upcoming partner manufacturers organized by function and category."}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <!-- Category Tabs -->
        <div class="cat-tabs-bar" role="tablist" aria-label="Produktové kategorie">
          <button type="button" class="cat-tab ${catalogFilters.category === "all" ? "active" : ""}" data-cat-filter="all">
            ${dict.all_categories} (${CATALOG_ITEMS.length})
          </button>
          ${CATEGORIES.map((c) => {
            const count = CATALOG_ITEMS.filter((i) => (i.categories || [i.category]).includes(c.id)).length;
            return `
              <button type="button" class="cat-tab cat-tab-${c.divKey} ${catalogFilters.category === c.id ? "active" : ""}" data-cat-filter="${c.id}">
                ${escapeHtml(textVal(c.name))} (${count})
              </button>
            `;
          }).join("")}
        </div>

        ${
          subcats.length
            ? `<div class="subcat-bar" aria-label="Podkategorie">
                <button type="button" class="subcat-pill ${catalogFilters.subcategory === "all" ? "active" : ""}" data-subcat-filter="all">${dict.all_subcategories}</button>
                ${subcats
                  .map(
                    (sc) => `
                  <button type="button" class="subcat-pill ${catalogFilters.subcategory === sc.id ? "active" : ""}" data-subcat-filter="${sc.id}">
                    ${escapeHtml(textVal(sc.name))}
                  </button>`
                  )
                  .join("")}
              </div>`
            : ""
        }

        <!-- Filter Toolbar -->
        <div class="filter-toolbar">
          <input id="catalogSearchInput" class="filter-input" type="search" value="${escapeHtml(catalogFilters.q)}" placeholder="${dict.search_ph}" />

          <select id="catalogBrandSelect" class="filter-select" aria-label="${dict.brand_label}">
            <option value="all">${dict.all_brands}</option>
            ${BRANDS.map((b) => `<option value="${b.id}" ${catalogFilters.brand === b.id ? "selected" : ""}>${escapeHtml(b.name)}</option>`).join("")}
          </select>

          <select id="catalogAvailSelect" class="filter-select" aria-label="${dict.avail_label}">
            <option value="all">${dict.all_avail}</option>
            ${availOptions
              .map(
                (a) => `<option value="${a}" ${catalogFilters.availability === a ? "selected" : ""}>${escapeHtml(DECOY_STORE.availabilityLabel({ availability: a }, currentLang))}</option>`
              )
              .join("")}
          </select>

          <select id="catalogSortSelect" class="filter-select" aria-label="Řazení">
            <option value="featured" ${catalogFilters.sort === "featured" ? "selected" : ""}>${dict.sort_featured}</option>
            <option value="newest" ${catalogFilters.sort === "newest" ? "selected" : ""}>${dict.sort_newest}</option>
            <option value="name" ${catalogFilters.sort === "name" ? "selected" : ""}>${dict.sort_name}</option>
            <option value="price_asc" ${catalogFilters.sort === "price_asc" ? "selected" : ""}>${dict.sort_price_asc}</option>
          </select>

          <label class="filter-check">
            <input id="catalogOrigCheck" type="checkbox" ${catalogFilters.originalOnly ? "checked" : ""} />
            <span>${dict.filter_originals}</span>
          </label>

          <button id="resetFiltersBtn" type="button" class="btn-outline">${dict.reset_filters}</button>
        </div>

        <div class="results-meta">
          <span>${results.length} ${currentLang === "cs" ? "položek" : "items"}</span>
        </div>

        ${
          results.length
            ? `<div class="cards-grid">
                ${results.map((item) => renderProductCard(item, { contextDiv: activeCat?.divKey && activeCat.divKey !== "ELC" && activeCat.divKey !== "MRC" ? activeCat.divKey : null })).join("")}
              </div>`
            : `<div class="empty-state-box">
                <h3>${catalogFilters.category === "electronics" ? "ELECTRONICS / DIY" : dict.no_results}</h3>
                <p>${catalogFilters.category === "electronics" && !catalogFilters.q ? dict.empty_category_msg : dict.no_results}</p>
                <button type="button" class="btn-outline" id="emptyResetBtn">${dict.reset_filters}</button>
              </div>`
        }
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Section 3: BRANDS */
function renderBrandsPage() {
  const dict = I18N[currentLang];
  return `
    <section class="page-hero">
      <div class="container">
        <div class="sec-num">02 // MANUFACTURERS</div>
        <h1>${dict.nav_brands}</h1>
        <p class="hero-lead">${currentLang === "cs"
          ? "DECØY kombinuje vlastní vývoj hardwaru s kurátorovanou distribucí nezávislých výrobců v oblastech audio, světlo, video a elektronika."
          : "DECØY pairs proprietary hardware engineering with curated distribution from independent audio, lighting, video, and electronics manufacturers."}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="cards-grid-2">
          ${BRANDS.map((b) => {
            const count = CATALOG_ITEMS.filter((i) => i.brandId === b.id).length;
            return `
              <article class="info-card">
                <div class="info-card-head">
                  <span class="badge badge-original">${dict.original_badge}</span>
                  <span>${escapeHtml(textVal(b.origin))}</span>
                </div>
                <h2>${escapeHtml(b.name)}</h2>
                <p>${escapeHtml(textVal(b.focus))}</p>
                <div class="link-row">
                  <a class="btn-outline btn-solid" href="#originals" data-route="originals">${dict.nav_originals} (${count}) →</a>
                </div>
              </article>
            `;
          }).join("")}

          <article class="info-card info-card-empty">
            <div class="info-card-head">
              <span class="badge">${dict.partner_badge}</span>
              <span>EXTENSIBLE SCHEMA</span>
            </div>
            <h2>${currentLang === "cs" ? "ZASTOUPENÉ ZNAČKY V PŘÍPRAVĚ" : "PARTNER BRANDS COMING SOON"}</h2>
            <p>${currentLang === "cs"
              ? "Záměrně zde neuvádíme vymyšlené značky ani neověřené skladové položky. Katalogové rozhraní je připravené pro přidání konkrétních partnerských výrobců."
              : "No placeholder or invented third-party manufacturers are listed. The catalog schema is ready to onboard verified partner brands."}</p>
            <a class="btn-outline" href="#products" data-route="products">${dict.nav_products} →</a>
          </article>
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Section 4: DECØY ORIGINALS */
function renderOriginalsPage() {
  const dict = I18N[currentLang];
  const hw = CATALOG_ITEMS.filter((i) => i.isOriginal && i.kind === "hardware");
  const concepts = CATALOG_ITEMS.filter((i) => i.isOriginal && i.kind === "concept");

  return `
    <section class="page-hero">
      <div class="container">
        <div class="sec-num">03 // IN-HOUSE R&amp;D</div>
        <h1>${dict.nav_originals}</h1>
        <p class="hero-lead">${currentLang === "cs"
          ? "Vlastní zařízení navržená od nuly týmem DECØY DEVICES — moduly Eurorack, CV-to-DMX systémy, FPGA video syntezátory a kontroléry."
          : "Proprietary devices engineered from scratch by DECØY DEVICES — Eurorack modules, CV-to-DMX systems, FPGA video synthesizers, and live controllers."}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">// HARDWARE &amp; PROTOTYPES (${hw.length})</div>
            <h2>AUDIO · LIGHT · VIDEO</h2>
          </div>
        </div>
        <div class="cards-grid">
          ${hw.map((item) => renderProductCard(item)).join("")}
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">// CONCEPTS (${concepts.length})</div>
            <h2>${currentLang === "cs" ? "PEDÁLY & KONCEPTY" : "STOMPBOXES & CONCEPTS"}</h2>
          </div>
        </div>
        <div class="cards-grid-2">
          ${concepts.map((item) => renderProductCard(item)).join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Section 5: TEATRO\\\SVJÖTLO */
function renderTeatroPage() {
  const dict = I18N[currentLang];
  const td = TEATRO_DATA;

  return `
    <section class="page-hero teatro-hero">
      <div class="container">
        <div class="sec-num text-orange">${td.code}</div>
        <h1>${td.title}</h1>
        <p class="hero-lead">${escapeHtml(textVal(td.lead))}</p>
        <div class="teatro-subnav">
          <a href="#teatro/design" class="subcat-pill">${dict.ts_tab_design}</a>
          <a href="#teatro/rental" class="subcat-pill">${dict.ts_tab_rental}</a>
          <a href="#teatro/custom" class="subcat-pill">${dict.ts_tab_custom}</a>
          <a href="#teatro/events" class="subcat-pill">${dict.ts_tab_events}</a>
          <a href="#teatro/inquiry" class="subcat-pill pill-orange">${dict.service_inquiry_btn}</a>
        </div>
      </div>
    </section>

    <section id="ts-design" class="page-section">
      <div class="container">
        <div class="sec-head teatro-sec-head">
          <div>
            <div class="sec-num">01 // STAGE · LIGHT · SOUND</div>
            <h2>${dict.ts_tab_design}</h2>
          </div>
        </div>
        <div class="cards-grid">
          ${td.pillars
            .map(
              (p) => `
            <article class="info-card teatro-card">
              <div class="info-card-head">
                <span>${p.num}</span>
                <span>${escapeHtml(textVal(p.tag))}</span>
              </div>
              <h3>${escapeHtml(textVal(p.title))}</h3>
              <p>${escapeHtml(textVal(p.desc))}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-rental" class="page-section">
      <div class="container">
        <div class="sec-head teatro-sec-head">
          <div>
            <div class="sec-num">02 // TECHNICAL RENTAL</div>
            <h2>${dict.ts_tab_rental}</h2>
          </div>
        </div>
        <div class="cards-grid-2">
          ${td.rental
            .map(
              (r) => `
            <article class="info-card teatro-card">
              <div class="info-card-head">
                <span>${r.code}</span>
                <span>${escapeHtml(textVal(r.tag))}</span>
              </div>
              <h3>${escapeHtml(textVal(r.name))}</h3>
              <p>${escapeHtml(textVal(r.desc))}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-custom" class="page-section">
      <div class="container">
        <div class="sec-head teatro-sec-head">
          <div>
            <div class="sec-num">03 // CUSTOM LIGHTS &amp; HARDWARE</div>
            <h2>${dict.ts_tab_custom}</h2>
          </div>
        </div>
        <div class="cards-grid">
          ${td.custom
            .map(
              (c) => `
            <article class="info-card teatro-card">
              <div class="info-card-head">
                <span>${c.code}</span>
                <span>${escapeHtml(textVal(c.tag))}</span>
              </div>
              <h3>${escapeHtml(textVal(c.name))}</h3>
              <p>${escapeHtml(textVal(c.desc))}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="ts-events" class="page-section">
      <div class="container">
        <div class="sec-head teatro-sec-head">
          <div>
            <div class="sec-num">04 // EVENTS &amp; SPECIALISTS</div>
            <h2>${dict.ts_tab_events}</h2>
          </div>
        </div>
        <div class="cards-grid" style="margin-bottom:32px;">
          ${td.events
            .map(
              (ev) => `
            <article class="info-card teatro-card">
              <div class="info-card-head">
                <span>${ev.code}</span>
                <span>${TS}</span>
              </div>
              <h3>${escapeHtml(textVal(ev.name))}</h3>
              <p>${escapeHtml(textVal(ev.desc))}</p>
              ${
                ev.links
                  ? `<div class="link-row">${ev.links
                      .map((l) => `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ↗</a>`)
                      .join("")}</div>`
                  : ""
              }
            </article>`
            )
            .join("")}
        </div>

        <div class="teatro-crew-banner">
          <div>
            <div class="sec-num">${dict.sec_num_crew}</div>
            <h2 style="margin-bottom:10px;">${dict.people}</h2>
            <p style="margin:0; color:var(--fg-muted); max-width:65ch;">${escapeHtml(textVal(td.crewSummary))}</p>
          </div>
          <div class="teatro-specs-tags">
            ${td.specialties.map((s) => `<span class="badge">${escapeHtml(textVal(s))}</span>`).join("")}
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
              <h3>${escapeHtml(p.name)}</h3>
              <p>${escapeHtml(textVal(p.role))}</p>
              ${p.url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.handle)} ↗</a>` : ""}
            </article>`
          ).join("")}
        </div>
      </div>
    </section>

    <!-- Oddělená poptávka služeb od nákupu produktů -->
    <section id="ts-inquiry" class="page-section">
      <div class="container">
        <div class="sec-head teatro-sec-head">
          <div>
            <div class="sec-num">05 // SERVICE BRIEF</div>
            <h2>${dict.service_inquiry_btn}</h2>
          </div>
        </div>
        <div class="inquiry-box">
          <p class="section-intro">${currentLang === "cs"
            ? "Poptávka produkce akce, stage/light/sound designu, rentálu nebo zakázkové výroby je oddělena od produktového košíku DECØY. Vyberte požadovaný rozsah a zkopírujte technický brief."
            : "Inquiries for event production, stage/light/sound design, technical rental, or custom fabrication are separate from the DECØY product store. Select your scope and copy the brief."}</p>
          <form id="teatroBriefForm" class="brief-form">
            <div class="brief-checks">
              <label class="filter-check"><input type="checkbox" name="scope" value="Stage Design" checked /><span>Stage Design</span></label>
              <label class="filter-check"><input type="checkbox" name="scope" value="Light Design" /><span>Light Design</span></label>
              <label class="filter-check"><input type="checkbox" name="scope" value="Sound Design" /><span>Sound Design</span></label>
              <label class="filter-check"><input type="checkbox" name="scope" value="Rental" /><span>${dict.ts_tab_rental}</span></label>
              <label class="filter-check"><input type="checkbox" name="scope" value="Custom Production" /><span>${dict.ts_tab_custom}</span></label>
            </div>
            <input id="briefEventInput" class="blog-input" type="text" placeholder="${currentLang === "cs" ? "Název akce / termín / lokalita..." : "Event name / date / venue..."}" />
            <textarea id="briefNotesInput" class="blog-textarea" placeholder="${currentLang === "cs" ? "Popište požadavky na techniku, prostor, světla, zvuk nebo zakázkovou výrobu..." : "Describe space, lighting, sound, rental, or custom build requirements..."}"></textarea>
            <div class="link-row">
              <button type="submit" class="btn-primary btn-teatro-solid">${dict.cart_copy}</button>
              <a class="btn-outline" href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a>
            </div>
            <div id="briefFeedback" class="brief-feedback" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Section 6: SUPPORT */
function renderSupportPage() {
  const dict = I18N[currentLang];
  const documented = CATALOG_ITEMS.filter((i) => i.manuals && i.manuals.length);
  const posts = getDevlogPosts();

  return `
    <section class="page-hero">
      <div class="container">
        <div class="sec-num">04 // DOCUMENTATION &amp; DEVLOG</div>
        <h1>${dict.nav_support}</h1>
        <p class="hero-lead">${currentLang === "cs"
          ? "Technická dokumentace, vektorová schémata signálových cest, záruční rámec a terénní poznámky z vývoje."
          : "Technical documentation, vector signal-path diagrams, warranty framework, and engineering field logs."}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.docs_num}</div>
            <h2>${dict.docs_heading}</h2>
          </div>
        </div>
        <div class="cards-grid-2">
          ${documented
            .map(
              (item) => `
            <article class="info-card">
              <div class="info-card-head">
                <span>${escapeHtml(item.serial)}</span>
                <span>${item.manuals.length} ${currentLang === "cs" ? "diagramy / schémata" : "diagrams"}</span>
              </div>
              <h3>${escapeHtml(itemDisplayName(item, currentLang))}</h3>
              <ul class="manual-links">
                ${item.manuals
                  .slice(0, 4)
                  .map((m) => `<li><a href="${m.src}" target="_blank" rel="noopener noreferrer">${escapeHtml(textVal(m.cap) || m.src)} ↗</a></li>`)
                  .join("")}
              </ul>
              <a class="btn-outline" href="product.html?id=${item.id}&div=${item.division}#docs">${dict.detail_btn}</a>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.warranty_num}</div>
            <h2>${dict.warranty_heading}</h2>
          </div>
        </div>
        <div class="info-card">
          <p>${dict.warranty_empty}</p>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.sec_num_blog}</div>
            <h2>${dict.sec_blog}</h2>
          </div>
          <button type="button" id="toggleEditorBtn" class="btn-outline">${dict.new_post_btn}</button>
        </div>

        <form id="blogEditor" class="blog-editor" hidden>
          <select id="blogDivInput" class="filter-select">
            <option value="AUD">AUD // AUDIO</option>
            <option value="LUX">LUX // LIGHT</option>
            <option value="VID">VID // VIDEO</option>
          </select>
          <input id="blogTitleInput" class="blog-input" type="text" placeholder="${dict.post_title_ph}" required />
          <textarea id="blogBodyInput" class="blog-textarea" placeholder="${dict.post_body_ph}" required></textarea>
          <div class="link-row">
            <button type="submit" class="btn-outline btn-solid">${dict.save_post_btn}</button>
            <button type="button" id="cancelEditorBtn" class="btn-outline">${dict.cancel_btn}</button>
          </div>
        </form>

        <div class="blog-list">
          ${posts
            .map(
              (post) => `
            <article class="blog-post">
              <div class="blog-post-meta">
                <span>${escapeHtml(post.division || "DECØY")} // LOG</span>
                <span>${escapeHtml(post.date)}</span>
              </div>
              <h3>${escapeHtml(textVal(post.title))}</h3>
              <p>${escapeHtml(textVal(post.body))}</p>
              ${
                post.links
                  ? `<div class="link-row">${post.links
                      .map((l) => `<a class="btn-outline" href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ↗</a>`)
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

/* ---------------------------------------------------- Section 7: ABOUT */
function renderAboutPage() {
  const dict = I18N[currentLang];
  return `
    <section class="page-hero">
      <div class="container">
        <div class="sec-num">05 // BRAND &amp; TEAM</div>
        <h1>${dict.nav_about}</h1>
        <p class="hero-lead">${dict.home_hero_lead}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="cards-grid-2">
          <article class="info-card">
            <div class="info-card-head">
              <span>01 // DECØY DEVICES</span>
              <span>R&amp;D + STORE</span>
            </div>
            <h3>${currentLang === "cs" ? "VÝVOJ & SPECIALIZOVANÝ OBCHOD" : "R&D & SPECIALIST STORE"}</h3>
            <p>${currentLang === "cs"
              ? "Navrhujeme vlastní elektronické nástroje pro modulární zvuk, scénické světlo a video syntézu a současně budujeme výběrovou distribuční platformu pro další nezávislé výrobce."
              : "We engineer proprietary electronics for modular audio, stage lighting, and video synthesis while building a curated storefront for independent hardware makers."}</p>
          </article>
          <article class="info-card teatro-card">
            <div class="info-card-head">
              <span>02 // ${TS}</span>
              <span>STAGE · RENTAL · CUSTOM</span>
            </div>
            <h3>${TS}</h3>
            <p>${escapeHtml(textVal(TEATRO_DATA.lead))}</p>
          </article>
        </div>

        <div class="sec-head" style="margin-top:44px;">
          <div>
            <div class="sec-num">${dict.sec_num_crew}</div>
            <h2>${dict.people}</h2>
          </div>
        </div>
        <div class="people-grid">
          ${PEOPLE.map(
            (p) => `
            <article class="person-card">
              <div class="person-initials">${p.name
                .split(" ")
                .map((w) => w[0])
                .join("")}</div>
              <h3>${escapeHtml(p.name)}</h3>
              <p>${escapeHtml(textVal(p.role))}</p>
              ${p.url ? `<a class="btn-outline" href="${p.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.handle)} ↗</a>` : ""}
            </article>`
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------- Footer */
function renderSiteFooter() {
  const dict = I18N[currentLang];
  return `
    <div class="container">
      <div class="footer-cols">
        <div>
          <h4>${dict.nav_products}</h4>
          <ul>
            <li><a href="#products/audio">AUDIO</a></li>
            <li><a href="#products/light">LIGHT</a></li>
            <li><a href="#products/video">VIDEO</a></li>
            <li><a href="#products/electronics">ELECTRONICS / DIY</a></li>
            <li><a href="#products/merch">MERCH</a></li>
          </ul>
        </div>
        <div>
          <h4>DECØY</h4>
          <ul>
            <li><a href="#originals">${dict.nav_originals}</a></li>
            <li><a href="#brands">${dict.nav_brands}</a></li>
            <li><a href="#about">${dict.nav_about}</a></li>
          </ul>
        </div>
        <div>
          <h4>${TS}</h4>
          <ul>
            <li><a href="#teatro/design">${dict.ts_tab_design}</a></li>
            <li><a href="#teatro/rental">${dict.ts_tab_rental}</a></li>
            <li><a href="#teatro/custom">${dict.ts_tab_custom}</a></li>
            <li><a href="#teatro/events">${dict.ts_tab_events}</a></li>
          </ul>
        </div>
        <div>
          <h4>${dict.nav_support} &amp; LINKS</h4>
          <ul>
            <li><a href="#support">${dict.docs_heading}</a></li>
            <li><a href="https://www.instagram.com/teatro_svjotlo/" target="_blank" rel="noopener noreferrer">@TEATRO_SVJOTLO ↗</a></li>
            <li><a href="https://www.instagram.com/syntheticsexdrive/" target="_blank" rel="noopener noreferrer">@SYNTHETICSEXDRIVE ↗</a></li>
            <li><a href="https://dhogh.com/" target="_blank" rel="noopener noreferrer">DHOGH.COM ↗</a></li>
          </ul>
        </div>
      </div>
      ${renderModuleFooterHTML("AUD", "DECØY // STORE & R&D", "TEATRO\\\\\\SVJÖTLO")}
    </div>
  `;
}

/* ---------------------------------------------------- Quick-View Modal */
function openProductModal(id, divCtx = null) {
  const item = getCatalogItem(id);
  if (!item) return;
  currentModalId = id;
  currentModalDiv = divCtx || item.division || "AUD";
  const dict = I18N[currentLang];

  const nav = PRODUCTS[id] ? getSectionProductNav(id, currentModalDiv) : null;
  const modal = document.getElementById("itemModal");
  modal.className = `modal theme-${currentModalDiv} mod-${id}`;

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
        openProductModal(nav.prevId, currentModalDiv);
      };
      nextArrow.onclick = (e) => {
        e.stopPropagation();
        openProductModal(nav.nextId, currentModalDiv);
      };
    } else {
      prevArrow.hidden = true;
      nextArrow.hidden = true;
    }
  }

  const imgSrc = (item.imageByDiv && item.imageByDiv[currentModalDiv]) || item.image;
  const keySpecs = (item.specs || []).filter((s) => s.key);
  const divParam = item.kind === "hardware" ? `&div=${currentModalDiv}` : "";
  const inCart = DECOY_STORE.getItems().some((e) => e.id === item.id);

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-box">
        ${
          imgSrc
            ? `<img src="${imgSrc}" alt="${escapeHtml(itemDisplayName(item, currentLang))}" />`
            : item.svg
              ? item.svg
              : `<div class="card-placeholder"><span>${escapeHtml(item.serial)}</span></div>`
        }
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
            : `<p style="color:var(--silver-hasl); margin-top:12px;">${escapeHtml(textVal(item.short))}</p>`
        }
        <div class="link-row" style="margin-top:18px;">
          <a class="btn-detail" style="margin-top:0;" href="product.html?id=${item.id}${divParam}">${dict.detail_btn}</a>
          <button type="button" class="btn-outline" data-add-cart="${item.id}">${inCart ? dict.cart_added : dict.cart_add}</button>
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

/* ---------------------------------------------------- Cart / Inquiry Drawer */
function renderCartDrawer() {
  const body = document.getElementById("cartDrawerBody");
  if (!body) return;
  body.innerHTML = renderCartDrawerHTML(currentLang, "#products", "data-close-cart-nav");
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.hidden = false;
  document.getElementById("cartToggleBtn")?.setAttribute("aria-expanded", "true");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.hidden = true;
  document.getElementById("cartToggleBtn")?.setAttribute("aria-expanded", "false");
}

/* ---------------------------------------------------- Routing & Page Render */
function parseHash() {
  const raw = location.hash.replace(/^#/, "").trim();
  if (!raw || raw === "home") return { page: "home" };
  const parts = raw.split("/");
  const head = parts[0];

  // Backward compatibility with legacy division hashes
  if (head === "AUD") return { page: "products", category: "audio", subcategory: parts[1] === "pedals" ? "effects-pedals" : "all" };
  if (head === "LUX") return { page: "products", category: "light", subcategory: "all" };
  if (head === "VID") return { page: "products", category: "video", subcategory: "all" };
  if (head === "TEATRO" || head === "teatro") return { page: "teatro", section: parts[1] ? `ts-${parts[1]}` : null };

  if (head === "products") {
    return { page: "products", category: parts[1] || "all", subcategory: parts[2] || "all" };
  }
  if (["brands", "originals", "support", "about"].includes(head)) {
    return { page: head };
  }
  return { page: "home" };
}

function renderApp({ scrollTop = true, focusSection = null } = {}) {
  const dict = I18N[currentLang];
  applyStaticTranslations();
  updateCartBadge();
  updateActiveNav(currentRoute.page);

  const mainEl = document.getElementById("appMain");
  const footerEl = document.getElementById("siteFooter");
  const bodyEl = document.getElementById("appBody");
  if (!mainEl) return;

  const titles = {
    home: "DECØY — Hardware R&D · Audio · Light · Video · TEATRO\\\\\\SVJÖTLO",
    products: `${dict.nav_products} — DECØY`,
    brands: `${dict.nav_brands} — DECØY`,
    originals: `${dict.nav_originals} — DECØY`,
    teatro: `TEATRO\\\\\\SVJÖTLO — Stage · Sound · Light · Rental`,
    support: `${dict.nav_support} — DECØY`,
    about: `${dict.nav_about} — DECØY`,
  };
  document.title = titles[currentRoute.page] || titles.home;
  bodyEl.className = `page-${currentRoute.page}`;

  const renderers = {
    home: renderHome,
    products: renderProductsPage,
    brands: renderBrandsPage,
    originals: renderOriginalsPage,
    teatro: renderTeatroPage,
    support: renderSupportPage,
    about: renderAboutPage,
  };

  mainEl.innerHTML = (renderers[currentRoute.page] || renderHome)();
  if (footerEl) footerEl.innerHTML = renderSiteFooter();

  bindPageEvents();

  if (focusSection) {
    document.getElementById(focusSection)?.scrollIntoView({ behavior: "smooth" });
  } else if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function navigateTo(hash, opts = {}) {
  const normalized = hash.startsWith("#") ? hash : `#${hash}`;
  if (location.hash !== normalized) {
    history.pushState(null, "", normalized);
  }
  const parsed = parseHash();
  if (parsed.page === "products") {
    catalogFilters.category = parsed.category || "all";
    catalogFilters.subcategory = parsed.subcategory || "all";
  }
  currentRoute = parsed;
  renderApp({ scrollTop: !parsed.section, focusSection: parsed.section || null, ...opts });
}

/* ---------------------------------------------------- Event Binding */
function bindPageEvents() {
  // Category & subcategory filter buttons
  document.querySelectorAll("[data-cat-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-cat-filter");
      catalogFilters.category = cat;
      catalogFilters.subcategory = "all";
      const nextHash = cat === "all" ? "#products" : `#products/${cat}`;
      history.replaceState(null, "", nextHash);
      renderApp({ scrollTop: false });
    });
  });

  document.querySelectorAll("[data-subcat-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sub = btn.getAttribute("data-subcat-filter");
      catalogFilters.subcategory = sub;
      const catPart = catalogFilters.category === "all" ? "all" : catalogFilters.category;
      const nextHash = sub === "all" ? `#products/${catPart}` : `#products/${catPart}/${sub}`;
      history.replaceState(null, "", nextHash);
      renderApp({ scrollTop: false });
    });
  });

  const cSearch = document.getElementById("catalogSearchInput");
  if (cSearch) {
    cSearch.addEventListener("input", (e) => {
      catalogFilters.q = e.target.value;
      renderApp({ scrollTop: false });
      const newInput = document.getElementById("catalogSearchInput");
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(newInput.value.length, newInput.value.length);
      }
    });
  }

  document.getElementById("catalogBrandSelect")?.addEventListener("change", (e) => {
    catalogFilters.brand = e.target.value;
    renderApp({ scrollTop: false });
  });

  document.getElementById("catalogAvailSelect")?.addEventListener("change", (e) => {
    catalogFilters.availability = e.target.value;
    renderApp({ scrollTop: false });
  });

  document.getElementById("catalogSortSelect")?.addEventListener("change", (e) => {
    catalogFilters.sort = e.target.value;
    renderApp({ scrollTop: false });
  });

  document.getElementById("catalogOrigCheck")?.addEventListener("change", (e) => {
    catalogFilters.originalOnly = e.target.checked;
    renderApp({ scrollTop: false });
  });

  const resetAll = () => {
    catalogFilters = {
      q: "",
      category: "all",
      subcategory: "all",
      brand: "all",
      originalOnly: false,
      availability: "all",
      sort: "featured",
    };
    history.replaceState(null, "", "#products");
    renderApp({ scrollTop: false });
  };
  document.getElementById("resetFiltersBtn")?.addEventListener("click", resetAll);
  document.getElementById("emptyResetBtn")?.addEventListener("click", resetAll);

  // Support devlog editor
  const editor = document.getElementById("blogEditor");
  document.getElementById("toggleEditorBtn")?.addEventListener("click", () => {
    if (editor) editor.hidden = !editor.hidden;
  });
  document.getElementById("cancelEditorBtn")?.addEventListener("click", () => {
    if (editor) editor.hidden = true;
  });
  editor?.addEventListener("submit", (e) => {
    e.preventDefault();
    const div = document.getElementById("blogDivInput")?.value || "AUD";
    const title = document.getElementById("blogTitleInput").value.trim();
    const body = document.getElementById("blogBodyInput").value.trim();
    if (!title || !body) return;
    saveDevlogPost(div, title, body);
    renderApp({ scrollTop: false });
  });

  // Teatro service brief copy
  document.getElementById("teatroBriefForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const scopes = Array.from(e.target.querySelectorAll('input[name="scope"]:checked')).map((i) => i.value);
    const ev = document.getElementById("briefEventInput")?.value.trim() || "—";
    const notes = document.getElementById("briefNotesInput")?.value.trim() || "—";
    const text = `TEATRO\\\\\\SVJÖTLO BRIEF\nScope: ${scopes.join(", ") || "—"}\nEvent: ${ev}\nNotes: ${notes}`;
    navigator.clipboard?.writeText(text).catch(() => {});
    const fb = document.getElementById("briefFeedback");
    if (fb) fb.textContent = `${I18N[currentLang].cart_copied}: ${scopes.join(", ")}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initial = parseHash();
  if (initial.page === "products") {
    catalogFilters.category = initial.category || "all";
    catalogFilters.subcategory = initial.subcategory || "all";
  }
  currentRoute = initial;
  renderApp({ scrollTop: false, focusSection: initial.section || null });

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  menuBtn?.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // Close mobile menu on nav click
  mainNav?.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      mainNav.classList.remove("is-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });

  // Hash navigation
  window.addEventListener("hashchange", () => {
    const parsed = parseHash();
    if (parsed.page === "products") {
      catalogFilters.category = parsed.category || "all";
      catalogFilters.subcategory = parsed.subcategory || "all";
    }
    currentRoute = parsed;
    renderApp({ scrollTop: !parsed.section, focusSection: parsed.section || null });
  });

  // Global search form
  document.getElementById("globalSearchForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("globalSearchInput")?.value.trim() || "";
    catalogFilters.q = val;
    catalogFilters.category = "all";
    catalogFilters.subcategory = "all";
    navigateTo("#products");
  });

  // Delegated clicks for quick-view, add-to-cart, cart drawer
  document.addEventListener("click", (e) => {
    const modBtn = e.target.closest("[data-open-mod]");
    if (modBtn) {
      e.preventDefault();
      openProductModal(modBtn.getAttribute("data-open-mod"), modBtn.getAttribute("data-mod-div"));
      return;
    }

    const addBtn = e.target.closest("[data-add-cart]");
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.getAttribute("data-add-cart");
      DECOY_STORE.addItem(id, 1);
      updateCartBadge();
      if (currentModalId === id) openProductModal(id, currentModalDiv);
      renderApp({ scrollTop: false });
      return;
    }

    const incBtn = e.target.closest("[data-cart-inc]");
    if (incBtn) {
      DECOY_STORE.updateQty(incBtn.getAttribute("data-cart-inc"), 1);
      updateCartBadge();
      renderCartDrawer();
      return;
    }
    const decBtn = e.target.closest("[data-cart-dec]");
    if (decBtn) {
      DECOY_STORE.updateQty(decBtn.getAttribute("data-cart-dec"), -1);
      updateCartBadge();
      renderCartDrawer();
      renderApp({ scrollTop: false });
      return;
    }
    const rmBtn = e.target.closest("[data-cart-rm]");
    if (rmBtn) {
      DECOY_STORE.removeItem(rmBtn.getAttribute("data-cart-rm"));
      updateCartBadge();
      renderCartDrawer();
      renderApp({ scrollTop: false });
      return;
    }
    if (e.target.id === "clearCartBtn") {
      DECOY_STORE.clear();
      updateCartBadge();
      renderCartDrawer();
      renderApp({ scrollTop: false });
      return;
    }
    if (e.target.id === "copyCartBtn") {
      const summary = DECOY_STORE.getSummary();
      const lines = summary.entries.map(
        ({ product, qty }) => `- ${qty}× ${itemDisplayName(product, currentLang)} (${product.serial}) — ${DECOY_STORE.formatPrice(product, currentLang)}`
      );
      const text = `DECØY ORDER / INQUIRY LIST\n${lines.join("\n")}`;
      navigator.clipboard?.writeText(text).catch(() => {});
      const fb = document.getElementById("cartCopyFeedback");
      if (fb) fb.textContent = I18N[currentLang].cart_copied;
      return;
    }
    if (e.target.closest("[data-close-cart-nav]")) {
      closeCartDrawer();
    }
  });

  document.getElementById("cartToggleBtn")?.addEventListener("click", openCartDrawer);
  document.querySelectorAll("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCartDrawer));
  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));

  document.getElementById("langToggle")?.addEventListener("click", () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    renderApp({ scrollTop: false });
    if (!document.getElementById("cartDrawer").hidden) renderCartDrawer();
    if (currentModalId) openProductModal(currentModalId, currentModalDiv);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || "")) {
      e.preventDefault();
      document.getElementById("globalSearchInput")?.focus();
    }
    if (e.key === "Escape") {
      closeModal();
      closeCartDrawer();
    }
    if (currentModalId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const nav = getSectionProductNav(currentModalId, currentModalDiv);
      if (nav) openProductModal(e.key === "ArrowLeft" ? nav.prevId : nav.nextId, currentModalDiv);
    }
  });
});
