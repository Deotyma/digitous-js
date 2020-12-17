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
var birthday = new Date("01/09/1950");

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
var prompt = require('prompt');
var schema = {
    properties: {
        email: {
            pattern: /^[a-z\@{1}\-]+$/,
            message: 'l\'email doit être au bon format',
            required: true
        },
        username: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
            required: true
        },
        password: {
            pattern: /^[a-zA-Z\s\0-9+\-?\{6,}\g]+$/,
            message: 'Le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
            required: true
        },
    }
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: email, password
//
prompt.get(schema, function(err, result) {
    //
    // Log the results.
    //
    console.log('Les données:');
    console.log('  email: ' + result.email)
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);
});


/* fin d'exercice 3 */