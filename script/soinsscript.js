let ajout = document.querySelector(".panier1");
let ajout2 = document.querySelector(".panier2");
let ajout3 = document.querySelector(".panier3");
const selectDate = (dateSelected) => {
    if (document.getElementById("choice1").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice1").value
        }`;
        ajout.style.boxShadow = `0 0 8px green`;
        ajout.style.border = "none";
    } else if (document.getElementById("choice2").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice2").value
        }`;
        ajout.style.boxShadow = `0 0 8px green`;
        ajout.style.border = "none";
    } else if (document.getElementById("choice3").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice3").value
        }`;
        ajout.style.boxShadow = `0 0 8px green`;
        ajout.style.border = "none";
    }
};
const selectDate2 = (dateSelected) => {
    if (document.getElementById("choice4").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice4").value
        }`;
        ajout2.style.boxShadow = `0 0 8px green`;
        ajout2.style.border = "none";
    } else if (document.getElementById("choice5").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice5").value
        }`;
        ajout2.style.boxShadow = `0 0 8px green`;
        ajout2.style.border = "none";
    } else if (document.getElementById("choice6").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice6").value
        }`;
        ajout2.style.boxShadow = `0 0 8px green`;
        ajout2.style.border = "none";
    }
};
const selectDate3 = (dateSelected) => {
    if (document.getElementById("choice7").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice7").value
        }`;
        ajout3.style.boxShadow = `0 0 8px green`;
        ajout3.style.border = "none";
    } else if (document.getElementById("choice8").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice8").value
        }`;
        ajout3.style.boxShadow = `0 0 8px green`;
        ajout3.style.border = "none";
    } else if (document.getElementById("choice9").checked) {
        dateSelected.innerHTML = `Réservation confirmée pour :</br> ${
            document.getElementById("choice9").value
        }`;
        ajout3.style.boxShadow = `0 0 8px green`;
        ajout3.style.border = "none";
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
