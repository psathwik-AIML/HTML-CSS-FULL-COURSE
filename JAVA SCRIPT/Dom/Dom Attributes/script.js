function showAttributes() {
  // Normal attribute example
  let img = document.getElementById("myImage");

  console.log("Original src:", img.getAttribute("src"));

  // Change the image
  img.setAttribute("src", "https://via.placeholder.com/150");

  // Data attribute example
  let info = document.getElementById("info");

  // Get data attributes
  console.log("data-name:", info.getAttribute("data-name"));
  console.log("data-level:", info.getAttribute("data-level"));

  // Access using dataset (easier way)
  console.log("From dataset:", info.dataset.name);
  console.log("From dataset:", info.dataset.level);

  // Change data attribute
  info.dataset.level = "advanced";

  // Add new data attribute
  info.dataset.topic = "DOM";

  console.log("Updated dataset:", info.dataset);
}
