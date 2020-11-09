




/**creation de la balise p pour receptionner et afficher les donné de json */
const baliseP = document.createElement("p");
var resultat = document.getElementById("weather-result");
resultat.appendChild(baliseP);


/**ETAPE 1 creation fonction askWeather pour une requete AJAX de type GET et avec url 
 * https://www.prevision-meteo.ch/services/json/paris
*/

var request = new XMLHttpRequest();
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();

request.onreadystatechange = function () {
 
    /**evenement d'ecoute du click sur le button et affichage infos */

    const ecouteclick = document.getElementById("ask-weather");
    ecouteclick.addEventListener('click', function (){
        /**affiche de la réponse requete dans balise p crée */
        resultat.innerHTML = response.current_condition.condition;

        
    });


    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
    }
};


  












