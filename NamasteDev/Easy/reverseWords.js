function reverseWords(str){

    if(typeof str !== 'string'){
        return 0;
    }

    const array = str.split(" ");
    const newArray = []
    

    array.forEach((item) =>  {

        newArray.push(item.split('').reverse().join(''))
    })

    return newArray.join(" ")
}

console.log(reverseWords(" Om    Kotawala "));
