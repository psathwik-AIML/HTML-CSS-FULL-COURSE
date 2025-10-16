// 1️⃣ Create Element
function createItem() {
  let ul = document.getElementById("list");
  let li = document.createElement("li"); // create <li>
  li.textContent = "Mango"; // add text
  ul.appendChild(li); // adds at last
}

// 2️⃣ Insert Before
function insertBeforeItem() {
  let ul = document.getElementById("list");
  let newItem = document.createElement("li");
  newItem.textContent = "Cherry";
  let first = ul.firstElementChild;
  ul.insertBefore(newItem, first); // insert before first item
}

// 3️⃣ Replace Child
function replaceItem() {
  let ul = document.getElementById("list");
  let newItem = document.createElement("li");
  newItem.textContent = "Kiwi";
  let oldItem = ul.children[1]; // second item
  ul.replaceChild(newItem, oldItem);
}

// 4️⃣ Remove Child (Last)
function removeItem() {
  let ul = document.getElementById("list");
  let last = ul.lastElementChild;
  ul.removeChild(last);
}

// 5️⃣ insertAdjacentHTML() — insert HTML in specific position
function useInsertAdjacent() {
  let ul = document.getElementById("list");

  // insert small heading *before* the list
  ul.insertAdjacentHTML("beforebegin", "<h3>Fruit List:</h3>");

  // insert note *after* the list
  ul.insertAdjacentHTML("afterend", "<p>All fruits are fresh 🍎🍌</p>");
}
