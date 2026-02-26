/*
    Create abstract class Service<T> with abstract method execute() .
    Extend it with UserService .
*/

interface MainUser {
    name: string
    age: number
    password: string
}

abstract class Service<T> {
    abstract execute(x: T): T
}

class UserService extends Service<MainUser> {
    execute(x: MainUser) {
        return x
    }
}

const user2: MainUser = {
    name: "Om",
    age: 20,
    password: "12345"
}