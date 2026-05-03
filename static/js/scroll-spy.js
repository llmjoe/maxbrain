// Lightweight scroll spy for the article TOC.
// Highlights the link in #toc-nav whose anchor target is currently in view
// and updates the progress bar #toc-progress.

(function () {
  const tocNav = document.getElementById("toc-nav");
  const progressBar = document.getElementById("toc-progress");
  if (!tocNav) return;

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

  let activeIndex = 0;

  function setActive(index) {
    if (index === activeIndex) return;
    targets[activeIndex].link.classList.remove("is-active");
    targets[index].link.classList.add("is-active");
    activeIndex = index;
    if (progressBar) {
      const pct = ((index + 1) / targets.length) * 100;
      progressBar.style.width = pct + "%";
    }
  }

  targets[0].link.classList.add("is-active");
  if (progressBar) progressBar.style.width = (1 / targets.length) * 100 + "%";

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
