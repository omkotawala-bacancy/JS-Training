let str = "My name is om kotawala and my role in company is of junior developer"

let array = str.split(" ")

let count = array.reduce((acc, word) => {
    if(acc[word]){
        acc[word] += 1;
    }
    else{
        acc[word] = 1
    }
    return acc;
}, {})

console.log(count)