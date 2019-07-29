'use strict';

let Table = require('../../../../Data-Structures/hashtable/hashtable.js');
let repeatWord = require('../repeated-word.js');
let hashTable = new Table;

describe('Repeat word test', () => {

    it('Should successfully instantiate a hashtable', () => {
      expect(hashTable).toBeDefined();
    });

    it('Should successfully identify a repeat word', () => {
        expect(repeatWord('Hi Hi no')).toBe('Hi');
    });

    it('Should return null for no repeats', () => {
        expect(repeatWord('Hello the people')).toBeNull();
    });
});