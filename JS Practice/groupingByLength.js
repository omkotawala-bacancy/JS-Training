/*
    🔥 Task 3 — Group Strings by Length
    Input:
    ["hi", "hello", "hey", "world"]
    Output:
    {
    2: ["hi"],
    3: ["hey"],
    5: ["hello", "world"]
    }
*/

function groupByLength(array){
    return array.reduce((acc, val) => {
        const length = val.length
        if(!acc[length]){
            acc[length] = []
        }
        acc[length].push(val)
        
        return acc
    },{})
}

console.log(groupByLength(["hi", "hello", "hey", "world", "kings"]))