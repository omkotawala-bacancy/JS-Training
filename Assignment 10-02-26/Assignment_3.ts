/*
    Add one more role (e.g. Guest ) to the User union
    Write a function that accepts User
    Use the role field to safely narrow the type
    Observe how TypeScript prevents invalid property access
    Create a union type for two different user roles using type
    Create another union using two interfaces
    Write a function that accepts the union and narrows the type safely
*/

type Admin = {
    role: "admin",
    permissions: string[]
}

type Customer = {
    role: "customer",
    purchaseHistory: number[]
}

type Guest = {
    role: "guest",
    visited: number[]
}

type MainUser = Admin | Customer | Guest

function narrowing(user: MainUser){
    if(user.role === "admin"){
        return `user have role of ${user.role} and permission ${user.permissions}`
    }

    if(user.role === "customer"){
        return `user have role of ${user.role} and permission ${user.purchaseHistory}`
    }

    if(user.role === "guest"){
        //return `user have role of ${user.role} and permission ${user.purcahseHistory}` // It will give the error that purchaseHistory does not belong to the Guest
    }
}

console.log(narrowing({
    role: "admin",
    permissions: ["read", " write", " delete"]
}))


function narrowing2(user: Admin | Customer | Guest){
    if(user.role === "admin"){
        return `user have role of ${user.role} and permission ${user.permissions}`
    }

    if(user.role === "customer"){
        return `user have role of ${user.role} and permission ${user.purchaseHistory}`
    }

    if(user.role === "guest"){
        return `user have role of ${user.role} and permission ${user.visited}` 
    }
}

interface CEO {
    role: "CEO";
    access: string[];
}

interface Employee {
    role: "Employee";
    projects: number[];
}

type merge = CEO | Employee

function narrowing3(user: merge) {
    if (user.role === "CEO") {
        return `User has the role ${user.role} and access: ${user.access}`
    }
}


const user: merge = {
    role: "CEO",
    access: ["adminPanel", "everything"]
}

console.log(narrowing3(user))
