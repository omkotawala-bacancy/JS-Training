/*
    Create a type IsNumber<T> .
    Create a type ExtractEmail<T> that extracts email type if present.
*/

interface UserOriginal {
    name: string
    email: string
}

type IsNumber<T> = T extends number ? number : never

const num: IsNumber<number> = 10

type ExtractEmail<T> = T extends {email : infer U} ? U : never

const userr: ExtractEmail<UserOriginal> = "10"