let str = "Om Kotawala is an intern in the Bacancy Services pvt. ltd."

function wordCount(str){
    let array = str.split(" ")

    return array.length;
}

console.log(wordCount(str))