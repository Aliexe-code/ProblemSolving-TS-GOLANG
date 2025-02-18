import { test, expect, describe } from 'bun:test';
import { twoRectangles } from '../Problems/P014.twoRectangles';

describe('twoRectangles', () => {
  test('should return an error if any side is less than or equal to 0', () => {
    expect(twoRectangles(-1, 5, 4, 3)).toBe(
      'Erorr : values should be positive',
    );
    expect(twoRectangles(4, 0, 4, 3)).toBe('Erorr : values should be positive');
    expect(twoRectangles(4, 5, 0, 3)).toBe('Erorr : values should be positive');
    expect(twoRectangles(4, 5, 4, -3)).toBe(
      'Erorr : values should be positive',
    );
  });
  test('should return  area1 > area2', () => {
    const result = twoRectangles(5, 4, 3, 2);
    expect(result).toBe('first rectangle has larger area 20');
  });
  test('should return area1 < area2', () => {
    const result = twoRectangles(2, 2, 5, 5);
    expect(result).toBe('second rectangle has larger area 25');
  });
  test('should return  area1 === area2', () => {
    const result = twoRectangles(4, 3, 6, 2);
    expect(result).toBe('they are both equal areas');
  });
});
