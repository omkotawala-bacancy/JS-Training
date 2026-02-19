function groupBy(arr, key) {
    return arr.reduce((acc, val) => {

        const ourkey = val[key]

        if (!acc[ourkey]) {
            acc[ourkey] = []
        }
        acc[ourkey].push(val)
        return acc
    }, {})
}

const people = [
  { name: "Aarav Patel", age: 22, city: "Ahmedabad" },
  { name: "Priya Sharma", age: 25, city: "Mumbai" },
  { name: "Rahul Verma", age: 22, city: "Ahmedabad" },
  { name: "Sneha Reddy", age: 24, city: "Hyderabad" },
  { name: "Vikram Singh", age: 25, city: "Mumbai" },   
  { name: "Neha Gupta", age: 27, city: "Pune" },
  { name: "Karan Mehta", age: 24, city: "Hyderabad" },
  { name: "Ananya Iyer", age: 22, city: "Chennai" },   
  { name: "Rohit Das", age: 27, city: "Pune" },        
  { name: "Meera Nair", age: 25, city: "Mumbai" }       
];

console.log(groupBy(people, "age"))