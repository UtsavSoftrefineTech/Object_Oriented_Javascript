//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get area() {
    return this._height * this._width;
  }

  get perimeter() {
    return 2 * (this._height + this._width);
  }
}

const rectangleInstance = new Rectangle(26, 32);
console.log("Area:", rectangleInstance.area);
console.log("Perimeter:", rectangleInstance.perimeter);
