var fs = require("fs");
/* exercise 1 */
console.log("exercise 1")
fs.readFile("./jour7.txt", function(err, data) {
    if (err) {
        console.log("Il y a un erreur");
    } else {
        console.log(data.toString());
    }
});

/* fin d'exercise 1 */

/* exercise 2 */
console.log("exercise 2")
var array = [1, 2, 3, 4, 5];

var double = array.map(function(number) {
    return number * 2
});

console.log(double);
/* fin d'exercise 2 */

/* exercise 3 */
console.log("exercise 3")

var longNames = [{
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

function shortNames(longNames) {
    return longNames.map((element) => {
        return element.firstName + " " + element.lastName;
    });
}


console.log(shortNames(longNames))

/* fin d'exercise 3 */

/* exercise 4 */
console.log("exercise 4")
    /* fin d'exercise 4 */

/* exercise 5 */
console.log("exercise 5")
    /* fin d'exercise 5 */

/* exercice 6 */
console.log("exercice 6")
    /* fin d'exercice 6 */