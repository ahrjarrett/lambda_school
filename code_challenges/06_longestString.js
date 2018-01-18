/*
 * Write a function that accepts an array of strings.
 * 
 * Return the longest string in the array.
 * 
 * example:
 * ```
 * longestString(['hello', 'goodbye', 'abc']);
 * 
 * --> 'goodbye'
 * ```
*/

// longestStr :: Array(String) -> String
const longestStr = arr => {
  let longest = ''
  arr.forEach(str => {
    if(str.length > longest.length) longest = str
  })
  return longest
}

console.log(longestStr(['a','abc','ab', 'abcdefg']))
console.log(longestStr(['alkjsdflkjwlkejr','abc','ab', 'abcdefg']))


// Recursive solution:
// Helpers:
const head = arr => arr[0]
const rest = arr => arr.slice(1)

// rLongestStr :: Array(String) -> String
const rLongestStr = arr => {
  const _rLongestStr = (arr, longest) => {
    if(!arr.length) return longest
    if(head(arr).length > longest.length) {
      return _rLongestStr(rest(arr), head(arr)) 
    }
    else return _rLongestStr(rest(arr), longest)
  }
  return _rLongestStr(arr, '')
}

console.log(rLongestStr(['a','abc','ab', 'abcdefg']))
console.log(rLongestStr(['alkjsdflkjwlkejr','abc','ab', 'abcdefg']))


// Recursive, rewritten to be in old-school JavaScript
// longestString :: Array(String) -> String
function longestString(arr) {
  function _helper_(arr, longest) {
    if(!arr.length) return longest
    if(head(arr).length > longest.length) {
      return _helper_(rest(arr), head(arr))
    }
    else return _helper_(rest(arr), longest)
  }
  return _helper_(arr, '')
}

console.log(longestString(['a','abc','ab', 'abcdefg']))
console.log(longestString(['alkjsdflkjwlkejr','abc','ab', 'abcdefg']))

