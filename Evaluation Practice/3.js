// 🟡 Task 3 — Sequential Async Calls
// Create 3 async functions:
// •	loginUser()
// •	getProfile()
// •	getPosts()
// Each should:
// •	Wait 1 second
// •	Log when finished
// Call them in order using async/await so output is:
// User logged in
// Profile fetched
// Posts fetched
// Goal: Sequential execution.


function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function login() {
    console.log("user Logged");
    
}

async function getProfile() {
    console.log("Profile Fetched");
}

async function getPosts() {
    console.log("Posts Fetched");
}

async function call(){
    login()
    await delay(1000)
    getProfile()
    await delay(1000)
    getPosts()
}

call()