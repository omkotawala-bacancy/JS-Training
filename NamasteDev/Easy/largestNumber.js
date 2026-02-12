function smallestNum(array){
    
    if(!Array.isArray(array)){
        return false;
    }
    if(array.length === 0){
        return null
    }

    let largest = -Infinity;
    let found = false
    for (const p of array) {
        
        if(typeof p !== 'number' || !Number.isFinite(p)){
            return false;
        }
        
            if( p > largest){
                largest = p 
                found = true
            }
        
    }
    return found ? largest : null;
    

}

console.log(smallestNum([1,2,3,4,5]))
