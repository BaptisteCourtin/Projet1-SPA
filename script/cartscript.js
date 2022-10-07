const fullBoutique = document.querySelectorAll(".individuel button");

const adding = (value) => {
    nb = sessionStorage.getItem(`nb`); // !important
    if (nb === null) {
        nb = 0;
        sessionStorage.setItem(`nb`, nb);
    }

    const ulCart = document.querySelector(".sideCart");
    const newInCart = document.createElement("li");
    newInCart.innerHTML = `${value}`;
    ulCart.appendChild(newInCart);

    sessionStorage.setItem(`item[${nb}]`, value);

    nb++;
    sessionStorage.setItem(`nb`, nb); // pour ne pas refresh nb et continuer à ajouter au panier
};

for (let i = 0; i < fullBoutique.length; i++) {
    fullBoutique[i].addEventListener("click", () => {
        adding(fullBoutique[i].value);
        // ---
        fullBoutique[i].innerHTML = "Ajouté!";
        fullBoutique[i].style.fontWeight = "bold";
    });
}
