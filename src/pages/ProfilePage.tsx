import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useGameification } from '../hooks/useGameification';
import { BadgeDisplay } from '../components/gamification/BadgeDisplay';
import { LevelProgress } from '../components/gamification/LevelProgress';
import { Award, TrendingUp, Calendar, Mail, GraduationCap } from 'lucide-react';
import './pages.css';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { gamification, getLevelProgress, getPointsUntilNextLevel, getUnlockedBadges } = useGameification();

  if (!user) return null;

  const levelProgress = getLevelProgress();
  const pointsUntilNext = getPointsUntilNextLevel();
  const unlockedBadges = getUnlockedBadges();

  const getGradeLevelName = (grade: string) => {
    const grades: Record<string, string> = {
      '7': '7th Grade',
      '8': '8th Grade',
      '9': '9th Grade',
      '10': '10th Grade',
      '11': '11th Grade'
    };
    return grades[grade] || 'Unknown';
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>👤 My Profile</h1>
        <p>View your account information and progress</p>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-avatar">
          <span style={{ fontSize: '4rem' }}>{user.avatar}</span>
        </div>
        <div className="profile-info">
          <h2>{user.firstName} {user.lastName}</h2>
          <p className="username">@{user.username}</p>
          <div className="profile-details">
            <div className="detail">
              <Mail size={18} />
              <span>{user.email}</span>
            </div>
            <div className="detail">
              <GraduationCap size={18} />
              <span>{getGradeLevelName(user.gradeLevel)}</span>
            </div>
            <div className="detail">
              <Calendar size={18} />
              <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <LevelProgress
        current={levelProgress.current}
        next={levelProgress.next}
        progress={levelProgress.progress}
        points={gamification.points}
        pointsUntilNext={pointsUntilNext}
      />

      {/* Quick Stats */}
      <div className="stats-overview">
        <div className="stat-card-large">
          <div className="stat-icon">🔥</div>
          <div className="stat-data">
            <p className="stat-label">Current Streak</p>
            <p className="stat-value">{gamification.currentStreak} days</p>
          </div>
        </div>
        <div className="stat-card-large">
          <div className="stat-icon">📈</div>
          <div className="stat-data">
            <p className="stat-label">Best Streak</p>
            <p className="stat-value">{gamification.bestStreak} days</p>
          </div>
        </div>
        <div className="stat-card-large">
          <div className="stat-icon">🎖️</div>
          <div className="stat-data">
            <p className="stat-label">Badges Earned</p>
            <p className="stat-value">{unlockedBadges.length}</p>
          </div>
        </div>
        <div className="stat-card-large">
          <div className="stat-icon">📅</div>
          <div className="stat-data">
            <p className="stat-label">Study Days</p>
            <p className="stat-value">{gamification.totalStudyDays}</p>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <section className="profile-section">
        <h3>🎖️ Unlocked Badges ({unlockedBadges.length})</h3>
        <div className="badges-grid">
          {unlockedBadges.length > 0 ? (
            unlockedBadges.map(badge => (
              <BadgeDisplay key={badge.id} badge={badge} unlocked={true} size="medium" />
            ))
          ) : (
            <p className="empty-message">Start completing lessons and quizzes to unlock badges!</p>
          )}
        </div>
      </section>

      {/* Sections */}
      <div className="profile-sections">
        <section className="profile-section">
          <h3>🎯 Achievement Summary</h3>
          <div className="achievement-list">
            <div className="achievement-item">
              <Award size={20} />
              <div>
                <p className="achievement-name">Level {user.currentLevel} Reached</p>
                <p className="achievement-desc">Progress through the SAT prep levels</p>
              </div>
            </div>
            <div className="achievement-item">
              <TrendingUp size={20} />
              <div>
                <p className="achievement-name">{user.currentStreak} Day Streak!</p>
                <p className="achievement-desc">Keep studying to extend your streak</p>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <h3>📊 Learning Goals</h3>
          <div className="goals-list">
            <div className="goal">
              <div className="goal-progress">
                <p className="goal-name">Complete All Reading Lessons</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%' }}></div>
                </div>
                <p className="progress-text">9 of 15 complete</p>
              </div>
            </div>
            <div className="goal">
              <div className="goal-progress">
                <p className="goal-name">Master Math Topics</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '45%' }}></div>
                </div>
                <p className="progress-text">9 of 20 complete</p>
              </div>
            </div>
            <div className="goal">
              <div className="goal-progress">
                <p className="goal-name">Essay Writing Practice</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '30%' }}></div>
                </div>
                <p className="progress-text">3 of 10 complete</p>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <h3>⚙️ Account Settings</h3>
          <button className="btn btn-secondary" style={{ marginRight: '10px' }}>
            Edit Profile
          </button>
          <button className="btn btn-secondary" style={{ marginRight: '10px' }}>
            Change Password
          </button>
          <button className="btn btn-error">Delete Account</button>
        </section>
      </div>
    </div>
  );
};
