# Hashmap LEFT JOIN
This challenge requires us to write a function that left joins two hashmaps.

## Challenge
- Write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

## Approach & Efficiency
My approach involved creating a new hash table, and adding values from the first table to the new HT. Next the second hash table is iterated over, and keys are checked to see if they are contained in the first table. If so, values from the second table are added.

## Solution
![alt](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/left-join.JPG)
