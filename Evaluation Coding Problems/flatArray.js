/*
    Topic: Recursion, arrays

    Problem:
    Convert a deeply nested array into a single flat array without using flat().
*/


const array = [1,2,[3,[4,5,[6]]]]

function solveNestedArray (arr){
    const newArray = []

    if(Array.isArray(arr) !== true){
        return;
    }
    else{
        for (const a of arr) {

                if(Array.isArray(a) === true){
                    const temparray = solveNestedArray(a)
                    for (const item of temparray) {
                        newArray.push(item)
                    }
                }
                
            
                else{
                    newArray.push(a)
                    
                }

        }
    }
    return newArray;

}

const result = solveNestedArray(array)

console.log(result);
