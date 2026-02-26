console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

//Output: Start, Async 1, End, Asyn 2, Promise 1, Timeout

//Explaination: The synchronous code runs first, so "Start", "Async 1", and "End" are logged; when await is hit, the rest of asyncFunction ("Async 2") is queued as a microtask before the Promise.then microtask because it was scheduled earlier.  After the call stack clears, microtasks run in order ("Async 2" then "Promise 1"), and finally the macrotask from setTimeout runs, printing "Timeout".