function fibbonaci(n){

    if(n < 0 ) return [];

    if(n === 0) return [];

    const result = [0]
    if(n === 1) return result;

    result.push(1)

    for (let i = 2 ; i < n ; i++){
        result.push(result[i-1] + result[i-2])
    }

    return result
}

console.log(fibbonaci(-1))
