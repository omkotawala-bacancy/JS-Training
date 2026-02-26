for (let i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); // Currently logs: 3, 3, 3
 }, 1000);
}

//Here instead of var use let as when the callbacks of timeout will run then they will refrence the var but its value is 3 already
