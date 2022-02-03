let products = [
    { name: "laptop", price: 50000, quantity: 1 },
    { name: "phone", price: 30000, quantity: 2 },
    { name: "watch", price: 20000, quantity: 4 },
    { name: "shirt", price: 2000, quantity: 5 }

];
let total = 0;
for (const product of products) {
    let productPrice = product.price * product.quantity;
    total = total + productPrice;
}
console.log(total)