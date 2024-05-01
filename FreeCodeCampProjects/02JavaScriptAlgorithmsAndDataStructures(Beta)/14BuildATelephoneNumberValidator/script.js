const countryCode = '^(1\\s?)?';
const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const spacesDashes = '[\\s\\-]?';
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
const phoneRegex = new RegExp(
  `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
);

const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", showAlert);

function showAlert() {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
}

clearBtn.addEventListener("click", clearInfo);

function clearInfo() {
  resultsDiv.innerHTML = "";
}

checkBtn.addEventListener("click", validateNumber);

function validateNumber() {
  const userInputEntry = userInput.value;
  if (phoneRegex.test(userInputEntry)) {
    resultsDiv.innerHTML = "Valid US Number: " + userInputEntry;
  } else {
    resultsDiv.innerHTML = "Invalid US Number: " + userInputEntry;
  }
}
