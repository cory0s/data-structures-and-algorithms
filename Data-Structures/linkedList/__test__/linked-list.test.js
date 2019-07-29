'use strict';

const linkedList = require('../linked-list.js');
const merge = require('../llMerge/ll-merge.js');

describe('Test Linked List', () => {
  let list = new linkedList.LinkedList();
  list.insert(10);
  list.insert(20);

  it('Should successfully instantiate an empty linked list', () => {
    expect(new linkedList.LinkedList()).toEqual({ head: null, length: 0 });
  });
  it('Can properly insert into the linked list', () => {
    expect(new linkedList.LinkedList().insert(10)).toEqual({ head: {data: 10, next: null}, length: 1});
  });
  it('The head will properly point to the next node', () => {
    expect(new linkedList.LinkedList().head).toEqual(null);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(list).toEqual({ head: {data: 20, next: {data:10, next: null}}, length: 2});
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


//Test for Code Challenge 07
describe('Test method kValue', () => {
  let list = new linkedList.LinkedList();
  list.insert(1);
  let longList = new linkedList.LinkedList();
  longList.insert(1);
  longList.insert(2);
  longList.insert(3);
  longList.insert(4);
  longList.insert(5);

  it('Should not allow k values greater than LL length', () => {
    expect(list.kValue(4)).toEqual(null);
  });
  it('Should not allow k = LL.length', () => {
    expect(list.kValue(3)).toEqual(null);
  });
  it('Should not take negative input', () => {
    expect(list.kValue(-1)).toEqual(null);
  });
  it('Should work for linked list of length 1', () => {
    expect(list.kValue(0)).toEqual(1);
  });
  it('Should work for k in the middle of the list', () => {
    expect(longList.kValue(2)).toEqual(3);
  });
});

//Tests for Code Challenge 08
describe('Test array merge', () => {
  let list1 = new linkedList.LinkedList();
  list1.insert(4);
  list1.insert(5);
  list1.insert(6);
  let list2 = new linkedList.LinkedList();
  list2.insert(1);
  list2.insert(2);
  list2.insert(3);

  it('Should merge 2 lists', () => {
    expect(merge.mergeLists(list1, list2)).not.toEqual(null);
  });
  it('Should return null for invalid input', () => {
    expect(merge.mergeLists(null, list2)).toEqual(null);
    expect(merge.mergeLists([], list2)).toEqual(null);
    expect(merge.mergeLists(true, list2)).toEqual(null);
    expect(merge.mergeLists('Hello', list2)).toEqual(null);
  });
});