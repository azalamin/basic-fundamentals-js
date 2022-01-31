let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i <= array.length; i++) {
//     sum = sum + i; 
// }
// console.log(sum)

function summation(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
    }
    return sum;
}

const result = summation(array);
console.log(result)