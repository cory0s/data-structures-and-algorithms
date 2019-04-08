'use strict';

function fizzBuzz(node) {
  let currentNode = node;

  if(!currentNode){
    return null;
  }

  if(currentNode.value % 3 === 0 && currentNode.value % 5 === 0){
    currentNode.value = "FizzBuzz";

  } else if(currentNode.value % 3 === 0){
    currentNode.value = "Fizz";

  } else if(currentNode.value % 5 === 0){
    currentNode.value = "Buzz";
  
  } else {
    fizzBuzz(currentNode.left);
    fizzBuzz(currentNode.right);
  }

  return node;
}

module.exports = {fizzBuzz};