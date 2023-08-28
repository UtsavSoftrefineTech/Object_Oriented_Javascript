// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor() {
    this.name = "Generic Shape";
  }

  // Default area calculation for a generic shape
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  // Overriding the area calculation method for circles
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.name = "Triangle";
    this.base = base;
    this.height = height;
  }

  // Overriding the area calculation method for triangles
  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

// Creating instances and calculating areas
const circle = new Circle(5);
const circleArea = circle.calculateArea();
console.log(
  `Area of the ${circle.name} with radius ${
    circle.radius
  }: ${circleArea.toFixed(2)}`
);

const triangle = new Triangle(8, 10);
const triangleArea = triangle.calculateArea();
console.log(
  `Area of the ${triangle.name} with base ${triangle.base} and height ${
    triangle.height
  }: ${triangleArea.toFixed(2)}`
);
