const msgSent = document.getElementById("msgSent");
const msg = document.getElementById("msg");
const submit = document.getElementById("submit");
const sentBtn = document.getElementById("sentBtn");
// "Update details" button opens the <dialog> modally
submit.addEventListener('click', function (event) {
    event.preventDefault();
    msgSent.showModal();
});
