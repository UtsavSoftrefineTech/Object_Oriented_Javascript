// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  calculateAnnualSalary() {
    return this.baseSalary * 12;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, department) {
    super(name, baseSalary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const bonusPercentage = 0.1;
    const bonusAmount = this.baseSalary * bonusPercentage;
    return super.calculateAnnualSalary() + bonusAmount;
  }
}

// Create instances of the Manager class
const manager1 = new Manager("Krishna", 3600000, "Marketing");
const manager2 = new Manager("Utsav", 2600000, "Sales");

// Calculate and display the annual salaries
const manager1AnnualSalary = manager1.calculateAnnualSalary();
const manager2AnnualSalary = manager2.calculateAnnualSalary();

console.log(
  `${manager1.name}'s annual salary: $${manager1AnnualSalary.toFixed(2)}`
);
console.log(
  `${manager2.name}'s annual salary: $${manager2AnnualSalary.toFixed(2)}`
);
