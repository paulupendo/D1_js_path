const WITHDRAWAL_CHARGES = 35;
const TAX = 16/100;
let ACCOUNT_BALANCE = 30000;

let withdraw = (amount) => {
   let transaction_cost = amount + WITHDRAWAL_CHARGES;
   
   if (transaction_cost < ACCOUNT_BALANCE && !(amount <= 0)) {
        ACCOUNT_BALANCE -= (transaction_cost)
        return ACCOUNT_BALANCE;
   } else {
       return "Transaction failed due to insufficient funds";
   }
    
}

let deposit = (amount) => {
    if(!(amount <= 0)) {
        ACCOUNT_BALANCE += amount;
        calculateTax();
        return ACCOUNT_BALANCE;
    } else {
        return "Invalid deposit amount";
    }
    
}

let calculateTax = () => {
    ACCOUNT_BALANCE -= ACCOUNT_BALANCE * TAX;
    return ACCOUNT_BALANCE;
}

