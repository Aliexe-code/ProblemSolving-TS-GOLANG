import {test,expect,describe} from "bun:test"
import {totalCandies} from "../Problems/childrenAndCandies";

describe('totalCandies',()=>{
    test('if totalCandies has valid N',()=>{
        expect(totalCandies(10)).toBe(55)
        expect(totalCandies(6)).toBe(21)
        expect(totalCandies(100)).toBe(5050)
    })
    test('if N is unvalid',()=>{
        expect(totalCandies(0)).toBe(0)
        expect(totalCandies(-1)).toBe(0)
        expect(totalCandies(-100)).toBe(0)
    })
})