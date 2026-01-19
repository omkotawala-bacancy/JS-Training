let result = document.querySelector(".result")

function applyCoupon(){

    let amount = document.querySelector("#price").value
    let couponCode = document.querySelector("#code").value
    switch (couponCode) {
        case "SAVE10":
            let discountedPrice = amount - (amount / 10)
            result.innerHTML = `Your Discounted Price is ${discountedPrice}`
            break;

        case "SAVE20":
            let discounted_Price = amount - (amount / 10)*2
            result.innerHTML = `Your Discounted Price is ${discounted_Price}`
            break;

        case "NONE":
            result.innerHTML = `Your Final Amount is ${amount}`
            break;
    
        default:
            result.innerHTML = `Invalid Coupon Your final amount is ${amount}`
            break;
    }
}

let btn = document.querySelector(".check").addEventListener("click", applyCoupon)