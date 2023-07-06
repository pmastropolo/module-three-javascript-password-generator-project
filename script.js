// Made an Array of Variables

var numbersPassword = ['0','1','2','3','4','5','6','7','8','9','0'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['$','*','#','@','&','%','!'];

// Console Log Above Array Variables
console.log(numbersPassword);
console.log(lowerCaseLetters);
console.log(upperCaseLetters);
console.log(specialCharacters);

// Where User Selects Length Of Password, PROMPT IT UP! 

  var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');

  if (lengthOfPass> 8 && lengthOfPass< 128) {
    alert("Good Choice")
  }

    else if (lengthOfPass < 8) {
      alert("Need to Add more Characters")
      var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');
    }

    else if (lengthOfPass > 129) {
    alert("To many Characters!")
    var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');
    }

  // Where User Selects Yes or No Questions with Confirm
  // Confirm: Will display and ok or cancel button

  var numberConf = confirm('Would you like to add Numbers?'); 
  var lowerCaseConf = confirm('Would you like "lower-case" Letters?');
  var upperCaseConf = confirm('Would you like "UPPER-CASE" Letters?');
  var specialCharactersConf = confirm('Would you like any\n"Special" Characters?\n\nExample:\n $ # * & ! % @');

  //Console.Log of how long user wanted password
console.log(lengthOfPass);

// Function to generate password with if Statements & Concat
// Used Concat to combine text from multiple strings

function generatePassword() {
  var password = '';
  var usersChoice = [];

  if (numberConf) {
    usersChoice = usersChoice.concat(numbersPassword);
  }

  if (lowerCaseConf) {
    usersChoice = usersChoice.concat(lowerCaseLetters);
  }

  if (upperCaseConf) {
    usersChoice = usersChoice.concat(upperCaseLetters);
  }

  if (specialCharactersConf) {
    usersChoice = usersChoice.concat(specialCharacters);
  }

 
  if (usersChoice.length === 0) {
    alert('Please select at least one character type for your password.');
    return;
  }

 // For Loop with map floor and math random
 // Math floor will give us a rounded number
 // Math random will generate a random number

  for (var i = 0; i < lengthOfPass; i++) {
    var randomIndex = Math.floor(Math.random() * usersChoice.length);
    password += usersChoice[randomIndex];
  }

  return password;

}
// Generate and display the password
// Without document.getElement generate button would not work

var newPassword = generatePassword();
var password=document.getElementById("password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









  
