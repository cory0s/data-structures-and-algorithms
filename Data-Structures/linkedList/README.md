# Singly Linked List
Author: Cory Henderson
This application creates a class function which creates and allows editing of a singly linked list.

## Challenge 1 - Linked List
The challenge is to create a LinkedList class which calls a Node class to build a linked list. The LinkedList class includes methods for inserting a new node into a linked list, searching an existing linked list for a node value, and printing values of all the nodes in the linked list.

## Approach & Efficiency
- My approach to this challenge involved building a LinkedList class and a Node class.
- The LinkedList class calls the Node class to create new nodes using the insert method.
- The LinkedList includes method utilizes a while loop to iterate through the length of the list and check whether or not a data value exists in any of the nodes.
- The LinkedList print method utilizes a while loop to iterate through the length of the list and print the data value for each individual node until it reaches the end of the list (i.e. null).
- The Big O for space and time is O(n).

## Challenge 3 - k Value
The challenge is to create a method which would return the linked list value at index k from the end of the linked list.

## Approach & Efficiency
- My approach to this challenge involved appending all values to an array and calculating that array's index "k" units from the end.
- A while loop was used to iterate through both list and append to the array.
- The index was calculated as (array.length - 1 - k).
- The Big 0 for space is O(n) and time is O(n).

## Challenge 4 - Linked List Merge
The challenge is to create a function in file ll-merge.js which can take (2) linked lists as input, and will output the two lists merged together.

## Approach & Efficiency
- My approach to this challenge involved creation of a function which took in (2) linked lists.
- The head of the longer list would become the head of the merged list.
- A while loop was used to iterate through both lists, while simultaneously updating the next values of the current nodes to the next value of the other linked list. After each iteration, current and next values were updated until the end of the lists were reached.
- The Big 0 for space is O(1) and time is O(n).

## API
- LinkedList.insert(data) - creates a new node with value = argument "val" and inserts it at the head of the list.
- LinkedList.includes(data) - searches the list for a node with value = argumeent "val" and returns true/false if exists.
- LinkedList.print() - prints a list of all values of all nodes in the linked list.
- LinkedList.append(data) - adds value to the end of the list
- LinkedList.insertBefore(data, val) - insert value before node with value = data.
- LinkedList.insertAfter(data, val) - insert value after node with value = data.
- LinkedList.kValue(n) - return value at index "n" from the end of the linked list.
- ll-merge.js - contains function mergeLists(A,B) which merges two linked lists.

## Solution
- ![alt text](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/linked-list.JPG)
- ![alt text](https://github.com/cory0s/data-structures-and-algorithms/blob/master/assets/kValue.JPG)
- ![alt text]()