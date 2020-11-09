


/**creation nouveau element P  visible avec l'inpection d'élément*/
const newElt = document.createElement("p");

let elt = document.getElementById("main");
elt.appendChild(newElt);

/**ajout d'un contenu HTML apres avoir crér la balise p avec NewElt */

newElt.innerHTML = "Mon <strong> grand </strong> contenu";

/**ajout de la classe important à cette nouvelle élement */

newElt.classList.add("important");

/**modification du style de écriture rouge à vert */
newElt.style.color="green";
