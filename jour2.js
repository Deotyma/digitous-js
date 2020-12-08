/* exercice 1 */
console.log("ex1");
var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);
/* fin d'exercice 1 */

/* exercice 2 */
console.log("ex2");
var basic = 34;
var stringified = basic.toString();
console.log(stringified);
console.log(typeof stringified);
/* fin d'exercice 2 */

/* exercice 3 */
console.log("ex3");
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);
/* fin d'exercice 3 */

/* exercice 4 */
console.log("ex4");
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test % bis);
/* fin d'exercice 4 */

/* exercice 5 */
console.log("ex5");
var test = 143;
var bis = 219;
console.log(test < bis);
console.log(test > bis);
console.log(test == bis);
/* fin d'exercice 5 */

/* exercice 6 */
console.log("ex6");
var limit = 50;
var score = 64;
if (limit <= score) {
    console.log("Ok good");
} else {
    console.log("Oh nooo");
}
/* fin d'exercice 6 */

/* exercice 7 */
console.log("ex7");
var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
}
/* fin d'exercice 7 */

/* exercice 8 */
console.log("ex8");
if (limit <= score && password.length > 5) {
    console.log("Everything is good");
} else if (limit <= score || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}
/* fin d'exercice 8 */

/* Bonus 1 */
console.log("bonus 1");
var random = Math.floor((Math.random() * 6) + 1);
if (random === 6) {
    console.log("Yes I win !");
} else {
    console.log("So close...");
}
/* fin de bonus 1 */

/* Bonus 2 */
console.log("bonus 2");
var month = "january";

switch (month.toLowerCase()) {
    case "december":
    case "january":
    case "february":
        console.log("Winter");
        break;
    case "mars":
    case "april":
    case "may":
        console.log("Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer");
        break;
    case "september":
    case "october":
    case "november":
        console.log("Autumn");
        break;
    default:
        console.log("That's not a month...");
}
/* fin de bonus 2 */

/* Bonus 3 */
console.log("bonus 3");
/* fin de bonus 3 */