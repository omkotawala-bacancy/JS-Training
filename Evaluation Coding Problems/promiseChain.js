/*
    Topic: Promises, async JS

    Problem:
    Create a function that:

    Returns a Promise

    Resolves after 1 second

    Chains three .then() calls

    Passes data from one .then() to the next
*/

async function returnPromise(){

    const promise = new Promise((resolve,reject) => {
        const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })

    return promise;
}

const value = returnPromise()
value
    .then(res => res.json())
    .then(res => res.title)
    .then(res => console.log(res))
    .catch(err => console.log(err.message()))