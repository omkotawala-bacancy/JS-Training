/*
    Problem:
    Fetch:
    •	User
    •	Posts
    •	Todos
    Use Promise.all
    Return summary:
    Expected Summary:
    {
    userName: "Leanne Graham",
    postCount: 10,
    completedTodos: 5
    }
*/

async function APIAggregation(){

    try {
        
        const result = await Promise.all([
            fetch('/user'),
            fetch('/posts'),
            fetch('/todos')
        ])

        const finalResult = await Promise.all(
            result.map(value => value.json())
        )

        const[user,posts,todos] = finalResult

        return {
            userName: user.name,
            postCount: posts.length,
            completedTodos: todos.filter(item => item.isCompleted).length
        }
    } 
    catch (error) {
        return `Error Occured : ${error.message}`
    }
}

APIAggregation()