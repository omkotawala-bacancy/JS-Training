/*
    Create a button with text "Clicks: 0".
    Initialize a variable count = 0.
    On each button click, increment count and update the button text accordingly.
*/


const result = document.getElementById('count')
const Btn = document.getElementById('increment')

let counter = 0

Btn.addEventListener('click', () => {
    counter++
    result.textContent = counter
})

