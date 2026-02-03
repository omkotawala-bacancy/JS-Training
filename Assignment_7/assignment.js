// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

//Answer : Dell as the closer carries its lexical scope so here the function will have the reference to brand.



// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

//Answer : 1,3,2 as the priority of the execution will be CallStack > Microtask Queue > Macrotask Queue



// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

//Answer: Error Occuerd as we are rejecting the promise which will be catched and the code in the catch will be executed



// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

//Answer: Online, because the function will have reference to the status as due to closers.



// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

//Answer: 20. First the promise will be resolved and 10 will be passed to the value of first then in which the value of the number will be twice and then passover to the next then's response in which it prints the output.

//Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

//Answer: undefined. Because we are assigning the print the fuction printName() not executing it, now when we are executing the print function it will be executed as the standalone function and it will not have any reference to the name so it will be undefined.



//Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//Answer: Start, End, Promise, Timeout. the output is like this because the Promise and the setToimeout will be handled by the browser and will be in the microtask queue and the macrotask queue resp. and console.log("Start") & console.log("End"); will be executed in the call stack. Now the priority is like CallStack > microtask queue > macrotask queue.



//Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

//Answer: undefined, because we are using the arrow function and it will refer to the lexical scope and here its lexical scope will be window so the answer is undefined as title is not declared globally.



//Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

//Answer: 5,10. as the 5 will be passed to the first then for handling so first the 5 will be printed and then it will be returned 5 + 5 to the next then where it will be handled, in second then the value is printed.



// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

//Answer: Fail, Recovered. the output is like this because here we are rejecting the promise which will be catched first so the Fail will be printed and then we are returning the "Recoverd" which will be handled by the then and there we will printing the res.



// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

//Answer: A,E,C,D,B. JavaScript first runs all synchronous code, so A and E are printed, while setTimeout goes to the macrotask queue and Promise.then goes to the microtask queue. After the call stack is empty, the event loop executes all microtasks (C then D) before macrotasks, so B prints last.



// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

//Answer: 101, undefined because showId.call(agent) explicitly sets this to agent, so this.id resolves to 101 and gets printed. showId.apply(null) sets this to null, which in non-strict mode defaults to the global object (where id is usually undefined), so it logs undefined (and would throw an error in strict mode).



// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err)); 

//Answer: Error 1. Promise.all fails fast: as soon as any one promise rejects, the entire combined promise rejects immediately. Here, "Error 1" causes rejection, so .then() is skipped and .catch() runs, printing Caught: Error 1, while "Success 2" is ignored.



// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

//Answer: undefined. This is because in JavaScript, this inside a regular function depends on how the function is called, not where it is defined. setTimeout calls its callback as a plain function, so this loses its original object reference.



// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

//Answers: Caught Error, 10. This is because This promise chain starts with a resolved promise (Promise.resolve(1)), so the first .then() executes immediately, but inside it an error is thrown. Throwing an error inside a .then() automatically turns the promise into a rejected state, so control jumps directly to the nearest .catch(). The .catch() handles the error, prints "Caught Error", and returns 10; returning a value from .catch() converts the chain back into a resolved promise with that value. Therefore, the next .then() receives 10 as its input and logs 10.



// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

//Answers: C,A,D,B. This is beacuase when the script starts, all synchronous code runs first, so console.log("C") is executed. Then foo() is called; inside foo, "A" is logged synchronously, but when execution reaches await Promise.resolve(), the function pauses and the remaining part of foo (console.log("B")) is scheduled as a microtask. Control immediately returns to the main script, so "D" is printed next. After the call stack is empty, the event loop processes microtasks, resumes foo, and prints "B".



// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

//Answer: Cleanup, Done. This is because this chain starts with a resolved promise carrying the value "Done", so .finally() executes after resolution and prints "Cleanup". The key rule is that finally does not receive or modify the promise’s value: any value returned from finally is ignored (unless it throws or returns a rejected promise). Therefore, the promise continues to resolve with the original value "Done", which is received by .then() and logged.



// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

//Answer: undefined, 10. This is because during the creation phase, var a is hoisted and initialized to undefined, so when console.log(a) runs, it prints undefined. Next, Promise.resolve().then(...) schedules its callback as a microtask, but it does not execute immediately. Then the statement a = 10 runs synchronously and updates the value of a to 10. After all synchronous code finishes, the event loop processes the microtask queue. At that point, the .then() callback runs and accesses a, which now holds the updated value 10.



// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

//Answer: End, P1, P2, T1, T2. This is because the synchronous code runs first, so "End" is logged, while the Promise.then callbacks are queued as microtasks and the setTimeout callbacks are queued as macrotasks. After the call stack clears, all microtasks run in order (P1, then P2), and only then do macrotasks execute in FIFO order (T1, then T2).



// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

//Answer: Sarah because Arrow functions inside classes bind this at instance creation time, making them safe to pass as callbacks or standalone function references without losing context.