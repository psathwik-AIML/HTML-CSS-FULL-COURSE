let student = {
  name: "Aarav",
  age: 21,
  skills: ["HTML", "CSS", "JS"]
};

function convertToJSON() {
  let jsonData = JSON.stringify(student);
  document.getElementById("output").innerText = jsonData;
}

function convertToObject() {
  let jsonData = JSON.stringify(student);
  let objData = JSON.parse(jsonData);
  document.getElementById("output").innerText = objData.name + " knows " + objData.skills.join(", ");
}
