// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productID, name, price, quantity) {
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productID, name, price, quantity, warrantyPeriod) {
    super(productID, name, price, quantity);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice() {
    const basePrice = super.calculateTotalPrice();
    const totalWithWarranty = basePrice + this.warrantyPeriod * 10;
    return totalWithWarranty;
  }
}

// Creating an instance of PersonalCareProduct
const hairDryer = new PersonalCareProduct(1, "Hair Dryer", 30, 2, 2);
const totalPrice = hairDryer.calculateTotalPrice();

console.log(`Total price of the ${hairDryer.name}: $${totalPrice}`);
