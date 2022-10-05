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

    let ajout = document.querySelector(".panier1");
    let ajout2 = document.querySelector(".panier2");
    let ajout3 = document.querySelector(".panier3");
    const selectDate = (dateSelected) => {
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
    const selectDate2 = (dateSelected) => {
      if (document.getElementById("choice4").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice4").value
        }`;
      } else if (document.getElementById("choice5").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice5").value
        }`;
      } else if (document.getElementById("choice6").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice6").value
        }`;
      }
    };
    const selectDate3 = (dateSelected) => {
      if (document.getElementById("choice7").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice7").value
        }`;
      } else if (document.getElementById("choice8").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice8").value
        }`;
      } else if (document.getElementById("choice9").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
          document.getElementById("choice9").value
        }`;
      }
    };
    ajout.addEventListener("click", function () {
      selectDate(ajout);
    });
    ajout2.addEventListener("click", function () {
      selectDate2(ajout2);
    });
    ajout3.addEventListener("click", function () {
      selectDate3(ajout3);
    });
  });

fetch("../pages/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
