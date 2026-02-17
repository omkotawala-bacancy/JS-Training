function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // In line 15 we are making the both function Animal and Dog to share the common prototype so now when there will be the prototype chaining the genericAnimal will refer the shared prototype not only the prototype of Animal, and thus we get output as "Woof".


console.log(myDog.constructor.name); // As we discussed that both the Functions Dog and Animal shares a common prototype and the constructor lies in the prototype and constructor.name will provide the name of the function in which that prototype is there. But here as we have shared the prototypes of DOg and Animal and telling that Dog should inherit from the Animal, then JS will discard all the prototype of the Dog and will only keep the prototype of Animal in shared Prototype.
