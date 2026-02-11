/*
    👉 A webpage has:
            An input box
            A button “Fetch User”
            A div to show result

            When button is clicked:
                Show “Loading...”
                After 2 seconds, display “User loaded successfully”
                Handle errors using async/await
*/


const btn = document.getElementById('search')
const userinput = document.getElementById('user') 
let finalResult = document.getElementById('result')

async function fetchUser(){

    finalResult.textContent = "Loading........"

    try {

        btn.setAttribute('disabled', " ")
        const response = await fetch(userinput.value) 
        const data = await response.json()
        const result = data.firstName
        setTimeout(() => {
            finalResult.textContent = result
        }, 2000);
    } 
    catch (error) {
        
        finalResult.textContent = error
    }
    btn.removeAttribute('disabled')
}

btn.addEventListener('click', fetchUser)