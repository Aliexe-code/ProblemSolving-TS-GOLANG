//https://atcoder.jp/contests/abc047/tasks/abc047_a
 export function fightOverCandies(a:number,b:number,c:number):string{
    if(a<=0 || b<=0 || c<=0) return 'No';
    if(a+b===c || a+c===b || b+c===a) return "YES"
    return "NO"
 }

