/*
Write a function that takes in a string, reverses the 'casing' of that string.


```
reverseCase('HelloWorld');
--> 'hELLOwORLD';

reverseCase('DOG cat');
--> 'dog CAT';
```
*/

const reverseCase = str => str
  .split('').reduce(
    (acc, c) =>
      c.toLowerCase() === c
        ? acc.concat(c.toUpperCase())
        : acc.concat(c.toLowerCase())
    , [])
  .join('')

// Old solution:
//const reverseCase = str => {
//  return str.split('').reduce((acc, l) => {
//    if(l.toLowerCase() === l) return acc.concat(l.toUpperCase())
//    else return acc.concat(l.toLowerCase())
//  }, [])
//  .join('')
//}

console.log(reverseCase('hItHeRe'))
