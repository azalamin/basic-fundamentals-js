function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }
    return factorial;
}

const result = getFactorial(8);
console.log(result)


// While Loop Reverse Factorial
function getFactorial2(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const result2 = getFactorial2(8);
console.log(result2)


// Reverse Factorial in for loop JS
function getFactorial3(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i
    }
    return factorial
}

const result3 = getFactorial3(8);
console.log(result3)