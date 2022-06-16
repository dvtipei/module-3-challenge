// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //return statement
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Will need prompts for each of:
// password length (8-128)
// lowercase
// uppercase
// numbers
// special characters (see link)
// IF user selects number outside of range, they need to restart the process
// IF user doesn't select at least one character type, restart the process

// Need one or more arrays to iterate over to get password characters. (break down)
// Might need to look into methods to join characters together into a single string
// Then either print password to page or display it using an alert

