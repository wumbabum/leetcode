/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  //given a limit n with 1<= k < n <= 104,
  //use the pattern [1, k, 1+1, k-1, 1+2, k-2 ...] conjoined with any numbers from k+1 to n in a linear row. 
  //to produce the pattern 1, k, we can use a for loop.
  let solution = [];
  let last = 1;
  let plusSign = true;
  for (let i = 0; i < k + 1; i++) {
    solution.push(last);
    last = plusSign ? (last + k - i) : (last - k + i);
    plusSign = !plusSign;
  }
  for (let i = k + 2; i < n + 1; i++) {
    solution.push(i);
  }
  return solution;
};

// Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
// Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

// If there are multiple answers, print any of them.

//Input: n = 3, k = 2
//Output: [1, 3, 2]
//Constr: The n and k are in the range 1 <= k < n <= 104.
//edge cases: no solution - apparently not possible

//Testing
let func = constructArray;

let nums = [
  [3, 1], //[1, 2, 3]
  [3, 2], //[1, 3, 2]
  [5, 3], //[2, 5, 1, 4, 3]
  [5, 4], //[1, 5, 2, 4, 3]
  [5, 2], //[1, 3, 2, 4]
  [10, 8], //[2, 10, 1, 9, 3, 8, 4, 7, 5, 6]
  [10, 7], //[1, 9, 2, 10, 8, 3, 7, 4, 6, 5]
  [10, 6], //[1, 9, 2, 10, 8, 7, 3, 6, 4, 5]
           //[1, 7, 2, 6, 3, 5, 4, 8, 9, 10]
  [10, 5], //[1, 9, 2, 10, 8, 7, 6, 3, 5, 4]
           //[1, 6, 2, 5, 3, 4, 7, 8, 9, 10]
  [10, 4], //[1, 9, 2, 10, 8, 7, 6, 5, 3, 4]
           //[1, 5, 2, 4, 3, 6, 7, 8, 9, 10]
  [10, 3], //[1, 4, 2, 3, 5, 8, 6, 7, 10, 9]
  [10, 2] //[1, 3, 2, 4, 5, 6, 7, 8, 9, 10]
  
];
let input = [];
nums.forEach((arr) => {
  input.push({
    n: arr[0],
    k: arr[1]
  });
});
for (let i = 0; i < input.length; i++) {
  console.log(func(input[i].n, input[i].k));
}