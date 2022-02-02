let phones = [
    { name: "Walton M32", price: 15000, camera: 10, storage: 32, ram: 4 },
    { name: "Iphone X", price: 35000, camera: 24, storage: 32, ram: 3 },
    { name: "Samsung S21", price: 130000, camera: 64, storage: 256, ram: 8 },
    { name: "Samsung M21", price: 18000, camera: 10, storage: 64, ram: 4 },
    { name: "OnePlus 7Pro", price: 45000, camera: 10, storage: 256, ram: 8 },
    { name: "Nokia g3", price: 23000, camera: 10, storage: 128, ram: 6 },
    { name: "Symphony Z10", price: 11000, camera: 10, storage: 32, ram: 4 }
];
let cheapest = phones[0]
for (const phone of phones) {
    if (cheapest.price > phone.price) {
        cheapest = phone;
    }
}
console.log(cheapest)