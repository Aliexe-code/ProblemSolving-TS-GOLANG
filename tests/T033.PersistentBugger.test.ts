import { test,describe,expect } from "bun:test";
import { persistence } from "Problems/P033.PersistentBugger";

describe("persistence", () => {
    test("should return the persistence of a number", () => {
        expect(persistence(4)).toBe(0);
        expect(persistence(9)).toBe(0);
        expect(persistence(99)).toBe(2);
        expect(persistence(999)).toBe(4);
    });
});
