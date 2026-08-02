import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useGameification } from '../../hooks/useGameification';
import { LogOut, Menu, X } from 'lucide-react';
import '../styles/layout.css';

interface NavigationProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isSidebarOpen = false,
  onToggleSidebar = () => {},
}) => {
  const { user, logout } = useAuth();
  const { gamification } = useGameification();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="hamburger" onClick={onToggleSidebar}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a href="/dashboard" className="navbar-logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">SAT Prep</span>
          </a>
        </div>

        {user && (
          <div className="navbar-right">
            <div className="user-info">
              <span className="user-avatar">{user.avatar}</span>
              <div className="user-details">
                <p className="user-name">{user.firstName}</p>
                <p className="user-level">Level {gamification.currentLevel.level}</p>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout} title="Logout">
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
