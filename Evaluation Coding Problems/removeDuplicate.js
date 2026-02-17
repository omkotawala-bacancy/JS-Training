/*
    Topic: Arrays, logic

    Problem:
    Remove duplicate values from an array without using Set.
*/

const array = [1,2,2,3,4,3]

function removeDuplicate(arr){
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index
    })
}

const dupliArray = removeDuplicate(array)
console.log(dupliArray);
