let business = 750;
let minister = 250;
let army = 560;

// if (business > minister && business > army) {
//     console.log("Business is larger")
// } else if (minister > business && minister > army) {
//     console.log("Minister is larger")
// } else {
//     console.log("Army is larger")
// }

// function findLargest(one, two, three) {
//     if (one > two && one > three) {
//     console.log("One is larger")
//     } else if (two > one && two > three) {
//         console.log("Two is larger")
//     } else {
//         console.log("Three is larger")
//     }
// }
// findLargest(44, 595, 66)

// let max = Math.max(business, army, minister)
// console.log(max)

// function findSmallest(one, two, three) {
//     if (one < two && one < three) {
//        return "One is Smaller"
//     } else if (two < one && two < three) {
//         return "Two is Smaller"
//     } else {
//         return "Three is Smaller"
//     }
// }
// const result = findSmallest(44, 5, 66);
// console.log(result)

let min = Math.min(business, army, minister);
console.log(min)