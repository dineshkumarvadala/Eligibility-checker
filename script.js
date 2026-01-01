const check = document.getElementById('check');
const ageInput = document.getElementById('ageInput');
const resultDiv = document.getElementById('result');

check.addEventListener('click', function() {
    

    const age = parseInt(ageInput.value);

    
    if (isNaN(age)) {
        displayMessage("Please enter a valid number.", "error");
    } 
    else if (age < 0 || age > 120) {
        
        displayMessage("Please enter a realistic age.", "error");
    } 
    else if (age >= 18) {
      
        displayMessage("You are eligible to vote! 🗳️", "success");
    } 
    else {
      
        const yearsLeft = 18 - age;
        displayMessage(`Not eligible yet. Wait ${yearsLeft} more year(s).`, "error");
    }
});


function displayMessage(text, type) {
    resultDiv.textContent = text;
    resultDiv.className = type; 
}