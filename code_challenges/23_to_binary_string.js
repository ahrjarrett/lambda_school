/* 

 * Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: 

 * toBinaryString(6) should return "110" (no leading 0).   

 * Use of the native method number.toString(2);  is disallowed.

 6
 110
*/

// 02/22/18: I didn't get this one right :/

const head = arr => arr[0]

function toBinaryString(n) {
  return n
}

console.log(toBinaryString(6))
console.log(toBinaryString(10))

function toBinaryStringModel(n) {
  let r = ''
  while(n > 0) {
    r = n % 2 + r
    n >>= 1
  }
  return r || '0'
}

function toBinaryStringFunctional(n) {
  const _divide = (n, binstr) => {
    if (n === 0) return binstr || '0'
    return _divide(n >> 1, n % 2 + binstr)
  }
  return _divide(n, '')
}

console.log(toBinaryStringFunctional(6)) // => 110
console.log(toBinaryStringModel(6))      // => 110

