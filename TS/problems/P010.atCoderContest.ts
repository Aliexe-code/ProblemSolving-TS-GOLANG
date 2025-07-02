export function abbreviateContestName(s: string): string {
  if (s.length === 0) return '';
  const middleLetter = s[0].toUpperCase();
  return `A${middleLetter}C`;
}
