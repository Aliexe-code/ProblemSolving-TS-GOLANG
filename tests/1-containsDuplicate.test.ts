import { Test, describe, expect, test } from 'bun:test';
import { containsDuplicate } from '../Problems/1-containsDuplicate';

describe('containsDuplicates', () => {
  test('return false for unique values', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
  test('if duplicates return true', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([3, 3, 3, 3])).toBe(true);
  });
  test('Edges', () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([1])).toBe(false);
  });
});
