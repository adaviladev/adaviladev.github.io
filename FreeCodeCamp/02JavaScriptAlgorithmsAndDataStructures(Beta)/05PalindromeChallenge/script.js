// Attach an event listener to the button with the id "check-btn"
document.getElementById("check-btn").addEventListener("click", getAlert);

// Define the function that will be called when the button is clicked
function getAlert() {
    // Retrieve the value of the input field with the id "text-input"
    let inputValue = document.getElementById("text-input").value;
    // Get the element where the result will be displayed
    let resultElement = document.getElementById("result");

    // Check if the input value is empty
    if (inputValue === "") {
        // If it's empty, show an alert to the user
        alert("Please input a value");
    } else {
        // If the input value is not empty, call the function to check if it's a palindrome
        checkPalindrome(inputValue, resultElement);
    }
}

// Define the function to check if a string is a palindrome
function checkPalindrome(input, resultElement) {
    // Remove non-alphanumeric characters and convert to lowercase
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    
    // Check if the lowercase string equals its reverse
    let resultMsg = `<strong>${input}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    // Update the result element with the result message
    resultElement.innerHTML = resultMsg;
}
