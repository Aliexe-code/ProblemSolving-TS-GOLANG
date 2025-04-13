export function isAnagram(s:string,t:string):boolean{
    if (s.length !== t.length) return false;

    const charCounts = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0)
    for(let i=0 ; i<s.length ; i++){
        charCounts[s.charCodeAt(i)-aCode]++;
        charCounts[t.charCodeAt(i)-aCode]--;
    }
    return charCounts.every(v => v === 0)

}

/**
 * charCounts = [0......0] n=26
 * s (+) => [1,0,1,1,1.....]
 * t (-) => [-1,0,-1,-1,-1.....]
 * charCounts = [0......0] => is Anagram if every value is 0 then it is Anagram.
 */
