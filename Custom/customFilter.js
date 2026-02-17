Array.prototype.customFilter = function (callback){

    const newArray = []
    
    this.forEach((element, index, originalArray) => {
        const filteredValue = callback(element, index, originalArray)
        if(filteredValue){
            newArray.push(element)
        }
    })

    return newArray;
}

const array = [1,2,3,4,5,6,7,8]

const result = array.customFilter((x) => {
    return x%2 == 1
})
console.log(result);


const obj ={
    name : "SMIT",
    greet1(){
        console.log("grret1 :"+this.name);
    },
    greet2 : ()=>{
        console.log("grret2 :"+this.name);
    },
    greet3(){
        setTimeout(()=>{
            console.log("grret3 :"+this.name);
        },2000);
    },
    greet4 : ()=>{
        setTimeout(()=>{
            console.log("grret4 :"+this.name);
        },2000);
    },
    greet5(){
        setTimeout(function(){
            console.log("grret5 :"+this.name);
        },2000);
    },
    greet6 : ()=>{
        setTimeout(function (){
            console.log("grret6 :"+this.name);
        },2000);
    },
    greet7(){
        let name = ()=>{
            console.log("grret7 :"+this.name);
        }
        name();
    },
    greet8 : ()=>{
        let name = function(){
            console.log("grret8 :"+this.name);
        }
        name();
    }
}