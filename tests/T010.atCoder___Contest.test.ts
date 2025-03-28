import { test, expect, describe } from 'bun:test';
import { abbreviateContestName } from '../Problems/P010.atCoder___Contest.js';

describe('abbreviateContestName', () => {
  test('should handle normal cases with proper capitalization', () => {
    expect(abbreviateContestName('X')).toBe('AXC');
    expect(abbreviateContestName('Book')).toBe('ABC');
    expect(abbreviateContestName('Work')).toBe('AWC');
  });
  test('should handle cases where the first letter is lowercase', () => {
    expect(abbreviateContestName('x')).toBe('AXC');
    expect(abbreviateContestName('book')).toBe('ABC');
    expect(abbreviateContestName('work')).toBe('AWC');
  });
  test('Edges', () => {
    expect(abbreviateContestName('')).toBe('');
    expect(abbreviateContestName('')).toBe('');
    expect(abbreviateContestName('Zebra')).toBe('AZC');
    expect(abbreviateContestName('Apple')).toBe('AAC');
    expect(abbreviateContestName('b')).toBe('ABC');
    expect(abbreviateContestName('a')).toBe('AAC');
    expect(abbreviateContestName('z')).toBe('AZC');
    expect(abbreviateContestName('')).toBe('');
  });
});
