/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
  if (s.length === 0 || s.length === 1) {
    return 0;
  }

  let count = 0;
  let groupings = [];
  let groupLength = 1;
  let last = s[0];
     
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== last) {
      groupings.push(groupLength);
      groupLength = 1;
      last = s[i];
    } else {
      groupLength++;
    }
  }

  groupings.push(groupLength);
  
  if (groupings.length === 1) {
    return 0;
  }

  for (let i = 0; i < groupings.length - 1; i++) {
    count += Math.min(groupings[i], groupings[i + 1]);
  }
  
  return count;
};

//Testing
let func = countBinarySubstrings;
let input = [
  '00110',
  '101010',
  '11111111111111111111111111111111111100',
  '110000111011000011'
];

for (let i = 0; i < input.length; i++) {
  console.log(input[i] + ': ' + func(input[i]));
}