import { test, expect, describe } from 'bun:test';
import { UOIAUAI } from '../Problems/P011.UOIAUAI';

describe('check vowel or consonant', () => {
  test('should return "vowel" ', () => {
    expect(UOIAUAI('a')).toBe('vowel');
    expect(UOIAUAI('e')).toBe('vowel');
    expect(UOIAUAI('i')).toBe('vowel');
    expect(UOIAUAI('o')).toBe('vowel');
    expect(UOIAUAI('u')).toBe('vowel');
  });
  test('should return "consonant" ', () => {
    expect(UOIAUAI('b')).toBe('consonant');
    expect(UOIAUAI('z')).toBe('consonant');
    expect(UOIAUAI('s')).toBe('consonant');
    expect(UOIAUAI('m')).toBe('consonant');
  });
  test('Edges', () => {
    expect(UOIAUAI('@')).toBe('consonant');
    expect(UOIAUAI('2')).toBe('consonant');
    expect(UOIAUAI('')).toBe('consonant');
  });
});
