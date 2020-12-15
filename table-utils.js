function multiply(number) {
    num1 = parseInt(number);
    for (var i = 1; i <= 10; i++) {
        var result = i * num1;
        console.log(`${i}  x  ${num1} = ${result}`);
    }
}

/* multiply(process.argv[2]); */

function addition(number) {
    num1 = parseInt(number);
    for (var i = 1; i <= 10; i++) {
        var result = i + num1;
        console.log(`${i}  +  ${num1} = ${result}`);
    }
}

/* addition(process.argv[2]); */

module.exports = {
    multiply,
    addition,
};