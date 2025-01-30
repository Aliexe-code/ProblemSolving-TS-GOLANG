import { HaikuPhrases } from '../src/Problems/Problem-3';

describe("HaikuPhrases", () => {
    // Test valid Haiku patterns
    it("should return YES for valid Haiku patterns", () => {
        expect(HaikuPhrases(5, 5, 7)).toBe("YES"); // [5, 5, 7]
        expect(HaikuPhrases(5, 7, 5)).toBe("YES"); // [5, 5, 7]
        expect(HaikuPhrases(7, 5, 5)).toBe("YES"); // [5, 5, 7]
    });

    // Test invalid Haiku patterns
    it("should return NO for invalid Haiku patterns", () => {
        expect(HaikuPhrases(5, 5, 5)).toBe("NO"); // [5, 5, 5] (no 7)
        expect(HaikuPhrases(7, 7, 5)).toBe("NO"); // [5, 7, 7] (extra 7)
        expect(HaikuPhrases(10, 5, 5)).toBe("NO"); // [5, 5, 10] (invalid syllable count)
        expect(HaikuPhrases(1, 2, 3)).toBe("NO"); // [1, 2, 3] (no match)
    });

    // Test edge cases
    it("should handle edge cases", () => {
        expect(HaikuPhrases(1, 1, 1)).toBe("NO"); // [1, 1, 1] (all syllables too small)
        expect(HaikuPhrases(5, 7, 10)).toBe("NO"); // [5, 7, 10] (invalid syllable count)
        expect(HaikuPhrases(5, 5, 5)).toBe("NO"); // [5, 5, 5] (no 7)
    });
});