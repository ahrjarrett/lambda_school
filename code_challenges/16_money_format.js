/*
 * Given a positive float number, write a function called moneyFormat that formats the float into a string.
 * Example:
 * moneyFormat(2310000.159897); should return '2 310 000.16'
*/

const moneyFormat = n => {
  let [dollars, cents] = `${n}`.split('.')
  const dollarsLength = dollars.length

  const head = dollars.slice(0, dollarsLength % 3)
  let rest = dollars.slice(dollarsLength % 3)
  rest = rest.match(/.{3}/g).join(' ')

  let remainder
  if (!cents) remainder = ''
  else remainder = Math.round('.' + cents.slice(2, 3))

  dollars = `${head} ${rest}`.trim()
  cents = cents && cents.slice(0, 2)

  if(parseInt(cents) < 9) {
    if(remainder) {
      cents = parseInt(cents) + 1
      cents = `0${cents}`
    }
  } else {
    if(remainder) {
      cents = parseInt(cents) + 1
    }
  }

  let lastDigit
  if(cents === 100) {
    cents = 0
    lastDigit = parseInt(dollars[dollars.length - 1]) + 1
    dollars = dollars.split('')
    dollars[dollars.length - 1] = lastDigit
    dollars = dollars.join('')
  }

  return cents
    ? `${dollars}.${cents}`
    : `${dollars}.00`
}

console.log(moneyFormat(2310000.159897))      // => 2 310 000.16
console.log(moneyFormat(2300387663.0512312))  // => 2 300 387 663.05
console.log(moneyFormat(2300387663.0592312))  // => 2 300 387 663.06
console.log(moneyFormat(930515685.314))       // => 930 515 685.31
console.log(moneyFormat(930515685.305))       // => 930 515 685.31
console.log(moneyFormat(60000))               // => 60 000.00
console.log(moneyFormat(5914760768.0954999))  // => 5 914 760 768.10
console.log(moneyFormat(5914760768.9954999))  // => 5 914 760 769.00
