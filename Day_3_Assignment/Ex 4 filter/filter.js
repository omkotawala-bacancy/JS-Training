let array = [25, -5, 18, 0, 40]

let filtered_array = array.filter((val) => {
    if (val > 0){
        return val;
    }
})

console.log(filtered_array)