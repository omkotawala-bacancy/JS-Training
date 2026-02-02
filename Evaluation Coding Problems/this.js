/*
    Topic: this, arrow vs normal function

    Problem:
    Write a program that shows:

    this inside a normal function

    this inside an arrow function
    Explain the difference.
*/

function thisBehaviour(){
    const object = {
        name : "Om Kotawala",
        

    normalthis(){
        console.log(this.name);
    },

    arrowfunction : () => {
        console.log(this.name);
        
    }
    }

    object.normalthis()
    object.arrowfunction()
}

thisBehaviour()
/* Otput will be 
    Om Kotawala beacuse here the functions this will refer to the object
    undefined because this in arrow function refers to the lexical scope and here the lexical scope will be window in non strict mode
*/