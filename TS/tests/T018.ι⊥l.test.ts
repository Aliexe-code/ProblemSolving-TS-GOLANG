import { test, describe, expect } from 'bun:test';
import { idk } from '../Problems/P018. ι⊥l';

describe('idk', () => {
  test('should return YES', () => {
    expect(idk(1, 2, 3)).toBe('YES');
    expect(idk(1, 3, 5)).toBe('YES');
    expect(idk(1, 4, 7)).toBe('YES');
    expect(idk(1, 5, 9)).toBe('YES');
  });

  test('should return NO', () => {});
  expect(idk(1, 2, 6)).toBe('NO');
  expect(idk(1, 3, 7)).toBe('NO');
  expect(idk(1, 4, 8)).toBe('NO');
  test('Edges', () => {
    expect(idk(1, 1, 2)).toBe('NO');
    expect(idk(1, 1, 3)).toBe('NO');
    expect(idk(1, 1, 4)).toBe('NO');
    expect(idk(1, 1, 5)).toBe('NO');
    expect(idk(1, 1, 6)).toBe('NO');
    expect(idk(1, 1, 7)).toBe('NO');
    expect(idk(1, 1, 8)).toBe('NO');
    expect(idk(1, 1, 9)).toBe('NO');
  });
});
