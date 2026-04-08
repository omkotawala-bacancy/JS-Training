/*
    🔥 Task 5 — Retry With Delay
    Problem:
    Implement retry logic:
    •	Retry API up to 3 times
    •	Wait 1 second between retries
    •	Return final result or error message
    Example Output (on success):
    {
    status: "success",
    attempts: 2
    }
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function APIRetry(url, retries, attempt = 1) {

    try {


        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error Occured")
        }
        return {
            status: "Success",
            attempts: attempt
        }
    }
    catch (error) {
            if (attempt >= retries) {
                return {
                    status: "Failed",
                    attempts: attempt,
                    message: error.message
                }
            }
            console.log(`Attempt: ${attempt}`)
            await sleep(1000)

            return APIRetry(url, retries, attempt + 1)
    }
}

APIRetry(`https://dummyjson.comm/users`, 4).then(res => console.log(res))