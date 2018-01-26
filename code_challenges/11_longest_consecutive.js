function longestConsecutive(arr, k){
  const lengths = []
  let longest = 0

  arr.forEach(str => lengths.push(str.length))

  const test = lengths.reduce((acc, curr, i) => {
    console.log(i)

  })


  return test
}

console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 1))
// => "abigailtheta"
