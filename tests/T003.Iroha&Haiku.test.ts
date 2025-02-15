import { test, expect, describe } from 'bun:test';
import { irohaHaiku } from '../Problems/P003.Iroha&Haiku';

describe('irohaHaiku', () => {
  test('if irohaHaiku return YES', () => {
    expect(irohaHaiku(7, 5, 5)).toBe('YES');
    expect(irohaHaiku(5, 7, 5)).toBe('YES');
  });
  test('if irohaHaiku return NO', () => {
    expect(irohaHaiku(5, 5, 5)).toBe('NO');
    expect(irohaHaiku(7, 7, 5)).toBe('NO');
  });
  test('Edges', () => {
    expect(irohaHaiku(0, 0, 0)).toBe('NO');
    expect(irohaHaiku(1, 1, 1)).toBe('NO');
  });
});
