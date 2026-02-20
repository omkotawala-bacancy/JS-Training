/*
    Create a function activateUser that accepts only objects having isActive: boolean .
    Create another function that requires both id and email .
    Try passing invalid objects and observe TypeScript errors.
*/

function activeUser<T extends {isActive: boolean}>(value: T): T[]{
    return [value]
}

const User1 = {
    id: 101,
    name: "Om Kotawala",
    age: 21,
    email: "om@gmail.com",
    isActive: true
}

console.log(activeUser(User1))

interface User {
    id: number
    email: string
}

function validUser<T extends User>(value: T): T[]{
    return [value]
}

console.log(validUser(User1))

//If the User will not have the properties mention in the extends the following error will be shown
// Argument of type '{ name: string; age: number; }' is not assignable to parameter of type '{ isActive: boolean; }'. Property 'isActive' is missing in type '{ name: string; age: number; }' but required in type '{ isActive: boolean; }'.