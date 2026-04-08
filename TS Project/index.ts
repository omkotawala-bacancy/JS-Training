/*
    You are building a backend API response handler.

    Create:

    Interface User

    id: number

    name: string

    email: string

    role: "ADMIN" | "USER"

    Type SafeUser

    Should remove email

    Should make role readonly

    Create function:

    function sanitizeUser(user: User): SafeUser

    Returns user without email

    Prevents role modification

    Add runtime validation:

    If id < 0 → throw error
*/

interface User {
    id: number
    name: string
    email: string
    role: "ADMIN" | "USER"
}

type SafeUser = 
    Omit<User, "email"> & {readonly role: User['role']}

function sanitizeUser(user: User): SafeUser {

    if(user.id < 0){
        throw new Error("ID can't be negative")
    }

    return {
        id: user.id,
        name: user.name,
        role: user.role
    }
}

const user: User = {
    name: "Om",
    id: 3,
    role: "ADMIN",
    email: "omgmail"
}

console.log(sanitizeUser(user))