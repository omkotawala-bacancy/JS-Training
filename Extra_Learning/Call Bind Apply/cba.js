let user1 = {
    name: "Om"
}

let user2 = {
    name: "Vishw"
}

function introduce (city, country){
    console.log(`I am ${this.name} from ${city}, ${country}`);
    
}

//Call : Here the function will be immmidieately executed and the arguments are seperated by the commas
// function.call(thisArgs, arg1, arg2, ...) thisArgs will be the object to whom we want this to refer

introduce.call(user1, "Anand", "India");


//Apply : It is same as call but here we are passing other arguments as an array of arguments
// function.apply(thisArgs,[arg1, arg2, ...])

introduce.apply(user2, ["Ahmedabad", "India"])

// Also we can do like
const args = ["Kasshi", "India"];

introduce.apply(user1, args)



//Bind : it binds the function with an object permanantly and returns the new function in which this of the function always calls or refers the object that is assigned to it by bind.
let f1 = introduce.bind(user1)
let f2 = f1.bind(user2)

introduce.bind(user2)("Ahmedabad", "India")
