var prompt = require('prompt');



prompt.start();

var number = prompt.get(['num1']);

function play() {
    var min = 1;
    var max = 100;
    var mysteryNum = console.log(Math.floor(Math.random() * (max - min + 1) + min));
    if (mysteryNum > number) {
        console.log("C'est plus !")
    } else if (mysteryNum < number) {
        console.log("C'est moins !")
    } else {
        console.log("Bravo !!")
    }
}

play(number);

/* prompt.get([number], function play(number) {
    var min = 1;
    var max = 100;
    var mysteryNum = console.log(Math.floor(Math.random() * (max - min + 1) + min));
    if (mysteryNum > number) {
        console.log("C'est plus !")
    } else if (mysteryNum < number) {
        console.log("C'est moins !")
    } else {
        console.log("Bravo !!")
    }

    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
}); */