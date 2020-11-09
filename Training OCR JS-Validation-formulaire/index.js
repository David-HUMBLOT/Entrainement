
/**ecoute sur le formulaire


/**creation nouveau element P  visible avec l'inpection d'élément*/
const newElt = document.createElement("p");

let elt = document.getElementById("code-validation");
elt.appendChild(newElt);

/**ajout d'un contenu HTML apres avoir crér la balise p avec NewElt */

newElt.innerHTML = "Vérification du code";



var erreur;
    var ChampsInput = document.getElementById("code");
    var ChampsEmail = document.getElementById("email");
    var bouton = document.getElementById("submit-btn");
    


document.getElementById("form-to-check").addEventListener("submit", function (e) {
    e.preventDefault();
  
 

    //*Récupération des valeurs des champs dans des var
    ChampsInput.addEventListener('input', function(a) {
    a.preventDefault();
    a.stopPropagation()
        
        var value = e.target.value;
        if (value.startsWith('/CODE-/')) {
            isValid = true;
         
        } 
        
    });
    
    function isValid(value) {
        return /^CODE-/.test(value);
    }

    if (isValid = true){
     
      newElt.innerHTML = "Code Vaaalide";
      

    } else { 
        isValid = false;
       
        newElt.innerHTML = "Code INNNVaaalide";

    };
    

    if (!ChampsInput.value) //*similaire à un champ vide
    {
        erreur = "Veuillez inscrire le mot de passe";
        
    }

    if (!ChampsEmail.value) //*similaire à un champ vide
    {
        erreur = "Veuillez renseigner votre email";
    }

    if (erreur) {
        
        document.getElementById("erreur").innerHTML = erreur;

    } else {
        alert('Formulaire envoyé');
    }


})
