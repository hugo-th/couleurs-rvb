/* Association d'éléments de la page HTML dans des variables */

let rouge_saisie = document.getElementById("rouge_saisie");
let rouge_bouton_moins = document.getElementById("rouge_bouton_moins");
let rouge_bouton_plus = document.getElementById("rouge_bouton_plus");
let rouge_texte = document.getElementById("rouge_texte");

let vert_saisie = document.getElementById("vert_saisie");
let vert_bouton_moins = document.getElementById("vert_bouton_moins");
let vert_bouton_plus = document.getElementById("vert_bouton_plus");
let vert_texte = document.getElementById("vert_texte");

let bleu_saisie = document.getElementById("bleu_saisie");
let bleu_bouton_moins = document.getElementById("bleu_bouton_moins");
let bleu_bouton_plus = document.getElementById("bleu_bouton_plus");
let bleu_texte = document.getElementById("bleu_texte");

let cadre = document.getElementById("cadre");

let hexa_texte = document.getElementById("hexa");


/* Fonctions */

function conversionEnHexa(nombre) {
    let hex = nombre.toString(16).toUpperCase(); // convertis le nombre en base 16 (hexadécimal) en string avec les lettres en majuscules (pour une meilleure lisibilité)
    if (hex.length == 1) {
        return "0" + hex; // si nécessaire (hex a un seul caractère), ajoute "0" devant pour le code hexadécimal de la couleur
    }
    return hex;
}

function verification(valeur) {
    if (!isNaN(Number(valeur)) && valeur >= 0) { // vérifie que la valeur est bien un nombre en étant supérieur ou égal à 0
        if (valeur > 255) {
            return 255; // si la valeur est un nombre supérieur à 255, renvoie 255
        }
        return parseInt(Number(valeur).toFixed()); // sinon, renvoie la valeur convertie en nombre entier en interprétant la notation exponentielle ("e")
    }
    return 0; // sinon (dans les autres cas), renvoie 0
}

function changerCouleur() {
    // récupère la valeur des champs de saisie en les vérifiant 
    let rouge = verification(rouge_saisie.value);
    let vert = verification(vert_saisie.value);
    let bleu = verification(bleu_saisie.value);
    cadre.style.backgroundColor = "rgb(" + rouge + "," + vert + "," + bleu + ")"; // change la couleur du fond du cadre
    // remplace les textes HTML correspondant aux couleurs
    rouge_texte.innerHTML = rouge;
    vert_texte.innerHTML = vert;
    bleu_texte.innerHTML = bleu;
    // remplace le texte HTML correspondant au code hexadécimal de la couleur
    hexa_texte.innerHTML = conversionEnHexa(rouge) + conversionEnHexa(vert) + conversionEnHexa(bleu);
}


/* Gestionnaire d'événements
input : lorsque l'utilisateur saisi du texte
click : lorsque l'utilisateur clique sur le bouton */

rouge_saisie.addEventListener("input", changerCouleur);
vert_saisie.addEventListener("input", changerCouleur);
bleu_saisie.addEventListener("input", changerCouleur);

let incrementation = 10;

rouge_bouton_moins.addEventListener("click", function(){
    rouge_saisie.stepDown(incrementation); // décrémente la valeur du champ de saisie
    changerCouleur(); // appelle cette fonction car la valeur du champ de saisie a pu être modifiée
});
vert_bouton_moins.addEventListener("click", function(){
    vert_saisie.stepDown(incrementation);
    changerCouleur();
});
bleu_bouton_moins.addEventListener("click", function(){
    bleu_saisie.stepDown(incrementation);
    changerCouleur();
});

rouge_bouton_plus.addEventListener("click", function(){
    rouge_saisie.stepUp(incrementation); // incrémente la valeur du champ de saisie
    changerCouleur(); // appelle cette fonction car la valeur du champ de saisie a pu être modifiée
});
vert_bouton_plus.addEventListener("click", function(){
    vert_saisie.stepUp(incrementation);
    changerCouleur();
});
bleu_bouton_plus.addEventListener("click", function(){
    bleu_saisie.stepUp(incrementation);
    changerCouleur();
});
