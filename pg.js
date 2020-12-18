// Assignment code here
var generatePassword = function() {

    // Give 3 options on how they would want a password 
    var generatePasswordPrompt = window.prompt("If you want a password with numbers please enter 1, if you want special characters enter 2, and if you want all of the above enter 3");

    // Use switch to pull functions from the criterias section to make a password based on what they choose
    if (generatePasswordPrompt === null || generatePasswordPrompt === "" || isNaN(generatePasswordPrompt))
    return generatePassword();
    switch (generatePasswordPrompt) {
        case 1:
            criterias.numbers();
            break;
        case 2:
            criterias.special();
            break;
        case 3:
            criterias.all();
            break;
    }
  
};
//Password criterias we will reference to 
var criterias = {
    numbers: function() {
        var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@#$%^&*()";
        var passwordLenght = (8, 128);

        for (var i=0; i<passwordLenght; i++) {
            var randomNumber = Math.floor(Math.random() * chars.lenght);
            password += chars.substring(randomNumber,randomNumber+1);
        }

    },
    special: function() {
        var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()";
        var passwordLenght = (8, 128);

        for (var i=0; i<passwordLenght; i++) {
            var randomNumber = Math.floor(Math.random() * chars.lenght);
            password += chars.substring(randomNumber,randomNumber+1);
        }
    },  
    all: function() {
        var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";
        var passwordLenght = (8, 128);

        for (var i=0; i<passwordLenght; i++) {
            var randomNumber = Math.floor(Math.random() * chars.lenght);
            password += chars.substring(randomNumber,randomNumber+1);
        }

    },
};
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
