/*
    Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
    Create a utility NonNullableFields<T> that removes null and undefined from all properties.
    Apply both to User and test different scenarios.
*/

type OriginalUser = {
    id: number
    name: string | null | undefined
    age: number
    email: string
    isActive: boolean
    password: string
}

type ReadonlyByKeys<T, K extends keyof T> =
    Omit<T, K> & {
        readonly [P in K]: T[P]
    }


type NonNullableFields<T, K extends keyof T> =
    Omit<T, K> & {
        [P in K]: NonNullable<T[P]>
    }