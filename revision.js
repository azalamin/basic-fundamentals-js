// Variable (var, let, const)
// Array
// Loop (for, while)
// Function
// Object
// Conditionals
// Core concepts JS

// Leap Year
// function leapYear(year) {
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//         return year + " is a leap year!";
//     }else{
//         return year + " is not a leap year!";
//     }
// }
// const result = leapYear(2100);
// console.log(result)

// Odd and Even Number
// function getOddEvenNumber(number) {
//     if(number % 2 == 0){
//         return number + " is an even number"
//     }else if(number % 2 == 1){
//         return number + " is an odd number"
//     }else{
//         return "Something went wrong! Make sure you input number!!"
//     }
// }
// const myOdd = getOddEvenNumber(190);
// console.log(myOdd)

// Factorial with for loop
// function getFactorial(num) {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;  
//     }
//     return factorial;
// }
// const result = getFactorial(10);
// console.log(result)

// Factorial with while loop;
// function getWhileFactorial(num) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= num) {
//         factorial = factorial * i ;
//         i++;
//     }
//     return factorial
// }
// const result = getWhileFactorial(7);
// console.log(result)

// Get inches to feet
// function getFeet(inches) {
//     let feet = inches / 12;
//     return feet;
// }
// const result = getFeet(48);
// console.log(result)

// Fahrenheit To Celsius Converter;
// function getCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) / 1.8;
//     let fixCelsius = Math.round(celsius)
//     return fixCelsius + "°C"
// }
// const result = getCelsius(60);
// console.log(result);

// Celsius to Fahrenheit Converter;
// function getFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     let originalFah = Math.round(fahrenheit)
//     return originalFah + "°C";
// }
// const result = getFahrenheit(24);
// console.log(result);

// Get Grade Based on Your Marks
// function marksGrade(marks) {
//     if(marks >= 80 && marks <= 100){
//         return "A+"
//     } else if(marks >= 70 && marks <= 79){
//         return "A"
//     } else if(marks >= 60 && marks <= 69){
//         return "A-"
//     } else if(marks >= 50 && marks <= 59){
//         return "B"
//     } else if(marks >= 40 && marks <= 49){
//         return "C"
//     } else if(marks >= 33 && marks <= 39){
//         return "D"
//     } else if(marks < 33){
//         return "You have failed"
//     } else{
//         return "Something went wrong! make sure you have valid marks."
//     }
// }
// const result = marksGrade(101);
// console.log(result)

// Simple Interest
function simpleInterest(principle, interest, year) {
    let interestAmount = (principle * interest * year) / 100;
    let totalAmount = interestAmount + principle;
    return 'Interest amount is ' + interestAmount + ". And Total amount with interest is "+ totalAmount;
}
const result = simpleInterest(10000, 5, 1);
console.log(result)