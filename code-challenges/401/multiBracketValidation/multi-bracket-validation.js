'use strict';
let SQ = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js')

function multiBracketValidation(input){
  let stack = new SQ.Stack();
  let queue = new SQ.Queue();

  for(let i=0; i < input.length; i++){
    if(input[i] === '{' || '[' || '('){
      stack.push(input[i]);
    }
    if(input[i] === '}' || ']' || ')'){
      queue.enqueue(input[i]);
    }
  }
  let currentS = stack.top;
  let currentQ = queue.front;

  while(currentS && currentQ){
    if(currentS === currentQ){
      stack.pop();
      currentQ.dequeue();
      currentS = currentS.next;
      currentQ = currentQ.next;
    }
  }

  if(stack.length != 0 || queue.length != 0){
    return false;
  }
  else{
    return true;
  }
}