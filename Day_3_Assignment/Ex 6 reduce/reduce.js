let array  = [100, 200, 50]

let total = array.reduce((acc,val) =>{
    val += acc
    return val
}, 0)

console.log(total);
