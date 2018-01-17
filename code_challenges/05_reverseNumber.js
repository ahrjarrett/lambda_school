const flippedParse = (base, n) => parseInt(n, base)

const reverseNumber = n =>
      flippedParse(
	10,
        new String(n).split('').reverse().join(''))

console.log(reverseNumber(123)) // => 321
console.log(reverseNumber(5555667543)) // => 3457665555

