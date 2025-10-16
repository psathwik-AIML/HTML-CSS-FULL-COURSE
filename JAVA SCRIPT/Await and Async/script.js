// Selecting button and output div
const runBtn = document.getElementById("runBtn");
const output = document.getElementById("output");

// Function returning a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // change to false to test rejection
            if(success) {
                resolve("✅ Data fetched successfully with async/await!");
            } else {
                reject("❌ Something went wrong!");
            }
        }, 2000);
    });
}

// Async function using await
async function runAsyncTask() {
    output.textContent = "⏳ Running async task...";
    try {
        const result = await fetchData();
        output.textContent = result;
    } catch(error) {
        output.textContent = error;
    }
}

// Button click event
runBtn.addEventListener("click", runAsyncTask);
