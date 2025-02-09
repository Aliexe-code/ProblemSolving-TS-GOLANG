//https://atcoder.jp/contests/abc044/tasks/abc044_a
export const calculateAccommodationFee = (N: number, K: number, X: number, Y: number): number =>
    N <= K ? N * X : K * X + (N - K) * Y;
  
  
  