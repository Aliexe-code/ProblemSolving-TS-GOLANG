export function product(a: number, b: number): boolean {
  if (a <= 0 || b <= 0) return false;

  return (a * b) % 2 === 0 ? true : false;
}
