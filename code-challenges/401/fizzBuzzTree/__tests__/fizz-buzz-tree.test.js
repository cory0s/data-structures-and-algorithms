'use strict';

const BST = require('../../../../Data-Structures/tree/tree.js');
const FB = require('../fizz-buzz-tree.js');

let tree = new BST.BinarySearchTree();
tree.add(4);
tree.add(2);
tree.add(10);
tree.add(11);
tree.add(3);
console.log(tree.root);

let fbTree = FB.fizzBuzz(tree.root);

let emptyTree = new BST.BinarySearchTree();

describe('FizzBuzz test', () => {

  it('Should successfully instantiate a tree', () => {
    expect(tree).toBeDefined();
  });

  it('Should successfully mutate tree to a Fizzbuzz tree', () => {
    expect(tree.preOrder(tree.root)).toEqual([ 4, 2, 'Fizz', 'Buzz', 11 ]);
  });

  it('Should return null for empty tree', () => {
    expect(FB.fizzBuzz(emptyTree).root).toBeNull();
  });
});