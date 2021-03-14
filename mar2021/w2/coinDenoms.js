// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

var fewestCoins = function(coins, amount) {
  coins.sort((a,b) => (a-b));
  let denomination = coins.length - 1;
  let count = 0;

  while (denomination >= 0) {
    while (amount >= coins[denomination]) {
      amount -= coins[denomination];
      count++;
    }
    if (amount === 0) {
      return count;
    }
    denomination--;
  }

  return -1;
}

let tests = [
  [[1,2,5], 11], // 3
  [[2], 3], // -1
  [[1], 0], // 0
  [[1], 1], // 1
  [[1], 2], // 2
  [[2,5,10,1], 27]
];

for (let i = 0; i < tests.length; i++) {
  console.log(fewestCoins(tests[i][0], tests[i][1]));
}