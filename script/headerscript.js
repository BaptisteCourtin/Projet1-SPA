fetch("../pages/header.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    })
    .then(() => {
        // ---side nav---
        const navToggle = document.querySelector(".mobile-nav-toggle");
        const sideNav = document.querySelector(".side-nav");
        const body = document.querySelector("body");

        navToggle.addEventListener("click", () => {
            sideNav.classList.toggle("opened");
            body.classList.toggle("opened");
        });

        // ---bouton boutique---
        const boutiqueToggle = document.querySelector(".boutiqueToggle");
        const sideCart = document.querySelector(".sideCart");

        boutiqueToggle.addEventListener("click", () => {
            sideCart.classList.toggle("opened");
        });

        // ---user plouf---
        const user = document.querySelector(".fa-user");
        const droplet1 = document.querySelector(".droplet1");
        const droplet2 = document.querySelector(".droplet2");
        const audio = document.querySelector("#audio");

        user.addEventListener("click", () => {
            if (window.innerWidth >= 800) {
                user.classList.toggle("jump");
                droplet1.classList.toggle("drop1");
                droplet2.classList.toggle("drop2");
                if (user.classList.contains("jump")) {
                    setTimeout(soundplouf, 850);
                }
            }
        });

        const soundplouf = () => {
            audio.play();
        };

        // ---open panier---
        let ajout = document.querySelectorAll(".panier");
        for (let i = 0; i < ajout.length; i++) {
            ajout[i].addEventListener("click", function () {
                ajout[i].innerHTML = "Ajouté !";
            });
        }

        // --- session storage ---
        for (let j = 0; j < sessionStorage.length - 2; j++) {
            // -2 car nb et un truc de base
            const ulCart = document.querySelector(".sideCart");
            const newInCart = document.createElement("li");
            data = sessionStorage.getItem(`item[${j}]`); //donne la value

            newInCart.innerHTML = `${data}`;
            console.log();
            ulCart.appendChild(newInCart);
        }
    });

fetch("../pages/footer.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });
