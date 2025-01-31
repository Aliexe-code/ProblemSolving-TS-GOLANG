import { totalCandies } from '../src/Problems/Problem-4';
describe('totalCandies', () => {
    it('should return 6 for N = 3', () => {
      expect(totalCandies(3)).toBe(6);
    });
  
    it('should return 55 for N = 10', () => {
      expect(totalCandies(10)).toBe(55);
    });
  
    it('should return 1 for N = 1', () => {
      expect(totalCandies(1)).toBe(1);
    });
  
    it('should return 5050 for N = 100', () => {
      expect(totalCandies(100)).toBe(5050);
    });
  });