/*
    🔥 Task 7 — Transform Products by Category
    Input:
    [
    { id: 1, category: "A" },
    { id: 2, category: "B" },
    { id: 3, category: "A" }
    ]
    Output:
    {
    A: [1, 3],
    B: [2]
    }
    IDs sorted ascending.
*/

function transform(array){
    
    return array.reduce((acc, val) => {

        const {category} = val
        if(!acc[category]){
            acc[category] = []
        }
        acc[category].push(val.id)
        acc[category].sort()
        return acc
    }, {})
}

console.log(transform([
    { id: 9, category: "A" },
    { id: 2, category: "B" },
    { id: 3, category: "A" }
    ]))