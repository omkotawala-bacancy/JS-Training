/*
    Create reusable aliases for union and intersection types
    Refactor earlier assignments to use these aliases
    Observe how readability improves
    Create a type alias for string | number
    Use it in two variables
    How does this improve readability?
*/

type User = {
    type: "user";
    UserId: number;
    userName: string
}

type Order = {
    type: "order";
    OrderId: number;
    orderStatus: string
}

type AliasUnion = User | Order

function narrow(user: AliasUnion){
    if(user.type === "user"){
        return `User with the ID: ${user.UserId} and name: ${user.userName}`
    }
    if(user.type === "order"){
        return `User with the ID: ${user.OrderId} and name: ${user.orderStatus}`
    }

    return `Enter the proper values`
}

type Employee = {
    eId: number;
    empName: string
}

type Department = {
    depId: number;
    depName: string
}

type AlaisIntersection = Employee & Department

function narrowing(user: AlaisIntersection){
    if(user.eId){
        return `${user.empName} is with ID: ${user.eId} is in ${user.depName} department with ID: ${user.depId}`
    }
}

