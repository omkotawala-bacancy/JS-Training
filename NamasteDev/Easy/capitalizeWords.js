function capitalize(str){
    let array = str.trim().split(" ")
    console.log(array);
    
    let newArray = []

    for (const element of array) {
        if(element !== ""){
            newArray.push(element)
        }
    }

    let result = newArray.map((item) => {

        const firstletter = item.charAt(0).toUpperCase()
        const remaining = item.slice(1)

        return firstletter + remaining
    })

    return result.join(' ')
}

console.log(capitalize(""))