//Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");


//Output: start, end, promise 1, promise 2, timeout

//Explaination: When the execution of the codde will be started then the synchronous code will be executed first that's why here the start and the end will be printed the first and then the setTimout call will be aded to the macroTask queue and the callback of the Promise will be added to the microtask Queue now the microtask queue will be executed the first and then the macrotak queue.