import { expect, test, describe } from 'bun:test';
import { isAnagram } from '../Problems/P002.validAnagram';

describe('isAnagram', () => {
  test('if isAnagram return true', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('rat', 'art')).toBe(true);
  });
  test('if not isAnagram return false', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('rat', 'car')).toBe(false);
  });
  test('Edges', () => {
    expect(isAnagram('', '')).toBe(true);
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'ab')).toBe(false);
  });
});
