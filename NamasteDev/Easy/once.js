function once(callback){

    let counter = false
    let result = null

    return function(...args){
        if(!counter){

            try {
                result = callback.apply(this, args)
                counter = true
            } catch (error) {
                throw error
            }
        }
        

        return result
    }
}

function add(a,b){
    return a + b;
}

const onceAdd = once(add);
console.log(onceAdd);
console.log(onceAdd(2,3));
console.log(onceAdd(5,3));

