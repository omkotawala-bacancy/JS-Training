async function APIRetry(url, retry){
    let counter = retry;

    while(counter > 0){
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json()
            return data; 
        } 
        catch (error) {
            console.log(`Attempt ${counter} failed: ${error.message}`);
            counter--;

            if (counter === 0) {
                throw new Error("Out of retries");
            }
        }
    }
    

}

const result = APIRetry("https://jsonplaceholder.typicode.com/todos/1", 8)
result
    .then(res => console.log(res))
    .catch(error => console.log(error.message))