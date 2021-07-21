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


// Sum Array
// Write a function sumArraythat takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as

let sum = 0;

function sumArry(arr){
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
    console.log(sum)
  }
}

sumArry([1, 2, 3, 4, 5, 6])


// Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.


function checkPrime(prime){
  if(prime === 0 || prime === 1){
    return false;
  }

  for(var i = 2; i < prime; i++){
    if(prime % i === 0){
      return false
    }
  }
  return true
}

checkPrime(100)


function printPrimes(p){
  let box = [];
  for(let i = 0; i < p ; i++){
    if(checkPrime(i)){
      box.push(i)
    }
  }
  console.log(box)
}

printPrimes(100)
