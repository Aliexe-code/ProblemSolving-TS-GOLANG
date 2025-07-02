import { findNb } from 'Problems/P032.pileofCubes';
import { test, describe, expect } from 'bun:test';

describe('findNb', () => {
  test('should return the number of cubes needed to form a pile of volume m', () => {
    expect(findNb(1000000000)).toBe(-1);
    expect(findNb(1071225)).toBe(45);
  });
  test('Edge cases', () => {
    expect(findNb(0)).toBe(0);
    expect(findNb(1)).toBe(1);
    expect(findNb(2)).toBe(-1);
  });
});
