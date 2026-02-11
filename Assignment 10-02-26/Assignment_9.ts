/*
    Create a service class exposing only required public methods
    Keep internal data private
    Explain which members should be accessible and why
    Create a class with public, private, and protected members
    Try accessing them outside the class
    Which members should be exposed and why?
*/

enum TransactionStatus{
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

class Transaction {
    public id: number;
    public status: TransactionStatus;
    private AuthToken: string = "{auth token}"

    constructor(id: number , status: TransactionStatus){
        this.id = id;
        this.status = status
    }

    public getTransactionDetails(){
        return {
            transactionid: this.id,
            transactionStatus: this.status
        }
    }

    private sendToDB(){
        return {
            transactionid: this.id,
            transactionStatus: this.status,
            auth: this.AuthToken
        }
    }
}

const payment = new Transaction(101, TransactionStatus.SUCCESS)
console.log(payment.getTransactionDetails())

//The below code shows the error that the AuthToken is private and can only be acess by the Transaction class and can not be accessed by the paymet
console.log(payment.AuthToken)