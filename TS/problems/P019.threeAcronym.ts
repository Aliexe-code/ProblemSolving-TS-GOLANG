export function threeAcronym(s1: string, s2: string, s3: string): string {
  return s1.length === 0 || s2.length === 0 || s3.length === 0
    ? 'invalid inputs'
    : `${s1[0] + s2[0] + s3[0]}`.toUpperCase();
}

console.log(threeAcronym('hello', 'world', 'typescript'));
console.log(threeAcronym('', '', ''));
