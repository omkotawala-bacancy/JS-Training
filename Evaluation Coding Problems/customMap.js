/* 
    1️⃣ Custom map() Implementation

        Topic: Arrays, prototypes, callbacks

        Problem:
        Implement a polyfill for Array.prototype.map without using the built-in map.

        Requirements:

        Accept a callback function

        Return a new array

        Do not modify the original array
*/

const array = [1,2,3,4,5]

Array.prototype.customMap = function(callback){

    const newArray = []
    this.forEach ((element, index, originalArray) => {
        const mappedValue = callback(element, index, originalArray)
        newArray.push(mappedValue)
    })
    return newArray
}

let result = array.customMap(x => x*2)
console.log(result);
