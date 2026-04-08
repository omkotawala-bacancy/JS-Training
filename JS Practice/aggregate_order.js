/*
    You are given an array of orders:
    •	Each order has userId, amount
    •	Return an object:
    o	key = userId
    o	value = total order amount
    •	Users must appear only once
    Input:
    [
    { userId: 1, amount: 100 },
    { userId: 2, amount: 200 },
    { userId: 1, amount: 50 }
    ]
    Output:
    {
    1: 150,
    2: 200
    }

*/

function aggregateArray(array){

    return array.reduce((acc, val) => {

        let{userId, amount} = val

        if(!acc[userId]){
            acc[userId] = amount
        }
        else{
            acc[userId] = amount + acc[userId]
        }
        return acc
    }, {})
}

console.log(aggregateArray(
    [
    { userId: 1, amount: 100 },
    { userId: 2, amount: 200 },
    { userId: 1, amount: 50 }
    ]
))
// Here the acc returns a key value pair