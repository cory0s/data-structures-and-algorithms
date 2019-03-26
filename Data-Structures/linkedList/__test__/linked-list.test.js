'use strict';

const linkedList = require('../linked-list.js');

describe('Test Linked List', () => {
  let list = new linkedList.LinkedList();
  list.insert(10);
  list.insert(20);

  it('Should successfully instantiate an empty linked list', () => {
    expect(new linkedList.LinkedList()).toEqual({ head: null });
  });
  it('Can properly insert into the linked list', () => {
    expect(new linkedList.LinkedList().insert(10)).toEqual({ head: {data: 10, next: null}});
  });
  it('The head will properly point to the next node', () => {
    expect(new linkedList.LinkedList().head).toEqual(null);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(list).toEqual({ head: {data: 20, next: {data:10, next: null}}});
  });
  it('Will return true if finding an existing value in the linked list', () => {
    expect(list.includes(10)).toStrictEqual(true);
  });
  it('Will return false if value does not exist in linked list', () => {
    expect(list.includes(30)).toStrictEqual(false);
  });
  it('Can properly return all values that exist in the linked list', () => {
    expect(list.print()).toStrictEqual([20, 10]);
  });
});