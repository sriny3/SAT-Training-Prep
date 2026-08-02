import React, { createContext, useState, useCallback, useEffect } from 'react';
import { Badge, Level } from '../types';
import { allBadges } from '../data/gamification/badges';
import { getLevelByPoints, getProgressToNextLevel } from '../data/gamification/levels';

export interface UserGameification {
  points: number;
  currentLevel: Level;
  unlockedBadges: string[];
  currentStreak: number;
  bestStreak: number;
  lastStudyDate: string | null;
  totalStudyDays: number;
}

interface GameificationContextType {
  gamification: UserGameification;
  addPoints: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  getUnlockedBadges: () => Badge[];
  updateStreak: (date: string) => void;
  getLevelProgress: () => { current: Level; next: Level | null; progress: number };
  getPointsUntilNextLevel: () => number;
}

const defaultGameification: UserGameification = {
  points: 250,
  currentLevel: { level: 1, requiredPoints: 0, title: 'Novice', description: 'Just starting your SAT prep journey', icon: '🌱', rewards: [] },
  unlockedBadges: ['badge-011-fast-start'],
  currentStreak: 3,
  bestStreak: 5,
  lastStudyDate: new Date().toISOString().split('T')[0],
  totalStudyDays: 8
};

export const GameificationContext = createContext<GameificationContextType | undefined>(undefined);

interface GameificationProviderProps {
  children: React.ReactNode;
}

export const GameificationProvider: React.FC<GameificationProviderProps> = ({ children }) => {
  const [gamification, setGameification] = useState<UserGameification>(() => {
    const stored = localStorage.getItem('userGameification');
    return stored ? JSON.parse(stored) : defaultGameification;
  });

  useEffect(() => {
    localStorage.setItem('userGameification', JSON.stringify(gamification));
  }, [gamification]);

  const addPoints = useCallback((amount: number) => {
    setGameification(prev => {
      const newPoints = prev.points + amount;
      const newLevel = getLevelByPoints(newPoints);
      return {
        ...prev,
        points: newPoints,
        currentLevel: newLevel
      };
    });
  }, []);

  const unlockBadge = useCallback((badgeId: string) => {
    setGameification(prev => {
      if (!prev.unlockedBadges.includes(badgeId)) {
        return {
          ...prev,
          unlockedBadges: [...prev.unlockedBadges, badgeId]
        };
      }
      return prev;
    });
  }, []);

  const getUnlockedBadges = useCallback(() => {
    return gamification.unlockedBadges
      .map(id => allBadges.find(b => b.id === id))
      .filter((badge): badge is Badge => !!badge);
  }, [gamification.unlockedBadges]);

  const updateStreak = useCallback((date: string) => {
    setGameification(prev => {
      const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate) : null;
      const today = new Date(date);

      if (!lastDate) {
        return {
          ...prev,
          currentStreak: 1,
          totalStudyDays: 1,
          lastStudyDate: date
        };
      }

      const daysDiff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      if (daysDiff === 1) {
        // Consecutive day - continue streak
        const newStreak = prev.currentStreak + 1;
        return {
          ...prev,
          currentStreak: newStreak,
          bestStreak: Math.max(newStreak, prev.bestStreak),
          totalStudyDays: prev.totalStudyDays + 1,
          lastStudyDate: date
        };
      } else if (daysDiff === 0) {
        // Same day - no change
        return prev;
      } else {
        // Gap in streak - reset
        return {
          ...prev,
          currentStreak: 1,
          totalStudyDays: prev.totalStudyDays + 1,
          lastStudyDate: date
        };
      }
    });
  }, []);

  const getLevelProgress = useCallback(() => {
    return getProgressToNextLevel(gamification.points);
  }, [gamification.points]);

  const getPointsUntilNextLevel = useCallback(() => {
    const { next } = getProgressToNextLevel(gamification.points);
    if (!next) return 0;
    return Math.max(0, next.requiredPoints - gamification.points);
  }, [gamification.points]);

  const value: GameificationContextType = {
    gamification,
    addPoints,
    unlockBadge,
    getUnlockedBadges,
    updateStreak,
    getLevelProgress,
    getPointsUntilNextLevel
  };

  return (
    <GameificationContext.Provider value={value}>
      {children}
    </GameificationContext.Provider>
  );
};
