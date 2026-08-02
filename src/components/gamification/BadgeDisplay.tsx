import React from 'react';
import { Badge } from '../../types';
import './badge-display.css';

interface BadgeDisplayProps {
  badge: Badge;
  unlocked?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const BadgeDisplay: React.FC<BadgeDisplayProps> = ({
  badge,
  unlocked = true,
  size = 'medium'
}) => {
  const containerClass = `badge-container badge-${size} ${!unlocked ? 'locked' : 'unlocked'}`;

  return (
    <div className={containerClass} title={`${badge.name} - ${badge.description}`}>
      <div className="badge-icon">{badge.icon}</div>
      <div className="badge-info">
        <div className="badge-name">{badge.name}</div>
        <div className={`badge-rarity ${badge.rarity}`}>{badge.rarity}</div>
      </div>
      {!unlocked && <div className="badge-locked-overlay">🔒</div>}
    </div>
  );
};
