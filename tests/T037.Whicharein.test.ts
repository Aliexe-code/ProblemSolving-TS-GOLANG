import { inArray } from "Problems/P037.Whicharein";
import { test, describe, expect } from "bun:test";
describe("inArray", () => {
    test("should return strings from a1 that are substrings of strings in a2", () => {
      const a1 = ["arp", "live", "strong"];
      const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
      const result = inArray(a1, a2);
      expect(result).toEqual(["arp", "live", "strong"]);
    });
  
    test("should return an empty array when no matches are found", () => {
      const a1 = ["tarp", "mice", "bull"];
      const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
      const result = inArray(a1, a2);
      expect(result).toEqual([]);
    });
  
    test("should handle empty arrays gracefully", () => {
      const a1: string[] = [];
      const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
      const result1 = inArray(a1, a2);
      expect(result1).toEqual([]);
  
      const a3 = ["arp", "live", "strong"];
      const a4: string[] = [];
      const result2 = inArray(a3, a4);
      expect(result2).toEqual([]);
    });
  
    test("should remove duplicates from the result", () => {
      const a1 = ["arp", "arp", "live"];
      const a2 = ["lively", "alive", "harp"];
      const result = inArray(a1, a2);
      expect(result).toEqual(["arp", "live"]);
    });
  
    test("should return results sorted lexicographically", () => {
      const a1 = ["live", "arp", "strong"];
      const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
      const result = inArray(a1, a2);
      expect(result).toEqual(["arp", "live", "strong"]);
    });
  
    test("should respect case sensitivity", () => {
      const a1 = ["Live", "arp"];
      const a2 = ["lively", "alive", "harp"];
      const result = inArray(a1, a2);
      expect(result).toEqual(["arp"]);
    });
  
    test("should handle large inputs efficiently", () => {
      const a1 = Array(1000).fill("abc").concat(["xyz"]);
      const a2 = Array(1000).fill("abcdef").concat(["uvwxyz"]);
      const result = inArray(a1, a2);
      expect(result).toEqual(["abc", "xyz"]);
    });
  });