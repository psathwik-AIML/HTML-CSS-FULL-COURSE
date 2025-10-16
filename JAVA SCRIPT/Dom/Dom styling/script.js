function changeStyle() {
  let heading = document.getElementById("heading");

  // Changing individual styles
  heading.style.color = "white";
  heading.style.backgroundColor = "purple";
  heading.style.fontSize = "40px";
  heading.style.border = "3px solid black";
  heading.style.padding = "20px";
}

function resetStyle() {
  let heading = document.getElementById("heading");

  // Reset to original (empty style removes inline styles)
  heading.style = "";
}
