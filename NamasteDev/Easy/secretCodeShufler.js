function secretCodeShuffle(str){

    if(str.length == 0 || str.length % 2 !== 0){
        return ""
    }
    
    let newStr = ""
    for(let i = 0 ; i < str.length ; i += 2){

        
        
        if(!isNaN(parseInt(str.charAt(i)))){
            return ""
        }

        if(isNaN(parseInt(str.charAt(i+1)))){
            return ""
        }

        const num = str.charCodeAt(i)
        newStr = newStr + String.fromCharCode(num + parseInt(str.charAt(i+1)))
        
    }

    return newStr
}

console.log(secretCodeShuffle("a3b4c8d4"))
// console.log(typeof "a")