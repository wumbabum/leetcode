// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

/**
 * @param {number} num
 * @return {string}
 */
/* 
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:
1 <= num <= 3999
*/

let chars = {
  '1': {
    'one': 'I',
    'five': 'V',
    'ten': 'X'
  },
  '2': {
    'one': 'X',
    'five': 'L',
    'ten': 'C'
  },
  '3': {
    'one': 'C',
    'five': 'D',
    'ten': 'M'
  },
  '4': {
    'one': 'M',
    'five': '?', //out of bounds values that should not be used within constraints
    'ten': '#' //out of bounds values that should not be used within constraints
  }
};

var intToRoman = function(num) {
  //Initialize result
  let roman = '';
  
  //separate number into array, storing position along with value
  let length = Math.floor(Math.log10(num)) + 1;
  let digits = Array.prototype.map.call((num + ''), (val, i) => {
    return {
      value: +val,
      p: (length - i)
    };
  });

  //Iterate across array to transform it into letters.
  for (let i = 0; i < length; i++) {
    let val = digits[i].value;
    let position = digits[i].p;
    if (val !== 0) {
      if (val < 4) {
        for (let j = 0; j < val; j++) {
          roman += chars[position].one;
        }
      } else if (val === 4) {
        roman += chars[position].one + chars[position].five;
      } else if (val < 9) {
        roman += chars[position].five;
        for (let j = 5; j < val; j++) {
          roman += chars[position].one;
        }
      } else {
        roman += chars[position].one + chars[position].ten;
      }
    }
  }

  return roman;
};