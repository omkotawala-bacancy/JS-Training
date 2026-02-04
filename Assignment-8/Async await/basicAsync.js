// console.log("1");


// setTimeout(function() {
//  console.log("2");
// }, 0);


// Promise.resolve().then(function() {
//  console.log("3");
// });


// console.log("4");

// Output: 1,4,3,2

//Reason: These is because when the execution of the code will be started at that time first the synchronous code will be executed first and is handled by the JS itself whereas the Promises and tiemouts are handled by the Runntime provider. So now here 1 and 4 will be printed first as they are synchronous but the Promise and settimeout will be handled by the runtime provider. Now callback of Promise will be added in the microtask queue while the callback of the setTimeout is added in macrotask queue. Now the priority of the microtask queue is greater than macrotask queue so 3 will be printed before the 2