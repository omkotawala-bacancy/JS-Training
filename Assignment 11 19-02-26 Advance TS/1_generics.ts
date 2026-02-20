/*
    Create a generic function called wrapInArray that accepts any value and returns it inside an array.

    Create a generic interface PaginatedResponse<T> with properties:
        items: T[]
        total: number
*/

function wrapInArray<T>(value: T): T[]{
    return [value]
}

console.log(wrapInArray({
    name: "Om Kotawala",
    age: 20
}))

interface PaginatedResponse<T>{
    items: T[]
    total: number
}

const User: PaginatedResponse<{
    username: string;
    age: number
}> = {
    items: [{
        username: "Om",
        age: 20
    },
    {
        username: "Om",
        age: 20
    }],
    total: 20
}
