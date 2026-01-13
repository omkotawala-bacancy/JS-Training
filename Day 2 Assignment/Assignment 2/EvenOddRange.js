let num = document.querySelector("#number")
let divparent = document.querySelector(".result")

function generateEvenOddRange(){

    let range = num.value;
    for(let i = 1 ; i <= range ; i++){
        
        if(i % 2 == 0){
            let ptag = document.createElement("p");
            ptag.innerHTML = `${i} => EVEN`;
            divparent.appendChild(ptag)
        }

        if(i % 2 != 0){
            let ptag = document.createElement("p");
            ptag.innerHTML = `${i} => ODD`;
            divparent.appendChild(ptag)
        }
    }
}

document.querySelector(".generate").addEventListener("click", generateEvenOddRange)