export function isIsogram(str: string): boolean {
  const lowerStr = str.toLowerCase();
  const charSet = new Set<string>();

  for (const char of lowerStr) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
