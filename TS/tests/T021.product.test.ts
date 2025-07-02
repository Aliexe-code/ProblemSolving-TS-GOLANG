import { Test, describe, expect, test } from 'bun:test';
import { product } from '../Problems/P021.product';

describe('Product even or odd', () => {
  test('should return true if result of product is even', () => {
    expect(product(2, 2)).toBe(true);
    expect(product(12, 2)).toBe(true);
    expect(product(1000, 2000)).toBe(true);

    test('should return false if result of product is odd', () => {
      expect(product(1, 1)).toBe(false);
      expect(product(3, 7)).toBe(false);
      expect(product(1001, 2000)).toBe(false);
    });

    test('edges', () => {
      expect(product(0, 1)).toBe(false);
      expect(product(0, -12)).toBe(false);
      expect(product(-2, 2)).toBe(false);
    });
  });
});
