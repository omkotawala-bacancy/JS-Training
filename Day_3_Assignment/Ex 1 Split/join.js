function joinArray(){
    const url = document.querySelector("#text").value
    const final_url = url.split(" ").join("-");
    
    let result = document.querySelector(".result");
    result.innerHTML = final_url;
}

const btn = document.querySelector(".click").addEventListener("click", joinArray)