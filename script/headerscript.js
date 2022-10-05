fetch("../pages/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  })
  .then(() => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const sideNav = document.querySelector(".side-nav");
    const body = document.querySelector("body");

    navToggle.addEventListener("click", () => {
      sideNav.classList.toggle("opened");
      body.classList.toggle("opened");
    });

    // ---

    let ajout = document.querySelector(".panier");
    const selectDate = (dateSelected) => {
      //   for (let i = 0; i < ajout.length; i++) {
      // dateSelected.addEventListener("click", function () {
      if (document.getElementById("choice1").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice1").value
        }`;
      } else if (document.getElementById("choice2").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice2").value
        }`;
      } else if (document.getElementById("choice3").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice3").value
        }`;
      }
    };
    ajout.addEventListener("click", function () {
      selectDate(ajout);
    });
  });

fetch("../pages/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
