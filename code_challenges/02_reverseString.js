/*
Expected function: `reverseString`
Write a function called *reverseString* that accepts a string and returns a reversed copy of the string.

Input Example:

```
'hello world'
'asdf'
'CS rocks!'
```

Output Example:

```
'dlrow olleh'
'fdsa'
'!skcor SC'
```

*/ 

// Using a for loop:
function reverseString(str) {
  let reversedString = ''
  for(let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString
  }
  return reversedString
}

console.log(
  reverseString('hello world')
)
