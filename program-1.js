// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(
      `Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}`
    );
  }
}

const person1 = new Person("Utsav", 20, "India");
person1.displayDetails();

const person2 = new Person("Happy", 21, "India");
person2.displayDetails();
