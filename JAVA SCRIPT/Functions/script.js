// 🧠 Functions in JavaScript

// 1️⃣ Simple function without parameters
function sayHello() {
  console.log("Hello Friend!");
  document.getElementById("output").innerHTML = "👋 Hello Friend!";
}

// 2️⃣ Function with code logic
function addNumbers() {
  let a = 5;
  let b = 3;
  let sum = a + b;
  console.log("Sum is:", sum);
  document.getElementById("output").innerHTML = "➕ Sum = " + sum;
}

// 3️⃣ Function with parameters
function greetUser(name) {
  console.log("Hello " + name + "!");
  document.getElementById("output").innerHTML = "😀 Hello " + name + "!";
}

// 4️⃣ Function with return value
function multiply(x, y) {
  return x * y;
}

// Using returned value
let result = multiply(4, 5);
console.log("Multiplication:", result);
