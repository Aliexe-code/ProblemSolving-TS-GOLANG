export function UOIAUAI(c: string): string {
  const letter = c.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const set = new Set(vowels);
  return set.has(letter) ? 'vowel' : 'consonant';
}
console.log(UOIAUAI('c'));
console.log(UOIAUAI('a'));
