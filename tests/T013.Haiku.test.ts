import { test, expect, describe } from 'bun:test';
import { convertHaikuString } from '../Problems/P013.Haiku';

describe('convertHaikuString', () => {
  test('should replace commas with spaces', () => {
    expect(convertHaikuString('happy,new,year,enjoy')).toBe(
      'happy new year enjoy',
    );
    expect(convertHaikuString('haiku,atcoder,tasks')).toBe(
      'haiku atcoder tasks',
    );
    expect(convertHaikuString('abcde,fghihgf,edcba')).toBe(
      'abcde fghihgf edcba',
    );
  });

  test('should work with edge cases', () => {
    expect(convertHaikuString('aaaaa,bbbbbbb,ccccc')).toBe(
      'aaaaa bbbbbbb ccccc',
    );
    expect(convertHaikuString('words,comma,space')).toBe('words comma space');
  });
});
