/*
    Topic: Closures, scope

    Problem:
    Create a function that returns another function which increments and returns a counter value.
*/

function incrementCounter(){
    let counter = 2

    return function (){
        counter++
        return counter
    }
}

const f1 = incrementCounter()
const v1 = f1()
console.log(v1);
