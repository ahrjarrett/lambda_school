const { floor, abs } = Math

const isTwinPrime = n => {
  const hi = n+2
  const lo = n-2
  
  return !isPrime(n) || lo <= 2
    ? false
    : isPrime(hi) || isPrime(lo)
}

const isPrime = n => {
  if(n === 0) return new Error('N cannot be 0')
  if(n === 1) return false
  if(n === 2) return true
  if(n < 0) return isPrime(abs(n))

  let flag = true
  function recurse(n, div) {
    if(div <= 1) return
    if(n % div === 0) flag = false
    recurse(n, div-1)
  }

  recurse(n, floor(n/2))
  return flag
}

console.log(isPrime(7))  // => true
console.log(isPrime(12)) // => false
console.log(isPrime(1)) // => false
console.log(isPrime(2)) // => true

console.log(isTwinPrime(5))  // => true
console.log(isTwinPrime(-1))  // => false
console.log(isTwinPrime(7))  // => true
console.log(isTwinPrime(-9))  // => false
console.log(isTwinPrime(21)) // => false
