export function containsDuplicates(arr: number[]): boolean {
    const set = new Set(arr); 
    return set.size !== arr.length; 
  }
  