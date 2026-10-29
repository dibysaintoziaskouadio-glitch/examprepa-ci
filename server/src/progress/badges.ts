export const BADGES = [
  { code: 'BRONZE', tier: 'Bronze', icon: '🥉', title: 'Premier pas', description: 'Rendre ton premier devoir' },
  { code: 'ARGENT', tier: 'Argent', icon: '🥈', title: 'Régulier', description: 'Obtenir au moins 10/20 à 3 devoirs' },
  { code: 'OR', tier: 'Or', icon: '🥇', title: 'Excellence', description: 'Moyenne ≥ 14/20 sur au moins 3 devoirs' },
  { code: 'DIAMANT', tier: 'Diamant', icon: '💎', title: 'Major', description: 'Obtenir au moins 17/20 à un devoir' },
] as const;

/** Badges mérités d'après les notes officielles (sur 20) et le nombre de copies rendues. */
export function earnedBadges(submittedCount: number, officialScores: number[]): string[] {
  const codes: string[] = [];
  if (submittedCount >= 1) codes.push('BRONZE');
  if (officialScores.filter((s) => s >= 10).length >= 3) codes.push('ARGENT');
  if (officialScores.length >= 3 && officialScores.reduce((a, b) => a + b, 0) / officialScores.length >= 14) {
    codes.push('OR');
  }
  if (officialScores.some((s) => s >= 17)) codes.push('DIAMANT');
  return codes;
}
