/*
Expected function: `maxChar`

-- Directions
Given a string, return the character that is
most commonly used in the string.
-- Examples
maxChar('abccccccccd') // => 'c'
maxChar('apple 1231111') // => '1'

*/ 

const maxChar = str => {
  const charMap = str.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1
    return acc
  }, {})

  return Object.keys(charMap).reduce((acc, curr) =>
    charMap[acc] > charMap[curr] ? acc : curr
  )
}

// Solution that uses a for of and a for in loop to solve:
function maxChar2(str) {
  let charMap = {}
  let max = 0
  let maxCharacter

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char]
      maxCharacter = char
    }
  }

  return maxCharacter
}

console.log(maxChar2('hello world')) // => 'l'
console.log(maxChar2('abccccccccd')) // => 'c'
console.log(maxChar2('apple 1231111')) // => '1'
