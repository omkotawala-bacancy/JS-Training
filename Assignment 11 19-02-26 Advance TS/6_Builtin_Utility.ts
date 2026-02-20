/*
    Create a type UserPublicProfile without email and isActive .
    Create a Record that maps user IDs (string) to User objects.
*/

type MainUser = {
    id: number
    name: string
    age: number
    email: string
    isActive: boolean
    password: string
}

type UserPublicProfile = Omit<MainUser, "email" & "isActive">

type USerRecord = Record<MainUser['id'], string[] >

