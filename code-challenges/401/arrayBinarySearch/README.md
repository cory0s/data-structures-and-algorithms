# Array Shift
This is the third code challenge for JS401.  It requires creation of a function called binarySearch to locate the index of a value.

## Challenge
This challenge asks to write a function which takes in an array of integers and a value. The function should return the index of the value if a match is found, or -1 if the value doesn't exist in the array. The array must be sorted.

## Approach and Efficiency
My approach involved checking the midpoint of the array against the value.  If the value was higher than the midpoint, we know we can exclude all values below the midpoint, so we reset the low index to the midpoint plus one, and recalculate the midpoint of the remaining indicies. If the value is lower than the value at the midpoint, we set the high to the mid - 1.  Using these steps we can slowly zero in on the value, until there are no remaining indicies. The efficiency for time/space is O(n).

## Solution
![alt text]()