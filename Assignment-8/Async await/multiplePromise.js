console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

//Output: A,G,B,D,E,C,F

//Explanation: A and G are printed because of the synchronous code. Now the callback of first promise will be added to the priority queue and also the callback of the other promise will be added into the priority queue and then the setTimeout's callback will be stored in the callback Queue. Now B will be printed as and then again the promise will be added to the queue and then the D will be printed. Now the remaining callback function of the priority queue will be printed means E and then C and at last the call back of the callback queue will be printed that is F