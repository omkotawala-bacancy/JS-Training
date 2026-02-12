function sum(...args){
        const result = args.reduce((acc, val) => {
            return acc += val
        },0)

        return result;

}

console.log(sum(100, 200, 300, 400));