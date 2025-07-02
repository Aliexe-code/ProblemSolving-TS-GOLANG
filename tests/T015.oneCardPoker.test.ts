import { test, describe, expect } from 'bun:test';
import { oneCardPoker } from '../Problems/P015.oneCardPoker';

describe('One Card Poker ', () => {
  test('should return Alice when he has higher card', () => {
    expect(oneCardPoker(1, 5)).toBe('Alice');
  });
  test('should return Bob when he has higher card', () => {
    expect(oneCardPoker(13, 1)).toBe('Bob');
  });
  test('should return draw when they`re equals', () => {
    expect(oneCardPoker(2, 2)).toBe('Draw');
  });
  test('Edges', () => {
    expect(oneCardPoker(15, 10)).toBe('invalid inputs');
    expect(oneCardPoker(-1, 1)).toBe('invalid inputs');
  });
});
