import { test, describe, expect } from "bun:test";
import { findOdd } from "Problems/P036.Findtheoddint";

describe("findOdd", () => {
  test("should return the number that appears an odd number of times", () => {
    const input = [7, 7, 3, 3, 3];
    const result = findOdd(input);
    expect(result).toBe(3);
  });

  test("should handle an array with a single element", () => {
    const input = [42];
    const result = findOdd(input);
    expect(result).toBe(42);
  });

  test("should handle arrays with multiple numbers and one odd occurrence", () => {
    const input = [1, 2, 2, 3, 3, 3, 1];
    const result = findOdd(input);
    expect(result).toBe(3);
  });

  test("should handle arrays with negative numbers", () => {
    const input = [-1, -1, -2, -2, -3];
    const result = findOdd(input);
    expect(result).toBe(-3);
  });

  test("should handle large arrays efficiently", () => {
    const input = Array(9998).fill(42).concat([7]); // 42 appears even times, 7 appears odd times
    const result = findOdd(input);
    expect(result).toBe(7);
  });

  test("should throw an error or handle an empty array gracefully", () => {
    const input: number[] = [];
    expect(() => findOdd(input)).toThrow("Input array must not be empty");
  });
});