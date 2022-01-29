// Get Odd Number 

function getOddNumber(num) {
    if(num % 2 != 0){
        return num + " is a odd number";
    }else{
        return num + " is a even number";
    }
}

const result = getOddNumber(112);
console.log(result)