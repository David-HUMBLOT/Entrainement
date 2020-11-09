

    /**écoute événement input sur id name et récupératioon du champs inpout et écriture de la saisie dans la cible res-name */
const ecoutename = document.getElementById('name');
const saisiename = document.getElementById('res-name');

ecoutename.addEventListener('input', updateValue);

function updateValue(e){
    saisiename.textContent = e.target.value;
};

/**écoute et récupération du choix sur res-gender et écriture */

const ecoutegender = document.getElementById('gender');
const choixgender = document.getElementById('res-gender');

ecoutegender.addEventListener('input', updateChoix);

function updateChoix(e){
    choixgender.textContent = e.target.value;
};


/**écoute récupération et transcription de la positioon de la souris à l'intérieur de l'élément #result  */

const ecoutesouris = document.getElementById('result');
const positionsourisX = document.getElementById ('mouse-x');
const positionsourisY = document.getElementById('mouse-y');

ecoutesouris.addEventListener ('mousemove', function(eventsouris){
        positionsourisX.textContent = eventsouris.offsetX;
        positionsourisY.textContent = eventsouris.offsetY;
});

/**fin de l'exercice */