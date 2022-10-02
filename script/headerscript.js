fetch("../pages/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    })
    .then(() => {
        // ---side nav---
        const navToggle = document.querySelector(".mobile-nav-toggle");
        const sideNav = document.querySelector(".side-nav");
        const body = document.querySelector("body");

        navToggle.addEventListener('click', () => {
            sideNav.classList.toggle('opened');
            body.classList.toggle('opened');
        })

        // ---button---
        let ajout = document.querySelectorAll(".panier");
        for (let i = 0; i < ajout.length; i++) {
            ajout[i].addEventListener('click', function () {
                ajout[i].innerHTML = "Ajouté !";
            })
        }

        // ---user plouf---
        const user = document.querySelector(".fa-user");
        const droplet1 = document.querySelector(".droplet1");
        const droplet2 = document.querySelector(".droplet2");
        const audio = document.querySelector("#audio")

        user.addEventListener('click', () => {
            user.classList.toggle('jump');
            droplet1.classList.toggle('drop1');
            droplet2.classList.toggle('drop2');
            if(user.classList.contains("jump")){
                setTimeout(soundplouf , 850);
            }
        })

        const soundplouf = () => {
            audio.play();

        }

        // ---

    });



fetch("../pages/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });