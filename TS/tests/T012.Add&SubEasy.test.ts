import { test, expect, describe } from 'bun:test';
import { AddSubEasy } from '../Problems/P012.Add&SubEasy';

describe('Add&SubEasy', () => {
  test('should works fine with "+" "-" Ops ', () => {
    expect(AddSubEasy(10, '+', 20)).toBe(30);
    expect(AddSubEasy(999, '+', 1001)).toBe(2000);
    expect(AddSubEasy(1, '-', 20)).toBe(-19);
    expect(AddSubEasy(10, '-', 10)).toBe(0);
    expect(AddSubEasy(2.4, '+', 3.6)).toBe(6);
  });
  test('added unwanted op', () => {
    expect(() => AddSubEasy(1, '*', 2)).toThrowError('* is invalid operator');
  });
});
