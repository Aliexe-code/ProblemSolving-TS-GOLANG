import {calculateAccommodationFee} from '../src/Problems/Problem-5';

describe('calculateAccommodationFee', () => {
    it('should return the correct fee when N is less than or equal to K', () => {
      const N = 3;
      const K = 5;
      const X = 10000;
      const Y = 9000;
      const result = calculateAccommodationFee(N, K, X, Y);
      expect(result).toBe(3 * 10000); // All nights are charged at X yen
    });
  
    it('should return the correct fee when N is greater than K', () => {
      const N = 6;
      const K = 4;
      const X = 10000;
      const Y = 9000;
      const result = calculateAccommodationFee(N, K, X, Y);
      expect(result).toBe(4 * 10000 + 2 * 9000); // First 4 nights at X, remaining 2 nights at Y
    });
  
    it('should return the correct fee when N equals K', () => {
      const N = 4;
      const K = 4;
      const X = 10000;
      const Y = 9000;
      const result = calculateAccommodationFee(N, K, X, Y);
      expect(result).toBe(4 * 10000); // All nights are charged at X yen since N equals K
    });
  
    it('should handle small values of N, K, X, and Y correctly', () => {
      const N = 1;
      const K = 2;
      const X = 10000;
      const Y = 9000;
      const result = calculateAccommodationFee(N, K, X, Y);
      expect(result).toBe(1 * 10000); // All nights are charged at X yen
    });
  
    it('should return the correct fee when N is large and K is smaller', () => {
      const N = 10000;
      const K = 5000;
      const X = 10000;
      const Y = 9000;
      const result = calculateAccommodationFee(N, K, X, Y);
      expect(result).toBe(5000 * 10000 + 5000 * 9000); // First 5000 nights at X, remaining 5000 nights at Y
    });
  });