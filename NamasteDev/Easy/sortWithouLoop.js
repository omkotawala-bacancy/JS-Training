const array = [4,5,5,5,4,3,2,1,1]

const sortedArray = array.sort()

const newSet = new Set(Array.from(sortedArray))

const newArray = Array.from(newSet)

console.log(newArray[newArray.length - 2]);

