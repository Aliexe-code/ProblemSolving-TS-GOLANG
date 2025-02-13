export function IrohaLovesStrings(
  N: number,
  L: number,
  strings: string[],
): string {
  if (N !== strings.length || strings.length === 0 || L !== strings[0].length)
    return 'Unvalid input';
  strings.sort();
  return strings.join('');
}
