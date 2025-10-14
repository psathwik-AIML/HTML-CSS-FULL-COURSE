// Arrays in JavaScript (Beginner Level)

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
console.log("All fruits:", fruits);

// Accessing elements (index starts from 0)
console.log("First fruit:", fruits[0]); // Apple
console.log("Second fruit:", fruits[1]); // Banana

// Changing an element
fruits[2] = "Orange";
console.log("After change:", fruits);

// Adding new elements
fruits.push("Papaya"); // adds at end
console.log("After push:", fruits);

fruits.unshift("Strawberry"); // adds at start
console.log("After unshift:", fruits);

// Removing elements
fruits.pop(); // removes last
console.log("After pop:", fruits);

fruits.shift(); // removes first
console.log("After shift:", fruits);

// Finding length of array
console.log("Number of fruits:", fruits.length);

// Looping through array
console.log("All fruits one by one:");
for (let i = 0; i < fruits.length; i++) {
    console.log(i + 1 + ".", fruits[i]);
}
