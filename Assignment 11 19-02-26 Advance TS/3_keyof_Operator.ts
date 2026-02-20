/*
    Create a function updateField that takes:
    object
    key
    value
    Ensure the value type matches the key type.
    Try assigning wrong type and observe the error.
*/

function updateFeild<T, K extends keyof T>(obj: T, key: K, value: typeof obj[K]): T{
    obj[key] = value
    return obj
}

const user = {
    name: "Om",
    age: 20,
    isActive: true
}

console.log(updateFeild(user, "age", 21))