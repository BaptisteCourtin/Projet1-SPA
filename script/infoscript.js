const msgSent = document.getElementById("msgSent");
const pmsg = document.getElementById("pmsg");


const onSubmit = (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    pmsg.innerHTML = `Merci pour votre message ${firstname}, il sera traité dans les plus brefs délais!`;
    msgSent.showModal();
}

