import { isIsogram } from 'Problems/P026.Isograms';
import { test, describe, expect } from 'bun:test';

describe('isIsogram', () => {
  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for a string with unique characters', () => {
    expect(isIsogram('abc')).toBe(true);
  });

  test('should return false for a string with repeated characters', () => {
    expect(isIsogram('aabbcc')).toBe(false);
  });

  test('should return true for a string with mixed case unique characters', () => {
    expect(isIsogram('AbC')).toBe(true);
  });

  test('should return false for a string with mixed case repeated characters', () => {
    expect(isIsogram('aA')).toBe(false);
  });
});
