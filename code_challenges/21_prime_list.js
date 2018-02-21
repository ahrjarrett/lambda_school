/*

 * Write a function that generates a list of all prime numbers in a specified range (inclusive). 

 * If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
 
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

 */

const range = (start, end) => {
  const result = []
  while(start <= end) result.push(start++)
  return result
}

const primeList = (start, end) => {
  let result = range(start, end)
  start = 1 ? 2 : start
  let i = 2
  while(i <= (end / 2)) {
    //console.log('before', result)
    result = result.filter(n => n === i || n % i)
    //console.log('after', result)
    i++
  }
  return result.filter(n => n >= start)
}

console.log(primeList(1, 100))
// => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
