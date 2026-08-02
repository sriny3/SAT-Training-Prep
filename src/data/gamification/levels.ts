import { Level } from '../../types';

export const levels: Level[] = [
  {
    level: 1,
    requiredPoints: 0,
    title: 'Novice',
    description: 'Just starting your SAT prep journey',
    icon: '🌱',
    rewards: [
      { type: 'unlock-feature', value: 'lessons', description: 'Unlock all lessons' },
      { type: 'unlock-feature', value: 'quizzes', description: 'Unlock quiz system' }
    ]
  },
  {
    level: 2,
    requiredPoints: 500,
    title: 'Learner',
    description: 'Making steady progress',
    icon: '📚',
    rewards: [
      { type: 'badge', value: 'milestone-badge', description: 'Unlock milestone badge' },
      { type: 'points', value: 100, description: 'Bonus 100 points' }
    ]
  },
  {
    level: 3,
    requiredPoints: 1500,
    title: 'Scholar',
    description: 'Becoming proficient in multiple subjects',
    icon: '🎓',
    rewards: [
      { type: 'unlock-feature', value: 'analytics', description: 'Unlock detailed analytics' },
      { type: 'points', value: 200, description: 'Bonus 200 points' }
    ]
  },
  {
    level: 4,
    requiredPoints: 3000,
    title: 'Expert',
    description: 'Mastering the material',
    icon: '🔥',
    rewards: [
      { type: 'badge', value: 'expert-badge', description: 'Unlock expert badge' },
      { type: 'points', value: 300, description: 'Bonus 300 points' }
    ]
  },
  {
    level: 5,
    requiredPoints: 5000,
    title: 'Master',
    description: 'Dominating the SAT/PSAT',
    icon: '👑',
    rewards: [
      { type: 'unlock-feature', value: 'leaderboard', description: 'Leaderboard access' },
      { type: 'points', value: 500, description: 'Bonus 500 points' }
    ]
  },
  {
    level: 6,
    requiredPoints: 7500,
    title: 'Legend',
    description: 'Legendary preparation skills',
    icon: '⭐',
    rewards: [
      { type: 'badge', value: 'legend-badge', description: 'Unlock legend status' },
      { type: 'points', value: 750, description: 'Bonus 750 points' }
    ]
  },
  {
    level: 7,
    requiredPoints: 10000,
    title: 'Champion',
    description: 'The ultimate test master',
    icon: '🏆',
    rewards: [
      { type: 'unlock-feature', value: 'exclusive', description: 'Exclusive features unlocked' },
      { type: 'points', value: 1000, description: 'Bonus 1000 points' }
    ]
  }
];

export const getLevelByPoints = (points: number): Level => {
  const reversedLevels = [...levels].reverse();
  const level = reversedLevels.find(l => points >= l.requiredPoints);
  return level || levels[0];
};

export const getProgressToNextLevel = (points: number): { current: Level; next: Level | null; progress: number } => {
  const current = getLevelByPoints(points);
  const nextLevel = levels.find(l => l.level === current.level + 1);

  if (!nextLevel) {
    return { current, next: null, progress: 100 };
  }

  const pointsInCurrentLevel = points - current.requiredPoints;
  const pointsNeededForNextLevel = nextLevel.requiredPoints - current.requiredPoints;
  const progress = Math.min(100, (pointsInCurrentLevel / pointsNeededForNextLevel) * 100);

  return { current, next: nextLevel, progress };
};

export const getPointsUntilNextLevel = (points: number): number => {
  const { next } = getProgressToNextLevel(points);
  if (!next) return 0;
  return Math.max(0, next.requiredPoints - points);
};
