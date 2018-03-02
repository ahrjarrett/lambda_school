let callNumber = 0
const sumOfDigits = n => {
  callNumber++
  console.log(n)
  console.log(Math.floor(n / 10))
  console.log('+')
  console.log(n % 10)
  if(n < 10) return n
  return Math.floor(n / 10) + sumOfDigits(n % 10)

}

//console.log(sumOfDigits(23))  // => 5
console.log(sumOfDigits(69))  // => 5

//console.log(sumOfDigits(496)) // => 19
