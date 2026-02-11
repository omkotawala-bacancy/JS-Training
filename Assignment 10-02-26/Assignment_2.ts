/*
    Create a function that accepts any and performs operations without checks
    Create the same function using unknown and add proper type guards
    Compare the compiler behavior and runtime safety
    Create one variable using any
    Create another variable using unknown
    Try calling methods directly on both
    Which one forces you to write safer code?
*/


function addTwoNumbers(a:any , b:any): any{
    return a + b;
}

console.log(addTwoNumbers(10, "Om")) // Here the output will be 10Om because we have not set the typeGaurd and the function also returns any

function sumTwoNumber(a:unknown, b:unknown){
    if(typeof a === "number" && typeof b === "number"){
        return a+b
    }
    return `Please enter the proper value of a and b`
}

console.log(sumTwoNumber(10, 20)) // Here the output will be 30 as we have typeguard that both the values should be numbers
console.log(sumTwoNumber(10, "Om")) // Here we will get output as Please enter the proper value as b is not a number 

const a: any = "Om"

const b: unknown = "Kotawala"

console.log(a.toUpperCase()); // Here it will run as the type isa ny but it is not safe if we are using String methods and the a is number than runtime error will arrise
//console.log(b.toUpperCase()) // Here it will show compile time error as the b is unknown and we can directly usd=e the methods on it.

//We can use after typeguarding the b
if(typeof b === "string"){
    console.log(b.toUpperCase())
}


