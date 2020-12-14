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

function addUp(number) {
    total = 0
    for (var i = 0; i <= number; i++) {
        total = total + i;
    }
    console.log(total);

}
addUp(12);


/* fin d'exercice 5 */

/* exercice6 */
console.log("Exercice 6");

function format(secondes) {
    var heures = Math.floor(secondes / (60 * 60));
    var minutes = Math.floor((secondes - (heures * (60 * 60))) / 60);
    var sec = (secondes - (heures * (60 * 60))) % 60;
    console.log(heures + ":" + minutes + ":" + sec);

}

format(9700)
    /* fin d'exercice 6 */

/* bonus 1 */
console.log("Bonus 1");

function generatePassword(num) {
    min = 65;
    max = 90;
    pass = [];
    if (num < 6 || num > 15) {
        console.log("erreur");
    } else {
        for (i = 1; i <= num; i++) {
            var random = Math.floor(Math.random() * (max - min + 1) + min);
            pass.push(random);
        }
        /* console.log(pass); */
        passWord = [];
        for (j = 0; j <= pass.length; j++) {
            var letter = String.fromCharCode(pass[j]);
            passWord.push(letter);
        }
        const regex = /,/gi;
        console.log(passWord.toString().replace(regex, ""));

        /* console.log(String.fromCharCode(pass.toNumber)); */
    }
}

generatePassword(4);
generatePassword(16);
generatePassword(7);
generatePassword(11);

/* end bonus 1 */

/* bonus 2 */
console.log("Bonus 2")

function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    total = 0
    for (i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * (max - min + 1) + min);
        total += random;
    }
    return (total);
}
joueur1 = launchDice(5);
joueur2 = launchDice(5);
/* console.log(joueur1);
console.log(joueur2); */

if (joueur1 < joueur2) {
    console.log("Joueur2 a gagné.");
} else if (joueur1 > joueur2) {
    console.log("Joueur1 a gagné.");
} else {
    console.log("Ils sont à l'égalité");
}


/* end bonus 2 */