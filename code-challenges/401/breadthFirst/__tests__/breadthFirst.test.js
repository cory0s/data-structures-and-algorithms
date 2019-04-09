'use strict';

const BST = require('../../../../Data-Structures/tree/tree.js');
const breadthFirst = require('../breadthFirst.js');

let tree = new BST.BinarySearchTree();
tree.add(4);
tree.add(2);
tree.add(10);
tree.add(11);
tree.add(3);
console.log(tree.root);
console.log(breadthFirst(tree));

let emptyTree = new BST.BinarySearchTree();

describe('BreadthFirst test', () => {

  it('Should successfully instantiate a tree', () => {
    expect(tree).toBeDefined();
  });
  it('Should return empty array for empty tree', () =>{
      expect(breadthFirst(emptyTree)).toEqual([]);
  });
});