/*     Given a positive integer number, the Collatz conjecture determines the next term in the sequence by either
 *   - Halving n if n is even
 *   - Multiplying n by 3 and then adding one if n is odd
 *     Write a function that will take a number n, and return 
 *   the Collatz chain. You will stop at one. An example chain 
 *   looks like this: 
 *   [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1] */

// My solution:
const rCollatzSequence = n => {
  if (n === 1) return n
  return n % 2 
    ? [n].concat(collatzSequence(n * 3 + 1))
    : [n].concat(collatzSequence(n / 2))
}

// TA's solution:
function collatzSequence(n) {
  const seq = [n];
  //for (i = n; i > 1; n % n ? n * 3 + 1 : n /2) seq.push(n);
  while (n > 1 && (n = n % 2 ? n * 3 + 1 : n / 2)) seq.push(n);
  return seq;
}

console.log(rCollatzSequence(23))
console.log(collatzSequence(23))
