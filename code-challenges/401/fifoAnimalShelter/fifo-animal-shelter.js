'use strict'

let SQ = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

class AnimalShelter{
  
  constructor(){
    this.AnimalShelter = new SQ.Queue;
  }

  enqueue(animal){
    this.AnimalShelter.push(animal);
  }

  dequeue(pref){
    if(pref.toLowerCase() != 'dog' || pref.toLowerCase() != 'cat'){
      return null;
    }

    let current = this.front;
    let previous = null;
    
    while(current != null && current.value != pref){
      previous = current;
      current = current.next;
    }

    if(current != null){
      if(previous === null){
        this.front = current.next;
        current.next = null;
      } else {
        previous.next = current.next;
        current.next = null;
      }
      return current;
    }
  }
}


module.exports = AnimalShelter;