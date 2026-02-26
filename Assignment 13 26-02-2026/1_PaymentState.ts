/*
    Create a PaymentState discriminated union.
    Add exhaustive checking to handle all states.
*/

type PaymentState = 
|{state:"successful", transactionID: number}
|{state:"pending", timeRequired: string}
|{state:"failed", reason: string}

function handleState(Pstate: PaymentState){

    switch (Pstate.state) {
        case "successful":
            return `The payement is ${Pstate.state} with the paymentID: ${Pstate.transactionID}`
            
        
        case "failed":
            return Pstate.reason

        case "pending":
            return Pstate.timeRequired

        default:
            const exhaustive: never = Pstate
            return Pstate;
    }
}

const Pstatus: PaymentState = {
    state: 'successful',
    transactionID: 234265265542
}

console.log(handleState(Pstatus))

/*
    1).What is Discriminated Union ?
        -> It is the union of the the different types or objects with a single discriminator that are seperated using the | key.
        -> We need them because while getting the API Response at that time there will be the multiple state of the     Response so to narrow it we use the Union Discrimainator.

    2). What is Exhuastive checking ?
        -> In exhaustive checkig we are making sure that each state is handled properly so that if the new state comes then it will be easy for us to know in the advance that this stae is not hand;led and we have to still handle that state.
        -> This is done as wee are making the state in the switch case never in the default and we know that never can assigned.
*/