export function totalFee(N: number, K: number, X: number, Y: number): number {
  if (N <= 0 || K <= 0 || X <= 0 || Y <= 0) return 0;
  if (N <= K) return N * X;
  return K * X + (N - K) * Y;
}
