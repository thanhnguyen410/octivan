document.addEventListener("DOMContentLoaded", function (e) {
  const menuWrap = document.querySelector(".header-menu-wrap");
  const openMenu = document.querySelector(".header-open-menu");
  const closeMenu = document.querySelector(".header-close-menu");

  openMenu.addEventListener("click", function () {
    menuWrap.classList.add("header-menu-wrap-active");
    return false;
  });

  closeMenu.addEventListener("click", function () {
    menuWrap.classList.remove("header-menu-wrap-active");
  });

  document.addEventListener("click", function (e) {
    if (
      !menuWrap.contains(e.target) &&
      !e.target.matches(".header-open-menu")
    ) {
      menuWrap.classList.remove("header-menu-wrap-active");
    }
  });
});
