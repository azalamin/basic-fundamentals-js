// Leap Year Programme

function getLeapYear(year) {
    if(0 == year % 4 && 0 != year % 100 || 0 == year % 400){
        return true
    } else{
        return false
    }
}

const isLeapYear = getLeapYear(2100);
console.log(isLeapYear)