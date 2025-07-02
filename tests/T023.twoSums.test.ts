import { describe, expect, test } from 'bun:test';
import { twoSum } from '../Problems/P023.twoSums.js';

describe('Two sum Problem', () => {
  test('case 1', () => {
    expect(twoSum([5, 10, 15], 15)).toEqual([0, 1]);
  });
  test('case 2', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test('case 3- no solution', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
