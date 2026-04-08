// 🟡 Task 6 — Retry Mechanism
// Create a function:
// async function fetchWithRetry(retries: number)
// If API fails:
// •	Retry until retries = 0
// •	If still fails, throw error
// Goal: Real-world production pattern.

async function retry(url, retries) {
    let counter = retries
    while(counter > 0){
        try {
            
            const response = await fetch(url)
            const data = await response.json()
            return data


        } catch (error) {
            console.log("error: ", counter)
            counter --;
            if(counter === 0){
                throw new Error("Out of retries");
            }
        }
    }
}

const result = retry("https://jsonplaceholder.typicooode.com/todos/1", 8)
result
    .then(res => console.log(res))
    .catch(error => console.log(error.message))