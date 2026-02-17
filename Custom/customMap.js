Array.prototype.customMap = function(callback){

    const newArray = []

    this.forEach((index, element, originalArray) => {
        const mapped = callback(index, element, originalArray)
        newArray.push(mapped)
    });

    return newArray;
}

const array = [1,2,3,4,5,6]

const result = array.customMap((x) => {
   return  x = x*100
})
console.log(result);

