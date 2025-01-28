import { containsDuplicates } from '../src/Problems/Problem-1';

describe('containsDuplicates', () => {
  test('returns true for an array with duplicates', () => {
    expect(containsDuplicates([1, 2, 3, 1])).toBe(true);
  });

  test('returns false for an array with no duplicates', () => {
    expect(containsDuplicates([1, 2, 3, 4])).toBe(false);
  });

  test('returns false for an empty array', () => {
    expect(containsDuplicates([])).toBe(false);
  });

  test('returns false for an array with one element', () => {
    expect(containsDuplicates([42])).toBe(false);
  });

  test('returns true for an array with all identical elements', () => {
    expect(containsDuplicates([7, 7, 7, 7])).toBe(true);
  });

  test('handles large arrays with no duplicates', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(containsDuplicates(largeArray)).toBe(false);
  });

  test('handles large arrays with duplicates', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    largeArray.push(500); // Add a duplicate
    expect(containsDuplicates(largeArray)).toBe(true);
  });

  test('returns true for arrays with negative numbers as duplicates', () => {
    expect(containsDuplicates([-1, -2, -3, -1])).toBe(true);
  });

  test('returns false for arrays with negative numbers and no duplicates', () => {
    expect(containsDuplicates([-1, -2, -3, -4])).toBe(false);
  });

  test('handles mixed positive and negative numbers with duplicates', () => {
    expect(containsDuplicates([-1, 1, -1, 2])).toBe(true);
  });
});
