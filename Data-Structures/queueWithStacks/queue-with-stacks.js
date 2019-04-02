'use strict';

const Stack = require('/users/admin/documents/data-structures-and-algorithms/Data-Structures/stacksAndQueues/stacks-and-queues.js');

class pseudoQueue{
  
  constructor(){
    this.front = new Stack();
    this.stack2 = new Stack(); 
  }

  enqueue(val){
    let newNode = new Node(val);
    this.front.push(newNode);
    return newNode;
  }

  dequeue(){
    if(this.stack2.length === 0){
      if(this.front.length === 0) { return 'Nothing to dequeue' ;}
      while(this.stack1.length>0){
        let temp = this.front.pop();
        this.stack2.push(temp);
      }
    }
    return this.stack2.pop();
  }
  
}

module.exports = pseudoQueue;