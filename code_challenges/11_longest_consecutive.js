const longestConsecutive = (arr, k) => {
  if(arr.length === 0 || arr.length < k || k <= 0) return ''
  const mapped = arr.map((item, index) =>
    arr.slice(index, index + k).join(''))

  return mapped.sort((a, b) => b.length - a.length)[0]
}

console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 3))
// => "zoneabigailtheta"
console.log(longestConsecutive(["zzonezonezonezonezonezonezonezonezonezonezoneone", "abigail", "theta", "form", "libe", "zas"], 2))
