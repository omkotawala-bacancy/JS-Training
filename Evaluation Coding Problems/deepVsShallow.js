/*
    Topic: Objects, references

    Problem:
    Write two functions:

    One that creates a shallow copy

    One that creates a deep copy

    Constraints:

    Do not use JSON.stringify

    Nested objects must be handled in deep copy
*/

const origianalObject = {
    name: "Om Kotawala",
    age: 22,
    profile: {
        deignation: "Junior Software Trainee",
        company: "Bacancy"
    },
    greet: function(){
        console.log(this.name)
    },
    slary: undefined
}

function shallowCopy(obj){

    if (Array.isArray(obj)){
            const copy = [...obj]
            return copy;
    }
    if(typeof obj === 'object' && obj !== null){
            const copy = {...obj}
            return copy;
    }
    else{
        return obj;
    }
}

function deepCopy(obj){

    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    const result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {

        if (obj.hasOwnProperty(key)){

            const value = obj[key]

            if(typeof value === 'object' && value !== null ){
                result[key] = deepCopy(value)
            }
            else{
                result[key] = value
            }
        }
   
    }

    return result
}

const copy1 = shallowCopy(origianalObject)
const copy2 = deepCopy(origianalObject)

console.log(copy1);
console.log(copy2);

