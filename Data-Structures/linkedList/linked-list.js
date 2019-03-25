'use strict';

let linkedList = module.exports = {};

//Define LinkedList and Node classes

class LinkedList {

  constructor(){
    this.head = null;
    this.length = 0;
  }

  insert(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  includes(data){
    let current = this.head;

    while(current != null){
      if(current.data === data){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print(){
    let current = this.head;
    const values = [];
    while(current != null){
      console.log(current.data);
      values.push(current.data);
      current = current.next;
    }
    return values;
  }
}

class Node {

  constructor(data, next){
    this.data = data;
    this.next = null;
  }
}

//Create functions to instantiate and manipulate linked lists

linkedList.createLinkedList = function() {
  const newList = new LinkedList();
  return newList;
};
