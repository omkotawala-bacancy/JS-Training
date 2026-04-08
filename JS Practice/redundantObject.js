/*
    🔥 Task 6 — Remove Duplicate Objects by Key
    Input:
    [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "C" }
    ]
    Output:
    [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
    ]
    (Keep first occurrence)
*/

function removeRedunndant(array){

    const seen = new Set()
    return array.reduce((acc, val) => {

        const{id} = val
        if(!seen.has(id)){
            seen.add(id)
            acc.push(val)
        }
        return acc
    }, [])
}

console.log(removeRedunndant([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 3, name: "D" },
    { id: 3, name: "E" },
    { id: 3, name: "F" }
    ]))