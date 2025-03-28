import { test, expect, describe } from 'bun:test';
import { calculateArea } from '../Problems/P007.trapezoids';

describe('calculateArea', () => {
  test('should return the correct area for valid integer inputs', () => {
    expect(calculateArea(3, 4, 2)).toBe(7);
    expect(calculateArea(4, 4, 4)).toBe(16);
    expect(calculateArea(1, 1, 2)).toBe(2);
  });

  test('should return 0 for non-positive inputs', () => {
    expect(calculateArea(0, 0, 0)).toBe(0);
    expect(calculateArea(-1, -1, -1)).toBe(0);
  });

  test('should return 0 if any one of the parameters is zero', () => {
    expect(calculateArea(3, 4, 0)).toBe(0);
    expect(calculateArea(3, 0, 2)).toBe(0);
    expect(calculateArea(0, 4, 2)).toBe(0);
  });

  test('should handle floating-point numbers correctly', () => {
    expect(calculateArea(3.5, 4.5, 2.5)).toBe(10);
  });

  test('should return 0 if any input is negative', () => {
    expect(calculateArea(3, -4, 2)).toBe(0);
    expect(calculateArea(-3, 4, 2)).toBe(0);
    expect(calculateArea(3, 4, -2)).toBe(0);
  });
});
