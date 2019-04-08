# FizzBuzz Tree
## Author: Cory Henderson
This challenges creates a function which utilizes pre-order search to traverse and Binary Search Tree and replace values with strings depending on certain arguments.

## Challenge
- Write a function called FizzBuzzTree which takes a tree as an argument.
- Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
    - If the value is divisible by 3, replace the value with “Fizz”
    - If the value is divisible by 5, replace the value with “Buzz”
    - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
    - Return the tree with its new values.

## Approach & Efficiency
Preorder traversal was utilized to migrate through the tree and check each value. This resulted in Big 0 as follows:
- Space: O(1)
- Time: O(n) 

## Solution
![alt](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/fizz-buzz.jpg)
