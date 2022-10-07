// mise en place du Ajax : Amélie
fetch("../pages/header.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    })
    .then(() => {
        // Baptiste
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
                    setTimeout(soundplouf, 1200);
                }
            }
        });

        const soundplouf = () => {
            audio.play();
        };

        // --- session storage ---
        for (let j = 0; j < sessionStorage.length - 1; j++) {
            const ulCart = document.querySelector(".sideCart");
            const newInCart = document.createElement("li");
            data = sessionStorage.getItem(`item[${j}]`); //donne la value

            newInCart.innerHTML = `${data}`;
            ulCart.appendChild(newInCart);
        }
    });

// Amélie
fetch("../pages/footer.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });
