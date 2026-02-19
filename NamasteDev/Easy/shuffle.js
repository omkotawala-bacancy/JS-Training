Object.prototype.shuffle = function(){
    if(Array.isArray(this)){
        const newArray = [...this]

        for(let i = 0 ; i < newArray.length ; i ++){

            const j = Math.floor(Math.random() * (newArray.length));

            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }

        return newArray
    }
    else{
        throw new Error("This method is only applicable to the Array")
    }
}

const array = [1,2,3,4,5,6]

console.log(array.shuffle())