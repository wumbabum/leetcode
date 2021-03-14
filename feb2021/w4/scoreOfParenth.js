// Given a balanced parentheses string S, compute the score of the string based on the following rule:

// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: "()"
// Output: 1
// Example 2:

// Input: "(())"
// Output: 2
// Example 3:

// Input: "()()"
// Output: 2
// Example 4:

// Input: "(()(()))"
// Output: 6
 

// Note:

// S is a balanced parentheses string, containing only ( and ).
// 2 <= S.length <= 50

function computeParenth(S) {
  let value = 0;
  
  //separate S into any number of A + B clauses. It is possible there is only one.
  //Each clause is either () or (A)
  let clauses = [];
  let depth = 0;
  let clauseIndex = 0;
  for (let i = 0; i < S.length; i++) {
    //Iterate over each index. for each '(', increase depth. ')' decreases depth.
    depth += (S[i] === '(') ? 1 : -1;
    //anytime depth reaches 0, push clause with range (clauseIndex, i), inclusive.
    if (depth === 0) {
      clauses.push(S.slice(clauseIndex, i + 1));
      clauseIndex = i + 1;
    }
  }
  
  //Evaluate each clause.
  clauses.forEach(function(clause) {
    //If a clause is (), evaluate to 1
    //else evaluate to 2 * A, where (computeParenth(A))
    value += (clause === '()') ? 1 : 2 * computeParenth(clause.slice(1, -1)); 
  });

  return value;
}

// (()(()))
// 2 * computeParenth(" ()(()) ")
// 2 * (  ()   (())   )
// 2 * (  1   + 2 * computeParenth(" () ")   )

console.log(computeParenth("()")); // 1
console.log(computeParenth("(())")); // 2 
console.log(computeParenth("()()")); // 2
console.log(computeParenth("(()(()))")); // 6
console.log(computeParenth("((()(()))(()(())))")); // 6