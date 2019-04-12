import transaction from "../models/transaction.js"
import account from "../models/account.js"

const transact = (req,res) =>{
    const accFound = account.find(found => found.accountNumber === req.params.accountNumber)
    
    if(!accFound)
        return res.status(401).json({
            status : 401,
            error :   `the account number ${found.accountNumber} not found`
        })
        let accountData = {
            transactionId : transaction.length+1,
            accountNumber : req.params.accountNumber,
            amount : req.body.amount,
            cashier: req.body.cashier,
            transactionType: 'debit',
            accountBalance : accFound.balance+req.body.amount,
           
        };
        transaction.push(accountData)
    
        return res.status(201).json({
            status : 201,
            data : accountData
    
        });
  
}
export default transact