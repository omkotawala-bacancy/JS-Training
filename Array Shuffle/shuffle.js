Array.prototype.shuffle = function(){
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
