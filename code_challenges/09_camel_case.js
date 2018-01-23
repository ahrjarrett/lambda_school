/* Complete the method/function so that it converts 
 * dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized 
 * only if the original word was capitalized. */

const upperFirst = str => str[0].toUpperCase() + str.substr(1)

const toCamelCase = str => {
  if(!str) return ''
  const split = str.split(/[-_]/)
  const upped = split.map(upperFirst)
  upped[0] = split[0]
  return upped.join('')
}

console.log(toCamelCase("the-stealth-warrior")) // => theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")) // => TheStealthWarrior
