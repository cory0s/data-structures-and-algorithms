# Code Challenge 12 - Animal Shelter
## Author: Cory Henderson
This challenge creates an animal shelter class which behaves as a queue.

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
- enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
- dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
The approach involved creating a class which use the Queue() class to create a new AnimalShelter().  The enqueue and dequeue methods were used to add and remove "dog" and "cat" nodes by preference.

## API
- enqueque(val): adds a node with value = val to the end of a queue.
- dequeue(pref): removes the first instance of pref that matches 'dog' or 'cat'.

## Testing
- “Happy Path” - Expected outcome
- Expected failure
- Edge Case (if applicable/obvious)

## Whiteboard
![alt]()