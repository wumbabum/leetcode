// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
 

// Follow up: Can you solve it in O(n) time complexity?

let shortest = nums => {
  if (nums.length === 0 || nums.length === 1) {
    return 0;
  }
  
  let start = 0;
  let startOnPar;
  let end = -1;
  let i = 1;
  let max;
  let outOfOrder = false;
  let low

  while (i < nums.length) {
    if (nums[i] == nums[i - 1] && nums[i] !== nums[startOnPar]) {
      startOnPar = i - 1;
    }
    if (nums[i] > nums[i - 1] && startOnPar !== undefined) {
      startOnPar = undefined;
    }

    if (nums[i] < nums[i -1]) {
      outOfOrder = true;
      start = startOnPar ? startOnPar : i - 1;
      end = i;
      low = i;
      max = nums[start];
      i++;
      
      while (i < nums.length) {
        if (nums[i] < nums[low]) {
          low = i;
        }
        if (nums[i] > max) {
          max = nums[i];
        }
        if (nums[i] < max) {
          end = i;
        }
        i++;
      }
    }

    i++;
  }

  if (!outOfOrder) {
    return 0;
  }

  //find first value greater than nums[low] that is index less than start
  //if it exists, update start
  for (let j = 0; j < start; j++) {
    if (nums[j] > nums[low]) {
      return end - j + 1;
    }
  }

  return end - start + 1;
}


let nums = [2,6,4,8,10,9,15]
console.log(shortest(nums)); // Output: 5

nums = [1,5,3,6];
console.log(shortest(nums)); // Output: 2

nums = [1];
console.log(shortest(nums)); // Output: 0

nums = [1, 3, 2, 10, 5, 5, 11, 12, 5, 13];
console.log(shortest(nums)); // Output: 8

nums = [2, 3, 3, 3, 5, 5, 5, 4, 6];
console.log(shortest(nums)); // Output: 4

nums = [1, 2, 4, 5, 3];
console.log(shortest(nums)); // Output: 3

nums = [1, 3, 5, 2, 4];
console.log(shortest(nums)); // Output: 4