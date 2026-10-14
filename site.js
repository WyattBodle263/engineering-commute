// Builds the listen buttons and the episode list from episodes.js.
// You shouldn't need to edit this file. Edit episodes.js instead.

(function () {
  "use strict";

  function el(tag, attrs, text) {
    const node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    if (text) node.textContent = text;
    return node;
  }

  // ---- Listen buttons ----
  const listen = document.getElementById("listen-buttons");
  const buttons = [
    { key: "spotify", label: "Listen on Spotify", cls: "btn btn--primary" },
    { key: "apple",   label: "Apple Podcasts",    cls: "btn" },
    { key: "rss",     label: "RSS feed",          cls: "btn btn--ghost" }
  ];
  let shown = 0;
  buttons.forEach(function (b) {
    const url = (SHOW[b.key] || "").trim();
    if (!url) return;
    const a = el("a", { href: url, class: b.cls, target: "_blank", rel: "noopener" }, b.label);
    listen.appendChild(a);
    shown++;
  });
  if (shown === 0) document.getElementById("listen-note").hidden = false;

  // ---- Contact ----
  const email = (SHOW.email || "").trim();
  if (email) {
    const p = document.getElementById("contact");
    p.append("Got a topic you want explained? ");
    p.appendChild(el("a", { href: "mailto:" + email }, email));
    p.hidden = false;
  }

  // ---- Episodes ----
  const list = document.getElementById("episode-list");
  const fallback = (SHOW.spotify || SHOW.apple || "").trim();

  EPISODES.slice().sort(function (a, b) { return a.number - b.number; }).forEach(function (ep) {
    const li = el("li", { class: "episode" + (ep.status === "out" ? " is-out" : "") });

    const num = el("div", { class: "episode__num", "aria-hidden": "true" }, String(ep.number).padStart(2, "0"));
    const body = el("div", { class: "episode__body" });

    const meta = el("p", { class: "episode__meta" });
    meta.textContent = "Episode " + ep.number + (ep.minutes ? "  ·  about " + ep.minutes + " min" : "");
    body.appendChild(meta);
    body.appendChild(el("h3", null, ep.title));
    body.appendChild(el("p", { class: "episode__desc" }, ep.description));

    const action = el("div", { class: "episode__action" });
    const epLinks = [
      { url: (ep.spotify || "").trim(), label: "Spotify", cls: "btn btn--small btn--primary" },
      { url: (ep.apple || "").trim(),   label: "Apple Podcasts", cls: "btn btn--small" }
    ].filter(function (l) { return l.url; });
    if (ep.status === "out" && epLinks.length) {
      epLinks.forEach(function (l) {
        action.appendChild(el("a", { href: l.url, class: l.cls, target: "_blank", rel: "noopener",
          "aria-label": "Listen to episode " + ep.number + " on " + l.label }, l.label));
      });
    } else if (ep.status === "out" && fallback) {
      action.appendChild(el("a", { href: fallback, class: "btn btn--small btn--primary", target: "_blank", rel: "noopener" }, "Listen"));
    } else if (ep.status === "out") {
      action.appendChild(el("span", { class: "badge badge--out" }, "Out now"));
    } else {
      action.appendChild(el("span", { class: "badge" }, "Coming soon"));
    }
    body.appendChild(action);

    li.appendChild(num);
    li.appendChild(body);
    list.appendChild(li);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
