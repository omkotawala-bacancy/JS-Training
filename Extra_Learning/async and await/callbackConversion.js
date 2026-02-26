/*
    I have the below code which is done using callback, now converting it into a promise based function

        function getData(callback) {
            setTimeout(() => {
                callback("Data loaded");
            }, 1000);
        }
*/

function getData(){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data Loaded")
        }, 1000);
    })

    return promise
}

const result = getData().then(console.log)
console.log(result);
