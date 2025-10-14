// 🧠 Conditional Statements Example

function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("result");

  // if...else example
  if (age >= 18) {
    result.innerText = "✅ You are eligible to vote!";
  } else {
    result.innerText = "❌ You are not eligible to vote yet!";
  }
}
function checkGrade() {
  let marks = prompt("Enter your marks:");
  marks = Number(marks);

  if (marks >= 90) {
    alert("🏅 Grade: A");
  } else if (marks >= 75) {
    alert("🎖 Grade: B");
  } else if (marks >= 50) {
    alert("🙂 Grade: C");
  } else {
    alert("😢 Fail");
  }
}
function checkDay() {
  let day = new Date().getDay(); // 0=Sunday, 1=Monday, etc.
  let dayName;

  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid Day";
  }

  document.getElementById("result").innerText = "📅 Today is " + dayName;
}
