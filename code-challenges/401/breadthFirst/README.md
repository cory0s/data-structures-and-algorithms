# Code Challenge 17 - Breadth First Traversal
## Author: Cory Henderson
This application creates a function which navigates an input tree breadth first.

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
My approach involved adding the trees root, and it's left and next to a queue. Then I could dequeue the front of the queue and push that value to an array. The front would then be the root.left and I would similarly enqueue the left and right values and then dequeue the front and push to the array. This is continued across the whole tree.
Time efficiency: O(n)
Space efficiency: O(n)

## API
- breadthFirst(tree): takes in a tree and outputs the breadth first traversal values.

## Testing
- Can successfully instantiate a new tree
- Can successfully output an empty array for an empty tree
- Can successfully output an array of all values in breath first order