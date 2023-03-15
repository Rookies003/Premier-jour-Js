// on va faire un petit test pour voir si on a bien le bon fichier javascript lié à notre page html
console.log("Hello world");

// Level 1 ... Fight !
//  Calcul le résultat de l'expression :  8 x 4 - 7 / 2
var resultat = 8 * 4 - 7 / 2;
console.log(resultat);

//  Level 2 ... Fight !
//  Calcul le périmètre d'un rectangle de L = 8 cm et de l = 5 cm
const longueur = 8;
const largeur = 5;
const perimetre = 2 * (longueur + largeur);
console.log(perimetre); 

//  Level 3 ... Fight !
//  En utilisant la méthode math, calculez l'aire d'un cercle dont le rayon et de 3 cm
const rayon = 3;
const aire = Math.PI * rayon ** 2;
console.log(aire);

// Level 4 ... Fight ! 
//  Calcul le  volume d'un cube dont la longueur des cotés est de 6 cm NB: "**" est un opérateur relatif à la puissance en mathematique
const longueurCote = 6;
const volume = longueurCote **3;
console.log(volume);

//  Level 5 ... Fight !
//  Calcul la moyenne de 4 notes (12,15,17,14)
const note1 = 12;
const note2 = 15;
const note3 = 17;
const note4 = 14;
const moyenne = (note1 + note2 + note3 + note4) / 4;
console.log(moyenne);

// Level 6 ... Fight !
// Calcul le pourcentage de 45 sur 90
const pourcentage = 45 * 100 / 90;
console.log(pourcentage);
// Level 7 ... Fight !
// Calcul le montant total d'une facture de 65€ avec une taxe de vente de 20%
const montant = 65;
const taxe = 20;
const montantTotal = montant + (montant * taxe / 100);
console.log(montantTotal);

// Level 8 ... Fight ! 
// Calcul la distance parcourue par une voiture qui roule à 70 km/h pendant 3h
var vitesse = 70;
var temps = 3;
var distance = vitesse * temps;
console.log(distance);

// Level 9 ... Fight !
// Calcul la différence entre 82 et 37
const nombre1 = 82;
const nombre2 = 37;
const difference = nombre1 - nombre2;
console.log(difference);

// Level 10 ... Fight !
// Calcul le produit de 5 et du carré de 3
const resultat2 = 5 * (3**2);
console.log(resultat2);

// Level 11 ... Fight !
// Ecrivez un programme qui calcule la somme de 2 nombres et l'affiche dans la console.
let nombr1 = 5;
let nombr2 = 7;
let somme = nombr1 + nombr2;
console.log(somme);

// Level 12 ... Fight !
// Ecrire un programme qui calcule la différence entre 2 nombres et l'afficher dans la console.
let nomb1 = 4;
let nomb2 = 2;
let differenc = nomb1 - nomb2;
console.log(differenc);

// Level 13 ... Fight !
// Calcul le produit de 2 nombres et l'afficher dans la console.
let nmbre1 = 5;
let nmbre2 = 2;
let produit = nmbre1 * nmbre2;
console.log(produit);

// Faire une fonction de multiplication de 2 variables
function multiplication (n1 , n2) {
    return n1*n2;
}
console.log(multiplication (n1 , n2));
var prod = multiplication (n1 , n2);
console.log(prod);


//  ------------------------------------------------ STAGE2 !!! ------------------------------------------------
// Demander à l'utilisateur de saisir deux nombres
// Additionnez ces nombres
// Donnez le plus grand des deux nombres
const monNumero1 = parseInt(prompt("Saisissez le premier nombre : "));
const monNumero2 = parseInt(prompt("Saisissez le deuxieme nombre : "));
const additionNumeros = monNumero1 + monNumero2;
console.log(additionNumeros);
if (monNumero1 > monNumero2) {
    console.log(monNumero1 + " est plus grand que " + monNumero2);
} else if (monNumero1 < monNumero2){
    console.log(monNumero1 + "est plus petit que " + monNumero2);
} else {
    console.log("Les 2 nombres sont égaux");
}