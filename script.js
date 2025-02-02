let enteredPin = "";
const correctPin = "052705";
let displayTimeout;

function enterPin(num) {
    if (enteredPin.length < 6) {
        enteredPin += num;
        showTemporaryNumber();
    }
}

function showTemporaryNumber() {
    const display = document.getElementById("pinDisplay");
    display.textContent = enteredPin; // Show actual input for 3 seconds

    clearTimeout(displayTimeout); // Reset timer if a new number is clicked
    displayTimeout = setTimeout(updateDisplay, 1000); // Hide after 3 seconds
}

function updateDisplay() {
    const display = document.getElementById("pinDisplay");
    display.textContent = "•".repeat(enteredPin.length).padEnd(6, "•");
}

function clearPin() {
    enteredPin = "";
    updateDisplay();
}

function checkPin() {
    if (enteredPin === correctPin) {
        window.location.href = "052705.html"; // Redirect to another page
    } else {
        alert("Incorrect PIN! Try again.");
        clearPin();
    }
}
