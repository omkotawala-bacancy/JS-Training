console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

//Output: 1, 7, 3, 4, 5, 2, 6

//Explaination: All synchronous code runs first, so "1" and "7" are logged, while the two setTimeout callbacks are queued as macrotasks and both queueMicrotask and Promise.then callbacks are queued as microtasks. After the call stack is empty, the event loop executes all microtasks first in the order they were queued ("3", "4", then the nested "5"), and only then executes macrotasks in FIFO order ("2" followed by "6").