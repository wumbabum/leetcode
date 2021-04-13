// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

let push = (nodepoint, val) => {
  let node = new ListNode();
  node.value = val;
  nodepoint.next = node;
}

function mergeTwoLinkedLists(l1, l2) {
  let newList = new ListNode();
  let pointer1 = l1;
  let pointer2 = l2;
  let tail = newList;
  let append = (node, val) => {
    let newNode;
    if (node.value === undefined) {
      node.value = val;
      return node;
    } else {
      newNode = new ListNode(val);
      node.next = newNode;
      return newNode;
    }
  };

  while (pointer1 !== null || pointer2 !== null) {
    if (pointer1 === null) {
      tail = append(tail, pointer2.value);
      pointer2 = pointer2.next;
    } else if (pointer2 === null) {
      tail = append(tail, pointer1.value);
      pointer1 = pointer1.next;
    } else {
      if (pointer1.value < pointer2.value) {
        tail = append(tail, pointer1.value);
        pointer1 = pointer1.next;
      } else {
        tail = append(tail, pointer2.value);
        pointer2 = pointer2.next;
      } 
    }
  }

  return newList;
}

// I:
// O:
// C:
// E:

//Testing
let func = mergeTwoLinkedLists;
let l1 = new ListNode();
let l2 = new ListNode();
l1.value = 1;
push(l1, 2);
push(l1.next, 3);
l2.value = 4;
push(l2, 5);
push(l2.next, 6);
let result = func(l1, l2);
console.log(result);

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