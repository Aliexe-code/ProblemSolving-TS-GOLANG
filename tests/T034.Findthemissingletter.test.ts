import { test, describe, expect } from 'bun:test';
import { findMissingLetter } from '../Problems/P034.Findthemissingletter';

describe('findMissingLetter', () => {
  test('should find missing lowercase letter', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
    expect(findMissingLetter(['x', 'z'])).toBe('y');
    expect(findMissingLetter(['m', 'n', 'p'])).toBe('o');
  });

  test('should find missing uppercase letter', () => {
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
    expect(findMissingLetter(['A', 'B', 'D'])).toBe('C');
    expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  });

  test('should handle start of alphabet', () => {
    expect(findMissingLetter(['b', 'c', 'd', 'f'])).toBe('e');
    expect(findMissingLetter(['B', 'C', 'D', 'F'])).toBe('E');
  });

  test('should handle end of alphabet', () => {
    expect(findMissingLetter(['w', 'x', 'z'])).toBe('y');
    expect(findMissingLetter(['W', 'X', 'Z'])).toBe('Y');
  });
});
