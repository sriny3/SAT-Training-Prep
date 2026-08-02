import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ArrowRight, BookOpen, Trophy, BarChart3 } from 'lucide-react';
import './pages.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master the SAT & PSAT</h1>
          <p>
            Comprehensive prep course designed for middle schoolers. Learn at your pace,
            track your progress, and ace your test.
          </p>
          <div className="hero-buttons">
            {isAuthenticated ? (
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/dashboard')}>
                Go to Dashboard <ArrowRight size={20} />
              </button>
            ) : (
              <>
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => navigate('/signup')}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
        <div className="hero-icon">
          <span style={{ fontSize: '8rem' }}>📚</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose SAT Prep?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen size={40} />
            </div>
            <h3>Comprehensive Lessons</h3>
            <p>45 expertly-crafted lessons covering all SAT/PSAT topics with clear explanations and examples.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={40} />
            </div>
            <h3>Track Progress</h3>
            <p>Real-time analytics show your improvement across all subjects with detailed performance insights.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Trophy size={40} />
            </div>
            <h3>Gamified Learning</h3>
            <p>Earn points, unlock badges, climb levels, and compete on leaderboards to stay motivated.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Preparing?</h2>
        <p>Join thousands of students improving their SAT/PSAT scores</p>
        {!isAuthenticated && (
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/signup')}>
            Create Free Account
          </button>
        )}
      </section>
    </div>
  );
};
