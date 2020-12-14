// exercice 1 afficher la somme de tout les entiers allant de 25 à 75
console.log("la somme de tout les entiers allant de 25 à 75");
var total = 0;
var limit = 75;
var i = 25
while (i <= limit) {
    total = total + i;
    i++;
}
console.log(total);
/* fin d'exercice */

/* exercice 2 afficher la multiplication de tout les entier allant de 10 à 15 */
console.log("afficher la multiplication de tout les entier allant de 10 à 15")


var total = 1;
var limit = 15;
var i = 10;

while (i <= limit) {
    total = total * i;
    i++;
}
console.log(total);
/* fin d'exercice */

/* exercice 3 afficher la somme des entiers pairs allant de 0 à 100 */
console.log("afficher la somme des entiers pairs allant de 0 à 100")
var total = 0;
var limit = 100;
var i = 0;

while (i <= limit) {
    total = total + i;
    i = i + 2;
}
console.log(total);

/* end exercice */