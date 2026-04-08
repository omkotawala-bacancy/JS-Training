/*
    🔥 Task 4 — Deep Flatten Array (No loops)
    Input:
    [1, [2, [3, 4], 5]]
    Output:
    [1, 2, 3, 4, 5]
    Constraint:
    •	No for / while
    •	Use recursion or reduce
*/

function flattenArray(array){

    if(Array.isArray(array)){

        const newArray = []

        array.forEach(item => {
            if(Array.isArray(item)){
                const temp = flattenArray(item)
                temp.forEach(item => {
                    newArray.push(item)
                })
            }
            else{
                newArray.push(item)
            }
        })

        return newArray
    }
    else{
        return array
    }
}

// Other Method 

function flatArray(array){
    return array.reduce((acc, val) => {
        return Array.isArray(val) ? 
            acc.concat(flatArray(val)):
            acc.concat(val)
    }, [])
}

console.log(flatArray([1, [2, [3, 4], 5]]))

