'use strict';

//Define LinkedList and Node classes
class Node {

  constructor(data, next){
    this.data = data;
    this.next = null;
  }
}

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
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join('=>'));
    return values;
  }

  append(data){
    let node = new Node(data);
    if(this.head === null){
      this.head = node;
      return;
    } else {
      let current = this.head;
      while(current.next != null){
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return this;
  }

  insertBefore(data, newVal){
    let node = new Node(newVal);
    let current = this.head;
    let prev = {};
    while(current.next != data){
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.length++;
    return this;
  }

  insertAfter(data, newVal){
    let node = new Node(newVal);
    let current = this.head;
    let prev;
    let count = 0;
    while(current.next != data){
      count += count;
      prev = current;
      current = current.next;
    }
    current.next = node;
    node.next = this[count+1];
  }

  kValue(idx){
    if(idx > this.length-1 || idx<0){ return null; }
    const answer = [];
    let current = this.head;
    while(current.next){
      current = current.next;
      answer.push(current.data);
    }
    console.log(answer);
    return answer[answer.length - 1 - idx];
  }
}

module.exports = {LinkedList, Node};
