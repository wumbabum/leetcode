// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

//I: an array of strings, labeled strs. 
//O: an array of arrays, where each subarray contains any and all strings that are anagrams of each other.
//C: strs length is <= 0 and < 100
//   0 <= strs[i].length <= 100
//   
//E: repeat words? - include them

let groupAnagrams = (strs) => {
  let grouped = [];
  let tracker = {};

  strs.forEach( str => {
    let stats = {};
    let length = str.length;
    if (tracker[length] === undefined) {
      tracker[length] = [];
    }
    let bucket = tracker[length];
    stats.length = length;
    
    for (let i = 0; i < str.length; i++) {
      if (stats[str[i]] ===  undefined) {
        stats[str[i]] =  1;
      } else {
        stats[str[i]] += 1;
      }
    }
    
    let newAnagram = true;
    
    //iterate through each group
      //if a match is found, add it to that group, and put a flag that this is not a new anagram
    for (let i = 0; i < bucket.length; i++) {
      let match = true;
      let target = bucket[i];

      //compare stats to target. if it is an anagram match, add it to the target anagram
      if (str.length !== target.members[0].length) {
        match = false;
      }

      //compare each key value pair
      for (var char in target.stats) {
        if ( stats[char] === undefined ||
              stats[char] !== target.stats[char] ) {
          match = false
        }
      }

      if (match) {
        newAnagram = false;
        i = tracker.length;
        target.members.push(str);
      }
    }
    //if it is not, append stats as a new anagram group to target as its own sole member
    if (newAnagram) {
      bucket.push({
        'members': [str],
        'stats': stats
      })
    }
  });

  for (var bucketLength in tracker) {
    tracker[bucketLength].forEach(target => {
      grouped.push(target.members);
    })  
  }
  
  return grouped;
}

// ['ac', 'bc', 'cb']
// []
// [ac] in some type of data format, not a string. perhaps an object or a set.
// [ac,
//  bc]
// [ac,
//  bc {'bc', 'cb'}]
//  [['ac'], ['bc','cb']]

// ate, tea, eta
// 

let input = ['eat','ate','ab','ba','c','ant','tab','tan'];
let result = groupAnagrams(input);

console.log(result);