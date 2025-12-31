// 1. Select the elements and store them in variables
const check = document.getElementById('check');
const ageInput = document.getElementById('ageInput');
const resultDiv = document.getElementById('result');

// 2. Add an "Event Listener" to the button
check.addEventListener('click', function() {
    
    // 3. Get the value from the input and convert it to a whole number
    const age = parseInt(ageInput.value);

    // 4. Logic: The "If/Else" checks
    if (isNaN(age)) {
        // Check if the input is empty or not a number
        displayMessage("Please enter a valid number.", "error");
    } 
    else if (age < 0 || age > 120) {
        // Check for impossible ages
        displayMessage("Please enter a realistic age.", "error");
    } 
    else if (age >= 18) {
        // The success condition
        displayMessage("You are eligible to vote! 🗳️", "success");
    } 
    else {
        // The failure condition
        const yearsLeft = 18 - age;
        displayMessage(`Not eligible yet. Wait ${yearsLeft} more year(s).`, "error");
    }
});

// 5. A reusable function to update the UI
function displayMessage(text, type) {
    resultDiv.textContent = text;
    resultDiv.className = type; // Adds a CSS class (success or error)
}