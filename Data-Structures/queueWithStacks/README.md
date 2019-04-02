# Implement a Queue using two Stacks.
## Author: Cory Henderson
This challenge requires us to implement a queue using two stacks.

## Challenge
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
- enqueue(val): My approach to this involved merely pushing a new node to the leading stack (stack1). This is O(1) efficiency because the method is independent of total number of items in the stack.  It is merely adding 1 node to the stack.
- dequeue(): Since we would like to dequeue the bottom node of stack1, we need to reverse the order of the stack. This involved popping all the elements off stack1 and pushing them to stack 2. Thus, the top node of stack2 is the previous bottom node of stack1 and we can just pop() off of stack2. This is O(n) efficiency because we need to pop() all "n" nodes off of stack1 before we can pop() the node off of stack2.

## Solution
![alt]()