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

/* exercice 3 */
console.log("exercice 3");

function catchPokemon(nb) {
    request.get("https://pokeapi.co/api/v2/pokemon/" + nb + "/", function(err, res, body) {
        /* console.log(err);
        console.log(res.statusCode); */
        var pokemons = JSON.parse(body);

        var id = pokemons.id
        var pokemon = pokemons.name

        console.log(`id = ${id} name = ${pokemon}`);
    });
}
catchPokemon(45);
catchPokemon(5);
catchPokemon(4);

/* fin d'exercice 3 */