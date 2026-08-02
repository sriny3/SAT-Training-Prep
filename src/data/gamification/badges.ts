import { Badge } from '../../types';

export const allBadges: Badge[] = [
  // Streak Badges (5)
  {
    id: 'badge-001-fire',
    name: 'On Fire! 🔥',
    description: 'Maintain a 7-day study streak',
    icon: '🔥',
    category: 'streak',
    rarity: 'uncommon',
    requirement: {
      type: 'streak-days',
      value: 7
    }
  },
  {
    id: 'badge-002-unstoppable',
    name: 'Unstoppable 🌟',
    description: 'Maintain a 14-day study streak',
    icon: '🌟',
    category: 'streak',
    rarity: 'rare',
    requirement: {
      type: 'streak-days',
      value: 14
    }
  },
  {
    id: 'badge-003-legendary',
    name: 'Legendary 💫',
    description: 'Maintain a 30-day study streak',
    icon: '💫',
    category: 'streak',
    rarity: 'epic',
    requirement: {
      type: 'streak-days',
      value: 30
    }
  },
  {
    id: 'badge-004-dedicated',
    name: 'Dedicated 🎯',
    description: 'Maintain a 60-day study streak',
    icon: '🎯',
    category: 'streak',
    rarity: 'epic',
    requirement: {
      type: 'streak-days',
      value: 60
    }
  },
  {
    id: 'badge-005-eternal',
    name: 'Eternal Flame 👑',
    description: 'Maintain a 100-day study streak',
    icon: '👑',
    category: 'streak',
    rarity: 'legendary',
    requirement: {
      type: 'streak-days',
      value: 100
    }
  },

  // Subject Mastery Badges (3)
  {
    id: 'badge-006-reading-master',
    name: 'Reading Master 📖',
    description: 'Score 90%+ on all Reading & Writing quizzes',
    icon: '📖',
    category: 'subject-master',
    rarity: 'epic',
    requirement: {
      type: 'quiz-score',
      value: 90,
      subject: 'reading-writing'
    }
  },
  {
    id: 'badge-007-math-wizard',
    name: 'Math Wizard 🔢',
    description: 'Score 90%+ on all Math quizzes',
    icon: '🔢',
    category: 'subject-master',
    rarity: 'epic',
    requirement: {
      type: 'quiz-score',
      value: 90,
      subject: 'math'
    }
  },
  {
    id: 'badge-008-essay-expert',
    name: 'Essay Expert ✍️',
    description: 'Score 90%+ on all Essay/Writing quizzes',
    icon: '✍️',
    category: 'subject-master',
    rarity: 'epic',
    requirement: {
      type: 'quiz-score',
      value: 90,
      subject: 'essay'
    }
  },

  // Achievement Badges (5)
  {
    id: 'badge-009-quick-learner',
    name: 'Quick Learner 🏆',
    description: 'Complete 10 lessons',
    icon: '🏆',
    category: 'milestone',
    rarity: 'common',
    requirement: {
      type: 'lessons-completed',
      value: 10
    }
  },
  {
    id: 'badge-010-perfect-score',
    name: 'Perfect Score 💯',
    description: 'Get 100% on any quiz',
    icon: '💯',
    category: 'milestone',
    rarity: 'rare',
    requirement: {
      type: 'perfect-score',
      value: 1
    }
  },
  {
    id: 'badge-011-fast-start',
    name: 'Fast Start 🚀',
    description: 'Complete your first practice test',
    icon: '🚀',
    category: 'milestone',
    rarity: 'common',
    requirement: {
      type: 'tests-passed',
      value: 1
    }
  },
  {
    id: 'badge-012-knowledge-base',
    name: 'Knowledge Base 📚',
    description: 'Complete 50 lessons',
    icon: '📚',
    category: 'milestone',
    rarity: 'epic',
    requirement: {
      type: 'lessons-completed',
      value: 50
    }
  },
  {
    id: 'badge-013-test-champion',
    name: 'Test Champion 🥇',
    description: 'Complete 5 full-length practice tests',
    icon: '🥇',
    category: 'milestone',
    rarity: 'epic',
    requirement: {
      type: 'tests-passed',
      value: 5
    }
  },

  // Special Badges (3)
  {
    id: 'badge-014-early-adopter',
    name: 'Early Adopter 🎁',
    description: 'Sign up in the first week',
    icon: '🎁',
    category: 'special-event',
    rarity: 'rare',
    requirement: {
      type: 'lessons-completed',
      value: 0
    }
  },
  {
    id: 'badge-015-social-butterfly',
    name: 'Social Butterfly 🌈',
    description: 'Reach the top 100 on the leaderboard',
    icon: '🌈',
    category: 'challenge',
    rarity: 'rare',
    requirement: {
      type: 'lessons-completed',
      value: 0
    }
  },
  {
    id: 'badge-016-badge-collector',
    name: 'Badge Collector 🎉',
    description: 'Unlock 10 badges',
    icon: '🎉',
    category: 'challenge',
    rarity: 'epic',
    requirement: {
      type: 'lessons-completed',
      value: 0
    }
  }
];

export const getBadgeById = (id: string): Badge | undefined => {
  return allBadges.find(badge => badge.id === id);
};

export const getBadgesByCategory = (category: string): Badge[] => {
  return allBadges.filter(badge => badge.category === category);
};

export const getBadgesByRarity = (rarity: string): Badge[] => {
  return allBadges.filter(badge => badge.rarity === rarity);
};
