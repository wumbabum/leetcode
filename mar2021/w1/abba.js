/**
 * @param {string} s
 * @return {number}
 */

var isDrome = function(str) {
  if (str === "") {
      return true;
  }
  let i = 0;
  
  while (i < str.length / 2) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false
      }
      i++;
  }
  
  return true;
}

var removePalindromeSub = function(s) {
  if (s === '') {
      return 0;
  }
  //Find all palindromes
  let dromes = [];
  let start = 0;
  let end = 1;

  while (start < s.length) {
    //if start to end is and palindrome, end++
    if (isDrome(s.slice(start, end))) {
      end++;
    } else {
      //else, that means slice(start, end) end is the biggest palindrome possible starting from start.
      //store it, update start to end and end to end + 1.
      dromes.push([start, end]);
      start = end;
      end++;
    }
  }
  //for each, recursively find fewest steps to empty, passing in string minus that palindrome.
  
  //return answer with fewest steps.
};