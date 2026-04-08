// 👉 Write a function delay(ms: number)
// •	It should return a Promise
// •	Use setTimeout
// •	Use await delay(2000) inside another async function
// •	Print:
// •	Start
// •	(wait 2 sec)
// •	End
// Goal: Understand how await pauses execution.


async function delay(ms){
    return new Promise((resolve,_) => {(setTimeout(() => {
        resolve("hello");
        
    }, ms))})
}

// console.log(await delay(1000))

async function fn() {
    console.log ("start")
    await new Promise((resolve,_) => {
        setTimeout(() => {
            resolve("End")
        }, 2000);
    }).then(res => console.log(res))
}

fn()