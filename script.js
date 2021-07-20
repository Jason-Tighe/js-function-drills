// Verbal Questions
// Write answers to the following questions as comments. As a reminder you can highlight your code and type command+ /to turn your code into a comment.
//
// // my commented answer

// What is the difference between a parameter and an argument?
//parameters are defined within the function, where the arguments are values passed to the function.

// Within a function, what is the difference between return and console.log?
//console.log() is a function to print information to the console, where the retrun passes a value where the call was made.


// Palindrome
// Write a function checkPalindromethat accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

function palindrome(str){
  str = str.toUpperCase();
  let strLen = str.length

  for(let i = 0; i < strLen/2; i++)

  if(str[i] !== str[str.length-i-1]){
    console.log(`${str} is not a palindrome`)
    return false;
  } else {
    console.log(`${str} is a palindrome`)
    return true;
  }
}

palindrome("raceCar")
palindrome("jason")
