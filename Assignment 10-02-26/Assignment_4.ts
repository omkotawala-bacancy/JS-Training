/*
    Create an Order using intersection ( & )
    Create the same model using interfaces and extends
    Remove one required property and observe the compiler error
    Decide which approach feels clearer and why
    Create two small object types and combine them using intersection ( & )
    Create the same structure using interfaces and extends
    Try removing a required property and observe the compiler error
    Identify when intersection is better than union
*/

type OrderBase = {
    orderId: number;
    amount: number;
};

type Auditable = {
    createdAt: Date;
    createdBy: string;
};


type Order = OrderBase & Auditable;

function narrow(user: Order) {
    if (user.orderId) {
        return `User with orderId: ${user.orderId} and amount: ${user.amount} which was created at: ${user.createdAt} and by: ${user.createdBy}`
    }
}

const orderInfo: Order = {
    orderId: 101,
    amount: 1000,
    createdAt: new Date(),
    createdBy: "Om"
}

console.log(narrow(orderInfo))

interface User {
    userId: number;
    userName: string
}

interface UserInfo extends User {
    isActive: boolean;
    lastActive: Date
}

function narrowing(user: UserInfo) {
    if (user.userId) {
        return `User with userID: ${user.userId} and username: ${user.userName} is active currently ${user.isActive ? "Yes" : "No"} and was last active on date: ${user.lastActive}`
    }

    return `User is not properly created as per the requirement`
}

const user1: UserInfo = {
    userId: 101,
    userName: "Om Kotawala",
    isActive: false,
    lastActive: new Date()
}

console.log(narrowing(user1))

// when we will try to implement the below code it will have the compiler error saying that the object is missing the key userId
// console.log(narrowing({
//     userName: "Om",
//     isActive: true,
//     lastActive: new Date()
// }))


