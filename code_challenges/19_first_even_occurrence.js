/*
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.
Example usage:
*/

const evenOccurrence = arr => {
  const result = [];
  const newArr = arr
    .reduce(
      (acc, curr) =>
        acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1),
      new Map(),
    )
    .forEach((v, k) => result.push([k, v]));

  const found = result.find(i => i[1] % 2 === 0);
  return found ? found[0] : null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])); // => 4
console.log(evenOccurrence([8, 7, 6, 7, 5, 4, 3, 2, 1, 7, 1])); // => 1
