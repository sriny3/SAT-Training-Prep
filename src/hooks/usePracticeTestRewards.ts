import { useCallback } from 'react';
import { useGameification } from './useGameification';
import { useNotification } from './useNotification';
import { useAuth } from './useAuth';
import { GamificationService } from '../services/GamificationService';
import { createLevelUpNotification } from '../components/gamification/AchievementNotification';
import { supabase } from '../lib/supabaseClient';
import { Subject } from '../types';

interface PracticeTestInfo {
  id: string;
  title: string;
  subject: Subject;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const usePracticeTestRewards = () => {
  const { addPoints, getLevelProgress, gamification } = useGameification();
  const { addToast } = useNotification();
  const { user } = useAuth();

  const completePracticeTest = useCallback(
    (
      test: PracticeTestInfo,
      correctCount: number,
      totalQuestions: number,
      timeSpentSeconds: number
    ) => {
      const pointsReward = GamificationService.calculatePracticeTestPoints(
        correctCount,
        totalQuestions,
        test.difficulty
      );

      addPoints(pointsReward.amount);

      if (user) {
        const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
        supabase
          .from('practice_test_attempts')
          .insert({
            user_id: user.id,
            test_id: test.id,
            test_title: test.title,
            subject: test.subject,
            topic: test.topic,
            correct_count: correctCount,
            total_questions: totalQuestions,
            percentage,
            points_earned: pointsReward.amount,
            time_spent_seconds: timeSpentSeconds,
          })
          .then(({ error }) => {
            if (error) console.error('Failed to log practice test attempt:', error);
          });
      }

      addToast(
        `🏆 Practice Test Complete! +${pointsReward.amount} points earned`,
        'success',
        3000
      );

      const newLevelProgress = getLevelProgress();
      if (newLevelProgress.current.level > gamification.currentLevel.level) {
        const newLevel = newLevelProgress.current;
        const notification = createLevelUpNotification(newLevel.level, newLevel.title, newLevel.icon);
        addToast(`${notification.title} - ${notification.description}`, 'success', 4000);
      }

      return { pointsEarned: pointsReward.amount, reason: pointsReward.reason };
    },
    [addPoints, getLevelProgress, gamification, addToast, user]
  );

  return { completePracticeTest };
};
