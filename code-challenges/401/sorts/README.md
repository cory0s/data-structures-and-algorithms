# Insertion Sort
This challenge is the first in a series of sorting challenges. It creates a function which implements the insertion sort technique.

## Challenge
Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

## Approach & Efficiency
- My approach involved creating an "outer" loop which iterated through each item in the input array.
- Next, a temp variable was used to hold each current index value, and a second variable, x,  was created to hold a position one less than the outer loop.
- An inner while loop was then used under the condition that we are not at the beginning of the array, and temp is less than the value at position x.
- The value at x is then moved forward one index, and the index at x is moved back one position.
- When the while loop terminates, we know x has reached the beginning of the list and the value at x is less than temp.
- The outer loop is then incremented a position, and this continues until the end of the array is reached.
- Efficiency: Time = O(n^2), Space = O(1) 