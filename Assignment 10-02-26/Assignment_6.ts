/*
    Create Admin and Customer interfaces using a common base
    Extend the base interface to add role-specific properties
    Write a function that accepts BaseUser
    Pass both Admin and Customer objects to the function
    Design an interface for an API response object
    Create a function that accepts this interface as a parameter
    Extend the interface and reuse it
    Create an interface for a Product
    Create a variable that follows this interface
    Why are interfaces preferred in large projects?
*/

interface BaseUser{
    userId: number;
    email: string
}

interface Admin extends BaseUser{
    role: 'admin';
    permissions: string[];
}

interface Customer extends BaseUser{
    role: 'customer';
    purcahseHistory: number[];
}

type Ideal = Admin | Customer

function userInfo(user: Ideal){
    if(user.role === "admin"){
        return user.permissions
    }
    if(user.role === 'customer'){
        return user.purcahseHistory
    }
}

const user: Admin = {
    role: 'admin',
    userId: 7,
    email: "om@gmail.com",
    permissions: ["read", "write"]
}

console.log(userInfo(user));

interface APIFormat{
    status: number;
    message: string;
    success: boolean
}

interface UserResponse extends APIFormat {
    username: string;
    userid: string;
    userdata: object[]
}

function showUserInfo(user: UserResponse){
    if(user.userid){
        if(user.success){
            return user.userdata
        }
        return `User data not recieved`
    }

    return `Enter the proper user`
}