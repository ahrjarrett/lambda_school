/* 
 * Calculate and return the number of days between two dates as a string.
 * Dates may be in any combination of ISO, short or long formats.
 * If `end` occurs before `start`, return '-1'
*/

function daysBetween (start, end) {
  const s = new Date(start)
  const e = new Date(end)
  return e < s
    ? '-1' 
    : ((e - s) / 86400000).toString()
}

console.log(daysBetween('11/17/17', '11/16/17')) // => '-1'
console.log(daysBetween('11/17/17', '11/18/17')) // => '1'
