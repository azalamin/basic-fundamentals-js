function removeDuplicate(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}
let names = ["abul", "babul", "chabul", "abul", "gabul", "babul", "chabul"];
const uniqueName = removeDuplicate(names);
console.log(uniqueName)
console.log(names)