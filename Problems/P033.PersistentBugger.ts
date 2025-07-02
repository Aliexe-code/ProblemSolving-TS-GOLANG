export function persistence(num: number): number {
  let n = 0;
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((a, b) => Number(a) * Number(b), 1);
    n++;
  }
  return n;
}

console.log(persistence(4));
