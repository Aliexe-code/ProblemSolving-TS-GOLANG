export function AddSubEasy(A: number, Op: string, B: number): number {
  switch (Op) {
    case '+':
      return A + B;
    case '-':
      return A - B;
    default:
      throw new Error(`${Op} is invalid operator`);
  }
}
