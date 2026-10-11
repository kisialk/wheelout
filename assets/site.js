(function () {
  var drawer = document.getElementById("sidebar-drawer");
  var toggles = document.querySelectorAll(".sidebar-toggle");
  function setOpen(open) {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    toggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setOpen(!drawer.classList.contains("open"));
    });
  });
  if (drawer) {
    drawer.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", function () { setOpen(false); });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
  var nav = document.querySelector(".site-nav");
  document.querySelectorAll(".menu-btn").forEach(function (menu) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      document.querySelectorAll(".menu-btn").forEach(function (b) {
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  });
})();
