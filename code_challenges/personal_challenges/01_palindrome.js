/*
Certain programming problems are easier to solve using multiple data structures.

For example, testing a sequence of characters to determine if it is a palindrome (i.e., reads the same forward and backward, like "radar") can be accomplished easily with one stack and one queue. The solution is to enter the sequence of characters into both data structures, then remove letters from each data structure one at a time and compare them, making sure that the letters match.

*/

const Queue = require('../../submodules/Data-Structures-I/src/Queue')
const Stack = require('../../submodules/Data-Structures-I/src/Stack')

const testPalindrome = str => {
  const q = new Queue()
  const s = new Stack()
  const strArr = str.split('')

  str.split('').forEach(l => {
    q.enqueue(l)
    s.push(l)
  })

  while(q.size) {
    if(q.dequeue() !== s.pop()) return false
  }
  return true
}

console.log(testPalindrome('racecar')) // => true
console.log(testPalindrome('stuff'))   // => false

// Complete 01/28/18
