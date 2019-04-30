'use strict';

let Tree = require('../../../../Data-Structures/tree/tree.js');
let intersection = require('../tree-intersection.js');



describe('Test tree-intersection function', () => {

    it('Should successfully find duplicates', () => {

        let tree1 = new Tree.BinarySearchTree();
        let tree2 = new Tree.BinarySearchTree();
        tree1.add(1);
        tree1.add(2);
        tree2.add(1);

      expect(intersection(tree1, tree2)).toEqual([1]);
    });

    it('Should work with no duplicates', () => {

        let tree1 = new Tree.BinarySearchTree();
        let tree2 = new Tree.BinarySearchTree();
        tree1.add('132');
        tree1.add('23');
        tree2.add('3');
        tree2.add('4');

        expect(intersection(tree1, tree2)).toEqual([]);
    });

    it('Should work with (2) null trees', () => {

        let tree1 = new Tree.BinarySearchTree();
        let tree2 = new Tree.BinarySearchTree();

        expect(intersection(tree1, tree2)).toEqual([]);
    });

});