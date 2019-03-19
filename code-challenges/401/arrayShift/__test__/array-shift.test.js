'use strict'

const arrayShift = require('../array-shift.js');

describe('test array-shift', () => {
  it('should work for an array length 0', () => {
    expect(arrayShift.insertShiftArray([], 1)).toStrictEqual([1]);
  });
  it('should work for an array length 1', () => {
    expect(arrayShift.insertShiftArray([2], 1)).toStrictEqual([2,1]);
  });
  it('should work for an array length 2', () => {
    expect(arrayShift.insertShiftArray([1,2], 1)).toStrictEqual([1,1,2]);
  });
  it('should work for an array length 3 or more', () => {
    expect(arrayShift.insertShiftArray([1,2,3], 4)).toStrictEqual([1,2,4,3]);
  });
  it('returns null for no args', () => {
    expect(arrayShift.insertShiftArray()).toBeNull();
  });
  it('returns null for 1 arg', () => {
    expect(arrayShift.insertShiftArray([])).toBeNull();
  });
  it('returns null for non-array first arg', () => {
    expect(arrayShift.insertShiftArray('val', 1)).toBeNull();
  });
  it('returns null for non-array first arg', () => {
    expect(arrayShift.insertShiftArray({}, 1)).toBeNull();
  });
  it('returns null for non-array first arg', () => {
    expect(arrayShift.insertShiftArray(true, 1)).toBeNull();
  });
  it('returns null for non-array first arg', () => {
    expect(arrayShift.insertShiftArray(null, 1)).toBeNull();
  });
  it('returns null for non-array first arg', () => {
    expect(arrayShift.insertShiftArray(NaN, 1)).toBeNull();
  });
})
