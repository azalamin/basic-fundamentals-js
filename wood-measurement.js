function woodMeasurement(chairQuantity, tableQuantity, bedQuantity) {
    let perChairWood = 3 * chairQuantity;
    let perTableWood = 10 * tableQuantity;
    let perBedWood = 50 * bedQuantity;
    const totalWood = perChairWood + perTableWood + perBedWood;
    return totalWood;
}
const result = woodMeasurement(1,1,1);
console.log(result)