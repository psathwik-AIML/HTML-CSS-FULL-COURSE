// When button clicked
document.getElementById("fetchBtn").addEventListener("click", getUser);

function getUser() {
    document.getElementById("output").innerHTML = "⏳ Fetching data...";

    // Fetching data from a free API
    fetch("https://randomuser.me/api/")
        .then(response => response.json()) // Convert to JSON
        .then(data => {
            let user = data.results[0];
            let name = `${user.name.first} ${user.name.last}`;
            let country = user.location.country;
            let email = user.email;

            document.getElementById("output").innerHTML = `
        <b>Name:</b> ${name} <br>
        <b>Country:</b> ${country} <br>
        <b>Email:</b> ${email}
      `;
        })
        .catch(error => {
            document.getElementById("output").innerHTML = "❌ Failed to fetch data!";
            console.error("Error:", error);
        });
}