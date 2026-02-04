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
      }
  }

  checkBalance(){

  }

  listAllWithdrawals(){

  }

}
