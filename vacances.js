/* exercice 1 */
console.log("Exercice 1");

function sortLetters(word) {
    var letters = [];
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    const regex = /,/gi;
    console.log(letters.sort().join().replace(regex, ""));

}

sortLetters("konexio");

/* fin d'exercice 1 */

/* exercice 2 */
console.log("Exercice 2");

function countEach(letters) {
    letterX = [];
    letterO = [];

    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === "x" || letters[i] === "X") {
            letterX.push(letters[i]);
        } else if (letters[i] === "o" || letters[i] === "O") {
            letterO.push(letters[i]);
        }
    }
    var egality = letterO.length === letterX.length;
    console.log(egality);

    /* if (letterO.length === letterX.length) {
        console.log(true);
    } else {
        console.log(false);
    } */
}

countEach("oxoxx");

/* fin d'exercice 2 */

/* exercice 3 */
console.log("Exercice 3");

function checkPal(word) {
    var pal = [];
    for (var i = 0; i < word.length; i++) {
        pal.unshift(word[i]);
    }
    /* console.log(pal); */

    const regex = /,/gi;
    var wordPal = pal.toString().replace(regex, "");
    /*  console.log(wordPal); */

    if (word === wordPal) {
        console.log("Palindrome !");
    } else {
        console.log("Nope");
    }

}

checkPal("racecar");
checkPal("laptop");
/* fin d'exercice 3 */

/* exercice 1 */
console.log("Exercice 1");
/* fin d'exercice 1 */