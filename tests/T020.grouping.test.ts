import { test, expect, describe } from 'bun:test';
import { grouping } from '../Problems/P020.grouping';
describe('Grouping', () => {
  test('should return "YES" we a,b are in same group', () => {
    expect(grouping(1, 3)).toBe('YES');
    expect(grouping(1, 5)).toBe('YES');
    expect(grouping(6, 9)).toBe('YES');
    expect(grouping(4, 11)).toBe('YES');
  });
  test('should return "NO" we a,b are not in same group', () => {
    expect(grouping(1, 2)).toBe('NO');
    expect(grouping(1, 6)).toBe('NO');
    expect(grouping(10, 11)).toBe('NO');
    expect(grouping(4, 7)).toBe('NO');
  });
});
