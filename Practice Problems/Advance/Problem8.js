function convertKeysToUpperCase(obj){
    const newObj = {}
    for (const key in obj) {
        newObj[key.toUpperCase()] = obj[key]
    }

    return newObj
}

const obj1 = {
    name: "Om Kotawala",
    age: 20
}

console.log(convertKeysToUpperCase(obj1));
