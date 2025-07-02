import { findEvenIndex } from "Problems/P038.EqualSidesOfAnArray";
import { test, describe, expect } from "bun:test";

describe("findEvenIndex", () => {
  test("should find the correct index", () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];
    expect(findEvenIndex(arr)).toBe(3);
  });

  test("should handle arrays with one valid index", () => {
    const arr = [1, 100, 50, -51, 1, 1];
    expect(findEvenIndex(arr)).toBe(1);
  });

  test("should handle arrays where the first index is valid", () => {
    const arr = [20, 10, -80, 10, 10, 15, 35];
    expect(findEvenIndex(arr)).toBe(0);
  });

  test("should return -1 when no valid index exists", () => {
    const arr = [1, 2, 3];
    expect(findEvenIndex(arr)).toBe(-1);
  });

  test("should handle arrays with negative numbers", () => {
    const arr = [-1, -2, -3, -4, -3, -2, -1];
    expect(findEvenIndex(arr)).toBe(3);
  });

  test("should handle arrays with all zeros", () => {
    const arr = [0, 0, 0, 0];
    expect(findEvenIndex(arr)).toBe(0);
  });

  test("should handle large arrays efficiently", () => {
    const arr = Array(999).fill(1).concat([999]);
    expect(findEvenIndex(arr)).toBe(-1);
  });
});