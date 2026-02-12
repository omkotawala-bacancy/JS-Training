//Fetch data from an API and transform it using modern JavaScript array methods.

/*
    Requirements
    Fetch data using fetch


    Handle API failure gracefully


    Filter only active users


    Transform data into the format:
*/


async function dataFormatter(url) {

    try {
        const response = await fetch(url)
        const data  = await response.json()

        console.log(data);
        

        const formattedData = data.filter(item => {
            if (item.completed){
                return item
            }
        })
        .map(item => {
            const users = {}
            users["userId:"] = item.id
            users["userName:"] = item.name
            return users;
        })

        return formattedData;
    } catch (error) {
        console.log("Error Occured : ", error.message)
    }
    
}

const format = dataFormatter("https://jsonplaceholder.typicode.com/todos").then(res => console.log(res))
// console.log(format);
