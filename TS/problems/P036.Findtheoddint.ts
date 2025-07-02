export const findOdd = (xs: number[]): number => {
    if (xs.length === 0) {
      throw new Error("Input array must not be empty");
    }
    return xs.reduce((acc, cur) => acc ^ cur, 0);
  };