/*
    JS: Convert Promise Chain to async/await

    Untitled 1

    Description
    You are given a function implemented using Promise chaining.
    Rewrite the same logic using async / await .
    Do not change the behaviour.
    Existing code:

    function getUserPostTitles(userId) {
        return fetch(`/users/${userId}`)
            .then(res => res.json())
            .then(user => {
            return fetch(`/posts?userId=${user.id}`);
    })
    .then(res => res.json())
    .then(posts => {
    return posts.map(p => p.title);
    });
    }

    Rewrite the above function using async / await .
    Constraints
    Use async / await
    Do not use .then() or .catch()
    Behaviour must remain the same
    Return the same result
*/

async function fetchPost(userId) {

    try {
        const response = await fetch(`/users/${userId}`)

        if (!response.ok) {
            throw new Error(`Some error occurred: ${response.status}`)
        }

        const data = await response.json()

        const postResponse = await fetch(`/posts?userId=${user.id}`)

        if (!postResponse.ok) {
            throw new Error("Some error Occured : ", postResponse.status)
        }

        const postData = await postResponse.json()


        return posts.map(post => post.title)
    }
    catch (err) {
        throw err
    }
}



