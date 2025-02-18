export function oneCardPoker(A: number, B: number): string {
  if (A <= 0 || B <= 0) return 'invalid inputs';
  if (A > 14 || B > 14) return 'invalid inputs';
  const powerCardA = A === 1 ? 14 : A;
  const powerCardB = B === 1 ? 14 : B;

  if (powerCardA > powerCardB) {
    return 'Alice';
  } else if (powerCardA < powerCardB) {
    return 'Bob';
  } else return 'Draw';
}

console.log(oneCardPoker(1, 13));
