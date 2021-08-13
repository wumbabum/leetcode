
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  //traverse through the linked list
  //for each node, place it in one of two ordered lists based on value < or >= x.
  //create new linked list starting in order with list < x, conjoined with list >=x.
};
let sample = [9,2,8,3,7,4,1,6,5,0];
let result = partition(sample, 4);
// [2,3,1,0,9,8,7,4,6,5]

//i head of a linked list
//o a reference to the new head of the same nodes partitioned such that nodes with values less than x come before nodes greather than or equal to x, presevering original order.
// Constraints:
  // The number of nodes in the list is in the range [0, 200].
  // -100 <= Node.val <= 100
  // -200 <= x <= 200 
//e if head is null or undefined, return null;