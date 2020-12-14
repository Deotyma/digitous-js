/* exercice1 */
console.log("Exercice 1");

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};

console.log(cat);
console.log(cat.age);
if (isCute = true) {
    console.log("So cute !");
}
/* fin d'exercice 1 */

/* exercice2 */
console.log("Exercice 2");
var cat2 = {
    name: "Koko",
    age: 6,
    isCute: true
};

var cats = [cat, cat2];

console.log(cat.age);
if (cat2.isCute = true) {
    console.log("So cute " + cat2.name + " !");
}

/* fin d'exercice 2 */

/* exercice3 */
console.log("Exercice 3");

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log("This number is even")
    } else { console.log("This number is odd") }
}

oddOrEven(4);
oddOrEven(35);
/* fin d'exercice 3 */

/* exercice4 */
console.log("Exercice 4");

function isBigger(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num1 < num2) {
        console.log(`${num2} is bigger`);
    } else(
        console.log("both are the same")
    );
}
isBigger(56, 98);
isBigger(45, 7);
isBigger(6, 6);
/* fin d'exercice 4 */

/* exercice5 */
console.log("Exercice 5");
/* fin d'exercice 5 */

/* exercice6 */
console.log("Exercice 6");

function format(secondes) {
    var heures = Math.floor(secondes / (60 * 60));
    var minutes = Math.floor((secondes - (heures * (60 * 60))) / 60);
    var sec = (secondes - (heures * (60 * 60))) % 60;
    console.log(heures + ":" + minutes + ":" + sec);

}

format(3700)
    /* fin d'exercice 6 */