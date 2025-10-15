let numbers = [10, 20, 30, 40, 50];

// 1️⃣ forEach()
function useForEach() {
  let result = "";
  numbers.forEach(function(num, index) {
    result += `Index ${index}: ${num}<br>`;
  });
  document.getElementById("foreach").innerHTML = result;
}

// 2️⃣ map()
function useMap() {
  let doubled = numbers.map(num => num * 2);
  document.getElementById("map").innerHTML = "Doubled Numbers: " + doubled.join(", ");
}

// 3️⃣ filter()
function useFilter() {
  let filtered = numbers.filter(num => num > 25);
  document.getElementById("filter").innerHTML = "Numbers > 25: " + filtered.join(", ");
}

// 4️⃣ reduce()
function useReduce() {
  let total = numbers.reduce((sum, num) => sum + num);
  document.getElementById("reduce").innerHTML = "Sum of all numbers: " + total;
}

// 5️⃣ find()
function useFind() {
  let firstBig = numbers.find(num => num > 25);
  document.getElementById("find").innerHTML = "First number > 25: " + firstBig;
}

// 6️⃣ some()
function useSome() {
  let hasBig = numbers.some(num => num > 45);
  document.getElementById("some").innerHTML = "Any number > 45? " + hasBig;
}

// 7️⃣ every()
function useEvery() {
  let allBig = numbers.every(num => num > 5);
  document.getElementById("every").innerHTML = "All numbers > 5? " + allBig;
}
