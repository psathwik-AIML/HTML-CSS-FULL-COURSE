// 🧠 Objects in JavaScript

// 1️⃣ Example: Car Object
let car = {
  brand: "Tesla",
  model: "Model S",
  color: "Red",
  year: 2024,

  // Method (function inside object)
  start: function () {
    return "🚗 The car has started!";
  }
};

// 2️⃣ Example: Person Object
let person = {
  name: "John",
  age: 25,
  city: "Hyderabad",
  isStudent: true,

  // Method
  introduce: function () {
    return "Hi, I'm " + this.name + " from " + this.city + "!";
  }
};

// Function to display car details
function showCarDetails() {
  let text =
    "Brand: " + car.brand + "\n" +
    "Model: " + car.model + "\n" +
    "Color: " + car.color + "\n" +
    "Year: " + car.year + "\n" +
    car.start();

  document.getElementById("output").innerText = text;
}

// Function to display person details
function showPersonDetails() {
  let text =
    "Name: " + person.name + "\n" +
    "Age: " + person.age + "\n" +
    "City: " + person.city + "\n" +
    "Is Student: " + person.isStudent + "\n" +
    person.introduce();

  document.getElementById("output").innerText = text;
}
