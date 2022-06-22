// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //return statement
  var passwordText = document.querySelector("#password"); 
  var enter;
  var enterNumber;
  var enterCharacter;
  var enterUppercase;
  var enterLowercase

number = [0,1,2,3,4,5,6,7,8,9]

character = ["!","@","#","$","%","^","&","*","+","?",",","."];

alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

space = [];

var choices;

var toUpper =function (event) {
  return event.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").ariaPlaceholder = ps;
});

function generatePassword () {
  enter = parseInt(prompt("Choose how many characters you would like your password to be: Between 8 and 128 characters"));
  if (!enter) {
    alert("This needs a value"); 
  } else if (enter < 8 || enter > 128) {
    enter = parseIn(prompt("You need to choose between 8 and 128 characters"));
  } else {
    enterNumber = confirm("Will it contain numbers?"); 
    enterCharacter = confirm("Will it contain characters?"); 
    enterUppercase = confirm("Will it contain uppercase letters?"); 
    enterLowercase = confirm("Will it contain lowercase numbers?"); 
  };

  if (!enterCharacter && !enterNumber && !enterUppercase && !enterLowercase) {
    choices = alter("You have to choose a criteria!")
  }
  else if (enterCharacter && enterNumber && enterUppercase && enterLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  else if (enterCharacter && enterNumber && enterUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (enterCharacter && enterNumber && enterLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (enterCharacter && enterLowercase && enterUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (enterNumber && enterLowercase && enterUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  else if (enterCharacter && enterNumber) {
    choices = character.concat(number);
  }
  
}




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

