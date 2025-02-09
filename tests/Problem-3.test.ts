import { HaikuPhrases } from '../src/Problems/P3';

describe("HaikuPhrases", () => {

    it("should return YES for valid Haiku patterns", () => {
        expect(HaikuPhrases(5, 5, 7)).toBe("YES"); 
        expect(HaikuPhrases(5, 7, 5)).toBe("YES"); 
        expect(HaikuPhrases(7, 5, 5)).toBe("YES");
    });

    // Test invalid Haiku patterns
    it("should return NO for invalid Haiku patterns", () => {
        expect(HaikuPhrases(5, 5, 5)).toBe("NO"); 
        expect(HaikuPhrases(7, 7, 5)).toBe("NO"); 
        expect(HaikuPhrases(10, 5, 5)).toBe("NO"); 
        expect(HaikuPhrases(1, 2, 3)).toBe("NO"); 
    });

    
    it("should handle edge cases", () => {
        expect(HaikuPhrases(1, 1, 1)).toBe("NO"); 
        expect(HaikuPhrases(5, 7, 10)).toBe("NO"); 
        expect(HaikuPhrases(5, 5, 5)).toBe("NO");
    });
});