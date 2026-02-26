/*
    Create overloads for a function format that:
    Accepts number → returns string
    Accepts Date → returns string
*/

function format(x: number): string
function format(x: Date): string

function format(x: number | Date){
    if(typeof x === 'number') return String(x)

    return x.toLocaleDateString()
}

console.log(format(101))
const date = new Date()

console.log(format(date))
