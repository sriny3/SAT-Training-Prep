import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import '../styles/auth.css';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      addToast('Successfully logged in! Welcome back!', 'success');
      navigate('/dashboard');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
      addToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo');
    setIsLoading(true);

    try {
      await login(demoEmail, 'demo');
      addToast('Demo login successful!', 'success');
      navigate('/dashboard');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Demo login failed.';
      setError(errorMessage);
      addToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back!</h1>
        <p className="auth-subtitle">Log in to continue your SAT/PSAT prep journey</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="auth-divider">
          <span>Demo Accounts</span>
        </div>

        <div className="demo-buttons">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDemoLogin('student1@example.com')}
            disabled={isLoading}
          >
            👨‍🎓 Alex
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDemoLogin('student2@example.com')}
            disabled={isLoading}
          >
            👩‍🎓 Sarah
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDemoLogin('student3@example.com')}
            disabled={isLoading}
          >
            👨‍💼 Michael
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account?{' '}
          <a href="/signup" className="auth-link">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};
