'use strict';

const linkedList = require('../linked-list.js');
let A = new linkedList.LinkedList();
let B = new linkedList.LinkedList();
A.insert(2);
A.insert(4);
A.insert(6);
B.insert(1);
B.insert(3);
B.insert(5);

function mergeLists(list1, list2){
  let curr1 = list1.head;
  let curr2 = list2.head;
  let next1, next2;

  while(curr1 != null && curr2 != null){
    next1 = curr1.next;
    next2 = curr2.next;
    curr1.next = curr2;
    curr2.next = next1;
    curr1 = next1;
    curr2 = next2;
  }

  // if(curr1.next === null){
  //   curr1.next = curr2;
  // }

  // if(curr2.next === null){
  //   curr2.next = next1;
  //   curr1.next = curr2;
  // }
  console.log(list1.head);
}

function makeList(list, length){
  for(let i=0; i<length; i++){
    list.insert(i);
  }
}

mergeLists(A, B);

module.exports = mergeLists();