# Singly Linked List
Author: Cory Henderson
This application creates a class function which creates and allows editing of a singly linked list.

## Challenge
The challenge is to create a LinkedList class which calls a Node class to build a linked list. The LinkedList class includes methods for inserting a new node into a linked list, searching an existing linked list for a node value, and printing values of all the nodes in the linked list.

## Approach & Efficiency
- My approach to this challenge involved building a LinkedList class and a Node class.
- The LinkedList class calls the Node class to create new nodes using the insert method.
- The LinkedList includes method utilizes a while loop to iterate through the length of the list and check whether or not a data value exists in any of the nodes.
- The LinkedList print method utilizes a while loop to iterate through the length of the list and print the data value for each individual node until it reaches the end of the list (i.e. null).
- The Big O for space and time is O(1).

## API
- Node.insert(data) - creates a new node with value = argument "val" and inserts it at the head of the list.
- Node.includes(data) - searches the list for a node with value = argumeent "val" and returns true/false if exists.
- Node.print() - prints a list of all values of all nodes in the linked list.

## Solution
- [Solution]()