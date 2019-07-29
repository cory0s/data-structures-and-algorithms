# Stacks and Queues
## Author: Cory Henderson
This application creates 3 classes - a node class, stack class, and queue class to implement working stacks and queues.

## Challenge
This challenge requires creation of a stack and queue class a variety of methods:
- Both classes have a peek method which return the value of the top/front node.
- The stack has pop/push methods to add or remove nodes from the stack.
- The queue has enqueque and dequeue methods to add or remove nodes from the queue.
- Appropriate testing will be performed by jest to ensure proper functionality.

## Approach & Efficiency
My approach was similar to the solution for a linked list.  I named three classes: node, stack and queue.  Each time an element is added to a stack or queue, a new node is created and becomes the top/rear of the stack/queue. To remove nodes, the next, front, and top values are updated accordingly, and the removed node's next value is set to null. This allows for garbage collection to clean up later. Pop/push/enqueue/dequeue methods are O(1) for both stacks and queues because they only add/remove one node, and will not be affected by the length of the stack or queue.

## API
- pop(): removes the top value from a stack.
- push(val): adds a new node with value = val to the top of a stack.
- peek(): returns the value from the top/front of a stack or queue.
- enqueque(val): adds a node with value = val to the end of a queue.
- dequeue(): removes the front node from the queue.

## Testing
- [TravisCI Link](https://www.travis-ci.com/cory0s/data-structures-and-algorithms)
- Can successfully push onto a stack
- Can successfully push multiple nodes onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops.
- Can successfully peek the next item on the stack.
- Can successfully instantiate an empty stack
- Can successfully enqueue onto a queue
- Can successfully enqueue multiple items into a queue
- Can successfully dequeue off of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
