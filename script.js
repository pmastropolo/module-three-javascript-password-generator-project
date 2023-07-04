// Made an Array of Variables

var numbersPassword = ['0','1','2','3','4','5','6','7','8','9','0'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['$','*','#','@','&','%','!'];

  // Where User Selects Length Of Password, PROMPT IT UP! 

  var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');

  if (lengthOfPass> 8 && lengthOfPass< 128) {
    alert("Good Job!")
  }
    else if (lengthOfPass < 9) {
      alert("Need to Add more Characters")
      var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');
    }
    else if (lengthOfPass > 129) {
    alert("To many Characters!")
    var lengthOfPass = prompt('How many Characters would you like in your new Password?\n\nImportant:\nMinimum of at least 8 characters\nMaximum 128 characters\n\nEnter Input in field');
    }
  // Where User Selects Yes or No Questions

  var numberConf = confirm('Would you like to add Numbers?'); 
  var lowerCaseConf = confirm('Would you like "lower-case" Letters?');
  var upperCaseConf = confirm('Would you like "UPPER-CASE" Letters?');
  var specialCharactersConf = confirm('Would you like any\n"Special" Characters?\n\nExample:\n $ # * & ! % @');

// Convert upper case to upper case


function generatePassword () {

  if (numbersConf === true) { 
return 
  }

}





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









  
