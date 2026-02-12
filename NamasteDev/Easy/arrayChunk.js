const array = [1,2,3,4,5,6]

function chunkArray(arr, size){

    if(!(size > 0) ){
        return 0
    }

    return arr.reduce((acc,_,index) => {
        if(index % size === 0){
            acc.push(arr.slice(index, index+size))
        }
        return acc
    }, [])
}

const output = chunkArray(array, -1)
console.log(output);
console.log(array);