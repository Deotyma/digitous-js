/* exercice 1 */
console.log("exercice 1");
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
/* fin d'exercice 1 */

/* exercice 2 */
console.log("exercice 2");
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

/* fin d'exercice 2 */

/* exercice 3 */
console.log("exercice 3")
var objets = ["pen", "book", "lamp"]

objets.unshift("chair") //Ajoutez "chair" au début du tableau puis affichez le résultat
console.log(objets);

objets.pop(); //Enlevez "lamp" puis affichez le résultat
console.log(objets);

objets.push("laptop"); //Ajoutez "laptop" à la fin du tableau puis affichez le résultat
console.log(objets);

objets.shift(); //Enlevez "chair" puis affichez le résultat
console.log(objets);
/* fin d'exercice 3 */

/* exercice 4*/
console.log("exercice 4");
var numbers = [4, 10, 8, 12, 6];
console.log(numbers.reverse())


numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
/* fin d'exercice 4 */

/* exercice 5 */
console.log("exercice 5");
var total = 0;
var limit = 10;

for (i = 0; i <= limit; i++) {
    total = total + i;
}
console.log(total);

/* fin d'exercice 5 */

/* exercice 6 */
console.log("exercice 6");
var sentence = "Hello Konexio !";
var renversed = "";

for (i = sentence.length - 1; i >= 0; i--) {
    renversed += sentence[i];
    /* console.log(renversed); */

}
console.log(renversed);
//
var sentence = "Hello Konexio !";
var reverse = []
for (i = 0; i < sentence.length; i++) {
    var letter = sentence.charAt(i);
    reverse.unshift(letter);
}
const regex = /,/gi;
console.log(reverse.toString().replace(regex, ""));

/* fin d'exercice 6 */

/* bonus 1 */
console.log("bonus 1");

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 7 == 0) {
        console.log(" ");
    } else {
        console.log(i);
    }
}
/* fin bonus 1 */

/* bonus 2 */
console.log("bonus 2");

while (i < limit) {
    i = 0;
    i++;
    total = total + i;
}
console.log(total);

/* fin bonus 2 */

/* bonus 3 */
console.log("bonus 3");
var promo4 = ["Adam", "Adama", "Allan", "Bah", "Ahmed", "At", "Damir", "El", "Elisabeth", "Thy", "Katty", "Hassan", "Houra", "Mosindo", "Mahmaudou", "Nicolas", "Saurv", "Sebasten", "Yeshi"];

var min = 0;
var max = promo4.length;
var index = Math.floor(Math.random() * (max + 1));

console.log(promo4[index]);

/* bonus 3 */

/* bonus 4 */
console.log("bonus 4");
var table = [];

var min = 0;
var max = 100;
for (i = 0; i < 20; i++) {
    table.push(Math.floor(Math.random() * (max + 1)));
}
console.log(table)
table.sort(function(a, b) {
    return a - b;
});
var maxi = table[table.length - 1];
console.log(maxi);
/* fin bonus 4 */

/* multiplication */
console.log("table de multiplication 7")
for (i = 0; i < 10; i++) {
    console.log("7 * " + i + " = " + 7 * i)
}