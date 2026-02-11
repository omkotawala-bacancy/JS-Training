const array = [1,2,[3,4,[9,10]],5,[6,7],8]
const array2 = [1,[2,[3,[4,[5]]]]]


function flatArray(arr){

    let newarray = []    
    if(Array.isArray(arr) === true){
        for (const e of arr) {
            if(Array.isArray(e) === true){
                const temparray = flatArray(e)
                for (const item of temparray) {
                    newarray.push(item)
                }
            }
            else{
                newarray.push(e)
            } 
        }
    }
    else {
        console.log("Please provide an Array");
        
    }
    return newarray;
}

const result = flatArray(array)
console.log(result);
console.log(flatArray(array2));


