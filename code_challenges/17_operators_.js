/* Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use + and - to implement these functions. */

const modulo = (x, y) => (x - y < y ? x - y : modulo(x - y, y));

const multiply = (x, y) => {
  const recurse = (x, y) => (y === 1 ? x : x + recurse(x, y - 1));
  if (x === 0 || y === 0) return 0;
  if (x < 0 && y < 00) return recurse(-x, -y);
  if (x > 0 !== y > 0) return x > y ? 0 - recurse(x, -y) : 0 - recurse(-x, y);
  return recurse(x, y);
};

const divide = (x, y) =>
  (function recurse(x, y, result = 0) {
    let [xx, yy] = [x, y];
    if (xx < 0 && yy < 0) {
      xx = -xx;
      yy = -yy;
    }

    if (xx >= 0 !== yy >= 0) {
      xx = xx > 0 ? xx : -xx;
      yy = yy > 0 ? yy : -yy;
      return xx < yy ? -result : recurse(xx - yy, -yy, result + 1);
    }

    return xx < yy ? result : recurse(xx - yy, yy, result + 1);
  })(x, y);

console.log(multiply(5, 5));
console.log(multiply(-5, 5));
console.log(multiply(5, -5));
console.log(multiply(-5, -5));

console.log(divide(15, 5));
console.log(divide(-15, 5));
console.log(divide(15, -5));
console.log(divide(-15, -5));
