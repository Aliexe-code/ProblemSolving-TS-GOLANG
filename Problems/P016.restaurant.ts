export function totalMoney(N: number): number {
  if (N <= 0) return 0;
  const price = N * 800;
  const discount: number = Math.floor(N / 15) * 200;
  return price - discount;
}
console.log(totalMoney(20));
