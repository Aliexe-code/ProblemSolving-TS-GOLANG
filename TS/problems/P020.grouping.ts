export function grouping(a: number, b: number): string {
  const groups: number[][] = [[1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11], [2]];
  const groupA = groups.find((group) => group.includes(a));
  const groupB = groups.find((group) => group.includes(b));
  return groupA === groupB ? 'YES' : 'NO';
}
