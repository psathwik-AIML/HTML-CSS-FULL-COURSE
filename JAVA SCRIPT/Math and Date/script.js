function showMath() {
  let output = "";
  output += "Round 4.6 → " + Math.round(4.6) + "<br>";
  output += "Ceil 4.2 → " + Math.ceil(4.2) + "<br>";
  output += "Floor 4.8 → " + Math.floor(4.8) + "<br>";
  output += "Power 2^3 → " + Math.pow(2, 3) + "<br>";
  output += "Square Root of 25 → " + Math.sqrt(25) + "<br>";
  output += "Absolute of -9 → " + Math.abs(-9) + "<br>";
  output += "Max(3,7,2) → " + Math.max(3,7,2) + "<br>";
  output += "Min(3,7,2) → " + Math.min(3,7,2) + "<br>";
  output += "Random (0-1) → " + Math.random().toFixed(2) + "<br>";

  document.getElementById("math").innerHTML = output;
}

function showDate() {
  let now = new Date();
  let output = "";
  output += "Current Date and Time → " + now + "<br>";
  output += "Year → " + now.getFullYear() + "<br>";
  output += "Month → " + (now.getMonth() + 1) + "<br>"; // +1 because Jan = 0
  output += "Date → " + now.getDate() + "<br>";
  output += "Hours → " + now.getHours() + "<br>";
  output += "Minutes → " + now.getMinutes() + "<br>";
  output += "Seconds → " + now.getSeconds() + "<br>";

  document.getElementById("date").innerHTML = output;
}
