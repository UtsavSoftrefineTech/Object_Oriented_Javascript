// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(departmentName) {
    this.departments.push(departmentName);
  }

  removeDepartment(departmentName) {
    const index = this.departments.indexOf(departmentName);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(`University Name: ${this.name}`);
    console.log("Departments:");
    for (const department of this.departments) {
      console.log(department);
    }
  }
}

const charusatUniversity = new University("Charusat");

charusatUniversity.addDepartment("Information Technology");
charusatUniversity.addDepartment("Civil Engineering");
charusatUniversity.addDepartment("Computer Science and Engineering");
charusatUniversity.addDepartment("Electronics and Communication");

charusatUniversity.displayDepartments();

charusatUniversity.removeDepartment("Electronics and Communication");
console.log("\nAfter removing department:");
charusatUniversity.displayDepartments();
