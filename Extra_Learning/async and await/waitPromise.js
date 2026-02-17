/*
    Write an async function that:

        Waits for a Promise
        Logs the result
        Handles errors using try/catch
*/



async function execute(){

    const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                reject("Unexpected Error occured")
            }, 1000)
    })

    try {
        const result = await promise;
        console.log(result);
        
    } 
    catch (error) {
        console.log(error)
    }
}

execute()