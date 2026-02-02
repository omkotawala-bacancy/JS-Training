const userinput = document.getElementById('userinput')
const result = document.getElementById('result')

function callAfterDelay(){

        result.textContent = userinput.value;
             
}

function debounce(callback, delay){
    
    let timeout
    return function (){
        clearTimeout(timeout)
        timeout = setTimeout(callback, delay)
    } 
}
const debouncedCall = debounce(callAfterDelay, 2000)
userinput.addEventListener('input', debouncedCall)