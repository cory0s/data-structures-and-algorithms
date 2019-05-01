'use strict';

let leftJoin = require('../left-join.js');
let Table = require('../../../../Data-Structures/hashtable/hashtable.js');
let ht1 = new Table();
let ht2 = new Table();
ht1.add('A', 1);
ht1.add('B', 2);
ht2.add('A', 5);
ht2.add('C', 6);

describe('Repeat word test', () => {

    it('Should successfully instantiate a hashtable', () => {
      expect(ht1).toBeDefined();
    });

    it('Should successfully left join two tables', () => {
        let combined = new Table();
        combined.add('A', [1, 5]);
        combined.add('B', [2]);
        expect(leftJoin(ht1, ht2)).toEqual(combined);
    });

    it('Should return null for null input', () => {
        expect(leftJoin(null, null)).toBeNull();
    });
});