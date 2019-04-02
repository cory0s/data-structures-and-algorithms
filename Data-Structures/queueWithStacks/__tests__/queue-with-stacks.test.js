'use strict';

const pseudoQueue = require('../queue-with-stacks.js');

describe('Test Stack', () => {
    console.log(new pseudoQueue.PseudoQueue());
    it('Should successfully instantiate a pseudoQueue', () => {
    expect(new pseudoQueue.PseudoQueue()).toEqual({front:{ top: null, length: 0 }, stack2:{ top: null, length: 0 } });
  });
});