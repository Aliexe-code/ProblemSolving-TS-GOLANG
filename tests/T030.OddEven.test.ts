import { test, describe, expect } from "bun:test";
import { oddOrEven } from "Problems/P030.OddEven";

describe('oddOrEven', () => {
    test('should return even', () => {
        expect(oddOrEven([1, 2, 3, 4])).toBe('even');
    });
    test('should return odd', () => {
        expect(oddOrEven([1, 2, 3, 4, 5])).toBe('odd');
    });
    test('should return even', () => {
        expect(oddOrEven([1, 2, 3, 4, 5, 6])).toBe('odd');
    });
    test('Edge cases', () => {
        expect(oddOrEven([])).toBe('even');
        expect(oddOrEven([1])).toBe('odd');
        expect(oddOrEven([0])).toBe('even');
        expect(oddOrEven([2])).toBe('even');

    })
})
