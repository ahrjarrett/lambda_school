/*
 * Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.Assume all numbers will be positive. 

 * Input Sample: 
 * 23
 * 496

 * Output Sample: 
 * 5
 * 19

 * sumOfDigits(23) => 5 because 2 + 3 = 5. */


// implemented using tail-call recursion:
const { floor } = Math

const sumOfDigits = (n, acc = 0) =>
  n === 0
    ? acc
    : sumOfDigits(floor(n / 10), acc + n % 10)

console.log(sumOfDigits(23))   // => 5
console.log(sumOfDigits(496))  // => 19

