// Scroll spy + ausklappbares TOC.
//
// 1. Toggle: rail/panel Umschaltung, Praeferenz in localStorage.
// 2. Spy: setzt is-active auf Link der gerade sichtbaren Sektion.
// 3. Progress: aktualisiert Progress-Bar im Rail (vertikal) und im Panel.

(function () {
  const layout = document.getElementById("article-layout");
  const toc = document.getElementById("article-toc");
  const tocNav = document.getElementById("toc-nav");
  const panel = document.getElementById("toc-panel");
  const toggleBtn = toc ? toc.querySelector(".toc__toggle") : null;
  const closeBtn = toc ? toc.querySelector(".toc__close") : null;
  const progressBar = document.getElementById("toc-progress");
  const railProgressBar = document.getElementById("toc-rail-progress-bar");
  const railCount = document.getElementById("toc-rail-count");

  if (!toc || !tocNav) return;

  const STORAGE_KEY = "maxbrain.toc.open";

  // ── Toggle ────────────────────────────────────────────────────────────────
  function setOpen(open) {
    if (open) {
      toc.classList.add("is-open");
      if (layout) layout.classList.add("toc-open");
      if (panel) panel.hidden = false;
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.setAttribute("aria-label", "Inhaltsverzeichnis einklappen");
      }
    } else {
      toc.classList.remove("is-open");
      if (layout) layout.classList.remove("toc-open");
      if (panel) panel.hidden = true;
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.setAttribute("aria-label", "Inhaltsverzeichnis ausklappen");
      }
    }
    try { localStorage.setItem(STORAGE_KEY, open ? "1" : "0"); } catch (e) {}
  }

  function toggle() { setOpen(!toc.classList.contains("is-open")); }

  // Init: gespeicherte Praeferenz nutzen, sonst collapsed.
  let initial = "0";
  try { initial = localStorage.getItem(STORAGE_KEY) || "0"; } catch (e) {}
  setOpen(initial === "1");

  if (toggleBtn) toggleBtn.addEventListener("click", toggle);
  if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));

  // ── Spy ───────────────────────────────────────────────────────────────────
  const links = Array.from(tocNav.querySelectorAll("a[href^='#']"));
  if (!links.length) return;

  const targets = links
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      const el = document.getElementById(id);
      return el ? { link, el } : null;
    })
    .filter(Boolean);

  if (!targets.length) return;

  if (railCount) railCount.textContent = String(targets.length).padStart(2, "0");

  let activeIndex = 0;

  function setActive(index) {
    if (index === activeIndex) return;
    targets[activeIndex].link.classList.remove("is-active");
    targets[index].link.classList.add("is-active");
    activeIndex = index;
    const pct = ((index + 1) / targets.length) * 100;
    if (progressBar) progressBar.style.width = pct + "%";
    if (railProgressBar) railProgressBar.style.height = pct + "%";
  }

  targets[0].link.classList.add("is-active");
  const initialPct = (1 / targets.length) * 100;
  if (progressBar) progressBar.style.width = initialPct + "%";
  if (railProgressBar) railProgressBar.style.height = initialPct + "%";

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .forEach((e) => {
          const idx = targets.findIndex((t) => t.el === e.target);
          if (idx >= 0) setActive(idx);
        });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
  );

  targets.forEach((t) => observer.observe(t.el));
})();
