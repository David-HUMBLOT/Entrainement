

/**Exemple de manipulation dans le DOM */
let listeEl = document.querySelector("article > ul.important > li")
console.log(listeEl.nextElementSibling);


/** Queqtion 1*/

let idmaincontent = document.getElementById("main-content");
console.log(idmaincontent);

/** question 2*/
let important = document.getElementsByClassName("important");
console.log(important);

/** question 3 */

let article = document.getElementsByTagName('article');
console.log(article);

/**question 4 pas reussii */


/**question 5 */
let A = document.querySelector('ul li');
console.log(A);
