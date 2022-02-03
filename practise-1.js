// 1. Write 3 Variable (string, number, boolean)
const str = "I am dong programming";
let number = 456;
var isRaining = false;


// 2. Write 2 variable (let, const)

/* let variable can be updated anytime
const variable cannot be updated */
let num1 = 5;
const num2 = 0;
num1 = 9;
// num2 will not update but num1

// 3. Simple math operation => It's done!
// 4. Comparison => It's done!
// 5. Two condition (case-1: fulfill both conditions), (case-2: fulfill at least one condition)=> It's done!

// 6. if else => It's done!

// 7. While loop to display 7 to 19 all odd numbers.

let n = 7;
while (n <= 19) {
    if (n % 2 == 1) {
        // console.log("=> " + n)
    }
    n++;
}


// 8. Declare an array and count number of array, update or replace 4th position of the array.
let array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array)
let countArrayLength = array.length;
// array[4] = 9999;
// array.push(9000);
// array.pop();
// array.pop();
// console.log("Number of array =>" + countArrayLength)
// console.log(array);

for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (el == 9999) {
        // console.log(true)
    }
}

// 9. Use any for loop to display all the elements of an array
for (const el of array) {
    // console.log(el)
}

// 10. Display all number those are bigger than 80
const array2 = [233, 44, 222, 34, 59, 77, 85, 89, 33, 79, 90];
for (let i = 0; i < array2.length; i++) {
    const el = array2[i];
    if (el >= 80) {
        // console.log(el)
    }
}

// 11. Write a function that takes three numbers and return the multiplication of three numbers

function multiply(num1, num2, num3) {
    const multiplication = num1 * num2 * num3;
    return multiplication
}

// console.log(multiply(3, 5, 4))

// 12. declare a object and change any property of the object

let obj = {
        name: "Al amin",
        age: 21,
        address: "Banibaha, rajbari",
        qualification: "Graduated"
    }
    // console.log(obj)
obj.address = "Rajbari, Dhaka."
    // console.log(obj)