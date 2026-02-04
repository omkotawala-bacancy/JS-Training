function countdown(start){
    
    let counter = start
    
    console.log(counter , "(immideatly)")

    const interval = setInterval(() => {

        counter--

        if(counter < 0 ){
            clearInterval(interval);
            return;
        }

        console.log(counter, `(after ${start-counter} seconds)`)
    },1000)
}



//Other function as below

function countdown2(start){

    console.log(start, "(immediately)")

    for(let i = start-1 ; i >= 0 ; i--){
        setTimeout(() => {
            console.log(`${i} (after ${start- i} seconds)`);
        }, (start - i) * 1000)
    }
}

countdown2(10)