# Phase 3: Gamification Implementation Guide

## Overview

Phase 3 builds a complete gamification system for the SAT prep platform. The foundation is now in place with context, components, and integration hooks ready to connect with quiz and lesson systems.

---

## Architecture

### Core Components

**1. GameificationContext**
- Global state management for points, badges, levels, streaks
- Persists to localStorage
- Accessible via `useGameification()` hook throughout the app

**2. Data Layer**
- `badges.ts` - 16 badge definitions with unlock criteria
- `levels.ts` - 7-level progression system with rewards
- `GamificationService` - Utility functions for calculations

**3. UI Components**
- `LeaderboardPage` - Global rankings display
- `BadgeDisplay` - Reusable badge card component
- `LevelProgress` - Level progression visualization
- `AchievementNotification` - Achievement popup notifications

**4. Integration Hooks**
- `useGameification()` - Access gamification state
- `useQuizRewards()` - Handle quiz completion rewards
- `useLessonRewards()` - Handle lesson completion rewards
- `useNotification()` - Show toast notifications

---

## Integration Points

### A. Quiz Completion

When a user completes a quiz, call the reward hook:

```typescript
import { useQuizRewards } from '../hooks/useQuizRewards';

export const QuizContainer: React.FC = () => {
  const { completeQuiz } = useQuizRewards();

  const handleQuizSubmit = (score: number, totalQuestions: number, difficulty: 'easy' | 'medium' | 'hard') => {
    // Calculate quiz score
    const maxScore = totalQuestions;

    // Award points and check for unlocks
    const rewards = completeQuiz(score, maxScore, difficulty);

    // Show results with rewards info
    showResults(rewards);
  };

  return (
    // Quiz UI...
  );
};
```

**What happens:**
1. Points awarded based on score and difficulty
2. Perfect score badge unlocked (if applicable)
3. Level progression checked
4. Notifications shown for achievements
5. Toast notifications for points earned

### B. Lesson Completion

When a user completes a lesson:

```typescript
import { useLessonRewards } from '../hooks/useLessonRewards';

export const LessonDetailPage: React.FC<{ lessonId: string }> = () => {
  const { completeLesson } = useLessonRewards();

  const handleLessonComplete = () => {
    const lesson = getLesson(lessonId);

    // Award points based on lesson duration
    const rewards = completeLesson(lesson.duration, lesson.subject);

    // Show completion modal with rewards
    showCompletionModal(rewards);
  };

  return (
    // Lesson UI...
  );
};
```

**What happens:**
1. Points awarded based on lesson duration
2. Lesson milestone badges checked (10, 50 lessons)
3. Level progression checked
4. Notifications shown for achievements

### C. Daily Streaks

Integrate streak tracking on app initialization or daily check-in:

```typescript
import { useGameification } from '../hooks/useGameification';

export const useStreakTracker = () => {
  const { updateStreak } = useGameification();

  const checkDailyStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    updateStreak(today);
  };

  useEffect(() => {
    checkDailyStreak(); // Run on app init
  }, []);
};
```

**Streak logic:**
- Consecutive day: +1 streak
- Same day: no change
- Gap in days: reset streak to 1

### D. Badge Unlock System

The badge unlock system is automatic via `useQuizRewards()` and `useLessonRewards()`. To manually check badges:

```typescript
import { useGameification } from '../hooks/useGameification';
import { GamificationService } from '../services/GamificationService';

export const useBadgeChecker = () => {
  const { unlockBadge, gamification } = useGameification();

  const checkAllBadges = () => {
    const stats = {
      streak: gamification.currentStreak,
      bestStreak: gamification.bestStreak,
      lessonsCompleted: 10, // Get from user data
      quizzesPassed: 5,     // Get from user data
      perfectScores: 1,     // Get from user data
      unlockedBadges: gamification.unlockedBadges
    };

    const results = GamificationService.getAllUnlockChecks(stats);

    results.forEach(result => {
      if (result.earned && !gamification.unlockedBadges.includes(result.badgeId)) {
        unlockBadge(result.badgeId);
        // Show notification
      }
    });
  };

  return { checkAllBadges };
};
```

---

## Points System

### Points Calculation

**Quiz Completion:**
- Easy: 10 base points + 0-5 bonus (perfect=5, 90%+=3, 80%+=2)
- Medium: 20 base points + 0-10 bonus
- Hard: 30 base points + 0-15 bonus

**Lesson Completion:**
- 5 points minimum
- 1 point per 10 minutes of lesson duration

**Streak Bonuses:**
- 3-6 days: 0 bonus
- 7-13 days: 5 points
- 14-29 days: 10 points
- 30-59 days: 20 points
- 60-99 days: 30 points
- 100+ days: 50 points

### Level Progression

Points required for each level:
- Level 1 (Novice): 0 points
- Level 2 (Learner): 500 points
- Level 3 (Scholar): 1500 points
- Level 4 (Expert): 3000 points
- Level 5 (Master): 5000 points
- Level 6 (Legend): 7500 points
- Level 7 (Champion): 10000 points

---

## Badge System

### Badge Categories

**Streak Badges (5)**
- On Fire: 7-day streak
- Unstoppable: 14-day streak
- Legendary: 30-day streak
- Dedicated: 60-day streak
- Eternal Flame: 100-day streak

**Subject Mastery (3)**
- Reading Master: 90%+ on all Reading quizzes
- Math Wizard: 90%+ on all Math quizzes
- Essay Expert: 90%+ on all Essay quizzes

**Achievement Badges (5)**
- Quick Learner: 10 lessons completed
- Perfect Score: 100% on any quiz
- Fast Start: 1 practice test completed
- Knowledge Base: 50 lessons completed
- Test Champion: 5 practice tests completed

**Special Badges (3)**
- Early Adopter: Sign up in first week
- Social Butterfly: Top 100 leaderboard
- Badge Collector: 10 badges unlocked

### Unlock Triggers

Badges are checked automatically:
1. After quiz completion via `useQuizRewards()`
2. After lesson completion via `useLessonRewards()`
3. On daily streak update
4. Manually via `GamificationService.checkBadgeUnlock()`

---

## Notification System

### Toast Notifications

Use `useNotification()` for temporary notifications:

```typescript
const { addNotification } = useNotification();

addNotification({
  type: 'success',      // 'success', 'error', 'warning', 'info'
  title: 'Badge Earned',
  message: 'You earned the Perfect Score badge!',
  duration: 3000        // Auto-dismiss after 3 seconds
});
```

### Achievement Popups

For special achievements (badges, level-ups), use `AchievementNotification`:

```typescript
import { AchievementNotification, createBadgeNotification } from '../components/gamification/AchievementNotification';

const badgeNotification = createBadgeNotification('Perfect Score', '💯', 'rare');

<AchievementNotification
  achievement={badgeNotification}
  duration={4000}
  onDismiss={() => setShowNotification(false)}
/>
```

### Notification Helpers

Pre-built notification creators:
- `createBadgeNotification(name, icon, rarity)`
- `createLevelUpNotification(level, title, icon)`
- `createStreakNotification(days)`
- `createRankNotification(rank)`

---

## Leaderboard Integration

### Display Current User

The leaderboard currently shows mock data. To integrate real data:

```typescript
export interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  level: number;
  streak: number;
  badges: number;
}

// Fetch from database or compute from all users
const fetchLeaderboard = async (timeFilter: 'all-time' | 'monthly' | 'weekly') => {
  // Query backend for rankings
  const rankings = await api.getLeaderboard(timeFilter);
  return rankings;
};
```

### Time-Based Ranking

The UI supports three time filters:
- **All-Time**: Career total points
- **Monthly**: Points earned in current month
- **Weekly**: Points earned in current week

Backend would need to track timestamps on point awards.

---

## State Management Details

### GameificationContext State

```typescript
interface UserGameification {
  points: number;                    // Total lifetime points
  currentLevel: Level;               // Current level object
  unlockedBadges: string[];          // Array of badge IDs
  currentStreak: number;             // Days of consecutive study
  bestStreak: number;                // Highest streak achieved
  lastStudyDate: string | null;      // ISO date string of last study
  totalStudyDays: number;            // Total study days (cumulative)
}
```

### Context Functions

```typescript
// Add points to user
addPoints(amount: number) => void

// Unlock a badge
unlockBadge(badgeId: string) => void

// Get array of unlocked Badge objects
getUnlockedBadges() => Badge[]

// Update daily streak
updateStreak(date: string) => void

// Get progress to next level
getLevelProgress() => { current: Level; next: Level | null; progress: number }

// Get points needed to advance
getPointsUntilNextLevel() => number
```

---

## LocalStorage Schema

Gamification state stored under `userGameification`:

```json
{
  "points": 2450,
  "currentLevel": {
    "level": 2,
    "requiredPoints": 500,
    "title": "Learner",
    "description": "Making steady progress",
    "icon": "📚",
    "rewards": [
      { "type": "badge", "value": "milestone-badge", "description": "Unlock milestone badge" },
      { "type": "points", "value": 100, "description": "Bonus 100 points" }
    ]
  },
  "unlockedBadges": ["badge-011-fast-start"],
  "currentStreak": 3,
  "bestStreak": 5,
  "lastStudyDate": "2026-05-02",
  "totalStudyDays": 8
}
```

---

## Testing Strategy

### Unit Tests (GamificationService)

```typescript
describe('GamificationService', () => {
  describe('calculateQuizPoints', () => {
    it('awards 10 base + 5 bonus for perfect easy quiz', () => {
      const result = GamificationService.calculateQuizPoints(10, 10, 'easy');
      expect(result.amount).toBe(15);
    });

    it('awards 30 base + 15 bonus for perfect hard quiz', () => {
      const result = GamificationService.calculateQuizPoints(10, 10, 'hard');
      expect(result.amount).toBe(45);
    });
  });

  describe('checkBadgeUnlock', () => {
    it('unlocks perfect score badge on 100% quiz', () => {
      const result = GamificationService.checkBadgeUnlock('badge-010-perfect-score', {
        perfectScores: 1,
        // ... other stats
      });
      expect(result.earned).toBe(true);
    });
  });
});
```

### Integration Tests

```typescript
describe('Quiz Completion Flow', () => {
  it('completes quiz and awards points with notification', () => {
    const { completeQuiz } = useQuizRewards();
    const { addNotification } = useNotification();

    completeQuiz(9, 10, 'medium');

    expect(gamification.points).toBeGreaterThan(0);
    expect(addNotification).toHaveBeenCalled();
  });
});
```

---

## Performance Considerations

1. **LocalStorage Persistence**
   - State saved on every change via useEffect
   - Consider debouncing for batch updates
   - ~2KB typical payload size

2. **Level Calculation**
   - O(n) lookup where n=7 levels (negligible)
   - Cache level progress in component state if used frequently

3. **Badge Checking**
   - Batch check via `getAllUnlockChecks()` is O(16) (fixed)
   - Call sparingly, not on every component render

4. **Leaderboard Rendering**
   - Mock data: instant render
   - With backend: implement pagination/virtual scrolling for 1000+ users

---

## Future Enhancements

1. **Social Features**
   - Friend leaderboards
   - Challenge other users
   - Group achievements

2. **Advanced Streaks**
   - Weekly streak trophies
   - Streak freezes (premium feature)
   - Streak milestones with special rewards

3. **Seasonal Events**
   - Limited-time badges
   - Monthly challenges
   - Seasonal leaderboards

4. **Analytics Integration**
   - Points earned per subject
   - Subject-specific badges
   - Performance trends vs. points

5. **Customization**
   - Custom avatar rewards
   - Title customization
   - Badge display options

---

## Common Implementation Patterns

### Pattern 1: Reward on Quiz Complete
```typescript
const handleSubmitQuiz = () => {
  const { completeQuiz } = useQuizRewards();
  completeQuiz(userScore, maxScore, difficulty);
  // Notifications + points already handled
};
```

### Pattern 2: Check for Specific Badge
```typescript
const { unlockBadge, gamification } = useGameification();

if (!gamification.unlockedBadges.includes('badge-001')) {
  unlockBadge('badge-001');
}
```

### Pattern 3: Display User Level
```typescript
const { gamification, getLevelProgress } = useGameification();

<LevelProgress
  current={gamification.currentLevel}
  next={getLevelProgress().next}
  progress={getLevelProgress().progress}
  points={gamification.points}
  pointsUntilNext={getPointsUntilNextLevel()}
/>
```

---

## Debugging

### Check Gamification State
```typescript
const { gamification } = useGameification();
console.log('Current gamification state:', gamification);
```

### Check Badge Unlock Criteria
```typescript
const badge = allBadges.find(b => b.id === 'badge-001');
console.log('Badge requirement:', badge.requirement);

const canUnlock = GamificationService.checkBadgeUnlock('badge-001', {
  streak: 7,
  unlockedBadges: [],
  // ... other stats
});
console.log('Can unlock:', canUnlock.earned);
```

### Verify Points Calculation
```typescript
const pointsReward = GamificationService.calculateQuizPoints(score, maxScore, difficulty);
console.log('Points awarded:', pointsReward);
```

---

## File Structure

```
src/
├── context/
│   └── GameificationContext.tsx
├── hooks/
│   ├── useGameification.ts
│   ├── useQuizRewards.ts
│   └── useLessonRewards.ts
├── services/
│   └── GamificationService.ts
├── components/gamification/
│   ├── LeaderboardPage.tsx
│   ├── BadgeDisplay.tsx
│   ├── LevelProgress.tsx
│   ├── AchievementNotification.tsx
│   ├── badge-display.css
│   ├── level-progress.css
│   └── achievement-notification.css
├── data/gamification/
│   ├── badges.ts
│   └── levels.ts
└── pages/
    ├── LeaderboardPage.tsx
    ├── ProfilePage.tsx
    └── DashboardPage.tsx
```

---

**Last Updated:** May 2, 2026
**Status:** Implementation guide complete - Ready for integration
