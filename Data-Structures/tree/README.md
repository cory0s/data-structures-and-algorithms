# Trees
This exercise practices creation of both a BinaryTree and BinarySearchTree class with various methods used to traverse and search tree data structures.

## Challenge
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

- Create a BinaryTree class
    - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

- Create a BinarySearchTree class
    - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
    - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
My approach involved creating new nodes and checking whether or not a left/right child node existed using a while loop. If they did, the function was recursively called until a leaf was reached. 
- Big O for time: O(log(n))
- Big O for space: O(1)

## API
- preOrder(): performs a pre order traversal
- postOrder(): performs a post order traversal
- inOrder(): performs in in order traversal
- add(): adds a new node with an input value to a BinarySearchTree
- contains(): searches a BinarySearchTree for a value