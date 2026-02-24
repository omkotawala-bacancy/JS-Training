/*
    Create a constructor type for UserRepository .
    Create a callable type that formats User name.
*/
interface User {
id: string
name: string
email: string
role: "ADMIN" | "CUSTOMER"
isActive: boolean
}

type UserRepositoryConstructor<T> = new (...args: any[]) => T

abstract class BaseRepository<T> {
    abstract getById(id: string): T
}
class UserRepository extends BaseRepository<User> {
    getById(id: string): User {
        return {
            id,
            name: "Alex",
            email: "alex@test.com",
            role: "ADMIN",
            isActive: true
        }
    }
}

function InstanceOf<T>(ctor: UserRepositoryConstructor<T>): T{
    return new ctor()
}

const user = InstanceOf(UserRepository)
const newUser : User = user.getById("2")

console.log(newUser);

type CapitalizeString = {
    (key: string): string
    label: string
}

const capital: CapitalizeString = Object.assign(

    (key: string) => key.toUpperCase(),
    {label: "Om"}
)

console.log(capital("Om Kotawala"))
console.log(capital.label);
