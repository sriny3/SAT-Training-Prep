import React from 'react';
import { Level } from '../../types';
import './level-progress.css';

interface LevelProgressProps {
  current: Level;
  next: Level | null;
  progress: number;
  points: number;
  pointsUntilNext: number;
}

export const LevelProgress: React.FC<LevelProgressProps> = ({
  current,
  next,
  progress,
  points,
  pointsUntilNext
}) => {
  return (
    <div className="level-progress-container">
      <div className="level-header">
        <div className="current-level">
          <div className="level-icon">{current.icon}</div>
          <div className="level-info">
            <h3>Level {current.level}</h3>
            <p className="level-title">{current.title}</p>
          </div>
        </div>
        <div className="points-display">
          <div className="total-points">{points.toLocaleString()}</div>
          <p className="points-label">Total Points</p>
        </div>
      </div>

      {next && (
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-label">Progress to {next.title}</span>
            <span className="progress-percentage">{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-info">
            <p className="progress-text">
              {pointsUntilNext.toLocaleString()} points until Level {next.level}
            </p>
          </div>
        </div>
      )}

      {!next && (
        <div className="max-level-badge">
          <span>🏆 Maximum Level Reached!</span>
        </div>
      )}

      <div className="level-rewards">
        <h4>Level {current.level} Rewards</h4>
        <ul className="rewards-list">
          {current.rewards?.map((reward, idx) => (
            <li key={idx}>
              <span className="reward-icon">✨</span>
              <span>{reward.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};