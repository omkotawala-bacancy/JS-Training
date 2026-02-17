/*
    Write a function with required and optional parameters
    Define return types explicitly
    Create a small utility function that would exist in a real project
    Write a function with one required and one optional parameter
    Call it with and without the optional argument
    How does TypeScript enforce correctness here?
*/

type User = {
    name: string;
    id: number;
    imgURL? : string
}


function userInfo(name: string, id: number, imgURL?: string): User{
    if(imgURL){
        const user: User = {
            name,
            id,
            imgURL
        }
        return user
    }
    const user: User = {
        name,
        id
    }
    return user
}

console.log(userInfo("Om Kotwala", 101, "www.image.com"))
console.log(userInfo("Om Shaktisinh Kotwala", 102))

// here typescript enforces correctness by making sure that optional parameter is not undefined using type guards if type guard is not used and we include avatarUrl in user object of type User then ts gives error that type string | undefined is assignable to type string
