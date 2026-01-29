// let result = document.querySelector(".result")

// function roleCheck(){
//     let role = document.querySelector("#role").value
//     switch (role) {
//         case "ADMIN":
//             result.innerHTML = "You have the full Access!!" 
//             break;

//         case "USER":
//             result.innerHTML = "You have limited Access!!"   
//             break;

//         case "MANAGER":
//             result.innerHTML = "You have moderate Access!!"  
//             break;
    
//         default:
//             result.innerHTML = "Invalid Role"
//             break;
//     }
// }

const Role = {
    ADMIN: "You have the full Access!!",
    MANAGER: "You have limited Access!!" ,
    USER: "You have moderate Access!!" ,
    DEFAULT: "Invalid Role"
};

function roleChecking(role){
    return Role[role.toUpperCase()] || Role.DEFAULT
}

const finalResult = roleChecking("owner")
console.log(finalResult);


// document.querySelector(".check").addEventListener("click", roleCheck)