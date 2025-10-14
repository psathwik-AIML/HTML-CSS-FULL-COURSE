// 🧩 For Loop Example
function showNumbers() {
  let result = "";
  // for(start; condition; increment)
  for (let i = 1; i <= 5; i++) {
    result += "Number: " + i + "<br>";
  }
  document.getElementById("result1").innerHTML = result;
}

// 🧩 While Loop Example
function showWhile() {
  let i = 1;
  let result = "";
  while (i <= 5) {
    result += "Count: " + i + "<br>";
    i++;
  }
  document.getElementById("result2").innerHTML = result;
}

// 🧩 Do...While Loop Example
function showDoWhile() {
  let i = 1;
  let result = "";
  do {
    result += "Step: " + i + "<br>";
    i++;
  } while (i <= 5);
  document.getElementById("result3").innerHTML = result;
}
