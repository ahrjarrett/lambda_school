/*

Write a function called sortString that returns a passed string with letters in alphabetical order.
 
 Input: 

'dcba'
'zycxbwa'


Expected Output:

'abcd'
'abcwxyz'

*/

const sortString = str =>
  str.split('')
    .map(s => s.charCodeAt(0))
    .sort((a, b) => a - b)
    .map(c => String.fromCharCode(c))
    .join('')

console.log(sortString('hello'))   // => ehllo
console.log(sortString('zycxbwa')) // => abcwxyz
