class BankAccount{
  constructor(balance = 0,transactions = []){
    this.balance = balance
    this.transactions = transactions
  }

  deposit(depositAmount){
      if(depositAmount <=0){
        return "Deposit amount must be greater than zero."
      } else{
        this.listAllDeposits(depositAmount)
        this.balance = this.balance + depositAmount
        
        return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`
      }
  }
  listAllDeposits =(amount)=>{
    this.transactions.push(amount)
  }

  withdraw(withAmount){
    if(withAmount > balance|| withAmount <0){
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance(){
    balance = '$'+balance
    return `Current balance: ${balance}`
  }

  listAllWithdrawals(){

  }

}
