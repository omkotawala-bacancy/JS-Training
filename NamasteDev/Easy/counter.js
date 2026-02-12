function makeCounter(n = 0){

    const counter = n

    let operationalCounter = counter

    return {
        increment(){
            operationalCounter++
            return operationalCounter;
        },
        decrement(){
            operationalCounter--
            return operationalCounter;
        },
        reset(){
            operationalCounter = counter
            return operationalCounter;
        },
        getValue() {
            return operationalCounter
        }
    }  
}

const counter = makeCounter()
console.log(counter.increment());
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.getValue());
