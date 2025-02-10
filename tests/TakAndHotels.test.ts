import { test, expect, describe } from 'bun:test';
import { totalFee } from '../Problems/TakAndHotels';

describe('totalFee', () => {
  test('valid params', () => {
    expect(totalFee(5, 3, 10000, 9000)).toBe(48000);
    expect(totalFee(2, 3, 10000, 9000)).toBe(20000);
    expect(totalFee(3, 3, 100, 50)).toBe(300);
  });
  
  test('Edges', () => {
    expect(totalFee(0, 0, 0, 0)).toBe(0);
    expect(totalFee(-1, -1, -1, -1)).toBe(0);
  });
});
