import { Test, describe, expect, test } from 'bun:test';
import { buyingSweets } from '../Problems/P022.buyingsweets';

describe('BuyingSweets', () => {
  test('valid inputs', () => {
    expect(buyingSweets(1234, 150, 100)).toBe(84);
    expect(buyingSweets(1000, 108, 108)).toBe(28);
    expect(buyingSweets(579, 123, 456)).toBe(0);
    expect(buyingSweets(7477, 549, 593)).toBe(405);
  });
  test('Edges', () => {
    expect(buyingSweets(2, 1, 1)).toBe(0);
    expect(buyingSweets(10000, 1, 1)).toBe(0);
    expect(buyingSweets(1000, 999, 1)).toBe(0);
  });
});
