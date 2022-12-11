// Assignment code here
function generatePassword(){
  //setting up the length with a prompt
  let length = window.prompt("What length should your password be? (8-128 characters)")
  //establishing our pools of characters
  const uppercaseLetters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
  const lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','"',"'",',','<','.','>','/','?','|' ,'\\']
  //setting up an empty passwordpool for later -- also clears it out inbetween uses
  let passwordpool = []

  //if the user hits cancel on the input length, it ends the function
  if (!length){
    return
  }

  //if the user creates a password that isn't between 8-120 characters, ask them to try again
  //making sure that length is a whole number to avoid unexpected results. length - Math.floor(length) will equal 0 if its a whole number, but a decimal if its a float, or undefined if not a number
  if (length < 8 || length > 128 || length - (Math.floor(length)) !== 0 ){  
    window.alert("Please only use a whole number between 8 and 128")
    return
  }

  //prompts that return booleons. used to later create our passwordpool
  let uppercase = window.confirm("Would you like to include uppercase letters?") 
  let lowercase = window.confirm("Would you like to include lowercase letters?") 
  let numeric = window.confirm("Would you like to include numbers?")
  let special = window.confirm("Would you like to include special characters?") 

  //reminding the user of the options selected
  window.alert(`
  Length: ${length}
  Uppercase Letters: ${uppercase} 
  Lowercase Letters: ${lowercase} 
  Numbers: ${numeric}
  Special Characters: ${special}`)

  //asking the user to try again if they choose no parameters for their password.
  if (!uppercase && !lowercase && !numeric && !special){
    window.alert("Please set atleast one perameter")
    return
  }

  //check to see if they responded true for the password parameters, and then concatting their corresponding arrays into the passwordpool
  if (uppercase){
    passwordpool = passwordpool.concat(uppercaseLetters)
  }

  if (lowercase){
    passwordpool = passwordpool.concat(lowercaseLetters)
  }

  if (numeric){
    passwordpool = passwordpool.concat(numbers)
  }

  if (special){
    passwordpool = passwordpool.concat(specialCharacters)
  }

  //generating our passphrase with a for loop. the for-loop is based on the specified length and picks random indexes from our newly constructed passwordpool to generate a unique password
  let passphrase = ''
  for (let i = 0;i<length;i++){
    let randomNumber = Math.floor((Math.random()*passwordpool.length))
    passphrase = passphrase.concat(passwordpool[randomNumber])
  }
  return passphrase
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //incase the process gets interrupted at some point i added a caveate that password must not be undefined
  if (password !== undefined){
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
