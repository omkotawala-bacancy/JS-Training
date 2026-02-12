function findNegative(array){
    
    if(!Array.isArray(array)){
        return false;
    }

    if(array.length === 0){
        return 0
    }

    let counter = 0
    let found = false
    for (const p of array) {
        
        if(typeof p !== 'number' || !Number.isFinite(p)){
            return false;
        }
        
            if( p < 0){
                counter++
                found = true
            }
        
    }
    return found ? counter : 0;
}

console.log(findNegative([1,2,3,4,-5]))