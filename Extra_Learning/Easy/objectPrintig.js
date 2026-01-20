let student = {
    name: "Om Kotawala",
    placed_in : "Bacancy Services",
    age: 21,
    e_mail: "om@gmail.com"
}

for (const key in student) {
   
    console.log(`${key} has the value ${student[key]}`)
}