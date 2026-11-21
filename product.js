/* DECØY DEVICES — product.html (samostatná detailní stránka modulu) */

let currentLang = getLang();
let currentProdId = null;
let currentDivCtx = null;
let currentGalleryIdx = 0;

const DIV_NAMES = {
  AUD: { cs: "ZVUK", en: "SOUND" },
  LUX: { cs: "SVĚTLO", en: "LIGHT" },
  VID: { cs: "VIDEO", en: "VIDEO" },
};

function triggerProductFx() {
  const overlay = document.getElementById("fxOverlay");
  if (!overlay) return;
  overlay.className = "fx-overlay";
  void overlay.offsetWidth;
  overlay.classList.add("fx-mod");
}

function updateLangButton() {
  const btn = document.getElementById("langToggleProd");
  if (!btn) return;
  btn.innerHTML =
    currentLang === "cs"
      ? '<span class="lang-active">CZ</span> / <span>EN</span>'
      : '<span>CZ</span> / <span class="lang-active">EN</span>';
}

function getProductGallery(p, divKey) {
  if (!p) return [];
  const ctx = divKey || currentDivCtx || p.division;
  return (p.galleryByDiv && p.galleryByDiv[ctx]) || p.gallery || [{ src: p.image, cap: { cs: p.name, en: p.name } }];
}

function renderGalleryStage(p) {
  const items = getProductGallery(p, currentDivCtx);
  if (currentGalleryIdx >= items.length) currentGalleryIdx = 0;
  const active = items[currentGalleryIdx];
  const stageEl = document.getElementById("galleryStage");
  const capEl = document.getElementById("galleryCaption");
  if (!stageEl || !capEl) return;

  stageEl.className = `prod-gallery-stage ${active.layer ? "is-layer" : ""}`;
  stageEl.innerHTML = `
    <img src="${active.src}" alt="${active.cap[currentLang]}" />
    <button type="button" class="gal-zoom-btn" id="galZoomBtn" title="Zvětšit / Zoom">⤢</button>
  `;
  capEl.innerHTML = `
    <span>${active.cap[currentLang]}</span>
    <span>${currentGalleryIdx + 1} / ${items.length}</span>
  `;

  document.querySelectorAll("[data-gal-idx]").forEach((thumb) => {
    thumb.classList.toggle("active", parseInt(thumb.getAttribute("data-gal-idx"), 10) === currentGalleryIdx);
  });

  const lb = document.getElementById("imgLightbox");
  if (lb && !lb.hidden) {
    document.getElementById("lightboxImg").src = active.src;
    document.getElementById("lightboxImg").alt = active.cap[currentLang];
    document.getElementById("lightboxCap").textContent = `${active.cap[currentLang]}  (${currentGalleryIdx + 1} / ${items.length})`;
  }
}

function openLightbox(customItem = null) {
  const lb = document.getElementById("imgLightbox");
  if (!lb) return;
  if (customItem && customItem.src) {
    lb.dataset.mode = "inline";
    document.getElementById("lightboxImg").src = customItem.src;
    document.getElementById("lightboxImg").alt = customItem.cap || "";
    document.getElementById("lightboxCap").textContent = customItem.cap || "";
    document.getElementById("lightboxPrev").hidden = true;
    document.getElementById("lightboxNext").hidden = true;
    lb.hidden = false;
    return;
  }
  const p = PRODUCTS[currentProdId];
  if (!p) return;
  lb.dataset.mode = "gallery";
  const items = getProductGallery(p, currentDivCtx);
  const active = items[currentGalleryIdx] || items[0];
  document.getElementById("lightboxImg").src = active.src;
  document.getElementById("lightboxImg").alt = active.cap[currentLang];
  document.getElementById("lightboxCap").textContent = `${active.cap[currentLang]}  (${currentGalleryIdx + 1} / ${items.length})`;
  document.getElementById("lightboxPrev").hidden = items.length <= 1;
  document.getElementById("lightboxNext").hidden = items.length <= 1;
  lb.hidden = false;
}

function closeLightbox() {
  const lb = document.getElementById("imgLightbox");
  if (lb) lb.hidden = true;
}

function renderProductPage(id, { fx = false, divKey = null } = {}) {
  const p = PRODUCTS[id];
  const dict = I18N[currentLang];
  const bodyEl = document.getElementById("productBody");
  const mainEl = document.getElementById("productMain");
  const topPagerEl = document.getElementById("topProductPager");
  const backLink = document.getElementById("backToDivLink");
  const backLabel = document.getElementById("backToDivLabel");

  if (!p) {
    mainEl.innerHTML = `<div class="container" style="padding:80px 24px;"><h2>${dict.not_found}</h2></div>`;
    return;
  }

  const activeDiv = divKey || currentDivCtx || p.division;
  currentDivCtx = activeDiv;
  currentProdId = id;
  currentGalleryIdx = 0;
  if (fx) triggerProductFx();

  document.documentElement.lang = currentLang;
  document.title = `${p.name} — DECØY DEVICES`;
  bodyEl.className = `product-page theme-${activeDiv} mod-${id}`;

  const divTitle = DIV_NAMES[activeDiv]?.[currentLang] || activeDiv;
  backLink.href = `index.html#${activeDiv}/${p.tab || "eurorack"}`;
  backLabel.textContent = `${dict.back_to} ${divTitle}`;

  const nav = getSectionProductNav(id, activeDiv);
  topPagerEl.innerHTML = `
    <span class="pager-status">
      <strong>${nav.index + 1} / ${nav.total}</strong> · ${p.name}
    </span>
  `;

  const prevArrow = document.getElementById("pagePrevArrow");
  const nextArrow = document.getElementById("pageNextArrow");
  const prevLabel = document.getElementById("pagePrevLabel");
  const nextLabel = document.getElementById("pageNextLabel");
  if (prevArrow && nextArrow && nav) {
    prevLabel.textContent = nav.prev.name;
    nextLabel.textContent = nav.next.name;
    prevArrow.onclick = () => {
      history.pushState(null, "", `product.html?id=${nav.prevId}&div=${activeDiv}`);
      renderProductPage(nav.prevId, { fx: true, divKey: activeDiv });
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    nextArrow.onclick = () => {
      history.pushState(null, "", `product.html?id=${nav.nextId}&div=${activeDiv}`);
      renderProductPage(nav.nextId, { fx: true, divKey: activeDiv });
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  const siteFooter = document.getElementById("siteFooter");
  if (siteFooter) {
    siteFooter.innerHTML = renderModuleFooterHTML(
      activeDiv,
      `${activeDiv} // ${p.hp}`,
      "TEATRO\\\\\\SVJÖTLO"
    );
  }

  const gallery = getProductGallery(p, activeDiv);
  const related = (p.related || []).filter((rid) => PRODUCTS[rid]);

  mainEl.innerHTML = `
    <!-- HERO + GALERIE -->
    <section class="prod-hero">
      <div class="container">
        <div class="prod-hero-grid">
          <!-- Levý sloupec: Vícefotková galerie -->
          <div class="prod-gallery">
            <div class="prod-gallery-wrap">
              ${
                gallery.length > 1
                  ? `<button type="button" class="gal-arrow gal-prev" id="galPrevBtn" aria-label="${dict.prev_img}">‹</button>`
                  : ""
              }
              <div id="galleryStage" class="prod-gallery-stage"></div>
              ${
                gallery.length > 1
                  ? `<button type="button" class="gal-arrow gal-next" id="galNextBtn" aria-label="${dict.next_img}">›</button>`
                  : ""
              }
            </div>
            <div id="galleryCaption" class="prod-gallery-cap"></div>
            ${
              gallery.length > 1
                ? `<div class="prod-thumbs">
                    ${gallery
                      .map(
                        (g, idx) => `
                      <button type="button" class="prod-thumb ${idx === 0 ? "active" : ""} ${g.layer ? "is-layer" : ""}" data-gal-idx="${idx}">
                        <img src="${g.src}" alt="${g.cap[currentLang]}" loading="lazy" />
                        <span>${g.cap[currentLang]}</span>
                      </button>`
                      )
                      .join("")}
                  </div>`
                : ""
            }
          </div>

          <!-- Pravý sloupec: Popis O MODULU -->
          <div class="prod-summary">
            <div class="modal-serial">${p.serial}</div>
            <h1>${p.name}</h1>
            <p class="prod-tagline">${p.tagline[currentLang]}</p>

            <div class="modal-meta-row">
              <span class="modal-chip">${activeDiv} // ${divTitle}</span>
              <span class="modal-chip">${p.hp}</span>
            </div>

            <div class="prod-block">
              <div class="prod-block-label">// ${dict.about}</div>
              ${p.long[currentLang]
                .map((para, idx) => {
                  const media = p.longMedia?.[idx];
                  const mediaSrc = media ? media.srcByDiv?.[activeDiv] || media.src : null;
                  const mediaCap = media?.cap?.[currentLang] || "";
                  const escCap = mediaCap.replace(/"/g, "&quot;");
                  const figHtml = mediaSrc
                    ? `<figure class="prod-inline-fig" data-inline-src="${mediaSrc}" data-inline-cap="${escCap}" role="button" tabindex="0">
                        <img src="${mediaSrc}" alt="${escCap}" loading="lazy" />
                        ${mediaCap ? `<figcaption class="prod-inline-cap">${mediaCap}</figcaption>` : ""}
                      </figure>`
                    : "";
                  return `<p class="prod-para">${para}</p>${figHtml}`;
                })
                .join("")}
              ${p.credit ? `<p class="prod-credit">${p.credit[currentLang]}</p>` : ""}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- K ČEMU HO POUŽÍT (USE CASES) -->
    <section class="prod-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.app_num_use}</div>
            <h2>${dict.use_cases}</h2>
          </div>
        </div>
        <div class="usecase-grid">
          ${p.useCases
            .map(
              (u, i) => `
            <article class="usecase-card">
              <div class="usecase-num">0${i + 1}</div>
              <h3>${u.t[currentLang]}</h3>
              <p>${u.d[currentLang]}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    ${
      p.comparison && p.comparison.length
        ? (() => {
            const cm = p.comparisonMeta || {};
            const cNum = cm.num ? cm.num[currentLang] : dict.diff_num;
            const cHead = cm.heading ? cm.heading[currentLang] : dict.diff_heading;
            const c0 = cm.col0 ? cm.col0[currentLang] : dict.diff_feature;
            const c1 = cm.col1 ? cm.col1[currentLang] : dict.diff_orig;
            const c2 = cm.col2 ? cm.col2[currentLang] : dict.diff_v04;
            const c3 = cm.col3 ? cm.col3[currentLang] : dict.diff_impact;
            return `<section class="prod-section">
            <div class="container">
              <div class="sec-head">
                <div>
                  <div class="sec-num">${cNum}</div>
                  <h2>${cHead}</h2>
                </div>
              </div>
              <div class="prod-panel-box">
                <div class="diff-table-wrap">
                  <table class="spec-table diff-table">
                    <thead>
                      <tr>
                        <th>${c0}</th>
                        <th>${c1}</th>
                        <th class="diff-v04-col">${c2}</th>
                        <th>${c3}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${p.comparison
                        .map(
                          (row) => `
                        <tr>
                          <th>${row.f[currentLang]}</th>
                          <td class="diff-orig-cell">${row.orig[currentLang]}</td>
                          <td class="diff-v04-col">${row.v04[currentLang]}</td>
                          <td>${row.imp[currentLang]}</td>
                        </tr>`
                        )
                        .join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>`;
          })()
        : ""
    }

    <!-- OVLÁDÁNÍ & KONEKTORY + VŠECHNY TECHNICKÉ PARAMETRY -->
    <section class="prod-section">
      <div class="container">
        <div class="prod-two-col">
          <!-- Ovládání & konektory -->
          <div class="prod-panel-box">
            <div class="sec-num">${dict.app_num_io}</div>
            <h2>${dict.controls}</h2>
            <ul class="prod-controls-list">
              ${p.controls[currentLang].map((c) => `<li>${c}</li>`).join("")}
            </ul>
          </div>

          <!-- Technické parametry (bez seznamu čipů) -->
          <div class="prod-panel-box">
            <div class="sec-num">${dict.app_num_elec}</div>
            <h2>${dict.all_specs}</h2>
            <table class="spec-table" style="margin-top:16px;">
              <thead>
                <tr>
                  <th>${dict.param}</th>
                  <th>${dict.value}</th>
                </tr>
              </thead>
              <tbody>
                ${p.specs
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
        </div>
      </div>
    </section>

    <!-- FUNGUJE S (SOUVISEJÍCÍ MODULY) -->
    ${
      related.length
        ? `<section class="prod-section">
            <div class="container">
              <div class="sec-head">
                <div>
                  <div class="sec-num">${dict.app_num_eco}</div>
                  <h2>${dict.works_with}</h2>
                </div>
              </div>
              <div class="cards-grid-2">
                ${related
                  .map((rid) => {
                    const rp = PRODUCTS[rid];
                    const rImg = (rp.imageByDiv && rp.imageByDiv[activeDiv]) || rp.image;
                    return `
                      <article class="prod-rel-card" data-prod-go="${rid}">
                        <img src="${rImg}" alt="${rp.name}" loading="lazy" />
                        <div>
                          <div class="modal-serial">${rp.serial} · ${rp.hp}</div>
                          <h3>${rp.name}</h3>
                          <p>${rp.short[currentLang]}</p>
                          <span class="btn-outline">${dict.detail_btn}</span>
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          </section>`
        : ""
    }

    <!-- SPODNÍ ŠIPKY PRO LISTOVÁNÍ V SEKCI -->
    <section class="prod-section prod-bottom-nav">
      <div class="container">
        <div class="modal-nav-bar">
          <button type="button" class="pager-btn" data-prod-go="${nav.prevId}">
            <span class="pager-icon">←</span>
            <span class="pager-meta">
              <small>${dict.prev_prod}</small>
              <strong>${nav.prev.name}</strong>
            </span>
          </button>
          <span class="modal-nav-count">${nav.index + 1} / ${nav.total}</span>
          <button type="button" class="pager-btn pager-btn-next" data-prod-go="${nav.nextId}">
            <span class="pager-meta">
              <small>${dict.next_prod}</small>
              <strong>${nav.next.name}</strong>
            </span>
            <span class="pager-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  `;

  renderGalleryStage(p);

  // Gallery events
  document.getElementById("galleryStage")?.addEventListener("click", () => openLightbox());
  document.querySelectorAll("[data-inline-src]").forEach((fig) => {
    const trigger = () =>
      openLightbox({
        src: fig.getAttribute("data-inline-src"),
        cap: fig.getAttribute("data-inline-cap") || "",
      });
    fig.addEventListener("click", trigger);
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });
  document.getElementById("galPrevBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentGalleryIdx = (currentGalleryIdx - 1 + gallery.length) % gallery.length;
    renderGalleryStage(p);
  });
  document.getElementById("galNextBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentGalleryIdx = (currentGalleryIdx + 1) % gallery.length;
    renderGalleryStage(p);
  });
  document.querySelectorAll("[data-gal-idx]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      currentGalleryIdx = parseInt(thumb.getAttribute("data-gal-idx"), 10) || 0;
      renderGalleryStage(p);
    });
  });

  // Product Prev / Next / Related clicks
  document.querySelectorAll("[data-prod-go]").forEach((el) => {
    el.addEventListener("click", () => {
      const targetId = el.getAttribute("data-prod-go");
      const divQuery = currentDivCtx ? `&div=${currentDivCtx}` : "";
      history.pushState(null, "", `product.html?id=${targetId}${divQuery}`);
      renderProductPage(targetId, { fx: true, divKey: currentDivCtx });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateLangButton();

  const params = new URLSearchParams(location.search);
  const initialId = params.get("id") || "the-in";
  const initialDiv = params.get("div") || null;
  renderProductPage(initialId, { divKey: initialDiv });

  document.getElementById("langToggleProd")?.addEventListener("click", () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    updateLangButton();
    if (currentProdId) renderProductPage(currentProdId, { divKey: currentDivCtx });
  });

  window.addEventListener("popstate", () => {
    const p = new URLSearchParams(location.search);
    renderProductPage(p.get("id") || "the-in", { divKey: p.get("div") || null });
  });

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxBackdrop")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => {
    const p = PRODUCTS[currentProdId];
    if (!p) return;
    const items = getProductGallery(p, currentDivCtx);
    currentGalleryIdx = (currentGalleryIdx - 1 + items.length) % items.length;
    renderGalleryStage(p);
  });
  document.getElementById("lightboxNext")?.addEventListener("click", () => {
    const p = PRODUCTS[currentProdId];
    if (!p) return;
    const items = getProductGallery(p, currentDivCtx);
    currentGalleryIdx = (currentGalleryIdx + 1) % items.length;
    renderGalleryStage(p);
  });

  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("imgLightbox");
    if (lb && !lb.hidden) {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        if (lb.dataset.mode === "inline") return;
        const p = PRODUCTS[currentProdId];
        if (!p) return;
        const items = getProductGallery(p, currentDivCtx);
        const step = e.key === "ArrowLeft" ? -1 : 1;
        currentGalleryIdx = (currentGalleryIdx + step + items.length) % items.length;
        renderGalleryStage(p);
        return;
      }
    }

    if (!currentProdId) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const nav = getSectionProductNav(currentProdId, currentDivCtx);
      if (nav) {
        const targetId = e.key === "ArrowLeft" ? nav.prevId : nav.nextId;
        history.pushState(null, "", `product.html?id=${targetId}${currentDivCtx ? `&div=${currentDivCtx}` : ""}`);
        renderProductPage(targetId, { fx: true, divKey: currentDivCtx });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
});
