const array = [1,2,3,4,5]

// const customMap = function (arr, callback){
//     const newarray = []
//     for (const element of arr) {
//         newarray.push(callback(element))
//     }
//     return newarray;
// }

// const result = customMap(array, (element)=>{
//     return element*2 
// } )
// console.log(result)
Array.prototype.customMap = function(){
    const newarray = []
    for (const element of this) {
        newarray.push(element*2)
    }
    return newarray;
}

console.log(array.customMap())