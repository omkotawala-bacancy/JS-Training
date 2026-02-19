function groupBy(arr, key) {
    return arr.reduce((acc, val) => {

        const ourkey = val[key]
        if (!acc[ourkey]) {
            acc[ourkey] = []
        }
        acc[ourkey].push(val)
        return acc
    }, {})
}
console.log(groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age'))