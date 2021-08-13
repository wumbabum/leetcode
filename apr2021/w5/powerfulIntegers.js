// Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound.

// An integer is powerful if it can be represented as x^i + y^j for some integers i >= 0 and j >= 0.

// You may return the answer in any order. In your answer, each value should occur at most once.

 

// Example 1:

// Input: x = 2, y = 3, bound = 10
// Output: [2,3,4,5,7,9,10]
// Explanation:
// 2 = 2^0 + 3^0
// 3 = 2^1 + 3^0
// 4 = 2^0 + 3^1
// 5 = 2^1 + 3^1
// 7 = 2^2 + 3^1
// 9 = 2^3 + 3^0
// 10 = 20 + 32

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var getPowerList = (a, int) => {
  if (int === 1) {
    return [1];
  }
  
  let list = [];
  
  for (let i = 0; Math.pow(int, i) < a; i++) {
    list.push(Math.pow(int, i));
  }

  return list;
};

var validate = (a, x, y) => {
  let xList = getPowerList(a, x);
  let yList = getPowerList(a, y);

  for (let i = 0; i < xList.length; i++) {
    for (let j = 0; j < yList.length; j++) {
      if (a === (xList[i] + yList[j])) {
        return true;
      }
    }
  }

  return false;
};

var powerfulIntegers = function(x, y, bound) {
  if (bound === 0 || bound === 1) {
    return [];
  }

  let result = [];

  for (let a = 2; a <= bound; a++) {
    if (validate(a, x, y)) {
      result.push(a);
    }
  }

  return result;
};


let result = powerfulIntegers(2, 1, 10);
console.log(result);
//i: x and y and bound, each an integer.
//o: a list of all integers <= bound that are powerful, where integer = x^i + y^j, where i & j >= 0
//c: 1 <= x, y <= 100
//   0 <= bound <= 106
//e: Is it possible to have integers less than 0 that are powerful?
//   since i and j >= 0, each term x^i and y^j are at minimum >= 1. integers cannot be < 0. Integers must be at least 2. This assumes x and y > 0.
// for bound 0 and 1, return [];

// x = 1, y = 2, bound = 3
// 1 ^ i + 2 ^ j
// I would test 2 to 3
// for a given integer, create a list for all x^i and y^j < integer. Then iterate across x^i list, testing each y^j result. If the sum ever equals integer, add it to the list of valid powerful integers