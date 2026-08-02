import { useCallback } from 'react';
import { useGameification } from './useGameification';
import { useNotification } from './useNotification';
import { useAuth } from './useAuth';
import { GamificationService } from '../services/GamificationService';
import { createBadgeNotification, createLevelUpNotification } from '../components/gamification/AchievementNotification';
import { allBadges } from '../data/gamification/badges';
import { supabase } from '../lib/supabaseClient';
import { Subject } from '../types';

interface QuizInfo {
  id: string;
  title: string;
  subject: Subject;
  topic: string;
}

export const useQuizRewards = () => {
  const { addPoints, unlockBadge, getLevelProgress, gamification } = useGameification();
  const { addToast } = useNotification();
  const { user } = useAuth();

  const completeQuiz = useCallback(
    (quiz: QuizInfo, score: number, maxScore: number, difficulty: 'easy' | 'medium' | 'hard') => {
      const pointsReward = GamificationService.calculateQuizPoints(score, maxScore, difficulty);

      addPoints(pointsReward.amount);

      if (user) {
        const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        supabase
          .from('quiz_attempts')
          .insert({
            user_id: user.id,
            quiz_id: quiz.id,
            quiz_title: quiz.title,
            subject: quiz.subject,
            topic: quiz.topic,
            score,
            max_score: maxScore,
            percentage,
            points_earned: pointsReward.amount,
          })
          .then(({ error }) => {
            if (error) console.error('Failed to log quiz attempt:', error);
          });
      }

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
    [addPoints, unlockBadge, getLevelProgress, gamification, addToast, user]
  );

  return { completeQuiz };
};
