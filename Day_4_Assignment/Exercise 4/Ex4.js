let user = {
    name: "Om Kotawala",
    age: 21,
    marks: {
        maths: 100,
        science: 80
    },
    hobbies: ["Cooking", "Reading Books"],
    hello (){
        console.log("Hello from shared function")
    }
};

function deepCopy(obj){

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {

        if(obj.hasOwnProperty(key)){

            const value = obj[key]
        
            if(typeof value === "object" && value !== null){

                result[key] = deepCopy(value);
            }

            else{
                result[key] = value;
            }
        }
    }

    return result;
}

let vishw = deepCopy(user)

let om = deepCopy("Om Kotawala")

vishw.marks.maths = 99
vishw.hobbies[0] = "Playing Cricket"

console.log(vishw.hello === user.hello);
console.log(om);

