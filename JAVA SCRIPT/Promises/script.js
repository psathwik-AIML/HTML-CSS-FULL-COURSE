// Selecting button and output div
const runBtn = document.getElementById("runBtn");
const output = document.getElementById("output");

// Function returning a Promise
function demoPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // change to false to see rejection
            if(success) {
                resolve("✅ Promise resolved successfully!");
            } else {
                reject("❌ Promise rejected!");
            }
        }, 1500);
    });
}

// Button click event to run Promise
runBtn.addEventListener("click", () => {
    output.textContent = "⏳ Running Promise...";
    demoPromise()
        .then(message => output.textContent = message)
        .catch(error => output.textContent = error);
});
