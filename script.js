const menuMobile = document.querySelector(".menu-mobile-direito");

const btnMenuOpen = document.querySelector(".btn-menu-mobile-open");

const btnMenuClose = document.querySelector(".btn-menu-mobile-close");

const observadorX = document.querySelector(".menu-mobile-observador-x");

const observadorY = document.querySelector(".menu-mobile-observador-y");

const observadorZ = document.querySelector(".menu-mobile-observador-z");

btnMenuOpen.addEventListener('click', function () {
    menuMobile.classList.add('menu-mobile-open');
})

btnMenuClose.addEventListener('click', function () {
    menuMobile.classList.remove('menu-mobile-open');
})

observadorX.addEventListener('click', function () {
    menuMobile.classList.remove('menu-mobile-open');
})

observadorY.addEventListener('click', function () {
    menuMobile.classList.remove('menu-mobile-open');
})

observadorZ.addEventListener('click', function () {
    menuMobile.classList.remove('menu-mobile-open');
})