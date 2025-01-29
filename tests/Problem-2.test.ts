import { isAnagram } from '../src/Problems/Problem-2';
describe('isAnagram', () => {
    it('should return true when both strings are anagrams', () => {
      expect(isAnagram('anagram', 'nagaram')).toBe(true);
      expect(isAnagram('listen', 'silent')).toBe(true);
      expect(isAnagram('racecar', 'carrace')).toBe(true);
    });
  
    it('should return false when both strings have different lengths', () => {
      expect(isAnagram('hello', 'helloo')).toBe(false);
      expect(isAnagram('rat', 'car')).toBe(false);
      expect(isAnagram('abc', 'ab')).toBe(false);
    });
  
    it('should return false when both strings are not anagrams', () => {
      expect(isAnagram('hello', 'world')).toBe(false);
      expect(isAnagram('abc', 'def')).toBe(false);
    });
  
    it('should return true when both strings are empty', () => {
      expect(isAnagram('', '')).toBe(true);
    });
  });