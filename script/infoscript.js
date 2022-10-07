// Amélie
const msgSent = document.getElementById("msgSent");
const pmsg = document.getElementById("pmsg");

const onSubmit = (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    pmsg.innerHTML = `Merci pour votre message ${firstname}, il sera traité dans les plus brefs délais!`;
    msgSent.showModal();
};

const ratingStars = [...document.getElementsByClassName("fa-star")];

const rating = (stars) => {
    const starClassActive = "fa fa-star gold";
    const starClassInactive = "fa fa-star";
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);
            if (star.className === starClassInactive) {
                for (i; i >= 0; i--) stars[i].className = starClassActive;
            } else {
                for (i; i < stars.length; i++)
                    stars[i].className = starClassInactive;
            }
        };
    });
};
rating(ratingStars);
