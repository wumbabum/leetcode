// Write an efficient algorithm that searches for a target value 
// in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

function searchMatrix(matrix, target) {
  //Find the highest row index that target could be located
  let width = matrix[0].length;
  let highM = null;
  
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (highM === null && matrix[i][0] <= target) {
      highM = i;
    }
  }
  
  if (highM === null) {
    return false;
  }
  
  let lowestN = 0;
  //Iterate downwards starting from highM
  for (let i = highM; i <= 0; i--) {
    let j = lowestN;
    
    //Iterate across row until either target is found or a value higher than target. 
    while (matrix[i][j] < target && j < width) {
      if (matrix[i][j] === target) {
        return true;
      }
      j++;
    }
    
    //If target exceeds all row values, end search (target not in matrix);
    if (j === width) {
      return false;
    }

    //if a value higher is found, update lowestN, decrement highM
    lowestN = j - 1;
    //if lowestN exceeds max n.
  }

  //If no values are found, then the target is not in the matrix
  return false;
}

let matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
];
let target = 5
console.log(searchMatrix(matrix, target)); // true

matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
];
target = 20;
console.log(searchMatrix(matrix, target)); // false

// Constraints
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109