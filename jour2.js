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