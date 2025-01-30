//https://atcoder.jp/contests/abc042/tasks/abc042_a
export function HaikuPhrases(A:number,B:number,C:number):string{
    const sortedInput = [A,B,C].sort((x,y)=> x-y);
    const haikuPattern = [5,5,7];
    return sortedInput.toString()===haikuPattern.toString()? "YES" : "NO";
}