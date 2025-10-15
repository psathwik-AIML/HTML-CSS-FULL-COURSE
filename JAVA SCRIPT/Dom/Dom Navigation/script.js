// Select the parent
let parentDiv = document.querySelector(".parent");
let firstChild = parentDiv.firstElementChild;
let lastChild = parentDiv.lastElementChild;

console.log("===== DOM Navigation =====");

// 1️⃣ childNodes → includes text nodes (whitespace)
console.log("childNodes (includes whitespace):", parentDiv.childNodes);

// 2️⃣ children → only element nodes (no whitespace)
console.log("children (no whitespace):", parentDiv.children);

// 3️⃣ nextSibling → next node (can be whitespace)
console.log("nextSibling (with whitespace):", firstChild.nextSibling);

// 4️⃣ nextElementSibling → next HTML element (no whitespace)
console.log("nextElementSibling (no whitespace):", firstChild.nextElementSibling);

// 5️⃣ previousSibling → previous node (can be whitespace)
console.log("previousSibling (with whitespace):", lastChild.previousSibling);

// 6️⃣ previousElementSibling → previous HTML element (no whitespace)
console.log("previousElementSibling (no whitespace):", lastChild.previousElementSibling);

// 7️⃣ parentElement → moves up one level
console.log("parentElement:", firstChild.parentElement);

// 8️⃣ firstChild → first node (includes whitespace)
console.log("firstChild (whitespace):", parentDiv.firstChild);

// 9️⃣ firstElementChild → first HTML element (no whitespace)
console.log("firstElementChild (no whitespace):", parentDiv.firstElementChild);

// 🔟 lastChild → last node (includes whitespace)
console.log("lastChild (whitespace):", parentDiv.lastChild);

// 1️⃣1️⃣ lastElementChild → last HTML element (no whitespace)
console.log("lastElementChild (no whitespace):", parentDiv.lastElementChild);
