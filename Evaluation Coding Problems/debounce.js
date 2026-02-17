/*
    Topic: Closures, timers, events

    Problem:
    Write a debounce function that delays execution of a function until after a given delay has passed since the last call.

    Use case:
    Search input field, resize event, button clicks.
*/


function callAfterTimeout(){
    console.log("Called after delay")
}

function debounce(callback, delay){
    let timeout
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(callback, delay)
    }
}

const debouncing = debounce(callAfterTimeout, 3000)
debouncing()