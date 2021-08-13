// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
let memoize = (func) => {
  let storage = {};
  return (n) => {
    if (storage[n] === undefined) {
      let result = func(n);
      storage[n] = result;
      return result;
    } else {
      return storage[n];
    }
  };
}

let findFib = (n) => {

}
var fib = memoize(findFib);