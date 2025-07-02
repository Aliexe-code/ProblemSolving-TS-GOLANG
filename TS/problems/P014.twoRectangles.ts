export function twoRectangles(
  L1: number,
  W1: number,
  L2: number,
  W2: number,
): string {
  if (L1 <= 0 || W1 <= 0 || L2 <= 0 || W2 <= 0)
    return 'Erorr : values should be positive';
  const area1 = L1 * W1;
  const area2 = L2 * W2;
  if (area1 > area2) {
    return `first rectangle has larger area ${area1}`;
  } else if (area1 < area2) {
    return `second rectangle has larger area ${area2}`;
  } else return 'they are both equal areas';
}

console.log(twoRectangles(1, 22, 10, 25));
