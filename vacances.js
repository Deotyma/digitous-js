/* exercice 1 */
console.log("Exercice 1");

function sortLetters(word) {
    var letters = [];
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    console.log(letters.sort().join(""));

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

    if (word.toLowerCase() === wordPal.toLowerCase()) {
        console.log("Palindrome !");
    } else {
        console.log("Nope");
    }

}

checkPal("Racecar");
checkPal("laptop");
/* fin d'exercice 3 */

/* exercice 4 */
console.log("Exercice 4");

function swap(sentence) {
    var renversSentence = [];
    for (var i = 0; i < sentence.length; i++) {
        const regex = /^[a-z]+$/;

        /* var sentenceRanvers = sentence.split(""); */
        if (sentence[i].match(regex)) {
            /* var letter = sentence[i].toUpperCase(); */
            renversSentence.push(sentence[i].toUpperCase());

            console.log(renversSentence);

        } else {
            /* var letter = sentence[i].toLowerCase(); */
            renversSentence.push(sentence[i].toLowerCase());
            console.log(renversSentence);
        }

    }

    console.log(renversSentence.join(""));
}
swap("Hello Word");
/* fin d'exercice 4 */

/* bonus 1 */
console.log("Bonus 1");

function makeItSpongeBob(sentence) {
    var renversSentence = [sentence[0]];
    for (var i = 1; i < sentence.length; i++) {
        tabSentence = sentence.split("");
        const regex = /^[a-z]+$/;
        if (renversSentence[i - 1].match(regex)) {
            renversSentence.push(tabSentence[i].toUpperCase());

        } else {

            renversSentence.push(sentence[i].toLowerCase());
            console.log(renversSentence);

        }


    }
    console.log(renversSentence.join(""));
}

makeItSpongeBob("Javascript is easy");

/* fin de bonus 1 */