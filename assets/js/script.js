// Initialize global variables
var pwLength    = 0;
var lowerChar   = 0;
var upperChar   = 0;
var numericChar = 0;
var specialChar = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPassword() {
  console.log("Checking Password...");
  pwLength = prompt("Password Length? Between 8 and 128");

  if ((pwLength < 8) || (pwLength > 128)) {
    alert("Don't be a rule breaker. Try again!");
    generatePassword();
  }

  var includeLower   = confirm("Lower Case? OK for Yes");
  var includeUpper   = confirm("Upper Case? OK for Yes");
  var includeNumeric = confirm("Numeric? OK for Yes");
  var includeSpecial = confirm("Special Characters? OK for Yes");

  var numType = 0;
  if (includeLower) {
    numType++;
    lowerChar = 1;
  }

  if (includeUpper) {
    numType++;
    upperChar = 1;    
  }

  if (includeNumeric) {
    numType++;
    numericChar = 1;    
  }

  if (includeSpecial) {
    numType++;
    specialChar = 1;    
  }

  if (numType < 1) {
    alert("No clown passwords. Try again!");
    generatePassword();
  }
}

function generatePassword () {
  console.log("Check Password...");
  checkPassword();

  var pwLower   = "abcdefghijklmnopqrstuvwxyz";
  var pwUpper   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwNumeric = "0123456789";
  var pwSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  var genPassword = "";

  for (myCLV = 0; myCLV < pwLength; myCLV++) {
    console.log(myCLV);

    criteriaMet = 0;
    do {
      myRandomNum = getRandomInt(4);
      console.log(myRandomNum);

      switch (myRandomNum) {
        case 0:
          if (lowerChar === 1) {
            console.log("Picked a lower");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwLower.length - 1);
            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwLower.charAt(myRandomNum2));            
            criteriaMet = 1;
            break;
          }
          
        case 1:
          if (upperChar === 1) {
            console.log("Picked a upper");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwUpper.length - 1);

            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwUpper.charAt(myRandomNum2));                        
            criteriaMet = 1;
            break;            
          }

        case 2:
          if (numericChar === 1) {
            console.log("Picked a number");

            // Generate a random number between 0 and lenght of lower list of numbers - 1
            myRandomNum2 = getRandomInt(pwNumeric.length - 1);

            // Get the character at the position the random number generated
            genPassword = genPassword.concat(pwNumeric.charAt(myRandomNum2));                                    
            criteriaMet = 1;
            break;            
          }
          
        case 3:
          if (specialChar === 1) {
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