'use strict';

const stackAndQueue = require('../stacks-and-queues.js');

describe('Test Stack', () => {
  let stack = new stackAndQueue.Stack();
  stack.push(1);

  it('Should successfully push onto a stack', () => {
    expect(stack).toEqual({ top: { value: 1, next: null }, length: 1 });
  });

  it('Should successfully push multiple nodes onto a stack', () => {
    stack.push(2);
    expect(stack).toEqual({ top: { value: 2, next: { value: 1, next: null } }, length: 2 });
  });

  it('Should successfully pop off a stack', () => {
    stack.pop();
    expect(stack).toEqual({ top: { value: 1, next: null }, length: 1 });
  });

  it('Should successfully use pop() to empty a stack', () => {
    stack.pop();
    expect(stack).toEqual({ top: null, length: 0 });
  });

  it('Should successfully peek a stack', () => {
    stack.push(1);
    expect(stack.peek()).toEqual({ value: 1, next: null });
  });
});

describe('Test Stack', () => {
  let queue = new stackAndQueue.Queue();
  queue.enqueue(3);

  it('Should successfully enqueue onto a queue', () => {
    expect(queue).toEqual({ front: { value: 3, next: null }, length: 1 });
  });

  it('Should successfully dequeue off a queue', () => {
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual({ value: 3, next: null });
  });

  it('Should successfully peek into a queue', () => {
    expect(queue.peek()).toEqual(2);
  });

  it('Should successfully empty a queue', () => {
    queue.dequeue();
    expect(queue).toEqual({ front: null, length: 0 });
  });

  it('Should successfully instantiate an empty queue', () => {
    expect(new stackAndQueue.Queue()).toEqual({ front: null, length: 0 });
  });
});