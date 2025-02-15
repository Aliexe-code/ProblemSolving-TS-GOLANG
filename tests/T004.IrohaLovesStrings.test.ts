import { test, describe, expect } from 'bun:test';
import { IrohaLovesStrings } from '../Problems/4-IrohaLovesStrings';

describe('IrohaLovesStrings', () => {
  test('IrohaLovesStrings', () => {
    expect(IrohaLovesStrings(3, 3, ['ghi', 'def', 'abc'])).toBe('abcdefghi');
    expect(IrohaLovesStrings(3, 4, ['zxca', 'awdw', 'csaz'])).toBe(
      'awdwcsazzxca',
    );
  });
  test('Edges', () => {
    expect(IrohaLovesStrings(0, 0, [])).toBe('Unvalid input');
    expect(IrohaLovesStrings(1, 1, [])).toBe('Unvalid input');
  });
});
