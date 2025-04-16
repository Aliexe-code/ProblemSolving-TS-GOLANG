import { countApplesAndOranges } from 'Problems/P035.AppleandOrange';
import { test, describe, expect, jest } from 'bun:test';

describe('countApplesAndOranges', () => {
    test('should count apples and oranges on the house', () => {
        const s = 7;
        const t = 11;
        const a = 5;
        const b = 15;
        const apples = [-2, 2, 1];
        const oranges = [5, -6];
    
        console.log = jest.fn();
    
        countApplesAndOranges(s, t, a, b, apples, oranges);
    
        expect(console.log).toHaveBeenCalledWith(1);
        expect(console.log).toHaveBeenCalledWith(1);
  });

})