let result = document.querySelector(".result")

function roleCheck(){
    let role = document.querySelector("#role").value
    switch (role) {
        case "ADMIN":
            result.innerHTML = "You have the full Access!!" 
            break;

        case "USER":
            result.innerHTML = "You have limited Access!!"   
            break;

        case "MANAGER":
            result.innerHTML = "You have moderate Access!!"  
            break;
    
        default:
            result.innerHTML = "Invalid Role"
            break;
    }
}

document.querySelector(".check").addEventListener("click", roleCheck)