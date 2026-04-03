/*
    Create FirstArgument<T> to extract first parameter type.
    Test it with a function that takes (id: string, active: boolean) .
*/

type FirstArgument<T> = T extends (...args : infer P) => infer R ? R : never

function getname(name: string, age: number){
    return `Hello ${name} your age is ${age}`
}

const firstName: FirstArgument<typeof getname> = "OM"
