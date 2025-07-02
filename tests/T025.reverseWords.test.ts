import { test, describe, expect } from 'bun:test';
import { reverseWords } from '../Problems/P025.reverseWords';

describe('reverseWords 25', () => {
  test('simple word', () => {
    expect(reverseWords('ahmed is good')).toBe('demha si doog');
  });
  test('handles empty string', () => {
    expect(reverseWords('')).toBe('');
  });
  test('handles string with punctuation', () => {
    expect(reverseWords('hello, world!')).toBe(',olleh !dlrow');
  });
  test('multiple spaces with punctuation', () => {
    expect(reverseWords('hi,  there!')).toBe(',ih  !ereht');
  });
});
