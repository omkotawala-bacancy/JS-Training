let originalnumber = document.querySelector("#number");
let result = document.querySelector(".result")


function checkNumber(){

    let num = originalnumber.value
    if(num > 0){
        result.innerHTML = "Number is Positive"
    }
    else if(num < 0){
        result.innerHTML = "Number is Negative"
    }
    else if(num == 0){
        result.innerHTML = "Number is Zero"
    }
    else{
        result.innerHTML = "Enter the Proper number"
    }
}


let btn = document.querySelector(".check").addEventListener("click", checkNumber)