const ele = document.querySelector("ul")

let previousli = null

ele.addEventListener('click', (e) => {
    if(previousli != null){
        previousli.style.color = 'black'
    }
    if(e.target.tagName === "LI"){
        console.log("My name is : " , e.target.textContent)
        e.target.style.color = 'red'
        previousli = e.target
    }
})

