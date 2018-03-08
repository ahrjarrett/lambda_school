/* Write a function that accepts a number and returns it in a string as it's expanded form.
 * Example: Given the number 562 your function should return '500 + 60 + 2'. */

const headN = n => `${n}`[0]
const range = (x, y) => x >= y ? y : [x].concat(range(x + 1, y))

const head = arr => arr[0]
const tail = arr => arr.slice(1)

const times = (n, f) => (...args) => {
  const _recurse = (...args) => {
    f(...args)
    if (n === 1) return
    times(n - 1, f)(...args)
  }
  _recurse(...args)
}

const expandedNums = n => {
  if (n < 10) return n
  const length = `${n}`.length - 1
  let mod = 1
  // Mutation:
  times(length, mo => mod = mod * 10)(mod)
  const remainder = n % mod
  return `${n - remainder} + `.concat(expandedNums(remainder))
}


let results = []

const multiply = (x, y) => x * y

//console.log(times(3, (x, y) => {
//  results.push(multiply(x, y))
//})(2, 3))
//console.log(results)

// 
//const makeModulo = length => 

console.log(expandedNums(562)) // => '500 + 60 + 2'
console.log(expandedNums(2)) // => '2'
console.log(expandedNums(1000420910)) // => 1000000000 + 400000 + 20000 + 900 + 10 + 0


//console.log(range(2, 10))
//console.log(headN(50))
//console.log(headN(50))
