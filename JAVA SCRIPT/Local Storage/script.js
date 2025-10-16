function saveName() {
  let name = document.getElementById("username").value;
  localStorage.setItem("name", name);
  alert("Name saved!");
}

function showName() {
  let savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("display").innerText = "Stored Name: " + savedName;
  } else {
    document.getElementById("display").innerText = "No name found in storage!";
  }
}

function clearStorage() {
  localStorage.clear();
  document.getElementById("display").innerText = "Storage cleared!";
}
