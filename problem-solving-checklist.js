// 1. Conversion Feet to Inch
function feetToInch(feet) {
    let inch = feet * 12;
    return inch
}
// console.log(feetToInch(4))

// 2. Conversion centimeter to meter
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}
// console.log(centimeterToMeter(80))

// 3. Calculation
// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages
function pageRequirements(book1, book2, book3) {
    const book1Pages = 100 * book1;
    const book2Pages = 200 * book2;
    const book3Pages = 300 * book3;
    const totalPages = book1Pages + book2Pages + book3Pages;
    return totalPages

    // [
    //     { name: "book1", pageNeed: book1Pages },
    //     { name: "book2", pageNeed: book2Pages },
    //     { name: "book3", pageNeed: book3Pages }
    // ]
}

// console.log(pageRequirements(2, 4, 3))

// 4. return the bigger item from an array, 

function bestFriend(friends) {
    let biggerFriend = friends[0]
    for (let i = 1; i < friends.length; i++) {
        let friend = friends[i];
        if (biggerFriend.length < friend.length) {
            biggerFriend = friend
        }
    }
    return biggerFriend;
}
let friendsArray = ["arman", "azmol ahmed kobir", "sakib", "Najir khan", "Nafiz", "Rahman", 'Rokib', "sakhawat hatim"];
// console.log(bestFriend(friendsArray))

// 5. Will stop the loop if the array has any negative number and returns the all positive number before the negative numbers.
function onlyPositive(numbers) {
    let positive = [];
    for (const number of numbers) {
        if (number >= 0) {
            positive.push(number);
        } else if (number < 0) {
            break;
        }
    }
    return positive;
}
console.log(onlyPositive([1, 3, 5, -5, 6, 7]))