function smallestNum(array){
    
    if(!Array.isArray(array)){
        return false;
    }
    if(array.length === 0){
        return null
    }

    let smallest = Infinity;
    let found = false
    for (const p of array) {
        
        if(typeof p !== 'number' || !Number.isFinite(p)){
            return false;
        }
        
            if( p < smallest){
                smallest = p 
                found = true
            }
        
    }
    return found ? smallest : null;
    

}

console.log(smallestNum([Infinity,-1,null,-2, ,-3]))
