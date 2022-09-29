
const navToggle = document.querySelector(".mobile-nav-toggle");
const sideNav = document.querySelector(".side-nav");
const body = document.querySelector("body");

navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('opened');
    body.classList.toggle('opened');
})
let ajout = document.querySelectorAll(".panier");
for (let i = 0; i < ajout.length; i++) {
    ajout[i].addEventListener('click', function () {
        ajout[i].innerHTML = "Ajouté !";
    })
}