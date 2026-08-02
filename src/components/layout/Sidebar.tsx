import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, BarChart3, Trophy, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import '../styles/layout.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">Learn</h3>
            <NavLink
              to="/lessons"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <BookOpen size={20} />
              <span>Lessons</span>
            </NavLink>
            <NavLink
              to="/quizzes"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <BarChart3 size={20} />
              <span>Quizzes</span>
            </NavLink>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Test</h3>
            <NavLink
              to="/practice-tests"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <Trophy size={20} />
              <span>Practice Tests</span>
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <BarChart3 size={20} />
              <span>Progress</span>
            </NavLink>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Account</h3>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <Trophy size={20} />
              <span>Leaderboard</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <Settings size={20} />
              <span>Profile</span>
            </NavLink>
          </div>

          <div className="nav-section">
            <button className="nav-item logout-item" onClick={handleLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};
