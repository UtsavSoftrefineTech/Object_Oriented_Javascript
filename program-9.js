// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor() {
    this.bankName = "";
    this.branches = [];
  }

  setBankName(name) {
    this.bankName = name;
  }

  addBranch(branchName) {
    this.branches.push(branchName);
  }

  removeBranch(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
    }
  }

  displayBranches() {
    console.log(`Branches of ${this.bankName}:`);
    for (const branch of this.branches) {
      console.log(branch);
    }
  }
}

// Create an instance of the Bank class
const bankInstance = new Bank();
bankInstance.setBankName("MyBank");

// Perform addition operations
bankInstance.addBranch("Main Branch");
bankInstance.addBranch("Downtown Branch");
bankInstance.addBranch("Suburb Branch");

console.log("After adding branches:");
bankInstance.displayBranches();

// Perform deletion operations
bankInstance.removeBranch("Downtown Branch");

console.log("\nAfter removing a branch:");
bankInstance.displayBranches();
