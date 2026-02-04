console.log("Start")

console.log("Sync Log")

Promise.resolve().then(() => 
    console.log("MicroTAsk Queue")
)

setTimeout(() => console.log("Macrotask Queue"), 0)



const executefunction  = async function(tasks){

    const arr = []
    tasks.forEach(element => {
       arr.push(element()) 
    });

    let count = 0;
    let total = arr.length

    

    const finalPromise = new Promise((resolve, reject) => {
            arr.forEach(promise => {
                promise
                    .then(result => console.log(result))
                    .catch(error => console.log(error))
                    .finally(() =>{
                        count++;

                        if(count === total){
                            resolve("All task Completed")
                        }
                    })
            })
    })

    const result = await finalPromise;
    console.log(result)
    
    
}

const tasks = [
    () => new Promise((resolve, reject) => {setTimeout(() => resolve("Task A"), 1000)}),
    () => new Promise((resolve, reject) => {setTimeout(() => resolve("Task B"), 1500)}),
    () => new Promise((reject, resolve) => {setTimeout(() => reject("Error in Task c"),500)}),
    () => new Promise((resolve, reject) => {setTimeout(() => resolve("Task D"), 100)})
]

executefunction(tasks)