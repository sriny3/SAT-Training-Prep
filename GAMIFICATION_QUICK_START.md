# Gamification Quick Start Guide

Quick reference for integrating gamification into quiz and lesson components.

---

## 1. Award Points on Quiz Completion

```typescript
import { useQuizRewards } from '../hooks/useQuizRewards';

export const QuizComplete: React.FC = () => {
  const { completeQuiz } = useQuizRewards();

  const handleSubmit = () => {
    // completeQuiz(score, maxScore, difficulty)
    completeQuiz(8, 10, 'medium');
    // Automatically:
    // ✓ Awards points (20-30 depending on score)
    // ✓ Shows notification: "+25 points"
    // ✓ Checks for perfect score badge
    // ✓ Checks for level up
  };

  return <button onClick={handleSubmit}>Submit Quiz</button>;
};
```

---

## 2. Award Points on Lesson Completion

```typescript
import { useLessonRewards } from '../hooks/useLessonRewards';

export const LessonComplete: React.FC = () => {
  const { completeLesson } = useLessonRewards();

  const handleFinish = () => {
    // completeLesson(durationInMinutes, subject)
    completeLesson(45, 'reading');
    // Automatically:
    // ✓ Awards points (5+, based on duration)
    // ✓ Shows notification
    // ✓ Checks lesson milestones (10, 50 lessons)
    // ✓ Checks for level up
  };

  return <button onClick={handleFinish}>Finish Lesson</button>;
};
```

---

## 3. Display User Level & Progress

```typescript
import { useGameification } from '../hooks/useGameification';
import { LevelProgress } from '../components/gamification/LevelProgress';

export const MyLevel: React.FC = () => {
  const { gamification, getLevelProgress, getPointsUntilNextLevel } = useGameification();
  const levelProgress = getLevelProgress();
  const pointsUntilNext = getPointsUntilNextLevel();

  return (
    <LevelProgress
      current={levelProgress.current}
      next={levelProgress.next}
      progress={levelProgress.progress}
      points={gamification.points}
      pointsUntilNext={pointsUntilNext}
    />
  );
};
```

---

## 4. Display Badges

```typescript
import { useGameification } from '../hooks/useGameification';
import { BadgeDisplay } from '../components/gamification/BadgeDisplay';

export const MyBadges: React.FC = () => {
  const { getUnlockedBadges } = useGameification();
  const badges = getUnlockedBadges();

  return (
    <div className="badges-grid">
      {badges.map(badge => (
        <BadgeDisplay key={badge.id} badge={badge} size="medium" />
      ))}
    </div>
  );
};
```

---

## 5. Access Gamification State

```typescript
import { useGameification } from '../hooks/useGameification';

export const MyStats: React.FC = () => {
  const { gamification } = useGameification();

  return (
    <>
      <p>Points: {gamification.points}</p>
      <p>Level: {gamification.currentLevel.level}</p>
      <p>Streak: {gamification.currentStreak} days</p>
      <p>Badges: {gamification.unlockedBadges.length}</p>
    </>
  );
};
```

---

## 6. Show Leaderboard

```typescript
import { LeaderboardPage } from '../pages/LeaderboardPage';

// Already integrated in App.tsx at /leaderboard route
// Or use directly:
<LeaderboardPage />
```

---

## 7. Check for Specific Badge

```typescript
import { useGameification } from '../hooks/useGameification';
import { allBadges } from '../data/gamification/badges';

export const CheckBadge: React.FC = () => {
  const { gamification } = useGameification();

  const hasPerfectScoreBadge = gamification.unlockedBadges.includes('badge-010-perfect-score');
  const perfectionBadge = allBadges.find(b => b.id === 'badge-010-perfect-score');

  return (
    <div>
      {hasPerfectScoreBadge ? (
        <p>You have {perfectionBadge?.name}! 💯</p>
      ) : (
        <p>Get 100% on any quiz to unlock {perfectionBadge?.name}</p>
      )}
    </div>
  );
};
```

---

## 8. Update Daily Streak

```typescript
import { useEffect } from 'react';
import { useGameification } from '../hooks/useGameification';

export const useInitializeApp = () => {
  const { updateStreak } = useGameification();

  useEffect(() => {
    // Update streak on app initialization
    const today = new Date().toISOString().split('T')[0];
    updateStreak(today);
  }, [updateStreak]);
};

// Use in App.tsx or root component
```

---

## 9. Calculate Points Manually

```typescript
import { GamificationService } from '../services/GamificationService';

// Quiz points
const quizPoints = GamificationService.calculateQuizPoints(9, 10, 'medium');
// Returns: { amount: 23, reason: "Quiz completed - medium difficulty (90%)" }

// Lesson points
const lessonPoints = GamificationService.calculateLessonPoints(45);
// Returns: { amount: 5, reason: "Lesson completed (45 min)" }

// Streak bonus
const streakBonus = GamificationService.calculateStreakBonus(14);
// Returns: { amount: 10, reason: "14-day streak bonus" }
```

---

## 10. Check Badge Unlock

```typescript
import { GamificationService } from '../services/GamificationService';

const canUnlock = GamificationService.checkBadgeUnlock('badge-001-fire', {
  streak: 7,
  bestStreak: 7,
  lessonsCompleted: 10,
  quizzesPassed: 5,
  perfectScores: 1,
  unlockedBadges: []
});

if (canUnlock.earned) {
  console.log(`${canUnlock.badgeName} unlocked!`);
}
```

---

## Gamification Constants

### Difficulty Levels
```typescript
type Difficulty = 'easy' | 'medium' | 'hard';
```

### Achievement Types
```typescript
type AchievementType = 'badge' | 'level-up' | 'streak' | 'rank';
```

### Badge IDs (Full List)
```typescript
// Streak
'badge-001-fire'        // 7 days
'badge-002-unstoppable' // 14 days
'badge-003-legendary'   // 30 days
'badge-004-dedicated'   // 60 days
'badge-005-eternal'     // 100 days

// Mastery
'badge-006-reading-master'  // 90%+ reading
'badge-007-math-wizard'     // 90%+ math
'badge-008-essay-expert'    // 90%+ essay

// Achievement
'badge-009-quick-learner'   // 10 lessons
'badge-010-perfect-score'   // 100% quiz
'badge-011-fast-start'      // 1 test
'badge-012-knowledge-base'  // 50 lessons
'badge-013-test-champion'   // 5 tests

// Special
'badge-014-early-adopter'   // First week
'badge-015-social-butterfly'// Top 100
'badge-016-badge-collector' // 10 badges
```

### Level Info
```typescript
Level 1: Novice (0 points) 🌱
Level 2: Learner (500 points) 📚
Level 3: Scholar (1500 points) 🎓
Level 4: Expert (3000 points) 🔥
Level 5: Master (5000 points) 👑
Level 6: Legend (7500 points) ⭐
Level 7: Champion (10000 points) 🏆
```

---

## Points Breakdown

### Quiz Points
| Difficulty | Base | Perfect | 90%+ | 80%+ | Comments |
|-----------|------|---------|------|------|----------|
| Easy | 10 | 15 | 13 | 12 | Beginner content |
| Medium | 20 | 30 | 26 | 24 | Standard quizzes |
| Hard | 30 | 45 | 39 | 36 | Advanced topics |

### Lesson Points
- Minimum: 5 points
- Formula: max(5, duration / 10)
- Examples:
  - 30 min = 5 points
  - 50 min = 5 points
  - 100 min = 10 points
  - 150 min = 15 points

### Streak Bonuses
- 3-6 days: 0
- 7-13 days: 5
- 14-29 days: 10
- 30-59 days: 20
- 60-99 days: 30
- 100+ days: 50

---

## Notification Examples

### Show Toast
```typescript
import { useNotification } from '../hooks/useNotification';

const { addNotification } = useNotification();

addNotification({
  type: 'success',
  title: 'Achievement Unlocked!',
  message: 'You earned the Perfect Score badge',
  duration: 3000
});
```

### Show Achievement Popup
```typescript
import { AchievementNotification, createBadgeNotification } from '../components/gamification/AchievementNotification';

const achievement = createBadgeNotification('Perfect Score', '💯', 'rare');

<AchievementNotification achievement={achievement} duration={4000} />
```

---

## Common Patterns

### Pattern: Complete Quiz, Award Points, Check Level
```typescript
const { completeQuiz } = useQuizRewards();
const result = completeQuiz(score, maxScore, difficulty);
// Points awarded ✓
// Badge checked ✓
// Level-up checked ✓
// Notifications shown ✓
```

### Pattern: Show Current Progress
```typescript
const { gamification, getLevelProgress } = useGameification();
const { current, next, progress } = getLevelProgress();

<>
  <h3>Level {current.level}: {current.title}</h3>
  <ProgressBar value={progress} />
  <p>{gamification.points} / {next.requiredPoints} points</p>
</>
```

### Pattern: List Achievements
```typescript
const { getUnlockedBadges } = useGameification();
const badges = getUnlockedBadges();

badges.forEach(badge => {
  console.log(`${badge.icon} ${badge.name} - ${badge.rarity}`);
});
```

---

## Error Handling

```typescript
try {
  const { gamification } = useGameification();
} catch (error) {
  console.error('Error: useGameification must be inside GameificationProvider');
}
```

Make sure `App.tsx` wraps the router with `<GameificationProvider>`:

```typescript
<GameificationProvider>
  <Router>
    <AppContent />
  </Router>
</GameificationProvider>
```

---

## Testing Tips

### Test Points Award
1. Open DevTools Console
2. Find quiz completion button
3. Click and check console: `Points: 250 → 275`
4. Refresh page - points persist (localStorage)

### Test Badge Display
1. Go to Profile
2. Should show "Fast Start" badge
3. Click to see full description

### Test Level Progress
1. Go to Profile
2. See "Level 2: Learner" with progress to Level 3
3. Needs 1,250 more points

### Test Leaderboard
1. Go to Leaderboard (/leaderboard)
2. See user "You" at rank #5
3. Try time filters (UI ready, data is mock)

---

## File References

### Main Files
- Context: `src/context/GameificationContext.tsx`
- Hooks: `src/hooks/useGameification.ts`, `useQuizRewards.ts`, `useLessonRewards.ts`
- Service: `src/services/GamificationService.ts`
- Components: `src/components/gamification/`
- Data: `src/data/gamification/badges.ts`, `levels.ts`

### Usage Examples
- Profile: `src/pages/ProfilePage.tsx`
- Dashboard: `src/pages/DashboardPage.tsx`
- Leaderboard: `src/pages/LeaderboardPage.tsx`

---

## Support Resources

- Full Implementation Guide: `PHASE3_IMPLEMENTATION_GUIDE.md`
- Progress Report: `PHASE3_PROGRESS.md`
- Complete Summary: `PHASE3_SUMMARY.md`

---

**Last Updated:** May 2, 2026
**Version:** 1.0
**Status:** Ready for Integration
