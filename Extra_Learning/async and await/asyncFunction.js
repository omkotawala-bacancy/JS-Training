async function resolvePromise(){

    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Promise Resolved After 2 Seconds")
        }, 2000)
    })

    const result = await p1
    console.log(result);
    
}

resolvePromise()