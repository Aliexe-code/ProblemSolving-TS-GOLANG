import {test,describe,expect} from "bun:test";
import { atCoderPaintCans } from '../Problems/atCoDeerPaintCans';

describe('atCoderPaintCans',()=>{
    test('valid inputs',()=>{
        expect(atCoderPaintCans(2,3,4)).toBe(3)
        expect(atCoderPaintCans(1,1,2)).toBe(2)
        expect(atCoderPaintCans(1,1,1)).toBe(1)
    })
    test('Edges',()=>{
        expect(atCoderPaintCans(0,0,0)).toBe(0)
        expect(atCoderPaintCans(-1,-1,-1)).toBe(0)
        expect(atCoderPaintCans(-1,1,0)).toBe(0)

    })
})