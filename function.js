// function isPositive(number) {
//     if (number > 0) {
//         return number + 5;
//     } else {
//         return number - 5;
//     }
// }

// const result = isPositive(-1);
// console.log(result)

// function countVowels(text) {
//     const count = text.match(/[aeiou]/ig).length;
//     return count;
// }


// function countVowels(text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         const el = text[i];
//         const str = el.toLowerCase();
//         if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
//             count = count + 1;
//         }

//     }
//     return count;
// }
// const text = "I am loving boy.";
// const result = countVowels(text);
// console.log(result)


function getAverage(n) {
    let count = 0;
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            count++;
            total = total + i;
        }
    }
    const average = total / count;
    return [average, total, count]
}

const result = getAverage(20);
console.log(result[0])