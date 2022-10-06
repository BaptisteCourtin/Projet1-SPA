let nvxButton = document.querySelectorAll(".valide");
   
        for (let i = 0 ; i < nvxButton.length ; i ++) {
            
          nvxButton[i].addEventListener("click", function (){
            nvxButton[i].innerHTML= "Ajouté!"; 
            nvxButton[i].style.fontWeight = "bold";
            })};
            