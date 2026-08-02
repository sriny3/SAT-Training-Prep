import { allBadges } from '../data/gamification/badges';

export interface PointsReward {
  amount: number;
  reason: string;
}

export interface BadgeUnlockResult {
  badgeId: string;
  badgeName: string;
  earned: boolean;
}

export class GamificationService {
  /**
   * Calculate points earned from quiz completion
   */
  static calculateQuizPoints(score: number, maxScore: number, difficulty: 'easy' | 'medium' | 'hard'): PointsReward {
    const percentage = (score / maxScore) * 100;
    let basePoints = 0;

    // Base points by difficulty
    switch (difficulty) {
      case 'easy':
        basePoints = 10;
        break;
      case 'medium':
        basePoints = 20;
        break;
      case 'hard':
        basePoints = 30;
        break;
    }

    // Bonus for high score
    let bonus = 0;
    if (percentage === 100) {
      bonus = basePoints * 0.5; // 50% bonus for perfect score
    } else if (percentage >= 90) {
      bonus = basePoints * 0.3; // 30% bonus for 90%+
    } else if (percentage >= 80) {
      bonus = basePoints * 0.2; // 20% bonus for 80%+
    }

    const total = basePoints + bonus;
    return {
      amount: Math.round(total),
      reason: `Quiz completed - ${difficulty} difficulty (${Math.round(percentage)}%)`
    };
  }

  /**
   * Calculate points for lesson completion
   */
  static calculateLessonPoints(duration: number): PointsReward {
    // 5 points per minute of lesson
    const amount = Math.round(duration / 10);
    return {
      amount: Math.max(5, amount),
      reason: `Lesson completed (${duration} min)`
    };
  }

  /**
   * Calculate streak bonus points
   */
  static calculateStreakBonus(streak: number): PointsReward {
    if (streak < 3) {
      return { amount: 0, reason: 'No streak bonus' };
    }

    // Increasing bonus for longer streaks
    let bonus = 0;
    if (streak >= 100) {
      bonus = 50;
    } else if (streak >= 60) {
      bonus = 30;
    } else if (streak >= 30) {
      bonus = 20;
    } else if (streak >= 14) {
      bonus = 10;
    } else if (streak >= 7) {
      bonus = 5;
    }

    return {
      amount: bonus,
      reason: `${streak}-day streak bonus`
    };
  }

  /**
   * Check if a badge should be unlocked based on user progress
   */
  static checkBadgeUnlock(
    badgeId: string,
    userStats: {
      streak: number;
      bestStreak: number;
      lessonsCompleted: number;
      quizzesPassed: number;
      perfectScores: number;
      unlockedBadges: string[];
    }
  ): BadgeUnlockResult {
    const badge = allBadges.find(b => b.id === badgeId);

    if (!badge) {
      return { badgeId, badgeName: 'Unknown', earned: false };
    }

    if (userStats.unlockedBadges.includes(badgeId)) {
      return { badgeId, badgeName: badge.name, earned: false };
    }

    let earned = false;
    const req = badge.requirement;

    switch (req.type) {
      case 'streak-days':
        earned = userStats.streak >= req.value;
        break;
      case 'lessons-completed':
        earned = req.value === 0 || userStats.lessonsCompleted >= req.value;
        break;
      case 'tests-passed':
        earned = userStats.quizzesPassed >= req.value;
        break;
      case 'perfect-score':
        earned = userStats.perfectScores >= req.value;
        break;
      case 'quiz-score':
        // This would need more detailed tracking per subject
        earned = false;
        break;
    }

    return {
      badgeId,
      badgeName: badge.name,
      earned
    };
  }

  /**
   * Get all badges that should be checked for unlock
   */
  static getAllUnlockChecks(
    userStats: {
      streak: number;
      bestStreak: number;
      lessonsCompleted: number;
      quizzesPassed: number;
      perfectScores: number;
      unlockedBadges: string[];
    }
  ): BadgeUnlockResult[] {
    return allBadges.map(badge =>
      GamificationService.checkBadgeUnlock(badge.id, userStats)
    );
  }

  /**
   * Calculate required points for next level
   */
  static getPointsForNextLevel(currentPoints: number, levels: Array<{ requiredPoints: number }>): number {
    const nextLevel = levels.find(l => l.requiredPoints > currentPoints);
    if (!nextLevel) return 0;
    return nextLevel.requiredPoints - currentPoints;
  }
}
