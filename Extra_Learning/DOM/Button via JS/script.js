const btn  = document.createElement('button')
const body = document.querySelector('body')

btn.setAttribute('class', 'button')

btn.addEventListener("click", () => {
    alert("Button is clicked")
})

btn.textContent = "Click me"

body.appendChild(btn)