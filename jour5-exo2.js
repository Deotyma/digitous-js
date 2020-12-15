function multiply(number) {
    num1 = parseInt(number);
    for (var i = 1; i <= 10; i++) {
        var result = i * num1;
        console.log(`${i}  x  ${num1} = ${result}`);
    }
}

multiply(process.argv[2]);