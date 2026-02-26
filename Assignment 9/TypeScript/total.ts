const prices: number[] = [100, 150, 200, 250]

function sum(array: number[] ): number{

    return array.reduce((acc,val) => {
        return acc += val;
    })
}

function sumNumber(a: number, b: number): number | string {
    if(a + b < 100){
        return a + b;
    }
    else{
        const result: number = a + b
        const answer: string = `"${result}"`
        return answer
    }
}

const result: number = sum(prices)
console.log(result);

console.log(sumNumber(70,10))