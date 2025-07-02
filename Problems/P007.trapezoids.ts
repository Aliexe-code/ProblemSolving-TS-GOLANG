export function calculateArea(a: number, b: number, h: number) {
  if (a <= 0 || b <= 0 || h <= 0) return 0;
  return (a + b) * (h / 2);
}
