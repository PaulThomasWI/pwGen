// Assignment code here
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword () {
  var passwordLength = prompt("Password Length? Between 8 and 128");

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Don't be a rule breaker. Try again!");
    generatePassword();
  }

  var passwordLower   = confirm("Lower Case? OK for Yes");
  var passwordUpper   = confirm("Upper Case? OK for Yes");
  var passwordNumeric = confirm("Numeric? OK for Yes");
  var passwordSpecial = confirm("Special Characters? OK for Yes");

  var numType = 0;
  if (passwordLower) {
    numType++;
    var lowerType = 1;
  }

  if (passwordUpper) {
    numType++;
    var upperType = 1;    
  }

  if (passwordNumeric) {
    numType++;
    var numericType = 1;    
  }

  if (passwordSpecial) {
    numType++;
    var specialType = 1;    
  }

  if (numType < 1) {
    alert("No clown passwords. Try again!");
    generatePassword();
  }

  var pwLower   = "abcdefghijklmnopqrstuvwxyz";
  var pwUpper   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwNumeric = "0123456789";
  var pwSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  var genPassword = "";

  for (myCLV = 0; myCLV < passwordLength; myCLV++) {
    console.log(myCLV);

    criteriaMet = 0;
    do {
      myRandomNum = getRandomInt(4);
      console.log(myRandomNum);

      switch (myRandomNum) {
        case 0:
          if (lowerType === 1) {
            console.log("Picked a lower");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwLower.length - 1);
            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwLower.charAt(myRandomNum2));            
            criteriaMet = 1;
            break;
          }
          
        case 1:
          if (upperType === 1) {
            console.log("Picked a upper");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwUpper.length - 1);

            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwUpper.charAt(myRandomNum2));                        
            criteriaMet = 1;
            break;            
          }

        case 2:
          if (numericType === 1) {
            console.log("Picked a number");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwNumeric.length - 1);

            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwNumeric.charAt(myRandomNum2));                                    
            criteriaMet = 1;
            break;            
          }
          
        case 3:
          if (specialType === 1) {
            console.log("Picked a special");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwSpecial.length - 1);

            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwSpecial.charAt(myRandomNum2));
            criteriaMet = 1;            
            break;
          }
      }
    } while (criteriaMet < 1);
  }

  return(genPassword);
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