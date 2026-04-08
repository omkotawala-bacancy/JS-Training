/*
    🔥 Task 8 — Find First Non-Repeating Character
    Input:
    "javascript"
    Output:
    "j"
    If none:
    null

*/

function firstNonRepeat(str){

    const array = str.toLowerCase().split('')

    const seen = new Map(array.map(el => [el,0]))
    
    array.forEach(item => {
        seen.set(item, seen.get(item) + 1)
    })

    for(let [char, count] of seen){
        if(count === 1){
            return char
        } 
    }
    return null
}

console.log(firstNonRepeat("aaabbdcc"))

