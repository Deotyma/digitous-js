/* exercice 1 */
console.log("Exercice 1")

var request = require('request');

request.get("https://restcountries.eu/rest/v1/all", function(err, res, body) {
    /* console.log(err);
    console.log(res.statusCode); */
    var infos = JSON.parse(body);
    /* console.log(infos); */

    var countriesNames = [];

    function getCountries() {
        for (let i = 0; i < infos.length; i++) {
            countriesNames.push(infos[i].name)

        }

    };
    getCountries();
    console.log(countriesNames.join(" - "));
});
/* fin d'exercice 1 */



/* exercice 2 */
console.log("exercice 2");

request.get("https://api.chucknorris.io/jokes/random", function(err, res, body) {
    /*  console.log(err);
     console.log(res.statusCode); */
    var jokes = JSON.parse(body);

    /* console.log(jokes); */

    var joke = jokes.value;
    console.log(joke);
});


/* exercice 2 */