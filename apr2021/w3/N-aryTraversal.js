/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
  let preorder = [];
  
  var traverse = function(node) {
      if (node === null) {
          return;
      } else {
          preorder.push(node.val);

          for (let i = 0; i < node.children.length; i++) {
              traverse(node.children[i]);
          }            
      }
  };
  
  traverse(root);
  
  return preorder;
};