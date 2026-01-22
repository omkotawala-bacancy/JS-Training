class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        
console.log(Counter.getStaticCount()); 
console.log(c1.getStaticCount()); 

/*
    Here in the class there is one static count = 0 which can only be excess by the class name and there is the other variable count which is an instance feild, so each instance get its own copy, also there is on static method called getStaticCount which can only be acess by the classname and can't be accessed by any of the instances. There is one another method getCount that can be accessed by the instances.

    1). Answer of console.log(c1.getCount()); will be 10 as it refers to the count that it can access and that is the count whose value is 10 and it can't acces the static count.

    2). Answer of console.log(Counter.getStaticCount()); will be 2 as we are accessing the static method via the class name and this in the method will only refer to the static variable of the class that is 2. Now we will look why 2 is there not zero. The reason is explained below:
        1). When we will create the instance c1 via constructor then there is something happening in the constructor and that is Counter.count++, the main thing is here this Counter.count++ wil increment the count of the static count as we are acessing the count with class name which refers to the static variable and not to the local one. so the value of static count will be incremented to 1 from 0.
        2). Now again when c2 will be created by using constructor then the Counter.count++ will be run and it will increment the value of static count from 1 to 2.

    Thus we are getting the output as 2 in this console.log

    3). Answer of console.log(c1.getStaticCount()); will be TypeError as c1 can't access the static method of the Counter class via prototype chaining and thus throws an error that c1.getStaticCount() is not a function
*/
