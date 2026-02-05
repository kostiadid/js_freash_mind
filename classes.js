class BankAccount{
  balance = 0
  transactions = []

  constructor(balance,transactions){
    this.balance = balance
    this.transactions = transactions
  }

  deposit(sumDeposit){
      if(sumDeposit <=0){
        return "Deposit amount must be greater than zero."
      } else{
        return `Successfully deposited ${'$'+sumDeposit}. New balance: ${'$'+sumDeposit}`
      }
  }

  withdraw(withAmount){
    if(withAmount > balance|| withAmount <0){
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance(){

    return `Current balance: ${'$'+balance}`
  }

  listAllWithdrawals(){

  }

}
