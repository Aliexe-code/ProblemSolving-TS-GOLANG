import { romanToInt } from 'Problems/P029.RomantoInteger';
import { test, expect, describe } from 'bun:test';

describe('Roman to Integer', () => {
  test('Example 1', () => {
    expect(romanToInt('III')).toBe(3);
  });

  test('Example 2', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('Example 3', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('Example 4', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  test('Example 5', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
