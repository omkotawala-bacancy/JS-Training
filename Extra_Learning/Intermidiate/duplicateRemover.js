let array = [1,2,2,3,1,4,9,4,5,8,44,5,6,2,3,9,0,0,4,4]

let new_array = array.filter((item , index, array) => {
    return array.indexOf(item) === index;
})

console.log(new_array)