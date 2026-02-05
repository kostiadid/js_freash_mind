class BankAccount{
  constructor(balance = 0,transactions = []){
    this.balance = balance
    this.transactions = transactions
  }

  deposit(depositAmount){
      if(depositAmount <=0){
        return "Deposit amount must be greater than zero."
      } else{
         this.transactions.push({ type: "deposit", depositAmount: depositAmount });
        this.balance = this.balance + depositAmount
        
        return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`
      }
  }
  listAllDeposits(){
    const depositAmount = this.transactions
      .filter(tx => tx.type === "deposit")
      .map(tx => tx.depositAmount);
    return "Deposits: " + depositAmount.join(",");
  }

  withdraw(withdraw){
    if(withdraw > this.balance|| withdraw <=0){
      return "Insufficient balance or invalid amount."
    }else{
      this.balance-=withdraw
      this.transactions.push({ type: "withdraw", withdraw: withdraw });
      return `Successfully withdrew $${withdraw}. New balance: $${this.balance}`
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`
  }

  listAllWithdrawals() {
     const withdrawals = this.transactions
      .filter(tx => tx.type === "withdraw")
      .map(tx => tx.withdraw); 
    return "Withdrawals: " + withdrawals.join(",");
  }

}
const myAccount = new BankAccount();
console.log(myAccount.deposit(100));    
console.log(myAccount.deposit(150));    
console.log(myAccount.withdraw(50));    
console.log(myAccount.withdraw(30));    
console.log(myAccount.deposit(10));    
console.log(myAccount.deposit(21)); 
