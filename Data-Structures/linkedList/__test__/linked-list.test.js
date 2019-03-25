'use strict';

const linkedList = require('../linked-list.js');

let newList = linkedList.createLinkedList();

describe('Test Linked List', () => {
  it('Should successfully instantiate an empty linked list', () => {
    expect(linkedList.createLinkedList()).toEqual({ head: null, length: 0 });
  });
  // it('Can properly insert into the linked list'), () => {
  //   expect(newList.insert(10).toEqual({ head: {data: 10, next: null}}));
  // };
  // it('The head will properly point to the next node'), () => {
  //   expect(linkedList.insert(10).toStrictEqual({ head: {data: 10, next: null}}));
  // };
  // it('Can properly insert multiple nodes into the linked list'), () => {
  //   expect(linkedList.insert(10).toStrictEqual({ head: {data: 10, next: null}}));
  // };
  // it('Will return true if finding an existing value in the linked list'), () => {
  //   expect(linkedList.insert(10).toStrictEqual({ head: {data: 10, next: null}}));
  // };
  // it('Will return false if value does not exist in linked list'), () => {
  //   expect(newList.includes(20).toStrictEqual(false));
  // };
  // it('Can properly return all values that exist in the linked list'), () => {
  //   expect(linkedList.print().toStrictEqual({ head: {data: 10, next: null}}));
  // };
});