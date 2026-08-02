import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useGameification } from '../hooks/useGameification';
import { BadgeDisplay } from '../components/gamification/BadgeDisplay';
import { TrendingUp, Zap, Trophy, BookOpen } from 'lucide-react';
import './pages.css';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { gamification, getUnlockedBadges } = useGameification();

  const unlockedBadges = getUnlockedBadges().slice(0, 4);

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Welcome back, {user?.firstName}! 👋</h1>
        <p>Your SAT/PSAT prep journey continues...</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon success">
            <Zap size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Points</p>
            <p className="stat-value">{gamification.points.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon primary">
            <Trophy size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Current Level</p>
            <p className="stat-value">{gamification.currentLevel.level}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Current Streak</p>
            <p className="stat-value">{gamification.currentStreak} days</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon info">
            <BookOpen size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Badges Earned</p>
            <p className="stat-value">{gamification.unlockedBadges.length}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>What would you like to do?</h2>
        <div className="actions-grid">
          <a href="/lessons" className="action-card">
            <div className="action-icon">📖</div>
            <h3>Learn</h3>
            <p>View lessons on all SAT/PSAT topics</p>
          </a>

          <a href="/quizzes" className="action-card">
            <div className="action-icon">❓</div>
            <h3>Quiz</h3>
            <p>Test your knowledge with interactive quizzes</p>
          </a>

          <a href="/practice-tests" className="action-card">
            <div className="action-icon">📝</div>
            <h3>Practice Test</h3>
            <p>Take full-length practice tests</p>
          </a>

          <a href="/progress" className="action-card">
            <div className="action-icon">📊</div>
            <h3>Progress</h3>
            <p>View detailed analytics and improvements</p>
          </a>
        </div>
      </section>

      {/* Recent Badges */}
      <section className="recent-badges">
        <h2>Recent Badges</h2>
        {unlockedBadges.length > 0 ? (
          <div className="badges-showcase">
            {unlockedBadges.map(badge => (
              <BadgeDisplay key={badge.id} badge={badge} unlocked={true} size="medium" />
            ))}
          </div>
        ) : (
          <p className="empty-state-text">Complete lessons and quizzes to earn your first badge!</p>
        )}
        {gamification.unlockedBadges.length > 4 && (
          <a href="/profile" className="view-all-link">
            View all {gamification.unlockedBadges.length} badges →
          </a>
        )}
      </section>

      {/* Coming Soon Notice */}
      <section className="coming-soon">
        <div className="coming-soon-content">
          <h3>Phase 1 Complete! ✅</h3>
          <p>
            You've successfully logged in. In Phase 2, we'll be adding:
          </p>
          <ul>
            <li>✓ Complete lesson system with 45 topics</li>
            <li>✓ Interactive quizzes with 18 tests</li>
            <li>✓ Full-length practice tests</li>
            <li>✓ Detailed progress analytics</li>
            <li>✓ Gamification system (points, badges, levels)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
