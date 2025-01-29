export function isAnagram(s: string, t: string): boolean {
    // If lengths don't match, they can't be anagrams
    if (s.length !== t.length) return false;
  
    const charCount = new Map<string, number>();
  
    // Count characters in s
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const frequency = charCount.get(char);
      charCount.set(char, (frequency || 0) + 1);
    }
  
    // Decrease count for characters in t
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      const frequency = charCount.get(char);
      if (!frequency) {
        return false; // If char is not found or frequency is 0, return false
      }
      charCount.set(char, frequency - 1);
    }
  
    // Ensure that all counts are zero (all characters match)
    for (let [key, count] of charCount) {
      if (count !== 0) {
        return false; // There is an unmatched character count
      }
    }
  
    return true; // All checks passed, s and t are anagrams
  }
  