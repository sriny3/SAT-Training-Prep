import { useCallback } from 'react';
import { useGameification } from './useGameification';
import { useNotification } from './useNotification';
import { useAuth } from './useAuth';
import { GamificationService } from '../services/GamificationService';
import { createBadgeNotification, createLevelUpNotification } from '../components/gamification/AchievementNotification';
import { allBadges } from '../data/gamification/badges';
import { supabase } from '../lib/supabaseClient';
import { Subject } from '../types';

interface LessonInfo {
  id: string;
  title: string;
  subject: Subject;
  topic: string;
  duration: number;
}

export const useLessonRewards = () => {
  const { addPoints, unlockBadge, getLevelProgress, gamification } = useGameification();
  const { addToast } = useNotification();
  const { user } = useAuth();

  const completeLesson = useCallback(
    (lesson: LessonInfo) => {
      const pointsReward = GamificationService.calculateLessonPoints(lesson.duration);

      addPoints(pointsReward.amount);

      // Record this completion so the admin dashboard can show it in the
      // student's activity history. Fire-and-forget — a logging failure
      // shouldn't block the reward the student already sees.
      if (user) {
        supabase
          .from('lesson_completions')
          .insert({
            user_id: user.id,
            lesson_id: lesson.id,
            lesson_title: lesson.title,
            subject: lesson.subject,
            topic: lesson.topic,
            points_earned: pointsReward.amount,
          })
          .then(({ error }) => {
            if (error) console.error('Failed to log lesson completion:', error);
          });
      }

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
    [addPoints, unlockBadge, getLevelProgress, gamification, addToast, user]
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
