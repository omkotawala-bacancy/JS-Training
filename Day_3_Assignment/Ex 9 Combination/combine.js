const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

// let final_Price = inventory.filter((p) => p.stock > 0
// ).
//     map((p)=> p.price = p.price * p.stock).
//         reduce((acc, p) => {
//             return acc + p
//         }, 0)

// console.log(final_Price)

// Always remeber that map returns the array not the array of object so use the reduce function wisely

// We can do the same without map

// let final_Price = inventory.filter((p) => p.stock > 0)
//     .reduce((acc, p) => {
//         return acc + (p.price * p.stock)
//     }, 0)


//Other way is 

let final_Price = inventory.reduce((total,product) => {
    if(product.stock > 0){
        total += (product.price * product.stock);
    }
    return total
}, 0)
console.log(final_Price)