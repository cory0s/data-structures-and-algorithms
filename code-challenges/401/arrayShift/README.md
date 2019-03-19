# Array Shift
This is the second code challenge for JS401.  It requires creation of a function called arrayShift to accomplish the requirements.

## Challenge
This challenge asks to write a function which takes in an array of elements and a value. The value must be inserted into the midpoint of the array without using any built in JS methods.

## Approach and Efficiency
My approach involved creating an empty array and creating two for loops.  The first for loop populates the empty array with the input array values, up to the midpoint. Next, the new array was populated with the value at the midpoint. Finally, the second for loop was used to fill in the rest of the new array. Big O space/time is O(n).

## Solution
![alt text](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/array-shift.jpg)
