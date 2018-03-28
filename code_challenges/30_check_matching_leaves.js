const {
  identity,
  ifElse,
  map,
  pipe,
  type,
  values,
  when,
  either,
  is,
  isNil,
  reject,
} = require('ramda')

const checkMatchingLeaves = when(
  type(Object),
  map(x => x)
)

const removeNulls = when(
    either(is(Array), is(Object)),
    pipe(
        reject(isNil),
        map(a => removeNulls(a))
    )
)

const a = {
  a: null,
  b: "blah",
  c: 2,
  d: undefined,
  e: {
    meow: null,
    blah: undefined,
    jim: 'bob'
  }
}

const b = removeNulls(a)
console.log(b)

const matchingLeaves = {
  a: 1,
  b: 1,
  c: 1,
  d: {
    f: 1,
    e: 1,
  }
}
const unMatchingLeaves = {
  a: 1,
  b: 1,
  c: 1,
  d: {
    f: 1,
    e: 2,
  }
}
console.log(checkMatchingLeaves(matchingLeaves))
console.log(checkMatchingLeaves(unMatchingLeaves))
