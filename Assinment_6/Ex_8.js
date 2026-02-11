/*
    Create a Promise that resolves with the number 5.
    Chain .then() to double the number, then another .then() to add 20, and finally log the result.
*/
let result = null

const sumation = new Promise((resolve, reject) => {
    resolve(1.5)
}).then(res => {
    return res * 2
})
.then(res => {
    result = res + 20
})
.catch(error => {
    console.log(error)
})
.finally(() => {
    console.log(result);
})