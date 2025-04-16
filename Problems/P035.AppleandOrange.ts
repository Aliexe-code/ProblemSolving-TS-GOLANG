export function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
): void {
  let applesOnHouse = 0;
  let orangesOnHouse = 0;
  for (let i = 0; i < apples.length; i++) {
    const appleDistance = apples[i] + a;
    if (appleDistance >= s && appleDistance <= t) {
      applesOnHouse++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    const orangeDistance = oranges[i] + b;
    if (orangeDistance >= s && orangeDistance <= t) {
      orangesOnHouse++;
    }
  }
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
