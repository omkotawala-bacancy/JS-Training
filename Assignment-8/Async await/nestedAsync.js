console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

//Output: Start, End, Promise2, Timeout1, Promise1, Timeout2

//Explanation: Here Start and End will be printed first as they are the synchronous code. Now the Promise 2 will be executed first as it will be in microtask queue and the callback of the settimeout in the promise will be added into the macrotask queue where already the callback of earlier setTimeout will be present. Now Timeout! will be printed and the callback of promise will be added into the microtask queue and it will be executed first and Promise 1 will be printed and now at last the Timeout2 will printed.