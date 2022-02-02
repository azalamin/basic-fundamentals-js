function reverse(text) {
    let reversed = '';
    for (const char of text) {
        reversed = char + reversed;
    }
    return reversed;
}
let myText = "1 2 3 4 5 6 7 8 9 0";
const result = reverse(myText);
console.log(result)