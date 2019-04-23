'use strict';

let sort = require('../insertion-sort.js');

describe('FizzBuzz test', () => {

    it('Should successfully sort an array', () => {
      expect(sort([1,4,2,3])).toEqual([1,2,3,4]);
    });

    it('Sorted array returns the same array', () => {
        expect(sort([1,2,3,4])).toEqual([1,2,3,4]);
    });

    it('Backwards sorted array returns a sorted array', () => {
        expect(sort([4,3,2,1])).toEqual([1,2,3,4]);
    });

    it('An empty array returns an empty array', () => {
        expect(sort([])).toEqual([]);
    });

    it('A single element array returns the same array', () => {
        expect(sort([4])).toEqual([4]);
    });
});