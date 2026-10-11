export const sampleStats = [
  { label: 'Vragen beantwoord', value: '1.248', delta: '+12%' },
  { label: 'Nauwkeurigheid', value: '87%', delta: '+4%' },
  { label: 'Leertijd', value: '28h 45m', delta: '+8h' },
  { label: 'Streak', value: '9 dagen', delta: 'actief' },
];

export const sampleGoals = [
  { label: 'Dagelijkse doelen', value: '5 vragen', progress: 80 },
  { label: 'Wekelijkse focus', value: '2 lessen', progress: 65 },
];

export const sampleLessons = [
  { id: '1', title: 'Basiswoorden', description: 'Herhaal de belangrijkste kernbegrippen.', status: 'published' },
  { id: '2', title: 'Rekenen in het hoofd', description: 'Snelle optellen en aftrekken.', status: 'draft' },
  { id: '3', title: 'Taalstructuur', description: 'Zinnen opbouwen en verbeteren.', status: 'published' },
];

export const sampleBadges = [
  { id: 'first', name: 'Eerste quiz', description: 'Je eerste quiz is voltooid.', icon: '🏆' },
  { id: 'streak', name: 'Streak', description: '5 dagen achter elkaar een doel behaald.', icon: '🔥' },
  { id: 'speed', name: 'Snelle groei', description: '300 vragen beantwoord.', icon: '⚡' },
];

export const sampleLeaderboard = [
  { rank: 1, name: 'Iris', points: 1360, streak: 14, time: '12h 30m' },
  { rank: 2, name: 'Jesse', points: 1290, streak: 11, time: '11h 40m' },
  { rank: 3, name: 'You', points: 1185, streak: 9, time: '9h 45m' },
];

export const sampleReports = [
  { id: '1', reason: 'Onjuiste inhoud', status: 'open', reporter: 'Mila', content: 'Les: Basiswoorden' },
  { id: '2', reason: 'Spam of misbruik', status: 'in_progress', reporter: 'Noah', content: 'Vraag: 2.3' },
];
