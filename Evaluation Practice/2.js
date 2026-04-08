// 🟢 Task 2 — Simulate API Call
// Create:
// function fetchUser(): Promise<string>
// •	After 1 second return "User data loaded"
// •	Use async/await to call it
// •	Print the result
// Goal: Basic async function returning data.


async function fn() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("User data loaded")
        }, 1000)
    })
}

fn().then(res => console.log(res))