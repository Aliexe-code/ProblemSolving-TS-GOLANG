export function convertHaikuString(s: string): string {
  return s.replace(/,/g, ' ');
}
// g is flag for global that converts all the , in the give string.
