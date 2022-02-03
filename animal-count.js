function countAnimals(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityLast100Miles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    } else if (miles <= 20) {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * animalDensitySecond10Miles;
        const secondTotalAnimal = firstDenseAnimal + secondDenseAnimal;
        return secondTotalAnimal;
    } else {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const secondDenseAnimal = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const lastDenseAnimal = restMiles * animalDensityLast100Miles;
        const lastTotalAnimals = firstDenseAnimal + secondDenseAnimal + lastDenseAnimal;
        return lastTotalAnimals;
    }
}
const result = countAnimals(35);
console.log(result)