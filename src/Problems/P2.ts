export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
  
    const charCount = new Map<string, number>();
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const frequency = charCount.get(char);
      charCount.set(char, (frequency || 0) + 1);
    }
  
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      const frequency = charCount.get(char);
      if (!frequency) {
        return false; 
      }
      charCount.set(char, frequency - 1);
    }
  
    for (let [key, count] of charCount) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  