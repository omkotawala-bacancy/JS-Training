let result = document.querySelector(".result")

function calculateTotalPrice(){
    
    let price = document.querySelector("#role").value
    let quantity = document.querySelector("#quantity").value
    
    let final_Price = price * quantity
    result.innerHTML = final_Price;
}

let btn = document.querySelector(".check").addEventListener("click", calculateTotalPrice)