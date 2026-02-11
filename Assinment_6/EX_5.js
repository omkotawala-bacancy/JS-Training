/*
    Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
    After the delay, log "Download complete: [url]" and execute the callback function.
*/

function doenloadFile(url , callback){
    setTimeout(() => {
        console.log(`Download Completed : ${url}`);
        callback()
    }, 3000)
}

function download(){
    
    console.log("Callback Executed");
}

doenloadFile("https://Om-kotawala.com", download)