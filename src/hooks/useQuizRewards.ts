import { useCallback } from 'react';
import { useGameification } from './useGameification';
import { useNotification } from './useNotification';
import { GamificationService } from '../services/GamificationService';
import { createBadgeNotification, createLevelUpNotification } from '../components/gamification/AchievementNotification';
import { allBadges } from '../data/gamification/badges';

export const useQuizRewards = () => {
  const { addPoints, unlockBadge, getLevelProgress, gamification } = useGameification();
  const { addToast } = useNotification();

  const completeQuiz = useCallback(
    (score: number, maxScore: number, difficulty: 'easy' | 'medium' | 'hard') => {
      const pointsReward = GamificationService.calculateQuizPoints(score, maxScore, difficulty);

      addPoints(pointsReward.amount);

      addToast(
        `📝 Quiz Complete! +${pointsReward.amount} points earned (${pointsReward.reason})`,
        'success',
        3000
      );

      if (score === maxScore) {
        const perfectScoreBadge = allBadges.find(b => b.id === 'badge-010-perfect-score');
        if (perfectScoreBadge && !gamification.unlockedBadges.includes(perfectScoreBadge.id)) {
          unlockBadge(perfectScoreBadge.id);
          const notification = createBadgeNotification(
            perfectScoreBadge.name,
            perfectScoreBadge.icon,
            perfectScoreBadge.rarity
          );
          addToast(
            `${notification.title} - ${notification.description}`,
            'success',
            4000
          );
        }
      }

      const newLevelProgress = getLevelProgress();
      if (newLevelProgress.current.level > gamification.currentLevel.level) {
        const newLevel = newLevelProgress.current;
        const notification = createLevelUpNotification(newLevel.level, newLevel.title, newLevel.icon);
        addToast(
          `${notification.title} - ${notification.description}`,
          'success',
          4000
        );
      }

      return {
        pointsEarned: pointsReward.amount,
        reason: pointsReward.reason
      };
    },
    [addPoints, unlockBadge, getLevelProgress, gamification, addToast]
  );

  return { completeQuiz };
};
