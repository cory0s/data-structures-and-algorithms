'use strict';

const binarySearch = require('../array-binary-search.js');

describe('test binary-search', () => {
    it('should work for an array length 0', () => {
      expect(binarySearch.BinarySearch([], 1)).toStrictEqual(-1);
    });
    it('should work for an array length 1', () => {
        expect(binarySearch.BinarySearch([1], 1)).toStrictEqual(0);
    });
    it('should return -1 if value not found', () => {
        expect(binarySearch.BinarySearch([1,3,4], 5)).toStrictEqual(-1);
    });
    it('should return null for unsorted array', () => {
        expect(binarySearch.BinarySearch([1,4,3], 1)).toBeNull();
    });
    it('should return null for non int values', () => {
        expect(binarySearch.BinarySearch(['yes', 'no'], 1)).toBe(null);
    });
    it('should return null for non int values', () => {
        expect(binarySearch.BinarySearch([1,4,3], 'yes')).toBeNull();
    });
    it('should return null for non int values', () => {
        expect(binarySearch.BinarySearch([true], 1)).toBeNull();
    });
    it('should return null for non int values', () => {
        expect(binarySearch.BinarySearch([{}], 1)).toBeNull();
    });
});