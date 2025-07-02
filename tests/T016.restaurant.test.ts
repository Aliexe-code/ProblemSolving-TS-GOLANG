import { test, describe, expect } from 'bun:test';
import { totalMoney } from '../Problems/P016.restaurant';

describe('Restaurant', () => {
  test('should return 0 when N is 0 or negative', () => {
    expect(totalMoney(0)).toBe(0);
    expect(totalMoney(-5)).toBe(0);
  });
  test('should return correct total when N is less than 15 (no discount)', () => {
    expect(totalMoney(1)).toBe(800);
    expect(totalMoney(10)).toBe(8000);
  });
  test('should apply discount correctly when N is 15 or larger', () => {
    expect(totalMoney(15)).toBe(12000 - 200);
    expect(totalMoney(20)).toBe(16000 - 200);
    expect(totalMoney(30)).toBe(24000 - 400);
    expect(totalMoney(60)).toBe(48000 - 800);
  });
});
