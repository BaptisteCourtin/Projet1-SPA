// top-navbar
const navToggle = document.querySelector(".mobile-nav-toggle");
const sideNav = document.querySelector(".side-nav");
const body = document.querySelector("body");

navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('opened');
    body.classList.toggle('opened');
})

// 



