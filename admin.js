/* DECØY / TEATRO\\\SVJÖTLO — Admin Konzole (napojená na backend/server.js) */

let currentUser = null;
let adminState = null;
let activeAdminTab = "inquiries";

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setStatus(msg, isError = false) {
  const el = document.getElementById("adminStatusBar");
  if (!el) return;
  el.textContent = msg || "";
  el.classList.toggle("is-error", Boolean(isError));
}

async function apiJson(url, options = {}) {
  const res = await fetch(url, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "decoy-admin",
      ...(options.headers || {}),
    },
    ...options,
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  return { status: res.status, ok: res.ok, data };
}

function showView(view) {
  document.getElementById("adminOfflineBox").hidden = view !== "offline";
  document.getElementById("adminLoginView").hidden = view !== "login";
  document.getElementById("adminDashboard").hidden = view !== "dashboard";
  const badge = document.getElementById("adminUserBadge");
  const logoutBtn = document.getElementById("adminLogoutBtn");
  if (view === "dashboard" && currentUser) {
    badge.textContent = `ADMIN // ${currentUser.username.toUpperCase()}`;
    badge.hidden = false;
    logoutBtn.hidden = false;
    document.getElementById("adminSeedBanner").hidden = !currentUser.isTestSeed;
  } else {
    badge.hidden = true;
    logoutBtn.hidden = true;
  }
}

async function refreshAdminData() {
  const [{ ok, status, data }] = await Promise.all([apiJson("/api/admin/state")]);
  if (status === 401) {
    currentUser = null;
    showView("login");
    return false;
  }
  if (!ok || !data || !data.ok) {
    setStatus(data?.error || "Nepodařilo se načíst data adminu.", true);
    return false;
  }
  adminState = data;
  if (typeof applyPublicServerState === "function") {
    applyPublicServerState(data);
  }
  renderActiveTab();
  return true;
}

function renderInquiriesTab() {
  const inqs = adminState?.inquiries || [];
  const customCount = (adminState?.customProducts || []).length;
  const overridesCount = Object.keys(adminState?.productOverrides || {}).length;
  const blogCount = (adminState?.blogPosts || []).length;

  return `
    <div class="admin-kpi-grid">
      <article class="hud-card"><div class="hud-card-body"><div class="sec-num">POPTÁVKY</div><strong class="admin-kpi-num">${inqs.length}</strong></div></article>
      <article class="hud-card"><div class="hud-card-body"><div class="sec-num">ÚPRAVY KATALOGU</div><strong class="admin-kpi-num">${overridesCount + customCount}</strong></div></article>
      <article class="hud-card"><div class="hud-card-body"><div class="sec-num">BLOK PŘÍSPĚVKY</div><strong class="admin-kpi-num">${blogCount}</strong></div></article>
      <article class="hud-card"><div class="hud-card-body"><div class="sec-num">ADMIN ÚČTY</div><strong class="admin-kpi-num">${(adminState?.users || []).length}</strong></div></article>
    </div>

    <div class="sec-head" style="margin-top:26px;">
      <div>
        <div class="sec-num">01 // POPTÁVKY Z WEBU</div>
        <h2>PŘIJATÉ OBJEDNÁVKY &amp; BRIEF</h2>
      </div>
    </div>
    ${
      inqs.length
        ? `<div class="admin-list">
            ${inqs
              .map(
                (q) => `
              <article class="hud-card">
                <div class="hud-card-head">
                  <span>${esc(q.id)} · ${esc(q.type === "decoy_order" ? "DECØY KOŠÍK" : "TEATRO BRIEF")} · ${esc(q.division)}</span>
                  <span>${esc(q.createdAt.slice(0, 16).replace("T", " "))}</span>
                </div>
                <div class="hud-card-body">
                  <h3>${esc(q.summary)}</h3>
                  <p><strong>Kontakt:</strong> ${esc(q.contact)}</p>
                  <p style="white-space:pre-line;">${esc(q.notes)}</p>
                  ${q.scopes && q.scopes.length ? `<div class="modal-meta-row">${q.scopes.map((s) => `<span class="modal-chip">${esc(s)}</span>`).join("")}</div>` : ""}
                  <div class="admin-row-actions">
                    <select class="hud-select" data-inq-status="${esc(q.id)}" aria-label="Stav poptávky">
                      <option value="new" ${q.status === "new" ? "selected" : ""}>NOVÉ</option>
                      <option value="in_progress" ${q.status === "in_progress" ? "selected" : ""}>ŘEŠÍ SE</option>
                      <option value="done" ${q.status === "done" ? "selected" : ""}>VYŘÍZENO</option>
                    </select>
                    <button type="button" class="btn-outline btn-xs" data-del-inq="${esc(q.id)}">SMAZAT</button>
                  </div>
                </div>
              </article>`
              )
              .join("")}
          </div>`
        : `<div class="hud-empty-box"><p>Zatím nepřišly žádné poptávky z košíku ani z TEATRO formuláře.</p></div>`
    }
  `;
}

function renderProductsTab() {
  const overrides = adminState?.productOverrides || {};
  return `
    <article class="hud-card" style="margin-bottom:24px;">
      <div class="hud-card-head">
        <span>+ NOVÝ PRODUKT DO KATALOGU</span>
        <span>SERVER DB</span>
      </div>
      <div class="hud-card-body">
        <form id="adminCreateProdForm" class="admin-grid-form">
          <input name="name" class="blog-input" type="text" placeholder="Název produktu (např. DMX_SPLIT 4)" required />
          <input name="serial" class="blog-input" type="text" placeholder="Kód (např. LUX // 09)" />
          <select name="division" class="hud-select">
            <option value="AUD">AUD (ZVUK)</option>
            <option value="LUX">LUX (SVĚTLO)</option>
            <option value="VID">VID (VIDEO)</option>
          </select>
          <input name="price" class="blog-input" type="number" min="0" placeholder="Cena Kč (prázdné = na dotaz)" />
          <select name="availability" class="hud-select">
            <option value="in_stock">Skladem</option>
            <option value="on_order">Na objednávku</option>
            <option value="prototype">Prototyp</option>
            <option value="concept">Koncept</option>
          </select>
          <input name="shortCs" class="blog-input" type="text" placeholder="Krátký popis produktu..." style="grid-column: 1 / -1;" />
          <div>
            <button type="submit" class="btn-outline btn-solid">+ PŘIDAT PRODUKT</button>
          </div>
        </form>
      </div>
    </article>

    <div class="admin-list">
      ${CATALOG_ITEMS.map((item) => {
        const hasOv = Boolean(overrides[item.id] || item.fromAdmin);
        const name = itemDisplayName(item, "cs");
        return `
          <article class="hud-card" data-prod-row="${esc(item.id)}">
            <div class="hud-card-head">
              <span>${esc(item.serial)} · ${esc(item.division)} ${item.fromAdmin ? "· ADMIN" : hasOv ? "· UPRAVENO" : ""}</span>
              <span>${esc(item.brand)}</span>
            </div>
            <div class="hud-card-body">
              <div class="admin-prod-edit">
                <strong>${esc(name)}</strong>
                <input type="number" min="0" class="blog-input" data-prod-price="${esc(item.id)}" value="${item.price === null ? "" : esc(item.price)}" placeholder="Na dotaz" />
                <select class="hud-select" data-prod-avail="${esc(item.id)}">
                  ${[
                    ["in_stock", "Skladem"],
                    ["on_order", "Na objednávku"],
                    ["prototype", "Prototyp"],
                    ["in_development", "Rozpracováno"],
                    ["concept", "Koncept"],
                    ["tbd", "Bude upřesněno"],
                  ]
                    .map(([val, lbl]) => `<option value="${val}" ${item.availability === val ? "selected" : ""}>${lbl}</option>`)
                    .join("")}
                </select>
                <div class="admin-row-actions">
                  <button type="button" class="btn-outline btn-xs" data-save-prod="${esc(item.id)}">ULOŽIT</button>
                  ${hasOv ? `<button type="button" class="btn-outline btn-xs" data-reset-prod="${esc(item.id)}">${item.fromAdmin ? "SMAZAT" : "RESET"}</button>` : ""}
                </div>
              </div>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderBlogTab() {
  const posts = adminState?.blogPosts || [];
  return `
    <article class="hud-card" style="margin-bottom:24px;">
      <div class="hud-card-head">
        <span>+ PŘÍSPĚVEK DO BLOKU PRO VŠECHNY NÁVŠTĚVNÍKY</span>
        <span>GLOBAL DB</span>
      </div>
      <div class="hud-card-body">
        <form id="adminBlogForm" class="admin-form">
          <div class="admin-row-actions">
            <select name="division" class="hud-select">
              <option value="AUD">AUD (ZVUK)</option>
              <option value="LUX">LUX (SVĚTLO)</option>
              <option value="VID">VID (VIDEO)</option>
            </select>
            <input name="title" class="blog-input" type="text" placeholder="Nadpis příspěvku..." required style="flex:1;" />
          </div>
          <textarea name="body" class="blog-textarea" placeholder="Text poznámky nebo vývojového záznamu..." required></textarea>
          <div>
            <button type="submit" class="btn-outline btn-solid">PUBLIKOVAT PŘÍSPĚVEK</button>
          </div>
        </form>
      </div>
    </article>

    ${
      posts.length
        ? `<div class="admin-list">
            ${posts
              .map(
                (p) => `
              <article class="hud-card">
                <div class="hud-card-head">
                  <span>${esc(p.division)} // LOG</span>
                  <span>${esc(p.date)}</span>
                </div>
                <div class="hud-card-body">
                  <h3>${esc(p.title)}</h3>
                  <p>${esc(p.body)}</p>
                  <div><button type="button" class="btn-outline btn-xs" data-del-blog="${esc(p.id)}">SMAZAT PŘÍSPĚVEK</button></div>
                </div>
              </article>`
              )
              .join("")}
          </div>`
        : `<div class="hud-empty-box"><p>Zatím nebyly přes admin přidány žádné globální příspěvky.</p></div>`
    }
  `;
}

function renderSoftwareTab() {
  const sw = adminState?.softwareItems || { decoy: {}, teatro: {} };
  const rows = [];
  for (const brand of ["decoy", "teatro"]) {
    for (const div of ["AUD", "LUX", "VID"]) {
      for (const item of sw[brand]?.[div] || []) {
        rows.push({ brand, div, item });
      }
    }
  }
  return `
    <article class="hud-card" style="margin-bottom:24px;">
      <div class="hud-card-head">
        <span>+ SOFTWARE POLOŽKA (DECØY / TEATRO)</span>
        <span>GLOBAL DB</span>
      </div>
      <div class="hud-card-body">
        <form id="adminSoftwareForm" class="admin-grid-form">
          <select name="brand" class="hud-select">
            <option value="decoy">DECØY</option>
            <option value="teatro">TEATRO\\\SVJÖTLO</option>
          </select>
          <select name="division" class="hud-select">
            <option value="AUD">AUD (ZVUK)</option>
            <option value="LUX">LUX (SVĚTLO)</option>
            <option value="VID">VID (VIDEO)</option>
          </select>
          <input name="nameCs" class="blog-input" type="text" placeholder="Název software..." required />
          <input name="code" class="blog-input" type="text" placeholder="Kód / verze (např. FW // v1.0)" />
          <input name="url" class="blog-input" type="url" placeholder="URL repozitáře / stažení (volitelné)" />
          <input name="shortCs" class="blog-input" type="text" placeholder="Popis nástroje / firmware..." required style="grid-column: 1 / -1;" />
          <div>
            <button type="submit" class="btn-outline btn-solid">+ PŘIDAT SOFTWARE</button>
          </div>
        </form>
      </div>
    </article>

    ${
      rows.length
        ? `<div class="admin-list">
            ${rows
              .map(
                ({ brand, div, item }) => `
              <article class="hud-card">
                <div class="hud-card-head">
                  <span>${esc(brand.toUpperCase())} · ${esc(div)} · ${esc(item.code)}</span>
                  <span>${esc(item.status?.cs || "")}</span>
                </div>
                <div class="hud-card-body">
                  <h3>${esc(item.name?.cs || item.name)}</h3>
                  <p>${esc(item.short?.cs || item.short)}</p>
                  <div><button type="button" class="btn-outline btn-xs" data-del-sw="${esc(item.id)}">ODSTRANIT</button></div>
                </div>
              </article>`
              )
              .join("")}
          </div>`
        : `<div class="hud-empty-box"><p>Zatím není přidaná žádná software položka.</p></div>`
    }
  `;
}

function renderSecurityTab() {
  const users = adminState?.users || [];
  const logs = (adminState?.auditLog || []).slice(0, 25);
  return `
    <div class="cards-grid-2">
      <article class="hud-card">
        <div class="hud-card-head">
          <span>ZMĚNA HESLA PŘIHLÁŠENÉHO ÚČTU</span>
          <span>${esc(currentUser?.username)}</span>
        </div>
        <div class="hud-card-body">
          <form id="adminChangePassForm" class="admin-form">
            <label class="admin-field">
              <span>SOUČASNÉ HESLO</span>
              <input name="currentPassword" class="blog-input" type="password" autocomplete="current-password" required />
            </label>
            <label class="admin-field">
              <span>NOVÉ HESLO (MIN. 8 ZNAKŮ)</span>
              <input name="newPassword" class="blog-input" type="password" autocomplete="new-password" minlength="8" required />
            </label>
            <div><button type="submit" class="btn-outline btn-solid">ZMĚNIT HESLO</button></div>
          </form>
        </div>
      </article>

      <article class="hud-card">
        <div class="hud-card-head">
          <span>VYTVOŘIT DALŠÍ ADMIN ÚČET (PRO TESTOVÁNÍ)</span>
          <span>${users.length} ÚČTŮ</span>
        </div>
        <div class="hud-card-body">
          <form id="adminCreateUserForm" class="admin-form">
            <label class="admin-field">
              <span>NOVÉ UŽIVATELSKÉ JMÉNO</span>
              <input name="username" class="blog-input" type="text" placeholder="tester" required />
            </label>
            <label class="admin-field">
              <span>HESLO (MIN. 8 ZNAKŮ)</span>
              <input name="password" class="blog-input" type="password" minlength="8" required />
            </label>
            <div><button type="submit" class="btn-outline btn-solid">VYTVOŘIT ÚČET</button></div>
          </form>
          <div class="admin-user-list">
            ${users
              .map(
                (u) => `
              <div class="admin-user-row">
                <span><strong>${esc(u.username)}</strong> (${esc(u.role)}) ${u.lastLoginAt ? `· přihlášen ${esc(u.lastLoginAt.slice(0, 16).replace("T", " "))}` : ""}</span>
                ${currentUser && u.id !== currentUser.id ? `<button type="button" class="btn-outline btn-xs" data-del-user="${esc(u.username)}">SMAZAT</button>` : `<span class="modal-chip">AKTIVNÍ</span>`}
              </div>`
              )
              .join("")}
          </div>
        </div>
      </article>
    </div>

    <div class="sec-head" style="margin-top:26px;">
      <div>
        <div class="sec-num">SECURITY // AUDIT LOG</div>
        <h2>POSLEDNÍ AKCE</h2>
      </div>
    </div>
    <div class="admin-list">
      ${logs
        .map(
          (l) => `
        <div class="admin-audit-row">
          <span>${esc(l.at.slice(0, 19).replace("T", " "))}</span>
          <strong>${esc(l.actor)}</strong>
          <span>${esc(l.action)}</span>
          <span>${esc(l.target)}</span>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderActiveTab() {
  document.querySelectorAll("[data-admin-tab]").forEach((btn) => {
    const active = btn.getAttribute("data-admin-tab") === activeAdminTab;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  const body = document.getElementById("adminTabBody");
  if (!body) return;
  body.innerHTML = {
    inquiries: renderInquiriesTab,
    products: renderProductsTab,
    blog: renderBlogTab,
    software: renderSoftwareTab,
    security: renderSecurityTab,
  }[activeAdminTab]();
}

async function handleBodyClick(e) {
  const saveProdBtn = e.target.closest("[data-save-prod]");
  if (saveProdBtn) {
    const id = saveProdBtn.getAttribute("data-save-prod");
    const priceVal = document.querySelector(`[data-prod-price="${id}"]`)?.value ?? "";
    const availVal = document.querySelector(`[data-prod-avail="${id}"]`)?.value ?? "on_order";
    const { ok, data } = await apiJson(`/api/admin/products/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: JSON.stringify({ price: priceVal === "" ? null : Number(priceVal), availability: availVal }),
    });
    setStatus(ok ? `Produkt ${id} uložen.` : data?.error || "Chyba uložení.", !ok);
    if (ok) await refreshAdminData();
    return;
  }

  const resetProdBtn = e.target.closest("[data-reset-prod]");
  if (resetProdBtn) {
    const id = resetProdBtn.getAttribute("data-reset-prod");
    const { ok, data } = await apiJson(`/api/admin/products/${encodeURIComponent(id)}`, { method: "DELETE" });
    setStatus(ok ? `Změna produktu ${id} odstraněna.` : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
    return;
  }

  const delBlogBtn = e.target.closest("[data-del-blog]");
  if (delBlogBtn) {
    const id = delBlogBtn.getAttribute("data-del-blog");
    const { ok, data } = await apiJson(`/api/admin/blog/${encodeURIComponent(id)}`, { method: "DELETE" });
    setStatus(ok ? "Příspěvek smazán." : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
    return;
  }

  const delSwBtn = e.target.closest("[data-del-sw]");
  if (delSwBtn) {
    const id = delSwBtn.getAttribute("data-del-sw");
    const { ok, data } = await apiJson(`/api/admin/software/${encodeURIComponent(id)}`, { method: "DELETE" });
    setStatus(ok ? "Software položka odstraněna." : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
    return;
  }

  const delInqBtn = e.target.closest("[data-del-inq]");
  if (delInqBtn) {
    const id = delInqBtn.getAttribute("data-del-inq");
    const { ok, data } = await apiJson(`/api/admin/inquiries/${encodeURIComponent(id)}`, { method: "DELETE" });
    setStatus(ok ? `Poptávka ${id} smazána.` : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
    return;
  }

  const delUserBtn = e.target.closest("[data-del-user]");
  if (delUserBtn) {
    const uname = delUserBtn.getAttribute("data-del-user");
    const { ok, data } = await apiJson(`/api/auth/users/${encodeURIComponent(uname)}`, { method: "DELETE" });
    setStatus(ok ? `Účet ${uname} smazán.` : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
  }
}

async function handleBodyChange(e) {
  const statusSel = e.target.closest("[data-inq-status]");
  if (!statusSel) return;
  const id = statusSel.getAttribute("data-inq-status");
  const { ok, data } = await apiJson(`/api/admin/inquiries/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify({ status: statusSel.value }),
  });
  setStatus(ok ? `Stav poptávky ${id} aktualizován.` : data?.error || "Chyba změny stavu.", !ok);
  if (ok) await refreshAdminData();
}

async function handleBodySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  if (form.id === "adminCreateProdForm") {
    const { ok, data } = await apiJson("/api/admin/products", {
      method: "POST",
      body: JSON.stringify({
        name: fd.get("name"),
        serial: fd.get("serial"),
        division: fd.get("division"),
        price: fd.get("price") ? Number(fd.get("price")) : null,
        availability: fd.get("availability"),
        shortCs: fd.get("shortCs"),
      }),
    });
    setStatus(ok ? `Produkt ${data.product.name} přidán.` : data?.error || "Chyba přidání.", !ok);
    if (ok) await refreshAdminData();
  } else if (form.id === "adminBlogForm") {
    const { ok, data } = await apiJson("/api/admin/blog", {
      method: "POST",
      body: JSON.stringify({ division: fd.get("division"), title: fd.get("title"), body: fd.get("body") }),
    });
    setStatus(ok ? "Globální příspěvek publikován." : data?.error || "Chyba publikace.", !ok);
    if (ok) await refreshAdminData();
  } else if (form.id === "adminSoftwareForm") {
    const { ok, data } = await apiJson("/api/admin/software", {
      method: "POST",
      body: JSON.stringify({
        brand: fd.get("brand"),
        division: fd.get("division"),
        nameCs: fd.get("nameCs"),
        code: fd.get("code"),
        url: fd.get("url"),
        shortCs: fd.get("shortCs"),
      }),
    });
    setStatus(ok ? "Software položka přidána." : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
  } else if (form.id === "adminChangePassForm") {
    const { ok, data } = await apiJson("/api/auth/change-password", {
      method: "POST",
      body: JSON.stringify({ currentPassword: fd.get("currentPassword"), newPassword: fd.get("newPassword") }),
    });
    if (ok && data?.user) {
      currentUser = data.user;
      document.getElementById("adminSeedBanner").hidden = true;
    }
    setStatus(ok ? "Heslo změněno a nová relace uložena." : data?.error || "Chyba změny hesla.", !ok);
    if (ok) await refreshAdminData();
  } else if (form.id === "adminCreateUserForm") {
    const { ok, data } = await apiJson("/api/auth/users", {
      method: "POST",
      body: JSON.stringify({ username: fd.get("username"), password: fd.get("password") }),
    });
    setStatus(ok ? `Admin účet ${data.user.username} vytvořen.` : data?.error || "Chyba.", !ok);
    if (ok) await refreshAdminData();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  if (location.protocol === "file:") {
    showView("offline");
    return;
  }

  try {
    const me = await apiJson("/api/auth/me");
    if (!me.ok || !me.data || typeof me.data.authenticated !== "boolean") {
      showView("offline");
      return;
    }
    if (me.data.authenticated) {
      currentUser = me.data.user;
      showView("dashboard");
      await refreshAdminData();
    } else {
      showView("login");
    }
  } catch {
    showView("offline");
    return;
  }

  document.getElementById("adminLoginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fb = document.getElementById("loginFeedback");
    fb.textContent = "";
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const { ok, data } = await apiJson("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (!ok || !data?.authenticated) {
      fb.textContent = data?.error || "Přihlášení se nezdařilo.";
      fb.classList.add("is-error");
      return;
    }
    currentUser = data.user;
    document.getElementById("loginPassword").value = "";
    showView("dashboard");
    setStatus(`Přihlášen jako ${currentUser.username}.`);
    await refreshAdminData();
  });

  document.getElementById("adminLogoutBtn")?.addEventListener("click", async () => {
    await apiJson("/api/auth/logout", { method: "POST", body: "{}" });
    currentUser = null;
    adminState = null;
    showView("login");
  });

  document.querySelector(".admin-tabs")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-admin-tab]");
    if (!btn) return;
    activeAdminTab = btn.getAttribute("data-admin-tab");
    renderActiveTab();
  });

  const body = document.getElementById("adminTabBody");
  body?.addEventListener("click", handleBodyClick);
  body?.addEventListener("change", handleBodyChange);
  body?.addEventListener("submit", handleBodySubmit);
});
