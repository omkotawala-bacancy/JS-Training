// 🟡 Task 4 — Parallel Execution (Promise.all)
// Create 3 async functions that return numbers after 1 second.
// Use:
// Promise.all()
// Print the result array.
// Goal: Understand parallel async execution.

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function login() {
    await delay(1000)
    return 1
}

async function getProfile() {
    await delay(1000)
    return 2
}

async function getPosts() {
    await delay(1000)
    return 3
}

async function run() {
    const result = await Promise.all([
        login(),
        getProfile(),
        getPosts()
    ])

    console.log(result)
}

run()