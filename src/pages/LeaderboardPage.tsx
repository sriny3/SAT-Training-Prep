import React, { useState } from 'react';
import { Trophy, Medal, Zap } from 'lucide-react';
import '../pages/pages.css';

interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  level: number;
  streak: number;
  badges: number;
}

// Mock leaderboard data
const mockLeaderboardData: LeaderboardUser[] = [
  { rank: 1, name: 'Sarah Chen', points: 8750, level: 6, streak: 45, badges: 12 },
  { rank: 2, name: 'Marcus Johnson', points: 7200, level: 5, streak: 32, badges: 10 },
  { rank: 3, name: 'Alex Rodriguez', points: 6500, level: 5, streak: 28, badges: 9 },
  { rank: 4, name: 'Emma Wilson', points: 5800, level: 4, streak: 21, badges: 8 },
  { rank: 5, name: 'You', points: 2450, level: 2, streak: 3, badges: 1 },
  { rank: 6, name: 'James Kim', points: 2100, level: 2, streak: 14, badges: 5 },
  { rank: 7, name: 'Olivia Martinez', points: 1800, level: 2, streak: 10, badges: 4 },
  { rank: 8, name: 'Ethan Brown', points: 1200, level: 1, streak: 5, badges: 2 },
  { rank: 9, name: 'Sophie Taylor', points: 950, level: 1, streak: 3, badges: 1 },
  { rank: 10, name: 'Liam Anderson', points: 750, level: 1, streak: 2, badges: 0 }
];

type TimeFilter = 'all-time' | 'monthly' | 'weekly';

export const LeaderboardPage: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all-time');

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="medal-icon gold" size={24} />;
      case 2:
        return <Medal className="medal-icon silver" size={24} />;
      case 3:
        return <Medal className="medal-icon bronze" size={24} />;
      default:
        return <span className="rank-number">#{rank}</span>;
    }
  };

  const getRankClass = (rank: number) => {
    if (rank === 5) return 'your-rank';
    if (rank <= 3) return 'top-rank';
    return '';
  };

  return (
    <div className="page-container leaderboard-page">
      <div className="leaderboard-header">
        <h1>🏆 Global Leaderboard</h1>
        <p>See how you rank among all SAT prep students</p>
      </div>

      <div className="leaderboard-controls">
        <div className="time-filters">
          <button
            className={`filter-btn ${timeFilter === 'all-time' ? 'active' : ''}`}
            onClick={() => setTimeFilter('all-time')}
          >
            All Time
          </button>
          <button
            className={`filter-btn ${timeFilter === 'monthly' ? 'active' : ''}`}
            onClick={() => setTimeFilter('monthly')}
          >
            This Month
          </button>
          <button
            className={`filter-btn ${timeFilter === 'weekly' ? 'active' : ''}`}
            onClick={() => setTimeFilter('weekly')}
          >
            This Week
          </button>
        </div>
      </div>

      <div className="leaderboard-content">
        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th className="col-rank">Rank</th>
                <th className="col-name">Name</th>
                <th className="col-points">
                  <Zap size={16} /> Points
                </th>
                <th className="col-level">Level</th>
                <th className="col-streak">Streak</th>
                <th className="col-badges">Badges</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaderboardData.map(user => (
                <tr key={user.rank} className={`leaderboard-row ${getRankClass(user.rank)}`}>
                  <td className="col-rank">
                    <div className="rank-cell">
                      {getMedalIcon(user.rank)}
                    </div>
                  </td>
                  <td className="col-name">
                    <div className="name-cell">
                      <span className="user-name">{user.name}</span>
                      {user.rank === 5 && <span className="you-badge">You</span>}
                    </div>
                  </td>
                  <td className="col-points">
                    <span className="points-value">{user.points.toLocaleString()}</span>
                  </td>
                  <td className="col-level">
                    <span className="level-badge">Level {user.level}</span>
                  </td>
                  <td className="col-streak">
                    <span className="streak-indicator">🔥 {user.streak}</span>
                  </td>
                  <td className="col-badges">
                    <span className="badge-count">🎖️ {user.badges}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="leaderboard-stats">
          <div className="stat-card">
            <h3>Your Current Rank</h3>
            <div className="stat-value">#5</div>
            <p className="stat-subtitle">Top 2%</p>
          </div>
          <div className="stat-card">
            <h3>Points to Next Rank</h3>
            <div className="stat-value">+350</div>
            <p className="stat-subtitle">to reach #4</p>
          </div>
          <div className="stat-card">
            <h3>Students Ahead</h3>
            <div className="stat-value">4</div>
            <p className="stat-subtitle">Keep climbing!</p>
          </div>
        </div>
      </div>

      <div className="leaderboard-info">
        <h3>📊 How Leaderboard Ranking Works</h3>
        <ul>
          <li><strong>Points:</strong> Primary ranking metric - earn through quizzes and lessons</li>
          <li><strong>Daily Streaks:</strong> Maintain consistent study habits for extra visibility</li>
          <li><strong>Badges:</strong> Unlock special achievements to boost your profile</li>
          <li><strong>Level:</strong> Progress through 7 levels as you earn points</li>
        </ul>
        <p className="info-note">🎯 New rankings update daily. Your position refreshes at midnight.</p>
      </div>
    </div>
  );
};
