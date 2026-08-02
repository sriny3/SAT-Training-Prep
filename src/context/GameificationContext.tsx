import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';
import { Badge, Level } from '../types';
import { allBadges } from '../data/gamification/badges';
import { getLevelByPoints, getProgressToNextLevel } from '../data/gamification/levels';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabaseClient';

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
  isLoading: boolean;
  addPoints: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  getUnlockedBadges: () => Badge[];
  updateStreak: (date: string) => void;
  getLevelProgress: () => { current: Level; next: Level | null; progress: number };
  getPointsUntilNextLevel: () => number;
}

// Every account — including brand new signups and the admin account —
// starts completely fresh with zero progress.
const freshGameification: UserGameification = {
  points: 0,
  currentLevel: getLevelByPoints(0),
  unlockedBadges: [],
  currentStreak: 0,
  bestStreak: 0,
  lastStudyDate: null,
  totalStudyDays: 0
};

interface ProgressRow {
  user_id: string;
  points: number;
  current_level: number;
  unlocked_badges: string[] | null;
  current_streak: number;
  best_streak: number;
  last_study_date: string | null;
  total_study_days: number;
}

const mapRowToGamification = (row: ProgressRow): UserGameification => ({
  points: row.points,
  currentLevel: getLevelByPoints(row.points),
  unlockedBadges: row.unlocked_badges ?? [],
  currentStreak: row.current_streak,
  bestStreak: row.best_streak,
  lastStudyDate: row.last_study_date,
  totalStudyDays: row.total_study_days,
});

// Reads this user's progress row from Supabase (created automatically by the
// on_auth_user_created trigger — see supabase/schema.sql). Falls back to a
// zeroed-out row if it's somehow missing yet.
const fetchProgress = async (userId: string): Promise<UserGameification> => {
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error || !data) {
    return freshGameification;
  }
  return mapRowToGamification(data as ProgressRow);
};

const persistProgress = async (userId: string, g: UserGameification) => {
  const { error } = await supabase
    .from('progress')
    .update({
      points: g.points,
      current_level: g.currentLevel.level,
      unlocked_badges: g.unlockedBadges,
      current_streak: g.currentStreak,
      best_streak: g.bestStreak,
      last_study_date: g.lastStudyDate,
      total_study_days: g.totalStudyDays,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId);

  if (error) {
    console.error('Failed to save progress to Supabase:', error);
  }
};

export const GameificationContext = createContext<GameificationContextType | undefined>(undefined);

interface GameificationProviderProps {
  children: React.ReactNode;
}

export const GameificationProvider: React.FC<GameificationProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [gamification, setGamification] = useState<UserGameification>(freshGameification);
  const [isLoading, setIsLoading] = useState(true);
  // Tracks whose progress is currently loaded so mutators never write a
  // stale user's changes to the wrong (or no) account.
  const userIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    userIdRef.current = user?.id ?? null;

    if (!user) {
      setGamification(freshGameification);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    fetchProgress(user.id).then((g) => {
      if (!cancelled) {
        setGamification(g);
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [user]);

  const persist = useCallback((next: UserGameification) => {
    const userId = userIdRef.current;
    if (!userId) return;
    persistProgress(userId, next);
  }, []);

  const addPoints = useCallback(
    (amount: number) => {
      setGamification((prev) => {
        const newPoints = prev.points + amount;
        const next: UserGameification = {
          ...prev,
          points: newPoints,
          currentLevel: getLevelByPoints(newPoints),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const unlockBadge = useCallback(
    (badgeId: string) => {
      setGamification((prev) => {
        if (prev.unlockedBadges.includes(badgeId)) return prev;
        const next: UserGameification = {
          ...prev,
          unlockedBadges: [...prev.unlockedBadges, badgeId],
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const getUnlockedBadges = useCallback(() => {
    return gamification.unlockedBadges
      .map((id) => allBadges.find((b) => b.id === id))
      .filter((badge): badge is Badge => !!badge);
  }, [gamification.unlockedBadges]);

  const updateStreak = useCallback(
    (date: string) => {
      setGamification((prev) => {
        const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate) : null;
        const today = new Date(date);

        let next: UserGameification;
        if (!lastDate) {
          next = { ...prev, currentStreak: 1, totalStudyDays: 1, lastStudyDate: date };
        } else {
          const daysDiff = Math.floor(
            (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
          );

          if (daysDiff === 1) {
            const newStreak = prev.currentStreak + 1;
            next = {
              ...prev,
              currentStreak: newStreak,
              bestStreak: Math.max(newStreak, prev.bestStreak),
              totalStudyDays: prev.totalStudyDays + 1,
              lastStudyDate: date,
            };
          } else if (daysDiff === 0) {
            next = prev;
          } else {
            next = {
              ...prev,
              currentStreak: 1,
              totalStudyDays: prev.totalStudyDays + 1,
              lastStudyDate: date,
            };
          }
        }

        if (next !== prev) persist(next);
        return next;
      });
    },
    [persist]
  );

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
    isLoading,
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
