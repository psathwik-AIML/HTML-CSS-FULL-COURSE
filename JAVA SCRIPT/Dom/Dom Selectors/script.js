// 1️⃣ Select by ID
let boxById = document.getElementById("mainBox");
console.log("Selected by ID:", boxById);

// 2️⃣ Select by Class Name
let boxesByClass = document.getElementsByClassName("smallBox");
console.log("Selected by Class:", boxesByClass);

// 3️⃣ Select by Tag Name
let paragraphs = document.getElementsByTagName("p");
console.log("Selected by Tag:", paragraphs);

// 4️⃣ querySelector (Selects the first match)
let firstDiv = document.querySelector("div");
console.log("Selected by querySelector:", firstDiv);

// 5️⃣ querySelectorAll (Selects all matches)
let allDivs = document.querySelectorAll("div");
console.log("Selected by querySelectorAll:", allDivs);
