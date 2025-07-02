import { test, describe, expect } from 'bun:test';
import { sumTwoSmallestNumbers } from 'Problems/P031.SumOTLPI';

describe('sumTwoSmallestNumbers', () => {
  test('should return sum of two smallest numbers', () => {
    expect(sumTwoSmallestNumbers([1, 2, 3, 4, 5])).toBe(3);
  });
  test('should return sum of two smallest numbers', () => {
    expect(sumTwoSmallestNumbers([11, 1, 0, 23, 41, 51])).toBe(1);
  });
  test('should return sum of two smallest numbers', () => {
    expect(sumTwoSmallestNumbers([11, 1, 1000, 23, 41, 51])).toBe(12);
  });
  test('Edges case', () => {
    expect(sumTwoSmallestNumbers([1, 1, 1, 1, 1, 1])).toBe(2);
    expect(sumTwoSmallestNumbers([1, 1, 1, 1, 0, 0])).toBe(0);
  });
});
