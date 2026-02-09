/*
    Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
    Call them in sequence using nested callbacks.
    Log "All steps finished" only after step3 completes.
*/

function step1(callback){
    setTimeout(callback, 1000)
}

function step2(callback){
    setTimeout(callback, 1000);
}

function step3(callback){
    setTimeout(callback, 1000);
}

function complete(){
    console.log("All tasks completed");
}

step1(() => {
    step2(() => {
        step3 (() => {
            complete()
        })
    })
})