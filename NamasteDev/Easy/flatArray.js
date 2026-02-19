function flatArray(array){

    if(!Array.isArray(array)){
        return array;
    }

    const newArray = []

    for (const i of array) {
        if(Array.isArray(i)){
            const temp = flatArray(i)
            for (const item of temp) {
                newArray.push(item)
            }
        }
        else newArray.push(i)  
    }

    return newArray;
}

const array = [1,[2,[3,[4,[5]]]]]
const result = flatArray(array)
console.log(result);
