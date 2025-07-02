export function atCoderPaintCans(a: number, b: number, c: number): number {
  if (a <= 0 || b <= 0 || c <= 0) return 0;
  const input = [a, b, c];
  const map = new Set(input);
  return map.size;
}
