let array = [1,2,3,4,5,6,7,8,9,10]

function evenChecker(arr){
    for (const element of arr) {
        if(element % 2 === 0){
            console.log(element);
            
        }
    }
}

console.log(evenChecker(array));
