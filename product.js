/* DECØY DEVICES — product.html (samostatná detailní stránka modulu v původním stylu DECØY) */

let currentLang = getLang();
let currentProdId = null;
let currentDivCtx = null;
let currentGalleryIdx = 0;

const DIV_NAMES = {
  AUD: { cs: "ZVUK", en: "SOUND" },
  LUX: { cs: "SVĚTLO", en: "LIGHT" },
  VID: { cs: "VIDEO", en: "VIDEO" },
  MRC: { cs: "MERCH", en: "MERCH" },
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

function triggerProductFx() {
  const overlay = document.getElementById("fxOverlay");
  if (!overlay) return;
  overlay.className = "fx-overlay";
  void overlay.offsetWidth;
  overlay.classList.add("fx-mod");
}

function updateHeaderUI() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  const btn = document.getElementById("langToggleProd");
  if (btn) {
    btn.innerHTML =
      currentLang === "cs"
        ? '<span class="lang-active">CZ</span> / <span>EN</span>'
        : '<span>CZ</span> / <span class="lang-active">EN</span>';
  }
  const count = String(DECOY_STORE.getCount());
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });
}

function getProductGallery(p, divKey) {
  if (!p) return [];
  const ctx = divKey || currentDivCtx || p.division;
  const arr = (p.galleryByDiv && p.galleryByDiv[ctx]) || p.gallery || [];
  if (arr.length) return arr;
  if (p.image) return [{ src: p.image, cap: { cs: itemDisplayName(p, "cs"), en: itemDisplayName(p, "en") } }];
  return [];
}

function renderGalleryStage(p) {
  const items = getProductGallery(p, currentDivCtx);
  if (currentGalleryIdx >= items.length) currentGalleryIdx = 0;
  const stageEl = document.getElementById("galleryStage");
  const capEl = document.getElementById("galleryCaption");
  if (!stageEl || !capEl) return;

  if (!items.length) {
    stageEl.className = "prod-gallery-stage";
    stageEl.innerHTML = p.svg
      ? `<div class="merch-art-inline">${p.svg}</div>`
      : `<div class="hud-card-wireframe" style="min-height:260px;"><span>${escapeHtml(p.serial)}</span><small>${escapeHtml(textVal(p.status))}</small></div>`;
    capEl.innerHTML = `<span>${escapeHtml(itemDisplayName(p, currentLang))}</span><span>—</span>`;
    return;
  }

  const active = items[currentGalleryIdx];
  stageEl.className = `prod-gallery-stage ${active.layer ? "is-layer" : ""}`;
  stageEl.innerHTML = `
    <img src="${active.src}" alt="${escapeHtml(textVal(active.cap))}" />
    <button type="button" class="gal-zoom-btn" id="galZoomBtn" title="Zvětšit / Zoom">⤢</button>
  `;
  capEl.innerHTML = `
    <span>${escapeHtml(textVal(active.cap))}</span>
    <span>${currentGalleryIdx + 1} / ${items.length}</span>
  `;

  document.querySelectorAll("[data-gal-idx]").forEach((thumb) => {
    thumb.classList.toggle("active", parseInt(thumb.getAttribute("data-gal-idx"), 10) === currentGalleryIdx);
  });

  const lb = document.getElementById("imgLightbox");
  if (lb && !lb.hidden) {
    document.getElementById("lightboxImg").src = active.src;
    document.getElementById("lightboxImg").alt = textVal(active.cap);
    document.getElementById("lightboxCap").textContent = `${textVal(active.cap)}  (${currentGalleryIdx + 1} / ${items.length})`;
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
  const p = getCatalogItem(currentProdId);
  if (!p) return;
  const items = getProductGallery(p, currentDivCtx);
  if (!items.length) return;
  lb.dataset.mode = "gallery";
  const active = items[currentGalleryIdx] || items[0];
  document.getElementById("lightboxImg").src = active.src;
  document.getElementById("lightboxImg").alt = textVal(active.cap);
  document.getElementById("lightboxCap").textContent = `${textVal(active.cap)}  (${currentGalleryIdx + 1} / ${items.length})`;
  document.getElementById("lightboxPrev").hidden = items.length <= 1;
  document.getElementById("lightboxNext").hidden = items.length <= 1;
  lb.hidden = false;
}

function closeLightbox() {
  const lb = document.getElementById("imgLightbox");
  if (lb) lb.hidden = true;
}

function renderCartDrawer() {
  const body = document.getElementById("cartDrawerBody");
  if (!body) return;
  body.innerHTML = renderCartDrawerHTML(currentLang, "index.html#AUD/catalog", "");
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawer").hidden = false;
  document.getElementById("cartToggleProd")?.setAttribute("aria-expanded", "true");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").hidden = true;
  document.getElementById("cartToggleProd")?.setAttribute("aria-expanded", "false");
}

function renderProductPage(id, { fx = false, divKey = null } = {}) {
  const p = getCatalogItem(id);
  const dict = I18N[currentLang];
  const bodyEl = document.getElementById("productBody");
  const mainEl = document.getElementById("productMain");
  const topPagerEl = document.getElementById("topProductPager");
  const backLink = document.getElementById("backToDivLink");
  const backLabel = document.getElementById("backToDivLabel");

  updateHeaderUI();

  if (!p) {
    mainEl.innerHTML = `<div class="container" style="padding:80px 24px;"><h2>${dict.not_found}</h2></div>`;
    return;
  }

  const activeDiv = divKey || currentDivCtx || p.division || "AUD";
  currentDivCtx = activeDiv;
  currentProdId = id;
  currentGalleryIdx = 0;
  if (fx) triggerProductFx();

  const pName = itemDisplayName(p, currentLang);
  document.title = `${pName} — DECØY DEVICES`;
  bodyEl.className = `product-page theme-${activeDiv} mod-${id}`;

  const divTitle = DIV_NAMES[activeDiv]?.[currentLang] || activeDiv;
  const backDiv = activeDiv === "MRC" ? "AUD" : activeDiv;
  const backTab = p.kind === "merch" ? "merch" : p.kind === "concept" ? "pedals" : p.tab || "eurorack";
  backLink.href = `index.html#${backDiv}/${backTab}`;
  backLabel.textContent = `${dict.back_to} ${divTitle}`;

  const nav = PRODUCTS[id] ? getSectionProductNav(id, activeDiv) : null;
  if (nav) {
    topPagerEl.innerHTML = `
      <span class="pager-status">
        <a class="pager-crumb-link" href="index.html#${backDiv}/${backTab}">${activeDiv} // ${escapeHtml(divTitle)}</a>
        <span>·</span>
        <strong>${nav.index + 1} / ${nav.total}</strong>
        <span>·</span>
        <span>${escapeHtml(pName)}</span>
      </span>`;
  } else {
    topPagerEl.innerHTML = `
      <span class="pager-status">
        <a class="pager-crumb-link" href="index.html#${backDiv}/${backTab}">${activeDiv} // ${escapeHtml(divTitle)}</a>
        <span>·</span>
        <span>${escapeHtml(pName)}</span>
      </span>`;
  }

  const prevArrow = document.getElementById("pagePrevArrow");
  const nextArrow = document.getElementById("pageNextArrow");
  const prevLabel = document.getElementById("pagePrevLabel");
  const nextLabel = document.getElementById("pageNextLabel");
  if (prevArrow && nextArrow) {
    if (nav) {
      prevArrow.hidden = false;
      nextArrow.hidden = false;
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
    } else {
      prevArrow.hidden = true;
      nextArrow.hidden = true;
    }
  }

  const siteFooter = document.getElementById("siteFooter");
  if (siteFooter) {
    siteFooter.innerHTML = renderModuleFooterHTML(activeDiv, `${activeDiv} // ${p.hp}`, "TEATRO\\\\\\SVJÖTLO");
  }

  const gallery = getProductGallery(p, activeDiv);
  const related = (p.related || []).map((rid) => getCatalogItem(rid)).filter(Boolean);
  const inCart = DECOY_STORE.getItems().some((e) => e.id === p.id);
  const priceText = DECOY_STORE.formatPrice(p, currentLang);
  const availText = DECOY_STORE.availabilityLabel(p, currentLang);
  const manuals = p.manuals || [];

  mainEl.innerHTML = `
    <!-- 1. GALERIE + 2. NÁZEV, VÝROBCE & CENA + 3. DOSTUPNOST & NÁKUP + 4. POPIS -->
    <section class="prod-hero">
      <div class="container">
        <div class="prod-hero-grid">
          <div class="prod-gallery">
            <div class="prod-gallery-wrap">
              ${gallery.length > 1 ? `<button type="button" class="gal-arrow gal-prev" id="galPrevBtn" aria-label="${dict.prev_img}">‹</button>` : ""}
              <div id="galleryStage" class="prod-gallery-stage"></div>
              ${gallery.length > 1 ? `<button type="button" class="gal-arrow gal-next" id="galNextBtn" aria-label="${dict.next_img}">›</button>` : ""}
            </div>
            <div id="galleryCaption" class="prod-gallery-cap"></div>
            ${gallery.length > 1
      ? `<div class="prod-thumbs">
                    ${gallery
        .map(
          (g, idx) => `
                      <button type="button" class="prod-thumb ${idx === 0 ? "active" : ""} ${g.layer ? "is-layer" : ""}" data-gal-idx="${idx}">
                        <img src="${g.src}" alt="${escapeHtml(textVal(g.cap))}" loading="lazy" />
                        <span>${escapeHtml(textVal(g.cap))}</span>
                      </button>`
        )
        .join("")}
                  </div>`
      : ""
    }
          </div>

          <div class="prod-summary">
            <div class="modal-serial">${escapeHtml(p.serial)} · ${dict.brand_label}: ${escapeHtml(p.brand)}</div>
            <h1>${escapeHtml(pName)}</h1>
            <p class="prod-tagline">${escapeHtml(textVal(p.tagline))}</p>

            <div class="modal-meta-row">
              ${p.isOriginal ? `<span class="modal-chip chip-accent">${dict.original_badge}</span>` : `<span class="modal-chip">${dict.partner_badge}</span>`}
              <span class="modal-chip">${activeDiv} // ${divTitle}</span>
              <span class="modal-chip">${escapeHtml(p.hp)}</span>
              <span class="modal-chip">${escapeHtml(priceText)}</span>
              <span class="modal-chip">${escapeHtml(availText)}</span>
            </div>

            <div class="prod-commerce-strip">
              <div class="link-row">
                <button type="button" id="addToCartDetailBtn" class="btn-detail" style="margin-top:0; border:none; cursor:pointer;">
                  ${inCart ? dict.cart_added : dict.cart_add}
                </button>
              </div>
              <small>${dict.cart_notice}</small>
            </div>

            <div class="prod-block">
              <div class="prod-block-label">// ${dict.about}</div>
              ${(p.long?.[currentLang] || [])
      .map((para, idx) => {
        const media = p.longMedia?.[idx];
        const mediaSrc = media ? media.srcByDiv?.[activeDiv] || media.src : null;
        const mediaCap = media?.cap?.[currentLang] || "";
        const escCap = escapeHtml(mediaCap);
        const figHtml = mediaSrc
          ? `<figure class="prod-inline-fig" data-inline-src="${mediaSrc}" data-inline-cap="${escCap}" role="button" tabindex="0">
                        <img src="${mediaSrc}" alt="${escCap}" loading="lazy" />
                        ${mediaCap ? `<figcaption class="prod-inline-cap">${escCap}</figcaption>` : ""}
                      </figure>`
          : "";
        return `<p class="prod-para">${escapeHtml(para)}</p>${figHtml}`;
      })
      .join("")}
              ${p.credit ? `<p class="prod-credit">${escapeHtml(textVal(p.credit))}</p>` : ""}
            </div>
          </div>
        </div>
      </div>
    </section>

    ${p.useCases && p.useCases.length
      ? `<section class="prod-section">
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
                    <h3>${escapeHtml(textVal(u.t))}</h3>
                    <p>${escapeHtml(textVal(u.d))}</p>
                  </article>`
        )
        .join("")}
              </div>
            </div>
          </section>`
      : ""
    }

    ${p.comparison && p.comparison.length
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
                            <th>${escapeHtml(textVal(row.f))}</th>
                            <td class="diff-orig-cell">${escapeHtml(textVal(row.orig))}</td>
                            <td class="diff-v04-col">${escapeHtml(textVal(row.v04))}</td>
                            <td>${escapeHtml(textVal(row.imp))}</td>
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

    ${(p.controls?.[currentLang]?.length || p.specs?.length)
      ? `<section class="prod-section">
            <div class="container">
              <div class="prod-two-col">
                <div class="prod-panel-box">
                  <div class="sec-num">${dict.app_num_io}</div>
                  <h2>${dict.controls}</h2>
                  ${p.controls?.[currentLang]?.length
        ? `<ul class="prod-controls-list">${p.controls[currentLang].map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>`
        : `<p class="prod-para" style="margin-top:14px;">${dict.docs_empty}</p>`
      }
                </div>

                <div class="prod-panel-box">
                  <div class="sec-num">${dict.app_num_elec}</div>
                  <h2>${dict.all_specs}</h2>
                  <table class="spec-table" style="margin-top:16px;">
                    <thead>
                      <tr>
                        <th>${dict.param}</th>
                        <th>${dict.value}</th>
                        <th style="text-align:right;">${dict.source}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${(p.specs || [])
        .map(
          (s) => {
            const srcKey = s.s || "doc";
            const srcLabel = dict[`src_${srcKey}`] || srcKey.toUpperCase();
            return `
                        <tr>
                          <th>${escapeHtml(s.p[currentLang])}</th>
                          <td>${escapeHtml(specVal(s.v, currentLang))}</td>
                          <td style="text-align:right; width:96px;"><span class="src-tag src-${srcKey}">${escapeHtml(srcLabel)}</span></td>
                        </tr>`;
          }
        )
        .join("")}
                    </tbody>
                  </table>
                  <p class="spec-legend">${escapeHtml(dict.legend)}</p>
                </div>
              </div>
            </div>
          </section>`
      : ""
    }

    <!-- DOKUMENTACE & MANUÁLY -->
    <section id="docs" class="prod-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.docs_num}</div>
            <h2>${dict.docs_heading}</h2>
          </div>
          <span class="sec-num">${escapeHtml(p.serial)} · ${escapeHtml(p.brand)}</span>
        </div>
        ${manuals.length
      ? `<div class="cards-grid-2">
                ${manuals
        .map(
          (m, mIdx) => `
                  <article class="diagram-card">
                    <div class="diagram-head">
                      <div class="sec-num">0${mIdx + 1} // SVG SCHÉMA &amp; DIAGRAM</div>
                      <h3>${escapeHtml(textVal(m.cap) || m.src)}</h3>
                    </div>
                    <div class="diagram-frame prod-doc-preview" data-inline-src="${m.src}" data-inline-cap="${escapeHtml(textVal(m.cap))}" role="button" tabindex="0">
                      <img src="${m.src}" alt="${escapeHtml(textVal(m.cap))}" loading="lazy" />
                    </div>
                    <div class="link-row" style="margin-top:14px;">
                      <button type="button" class="btn-outline" data-inline-src="${m.src}" data-inline-cap="${escapeHtml(textVal(m.cap))}">${currentLang === "cs" ? "ZVĚTŠIT SCHÉMA ⤢" : "ZOOM DIAGRAM ⤢"}</button>
                      <a class="btn-outline" href="${m.src}" target="_blank" rel="noopener noreferrer">RAW SVG ↗</a>
                    </div>
                  </article>`
        )
        .join("")}
              </div>`
      : `<div class="prod-panel-box"><p style="margin:0; color:var(--silver-hasl);">${dict.docs_empty}</p></div>`
    }
      </div>
    </section>

    <!-- SOUVISEJÍCÍ PRODUKTY -->
    ${related.length
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
        .map((rp) => {
          const rImg = (rp.imageByDiv && rp.imageByDiv[activeDiv]) || rp.image;
          const rName = itemDisplayName(rp, currentLang);
          return `
                      <article class="prod-rel-card" data-prod-go="${rp.id}">
                        ${rImg ? `<img src="${rImg}" alt="${escapeHtml(rName)}" loading="lazy" />` : `<div class="hud-card-wireframe"><span>${escapeHtml(rp.serial)}</span></div>`}
                        <div>
                          <div class="modal-serial">${escapeHtml(rp.serial)} · ${escapeHtml(rp.hp)}</div>
                          <h3>${escapeHtml(rName)}</h3>
                          <p>${escapeHtml(textVal(rp.short))}</p>
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

    <!-- ZÁRUKA & PODPORA -->
    <section class="prod-section">
      <div class="container">
        <div class="sec-head">
          <div>
            <div class="sec-num">${dict.warranty_num}</div>
            <h2>${dict.warranty_heading}</h2>
          </div>
        </div>
        <div class="prod-panel-box">
          <p style="margin:0; color:var(--silver-hasl);">${escapeHtml(textVal(p.warranty) || dict.warranty_empty)}</p>
        </div>
      </div>
    </section>

    ${nav
      ? `<section class="prod-section prod-bottom-nav">
            <div class="container">
              <div class="modal-nav-bar">
                <button type="button" class="pager-btn" data-prod-go="${nav.prevId}">
                  <span class="pager-icon">←</span>
                  <span class="pager-meta">
                    <small>${dict.prev_prod}</small>
                    <strong>${escapeHtml(nav.prev.name)}</strong>
                  </span>
                </button>
                <span class="modal-nav-count">${nav.index + 1} / ${nav.total}</span>
                <button type="button" class="pager-btn pager-btn-next" data-prod-go="${nav.nextId}">
                  <span class="pager-meta">
                    <small>${dict.next_prod}</small>
                    <strong>${escapeHtml(nav.next.name)}</strong>
                  </span>
                  <span class="pager-icon">→</span>
                </button>
              </div>
            </div>
          </section>`
      : ""
    }
  `;

  renderGalleryStage(p);

  document.getElementById("addToCartDetailBtn")?.addEventListener("click", () => {
    DECOY_STORE.addItem(p.id, 1);
    renderProductPage(p.id, { divKey: activeDiv });
    openCartDrawer();
  });

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
  const params = new URLSearchParams(location.search);
  const initialId = params.get("id") || "the-in";
  const initialDiv = params.get("div") || null;
  renderProductPage(initialId, { divKey: initialDiv });

  document.getElementById("langToggleProd")?.addEventListener("click", () => {
    currentLang = currentLang === "cs" ? "en" : "cs";
    setLang(currentLang);
    if (currentProdId) renderProductPage(currentProdId, { divKey: currentDivCtx });
    if (!document.getElementById("cartDrawer").hidden) renderCartDrawer();
  });

  document.getElementById("cartToggleProd")?.addEventListener("click", openCartDrawer);
  document.querySelectorAll("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCartDrawer));

  document.addEventListener("click", (e) => {
    const incBtn = e.target.closest("[data-cart-inc]");
    if (incBtn) {
      DECOY_STORE.updateQty(incBtn.getAttribute("data-cart-inc"), 1);
      updateHeaderUI();
      renderCartDrawer();
      return;
    }
    const decBtn = e.target.closest("[data-cart-dec]");
    if (decBtn) {
      DECOY_STORE.updateQty(decBtn.getAttribute("data-cart-dec"), -1);
      updateHeaderUI();
      renderCartDrawer();
      return;
    }
    const rmBtn = e.target.closest("[data-cart-rm]");
    if (rmBtn) {
      DECOY_STORE.removeItem(rmBtn.getAttribute("data-cart-rm"));
      updateHeaderUI();
      renderCartDrawer();
      return;
    }
    if (e.target.id === "clearCartBtn") {
      DECOY_STORE.clear();
      updateHeaderUI();
      renderCartDrawer();
      if (currentProdId) renderProductPage(currentProdId, { divKey: currentDivCtx });
      return;
    }
    if (e.target.id === "copyCartBtn") {
      const summary = DECOY_STORE.getSummary();
      const lines = summary.entries.map(
        ({ product, qty }) => `- ${qty}× ${itemDisplayName(product, currentLang)} (${product.serial}) — ${DECOY_STORE.formatPrice(product, currentLang)}`
      );
      navigator.clipboard?.writeText(`DECØY ORDER / INQUIRY LIST\n${lines.join("\n")}`).catch(() => { });
      const fb = document.getElementById("cartCopyFeedback");
      if (fb) fb.textContent = I18N[currentLang].cart_copied;
    }
  });

  window.addEventListener("popstate", () => {
    const p = new URLSearchParams(location.search);
    renderProductPage(p.get("id") || "the-in", { divKey: p.get("div") || null });
  });

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxBackdrop")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => {
    const p = getCatalogItem(currentProdId);
    if (!p) return;
    const items = getProductGallery(p, currentDivCtx);
    currentGalleryIdx = (currentGalleryIdx - 1 + items.length) % items.length;
    renderGalleryStage(p);
  });
  document.getElementById("lightboxNext")?.addEventListener("click", () => {
    const p = getCatalogItem(currentProdId);
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
        const p = getCatalogItem(currentProdId);
        if (!p) return;
        const items = getProductGallery(p, currentDivCtx);
        const step = e.key === "ArrowLeft" ? -1 : 1;
        currentGalleryIdx = (currentGalleryIdx + step + items.length) % items.length;
        renderGalleryStage(p);
        return;
      }
    }

    if (e.key === "Escape") {
      closeCartDrawer();
      return;
    }

    const tag = e.target && e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (!document.getElementById("cartDrawer")?.hidden) return;

    if (!currentProdId) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const nav = PRODUCTS[currentProdId] ? getSectionProductNav(currentProdId, currentDivCtx) : null;
      if (nav) {
        const targetId = e.key === "ArrowLeft" ? nav.prevId : nav.nextId;
        history.pushState(null, "", `product.html?id=${targetId}${currentDivCtx ? `&div=${currentDivCtx}` : ""}`);
        renderProductPage(targetId, { divKey: currentDivCtx });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
});
