export const sampleQuestions = [
  {
    id: 'q1',
    prompt: 'Welke hoofdstad hoort bij Nederland?',
    options: ['Rotterdam', 'Amsterdam', 'Brussel', 'Utrecht'],
    correct: 'Amsterdam',
    explanation: 'Amsterdam is de hoofdstad van Nederland.',
  },
  {
    id: 'q2',
    prompt: '2 + 2 = ?',
    options: ['3', '4', '5', '6'],
    correct: '4',
    explanation: 'Optellen van 2 en 2 geeft 4.',
  },
  {
    id: 'q3',
    prompt: 'Een hond is een...',
    options: ['voedsel', 'dier', 'huis', 'boom'],
    correct: 'dier',
    explanation: 'Een hond is een levend dier.',
  },
];

export function getStopwatchText(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function getScoreSummary(correct: number, total: number) {
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
  return {
    correct,
    total,
    percentage,
  };
}
