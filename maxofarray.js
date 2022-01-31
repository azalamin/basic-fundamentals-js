/* function findLarger(numbers) {
    let larger = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i];
        if (el > larger) {
            larger = el;
        }
    }
    return larger
}
const age = [11, 33, 55, 32, 33, 11, 35, 33, 77, 45, -10];
const age2 = [-11, -6, -1, -33, -6, -8]
const oldest = findLarger(age)
console.log(oldest) */

function findSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest
}
const age = [11, 33, 55, 32, 33, 11, 35, 33, 77, 45];
const age2 = [-11, -6, -1, -33, -6, -8]
const oldest = findSmallest(age)
console.log(oldest);