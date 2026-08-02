import React, { useEffect } from 'react';
import { useNotification } from '../../hooks/useNotification';
import './achievement-notification.css';

export type AchievementType = 'badge' | 'level-up' | 'streak' | 'rank';

interface AchievementNotificationData {
  type: AchievementType;
  title: string;
  description: string;
  icon: string;
  points?: number;
}

interface AchievementNotificationProps {
  achievement: AchievementNotificationData;
  onDismiss?: () => void;
  duration?: number;
}

export const AchievementNotification: React.FC<AchievementNotificationProps> = ({
  achievement,
  onDismiss,
  duration = 4000
}) => {
  const { addToast } = useNotification();

  useEffect(() => {
    addToast(
      `${achievement.title} - ${achievement.description}`,
      'success',
      duration
    );

    const timer = setTimeout(() => {
      onDismiss?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [achievement, addToast, duration, onDismiss]);

  return (
    <div className={`achievement-notification achievement-${achievement.type}`}>
      <div className="achievement-content">
        <div className="achievement-icon">{achievement.icon}</div>
        <div className="achievement-text">
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          {achievement.points && (
            <div className="achievement-points">+{achievement.points} points</div>
          )}
        </div>
      </div>
      <div className="achievement-animation"></div>
    </div>
  );
};

export const createBadgeNotification = (badgeName: string, badgeIcon: string, rarity: string): AchievementNotificationData => ({
  type: 'badge',
  title: `${badgeIcon} ${badgeName} Unlocked!`,
  description: `You've earned a ${rarity} badge!`,
  icon: badgeIcon
});

export const createLevelUpNotification = (levelNumber: number, levelTitle: string, levelIcon: string): AchievementNotificationData => ({
  type: 'level-up',
  title: `${levelIcon} Level ${levelNumber} - ${levelTitle}!`,
  description: 'You\'ve reached a new level in your SAT prep journey!',
  icon: levelIcon,
  points: 0
});

export const createStreakNotification = (streakDays: number): AchievementNotificationData => ({
  type: 'streak',
  title: `🔥 ${streakDays}-Day Streak!`,
  description: 'Keep up your consistent study habit!',
  icon: '🔥',
  points: 10
});

export const createRankNotification = (newRank: number): AchievementNotificationData => ({
  type: 'rank',
  title: `🏆 New Rank: #${newRank}`,
  description: 'You\'ve climbed the leaderboard!',
  icon: '🏆'
});
