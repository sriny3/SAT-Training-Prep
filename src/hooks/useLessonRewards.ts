import { useCallback } from 'react';
import { useGameification } from './useGameification';
import { useNotification } from './useNotification';
import { GamificationService } from '../services/GamificationService';
import { createBadgeNotification, createLevelUpNotification } from '../components/gamification/AchievementNotification';
import { allBadges } from '../data/gamification/badges';

export const useLessonRewards = () => {
  const { addPoints, unlockBadge, getLevelProgress, gamification } = useGameification();
  const { addToast } = useNotification();

  const completeLesson = useCallback(
    (lessonDuration: number) => {
      const pointsReward = GamificationService.calculateLessonPoints(lessonDuration);

      addPoints(pointsReward.amount);

      addToast(
        `📖 Lesson Complete! +${pointsReward.amount} points earned (${pointsReward.reason})`,
        'success',
        3000
      );

      checkLessonMilestones(gamification.unlockedBadges.length);

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

  const checkLessonMilestones = useCallback(
    (currentBadgeCount: number) => {
      if (currentBadgeCount < 1) {
        const quickLearner = allBadges.find(b => b.id === 'badge-009-quick-learner');
        if (quickLearner && !gamification.unlockedBadges.includes(quickLearner.id)) {
          unlockBadge(quickLearner.id);
          const notification = createBadgeNotification(quickLearner.name, quickLearner.icon, quickLearner.rarity);
          addToast(
            `${notification.title} - ${notification.description}`,
            'success',
            4000
          );
        }
      }

      if (currentBadgeCount < 2) {
        const knowledgeBase = allBadges.find(b => b.id === 'badge-012-knowledge-base');
        if (knowledgeBase && !gamification.unlockedBadges.includes(knowledgeBase.id)) {
          unlockBadge(knowledgeBase.id);
          const notification = createBadgeNotification(
            knowledgeBase.name,
            knowledgeBase.icon,
            knowledgeBase.rarity
          );
          addToast(
            `${notification.title} - ${notification.description}`,
            'success',
            4000
          );
        }
      }
    },
    [unlockBadge, gamification.unlockedBadges, addToast]
  );

  return { completeLesson };
};
