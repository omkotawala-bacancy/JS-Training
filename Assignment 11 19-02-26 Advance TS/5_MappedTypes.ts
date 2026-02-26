/*
    Create a type ReadOnlyUser where all properties are readonly.
    Create a type StringifiedUser where all properties become string.
    Create a type OptionalAndNullableUser where all properties are optional and nullable.
*/

type User = {
    id: number
    name: string
    age: number
    email: string
    isActive: boolean
    password: string
}

type ReadOnlyUser = { 
    readonly [K in keyof User]:  User[K]
}

type StringifiedUser = {
    [K in keyof User] : string
}

/*
    type StringifiedUser = {
    id: string
    name: string
    age: string
    email: string
    isActive: string
    password: string
    }
*/

type OptionalAndNullableUser = {
    [K in keyof User] ?: User[K] | null
}