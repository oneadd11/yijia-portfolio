(function () {
  function setActiveNavigation() {
    var page = document.body.dataset.page;
    var activeLink = document.querySelector('[data-nav="' + page + '"]');

    if (activeLink) {
      activeLink.classList.add("is-active");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  function setupMobileNavigation() {
    var toggle = document.querySelector(".menu-toggle");
    var navigation = document.querySelector(".primary-nav");

    if (!toggle || !navigation) {
      return;
    }

    function closeMenu() {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.innerHTML = '<span class="menu-symbol" aria-hidden="true">Menu</span>';
    }

    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.innerHTML = isOpen
        ? '<span class="menu-symbol" aria-hidden="true">Close</span>'
        : '<span class="menu-symbol" aria-hidden="true">Menu</span>';
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  window.addEventListener("DOMContentLoaded", function () {
    setActiveNavigation();
    setupMobileNavigation();
    setCurrentYear();
  });
})();
