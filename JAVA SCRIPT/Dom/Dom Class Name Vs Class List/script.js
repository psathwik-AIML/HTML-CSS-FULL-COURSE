function useClassName() {
  let box = document.getElementById("box");

  // Shows the current class name
  console.log("Before:", box.className);

  // Replaces all classes
  box.className = "square blue";

  console.log("After:", box.className);
}

function useClassList() {
  let box = document.getElementById("box");

  // Shows list of all classes
  console.log("Class List:", box.classList);

  // Add a new class
  box.classList.add("green");

  // Remove a class
  box.classList.remove("red");

  // Toggle a class (add if missing, remove if present)
  box.classList.toggle("blue");

  // Check if a class exists
  console.log("Has 'green'? →", box.classList.contains("green"));
}
