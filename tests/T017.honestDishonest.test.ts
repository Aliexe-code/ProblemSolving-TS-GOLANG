import { test, describe, expect } from 'bun:test';
import { honestDishonest } from '../Problems/P017.honestDishonest';

describe('Honest Dishonest', () => {
  test('should return H when both a and b are H', () => {
    expect(honestDishonest('H', 'H')).toBe('H');
  });
  test('should return D when both a and b are D', () => {
    expect(honestDishonest('D', 'D')).toBe('H');
  });
  test('should return D when a is H and b is D', () => {
    expect(honestDishonest('H', 'D')).toBe('D');
  });
  test('should return D when a is D and b is H', () => {
    expect(honestDishonest('D', 'H')).toBe('D');
  });
});
