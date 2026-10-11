export function validateDailyGoal(type: 'questions' | 'time', value: number) {
  if (type === 'questions') return value >= 5;
  if (type === 'time') return value >= 5;
  return false;
}

export function getProgressPercent(current: number, total: number) {
  if (total <= 0) return 0;
  return Math.min(100, Math.round((current / total) * 100));
}
