/* Oak & Main Plumbing — SAMPLE */
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var back = document.getElementById("nav-backdrop");
  if (!btn || !nav) return;
  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (back) {
      back.classList.toggle("is-on", open);
      if (open) back.removeAttribute("hidden");
      else back.setAttribute("hidden", "");
    }
  }
  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });
  if (back) back.addEventListener("click", function () { setOpen(false); });
  var links = nav.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () { setOpen(false); });
  }
})();

(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  function sync() {
    header.classList.toggle("is-solid", window.scrollY > 8);
  }
  window.addEventListener("scroll", sync, { passive: true });
  sync();
})();
