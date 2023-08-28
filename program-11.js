// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      console.log(
        `Transferred $${amount} to ${targetAccount.accountHolderName}. Your new balance: $${this.balance}`
      );
    } else {
      console.log("Invalid transfer amount.");
    }
  }
}

// Creating instances of BankAccount
const account1 = new BankAccount(123456789, "Alice Johnson", 1000);
const account2 = new BankAccount(987654321, "Bob Smith", 1500);

// Performing operations
account1.deposit(500);
account1.withdraw(200);
account1.transfer(300, account2);

account2.deposit(100);
account2.transfer(200, account1);
