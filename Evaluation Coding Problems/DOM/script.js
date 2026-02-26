/*
    Topic: DOM, events

    Problem:
    Create:

    An input field

    A button

    Behavior:

    On button click → add input value to a list

    Clear input after adding

    Prevent adding empty values
*/


const input = document.getElementById('input')
const btn = document.getElementById('add')
const ul = document.createElement('ul')

function printInput(){
    
    if(input.value === ""){
        alert("Please enter the value")
    }
    else{

        btn.setAttribute('disabled', 'true')
        const li = document.createElement('li')
        li.textContent = input.value
        ul.appendChild(li)
        document.querySelector('body').appendChild(ul);
        input.value = ""
        btn.removeAttribute('disabled')
    }
}

btn.addEventListener('click', printInput)
