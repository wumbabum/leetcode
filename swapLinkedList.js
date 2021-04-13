/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * where n is nodes,
 * 1 <= k <= n <= 105
 * 0 <= Node.val <= 100
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let tracker = {};
    let pointer = head;
    let index = 0;

    while (pointer !== null) {
      tracker[index] = pointer;
      index++;
      pointer = pointer.next;
    }

    if ((index + 1) / 2 === k) {
      return head;
    }

    if (k === 1 || k === index) {
      tracker[0].next = null;
      tracker[index - 1].next = tracker[1];
      tracker[index - 2].next = tracker[0];
      return tracker[index - 1];
    } else {
      let temp = tracker[index-k];
      tracker[index-k] = tracker[k-1];
      tracker[k-1] = temp;
      tracker[k-2].next = tracker[k-1];
      tracker[k-1].next = tracker[k];
      tracker[index-k-1].next = tracker[index-k];
      tracker[index-k].next = tracker[index-k+1];
      return head;
    }
    
};
//i: head reference to a linked list, and an integer k
//o: the same head reference with the kth node from the beginning and kth node from end swapped.
//c: none
//e: if k is the middle node, no changes.
// if k is one or equal to the linked list size, the new head will be the tail and vice versa
// otherwise 