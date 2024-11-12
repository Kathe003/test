// script.js
function displayText() {
  // Get the value from the input field
  var userInput = document.getElementById('inputField').value;

  // Display the value in the output div
  document.getElementById('output').textContent = "You typed: " + userInput;
}
