// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Invalid deposit amount.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient funds or invalid withdrawal amount.";
    }
  }
}

const account1 = new BankAccount("AC123456", 1000);
const account2 = new BankAccount("AC789012", 500);

console.log(account1.deposit(200));
console.log(account2.withdraw(100));
