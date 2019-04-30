'use strict';

let Table = require('../../../Data-Structures/hashtable/hashtable.js');

function tree_intersection(tree1, tree2){
    let hashtable = new Table(1024);
    let duplicates = [];

    tree1.preOrder(tree1.root).forEach(value => {
        hashtable.add(value);
    });

    tree2.preOrder(tree2.root).forEach(value => {
        if(hashtable.contains(value)){
            duplicates.push(value);
        }
    });

    return duplicates;
}

module.exports = tree_intersection;