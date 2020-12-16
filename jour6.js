/* exercice 1 */
console.log("Exercice 1");
//aaaa-mm-jj


function formatDate(data) {
    var data = new Date(data)
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var day = data.getDate();
    console.log(`${day}/${month}/${year}`);
    console.log(data);
}
formatDate("2020-12-03");


/* fin d'exercice 1 */

/* exercice 2 */
console.log("Exercice 2");
var today = new Date();
var birthday = new Date("01/09/2000");

function calculateAge() {
    var age = today - birthday;
    console.log(age);
    var years = new Date(age);
    console.log(years.getFullYear() - 1970);
}
calculateAge()

/* fin d'exercice 2 */

/* exercice 3 */
console.log("Exercice 3")
    /* fin d'exercice 3 */