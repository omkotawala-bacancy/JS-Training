async function asyncDataAggeregation(url){
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json()
            // console.log(data) 

            const userObj = {
                user: data.firstName,
                birthdate: data.birthDate
            }

            return userObj
        } 
        catch (error) {
            console.log(`Attemptfailed: ${error.message}`);
        }
}

const user = asyncDataAggeregation("https://dummyjson.com/users/1")
user.then(res => console.log(res))