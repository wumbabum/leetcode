/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let min;
  let height = triangle.length;

  let evaluate = function(sum, depth) {
    let row = triangle[depth];
    let length = row.length;
    
    if (depth < height - 1) {
      for (let i = 0; i < length; i++) {
        evaluate(sum + row[i], depth + 1)
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (sum + row[i] < min) {
          min = sum + row[i];
        }
      }
    }
  };

  evaluate(0, 0);

  return min;
};

//i an array of arrays representing a triangle
//o minimum path sum from top to bottom (any bottom)
//c 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
// O(n) space complexity
//e 

     2
    3 4
   6 5 7
  4 1 8 3
 0 2 9 4 5
1 8 7 2 9 0