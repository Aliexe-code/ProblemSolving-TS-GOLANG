import { test,describe,expect } from "bun:test";
import { fightOverCandies } from '../Problems/fightOverCandies';

describe('fightOverCandies function',()=>{
    test('should return "YES" when two packs sum up to the third',()=>{
    expect(fightOverCandies(3, 4, 7)).toBe("YES"); 
    expect(fightOverCandies(10, 20, 30)).toBe("YES"); 
    expect(fightOverCandies(56, 25, 31)).toBe("YES"); 
    })

    test('should return "NO" when two packs do not sum up to the third',()=>{
    expect(fightOverCandies(3, 4, 8)).toBe("NO"); 
    expect(fightOverCandies(10, 20, 40)).toBe("NO"); 
    expect(fightOverCandies(56, 25, 32)).toBe("NO"); 
    })

    test('Edges',()=>{
    expect(fightOverCandies(0, 4, 7)).toBe("No");
    expect(fightOverCandies(-3, 4, 7)).toBe("No");
    expect(fightOverCandies(3, -4, 7)).toBe("No");
    expect(fightOverCandies(3, 4, -7)).toBe("No");
    expect(fightOverCandies(1, 1, 2)).toBe("YES");
    expect(fightOverCandies(1, 1, 1)).toBe("NO"); 
    expect(fightOverCandies(100, 100, 200)).toBe("YES");
    })
})