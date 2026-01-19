
/*
    const user = {
        name: "Alex",
        greet: () => {
            console.log("Hello, " + this.name);
        }
    };
    user.greet();
*/

// The above code will not work beacuase when we will use arrow function then 'this' will refer to the lexical scope that is the scope of parent not the object's scope so it will return undefined

// Now to make it working below is the updated code

const user = {
    name: "Alex",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
user.greet();

