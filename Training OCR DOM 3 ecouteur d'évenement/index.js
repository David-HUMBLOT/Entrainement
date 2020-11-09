
/**récupère l'élément que l'on souhaite écouter */
const parent = document.getElementById("parent");


/**ecoute de l'événemtn click sur cette élement récupéré dans la varioable parent 
 * function au nom choisit=event est notre callback que on paramètre ses actions
 * 
 * eventpreventDefault sert à stoper la progration de l'évenement aux autre élément (parent ou enfant)
*/
let Nombrecompteurparent = 0; /**1 au lieu de 0 par soucis d'incrémentatio au clique car le premier clique reste restait à zéro au lieu d'afficher 1 */
let Parentcompte = document.getElementById("parent-count");

parent.addEventListener('click', function (event) {
    event.preventDefault();
   
    Parentcompte.innerHTML = ++Nombrecompteurparent;
    /** incrémenter le nombre de click sur écoute avec ++ */
    console.log("parent");
});




let Nombrecompteurenfant = 0;
const enfant = document.getElementById("child");
let Enfantcompte = document.getElementById("child-count");

enfant.addEventListener('click', function (event){
    event.preventDefault();
    event.stopPropagation();
    Enfantcompte.innerHTML = ++Nombrecompteurenfant;
    console.log("enfant");


});

