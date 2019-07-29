'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    if(this.top === null){
      this.top = new Node(value);
    } else {
      let newTop = new Node(value);
      newTop.next = this.top;
      this.top = newTop;
    }
    this.length++;
  }

  pop(){
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  peek(){
    return this.top;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.length = 0;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.length === 0){
      this.front = newNode;
    } else {
      let temp = this.front;
      while(temp.next){
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.length++;
  }

  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  peek(){
    return this.front.value;
  }
}

module.exports = {Stack, Queue, Node};