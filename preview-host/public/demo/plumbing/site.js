(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var backdrop = document.getElementById("nav-backdrop");
  var header = document.querySelector(".site-header");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (backdrop) {
      if (open) backdrop.removeAttribute("hidden");
      else backdrop.setAttribute("hidden", "");
    }
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a") && window.matchMedia("(max-width: 719px)").matches) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 720px)").matches) setOpen(false);
  });

  if (header && document.body.classList.contains("is-home")) {
    var hero = document.querySelector(".hero, .page-hero");
    function onScroll() {
      var y = hero ? hero.getBoundingClientRect().bottom : 0;
      header.classList.toggle("is-solid", y < 72);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
