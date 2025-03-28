export function irohaHaiku(A: number, B: number, C: number): string {
  const sortedPattern = [5, 5, 7];
  const input = [A, B, C].sort((x, y) => x - y);
  return input.toString() === sortedPattern.toString() ? 'YES' : 'NO';
}
