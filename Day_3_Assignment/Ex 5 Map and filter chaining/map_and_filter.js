let array = [-10, 20, 50, -5]

let filtered_array = array.filter((val) => {
    if (val > 0){
        return val;
    }
}).map((val) => {
    return val*2
})

console.log(filtered_array)