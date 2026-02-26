/*
    Create a generic ApiResponse<T> for products.
    Write a type guard to check if response is success.
*/

type APIResponse<T> = 
|{status: 'resolved', data: T[]}
|{status: 'pending', reason: string}
|{status: 'rejected', error: string, errorCode: number}

function isResolved<T>(response: APIResponse<T>): response is {status: 'resolved', data: T[]}{

    return response.status === 'resolved'
}

function isRejected<T>(response: APIResponse<T>): response is {status: 'rejected', error: string, errorCode: number}{

    return response.status === 'rejected'
}

function handleAPIResponse<T>(response: APIResponse<T>){
    if(isResolved(response)) return response.data

    if(isRejected(response)) return `Error Code: ${response.errorCode} Error Message: ${response.error}`

    return `Response is Pending and the Reason : ${response.reason}`
}

const apiResponse: APIResponse<unknown> ={
    status: 'rejected',
    error: 'Fetch Failed',
    errorCode: 404
}

console.log(handleAPIResponse(apiResponse))