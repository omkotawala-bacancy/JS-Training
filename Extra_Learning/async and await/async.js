const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved")
    }, 3000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved")
    }, 2000)
})

p1.then((data) => {
    console.log(data)
})

p2.then((data) => {
    console.log(data)
})

async function handlePromise(){
    console.log("su keh Om");

    const val = await p1
    console.log(val);

    const val2 = await p2
    console.log(val2);
}

handlePromise();