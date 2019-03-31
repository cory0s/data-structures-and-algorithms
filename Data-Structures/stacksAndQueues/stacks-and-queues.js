'use strict';

class Node {
  constructor(value, next){
    this.next = next;
    this.value = value;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value, next){
    this.top = new Node(value, next);
  }

  pop(){

  }

  peek(){
    return this.top.value;
  }
}

class Queue {
  constructor(){
    this.front = null;
  }

  enqueue(value){

  }

  dequeue(){

  }

  peek(){
    return this.front.value;
  }
}