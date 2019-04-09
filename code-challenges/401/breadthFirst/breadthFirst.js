'use strict';

const BST = require('../../../Data-Structures/tree/tree.js');
const SQ = require('../../../Data-Structures/stacksAndQueues/stacks-and-queues.js');



function breadthFirst(tree){
		let queue = new SQ.Queue();
		let values = [];
		let current = tree.root;

		queue.enqueue(current);
		console.log('QUEUE', queue);

		while(queue.peek){

			if(current.left != null){
				queue.enqueue(current.left);
			}
			if(current.right != null){
				queue.enqueue(current.right);
			}
			current = queue.front;
			console.log(queue);
			values.push(queue.dequeue());
		}

		return values;
	}

module.exports = breadthFirst;