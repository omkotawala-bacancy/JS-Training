// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum paymentStatus {
    initiated = "INITIATED",
    success = "SUCCESS",
    failed = "FAILED"
}

function status(stat: paymentStatus){
    if(stat === paymentStatus.success){
        return `Payment Successfull`
    }
}

console.log(status(paymentStatus.success));
//console.log(status(paymentStatus.pending)); It will show the error that the field pending is not included in the enum so we acn't access it directly

// Enum are better than the magic strings because they provide basically the four main benifits: Protection from the typing errors, Refactoring, auto completion, and useful in the large code base as it provides the suggestions