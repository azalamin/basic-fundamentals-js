// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function fibonacci(number) {
    if (typeof number != 'number') {
        return "Please give a number"
    } 
    if (number < 2) {
        return "Please give a positive number greater than 1"
    }
    let fibo = [0, 1];
    for (let n = 2; n <= number; n++) {
        fibo[n] = fibo[n-1] + fibo[n-2];
    }
    return fibo;
}
const result = fibonacci(-10);
console.log(result)
