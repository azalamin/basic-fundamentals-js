let age = 15;
let vaccineCount = 2;
let isVaccinated = false;

if(age > 20 && vaccineCount == 2){
    isVaccinated = true;
    console.log("You can go out of country")
}
else if(age >= 15 && age <= 20 && vaccineCount == 0){
    console.log("Take your vaccine please.")
}
else if(age >= 15 && age <= 20 && vaccineCount == 2){
    isVaccinated = true;
    console.log("Congratulations! you are vaccinated...");
}

console.log(age, vaccineCount, isVaccinated)