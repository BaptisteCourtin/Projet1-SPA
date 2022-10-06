let fullBoutique = document.querySelectorAll(".individuel button");

const adding = (value) => {
    const ulCart = document.querySelector(".sideCart");
    const newInCart = document.createElement("li");
    newInCart.innerHTML = `${value}`;
    ulCart.appendChild(newInCart);
};

for (let i = 0; i < fullBoutique.length; i++) {
    fullBoutique[i].addEventListener("click", (event) => {
        event.preventDefault();
        adding(fullBoutique[i].value);
    });
}
