(function () {
  /* definitions for  */
  const AERRORS = {
    400: [
      { code: "A002", meaning: "Parsing Error", solution: "Request data is malformed - Reload" },
      { code: "A005(3)", meaning: "Service unsupported on browser", solution: "Change to a different browser" }
    ],
    401: [{ code: "A006", meaning: "Credentials invalid", solution: "One or more of the entered fields are invalid - Retry" }],
    403: [{ code: "A007", meaning: "Credentials forbidden", solution: "You don't have access to this page - Don't try again." }],
    404: [
      { code: "A001", meaning: "Page not found", solution: "You should not be able to summon this box" },
      { code: "A001(1)", meaning: "Previous page not found/missing", solution: "Not your fault, do nothing." },
      { code: "A998", meaning: "Under Construction", solution: "Let the dev do their thing." }
    ],
    422: [{ code: "A004", meaning: "Protocol violation", solution: "Your browser is acting up - Reload" }],
    426: [{ code: "A005(1)", meaning: "Service outdated", solution: "Update the service" }],
    500: [{ code: "A003", meaning: "Server overload/Server error", solution: "Serverside problem - Reload" }],
    501: [{ code: "A005(2)", meaning: "Service unimplemented on version", solution: "Update your browser" }],
    503: [{ code: "A005", meaning: "Service unavailable (for whatever reason)", solution: "Change to a different browser, or try again later" }],
    504: [{ code: "A008", meaning: "Response duration timeout", solution: "Reload" }]
  };

  function getAError(status, preferredCode = null) {
        const list = AERRORS[status];
        if (!list) return null;
        if (!preferredCode) return list[0];
        return list.find(e => e.code === preferredCode) || list[0];
  }

  /* showing the error with UI */
  function showError(title, details) {
    let container = document.getElementById("aerror-overlay");

    if (!container) {
      container = document.createElement("div");
      container.id = "aerror-overlay";
      container.style.cssText = `
        position: fixed;
        bottom: 16px;
        right: 16px;
        max-width: 420px;
        background: #020617;
        color: #e5e7eb;
        font-family: system-ui, sans-serif;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,.35);
        z-index: 999999;
      `;
      document.body.appendChild(container);
    }

    const box = document.createElement("div");
    box.style.cssText = `
      margin-bottom: 12px;
      padding: 12px;
      background: #020617;
      border-left: 4px solid #38bdf8;
      border-radius: 4px;
    `;

    box.innerHTML = `
      <strong>${title}</strong>
      ${details ? `<div style="margin-top:6px;font-size:13px;opacity:.85;">${details}</div>` : ""}
      <button style="
        margin-top:8px;
        background:#1e293b;
        color:#fff;
        border:none;
        padding:4px 8px;
        border-radius:4px;
        cursor:pointer;
      ">Dismiss</button>
    `;

    box.querySelector("button").onclick = () => box.remove();
    container.appendChild(box);
  }

  const curTime = now = () => new Date().toLocaleString();
  /* intercepting the fetch */
  const originalFetch = window.fetch;

  window.fetch = async function (...args) {
    try {
      const response = await originalFetch.apply(this, args);

      if (!response.ok) {
        const aerror = getAError(response.status);
        const body = await response.clone().text().catch(() => "");

        if (aerror) {
          showError(
            `${aerror.code} — ${aerror.meaning}`,
            `${aerror.solution} <br> HTTP ${response.status} • ${response.url}`
          );
          console.error(`${aerror.code} (${aerror.meaning}) @ ${now()}`)
        } else {
          showError(
            `HTTP ${response.status} — ${response.statusText}`,
            body || response.url
          );
        }
      }

      return response;
    } catch (err) {
      showError("A003 — Server overload/Server error", err.message);
      console.error(`A003 (Server overload/Server error) @ ${now()}`)
      throw err;
    }
  };

  /* =========================
     JS Runtime Errors
     ========================= */
  window.addEventListener("error", (event) => {
    showError(
      "A002(1) — Javascript Error (Runtime)",
      `${event.message}\n${event.filename}:${event.lineno}:${event.colno}`
    );
  });

  window.addEventListener("unhandledrejection", (event) => {
    showError(
      "A002(2) — Javascript Error (Unhandled Promise)",
      event.reason?.stack || String(event.reason)
    );
  });
})();