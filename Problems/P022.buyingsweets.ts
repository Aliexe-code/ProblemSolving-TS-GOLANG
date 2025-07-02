export function buyingSweets(X: number, A: number, B: number): number {
  if (X <= 0 || A <= 0 || B <= 0) return 0;

  return (X - A) % B;
}
