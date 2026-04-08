// Create:
// async function fetchWithTimeout(promise, timeout)
// If promise does not resolve within timeout:
// •	Reject with "Request Timeout"
// Hint: Use Promise.race()
// Goal: Advanced async control.


async function fetchWithTimeout(promise, timeout){
    const array = [promise, new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Request timeout")
        }, timeout)
    })]

    try {
        const result = await Promise.race(array)
        console.log(result)
    } catch (error) {
        console.log(error);
        
    }
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello")
    }, 3000);
})

fetchWithTimeout(promise1, 1000)