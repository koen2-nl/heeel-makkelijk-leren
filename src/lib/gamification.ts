export type GoalType = 'questions' | 'time';

export const MIN_DAILY_GOAL = {
  questions: 5,
  time: 5,
} as const;

export function normalizeGoalValue(type: GoalType, value: number) {
  const minimum = MIN_DAILY_GOAL[type];
  return Math.max(minimum, value);
}

export function getProgressPercent(current: number, total: number) {
  if (total <= 0) return 0;
  return Math.min(100, Math.round((current / total) * 100));
}

export function formatSeconds(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function isDailyGoalReached(type: GoalType, progress: number) {
  return progress >= normalizeGoalValue(type, MIN_DAILY_GOAL[type]);
}
