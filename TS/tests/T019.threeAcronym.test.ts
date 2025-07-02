import { test, describe, expect } from 'bun:test';
import { threeAcronym } from '../Problems/P019.threeAcronym';

describe('Three Acronym', () => {
  test('should return the acronym of the three words', () => {
    expect(threeAcronym('Hello', 'World', 'Again')).toBe('HWA');
    expect(threeAcronym('I', 'Love', 'You')).toBe('ILY');
    expect(threeAcronym('I', 'Hate', 'You')).toBe('IHY');
  });
  test('edges', () => {
    expect(threeAcronym('', '', '')).toBe('invalid inputs');
    expect(threeAcronym('Hello', 'World', '')).toBe('invalid inputs');
  });
});
