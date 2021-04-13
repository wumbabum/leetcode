/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    //edge case of empty root
    if (root === null) {
      return -1;
    }

    //index of current voyage value
    let i = 0;
    let swaps = [];

    if (voyage[i] === node.val) {
      i++;
    }
    let sub = (node) => {

      if (node.left === null && node.right === null) {
      }
      
      if (node.left === null) {
        sub(node.right);
      } else if (node.right === null) {
        sub(node.left);
      } else {
        sub(node.left);
        sub(node.right);
      }
      return;
      //if one of childrens values is voyage[i], sub that branch.
      //else return -1
    }

    sub(root);
};

// I: root - reference to root of a binary tree.
//    voyage - desired preorder traversal order.
// O: which nodes must be switched to give the correct voyage traversal order. -1 if impossible.
// C: 
// E: root is null

//Testing
// let func = testfunc;
//       9
//   4      7
//  2 6    3 8
// 1      5
// [9, 7]
// [9,7,8,3,5,4,6,2,1]
//       9
//   7       4
//  8 3     6 2
//     5       1
// 9, 7, 

//how do i traverse at a node with no children to next lowest and closest untouched node?
// check pointer against current index in voyage.
// if there are children, check next value in voyage against left and right. 
//   if there are two children and matching node is right, add root to list of nodes to flip.
//   traverse to the node with the value. repeat. 
// else check next value against parent. 

//to visit all nodes, call recurse on left and right
let input = [];
let result = func(input);
console.log(input + ': ' + result);

// input = [];
// result = ();
// console.log(input + ': ' + result);

// let input = [
//   {},
//   {}
// ];
// for (let i = 0; i < input.length; i++) {
//   console.log(func(input[i]));
// }