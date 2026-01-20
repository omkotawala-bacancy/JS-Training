let array = [1,2,3,[4,5],6]

let newarray = array.reduce((acc, curr) => {
    if(Array.isArray(curr)){
        acc.push(...curr)
    }
    else{
        acc.push(curr)
    }
    return acc
}, []);

console.log(newarray)
