import { Kata } from 'Problems/P027.VowelCount';
import { test, describe, expect } from 'bun:test';
describe('getCount', () => {
  test('should return 0 for an empty string', () => {
    expect(Kata.getCount('')).toBe(0);
  });

  test("should return 5 for the string 'aeiou'", () => {
    expect(Kata.getCount('aeiou')).toBe(5);
  });

  test("should return 2 for the string 'hello'", () => {
    expect(Kata.getCount('hello')).toBe(2);
  });

  test("should return 3 for the string 'abracadabra'", () => {
    expect(Kata.getCount('abracadabra')).toBe(5);
  });

  test("should return 0 for the string 'rhythm'", () => {
    expect(Kata.getCount('rhythm')).toBe(0);
  });
});
