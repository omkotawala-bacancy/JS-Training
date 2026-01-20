let users = [
    { name: "Om", age: 22, isActive: true },
    { name: "Priya", age: 28, isActive: false },
    { name: "Ankit", age: 35, isActive: true },
    { name: "Sneha", age: 19, isActive: true },
    { name: "Rahul", age: 40, isActive: false }
]

let sentence = users.filter((p) => { return p.isActive === true }).map(p => p.name).join(" ");
console.log(sentence);

