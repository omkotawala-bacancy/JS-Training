function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);
/* 
    Above we will get the answer as Generic this is beacuse of below reason
        The constructor works in the 4 steps:
        1). Creates and empty object.
        2). Then it assigns the prototype of Smartphone to the __proto__ of myPhone means here it will do "myPhone -> SmartPhone.prototype -> Object.prototype -> null"
        3). then assign this to the object according to the arguments
        4). returns that object 

        But here we are explicitly returning the object that will discard the this object of the constructor and the reurn object will be assigned to the myPhone.
        So due to this the output is "Gneric" instead of "Apple".
*/

console.log(myPhone.getBrand); 

/*
    As we discussed above the myPhone will have prototype chaining like "myPhone -> Object.prototype -> null", and the property getBrand linked to SmartPhone.prototype so here it is being not assigned and thus the getBrand property will be searched in Object.prototype and the output will be "undefined"
*/