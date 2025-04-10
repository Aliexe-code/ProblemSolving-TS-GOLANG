import { gradingStudents } from "Problems/P028.GradingStudents";
import { test, describe, expect } from "bun:test";
describe("gradingStudents", () => {
    test("should return an empty array for an empty input", () => {
        expect(gradingStudents([])).toEqual([]);
    });

    test("should return the same array for grades below 38", () => {
        expect(gradingStudents([37, 36, 35])).toEqual([37, 36, 35]);
    });

    test("should round up grades that are close to the next multiple of 5", () => {
        expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    });

    test("should not round up grades that are not close to the next multiple of 5", () => {
        expect(gradingStudents([84, 29, 57])).toEqual([85, 29, 57]);
    });
    
   
})