//Predict the output of the following code and explain why it behaves that way.

console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

//Outpu: undefined, 20, 10


//Explaination: Here during the memory allocation phase the var a will be declared and assigned with undefined so first console.log will give us the undefined. Now here the let will also be hoisted but in the temporal dead Zone and the a will refer to the var for first console.log. Now when the if condition will be executed the let will be blocked in that if condition and the log inside if will refer to the let a not the global one becaues it is also blocke din the if statement. Now when the execution of the if statement will be over then the let a will be discarded from the memoy and the last console.log will refer to the var a.

