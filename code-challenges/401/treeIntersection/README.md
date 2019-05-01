# Intersection of binary trees
This code challenge creates a function which returns shared values between two binary trees.

## Challenge
- Write a function called tree_intersection that takes two binary tree parameters.
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.
## Approach & Efficiency
My approach involved creating a hashtable and storing all values from tree1 in the table. Next, tree2 is traversed and each value is checked for "contains" in the hashtable. If contains returns true, push the value to the returned answers array.
Space efficiency: O(n)
Time efficiency: O(n)

## Solution
![alt](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/tree-intersection.JPG)
