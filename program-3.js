// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  showDetails() {
    console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  showDetails() {
    super.showDetails();
    console.log(`Number of Doors: ${this.numberOfDoors}`);
  }
}

const vehicle1 = new Vehicle("BMW", "Q2", 2023);
console.log("Vehicle Details:");
vehicle1.showDetails();

const car1 = new Car("Toyota", "Camry", 2023, 4);
console.log("\nCar Details:");
car1.showDetails();
