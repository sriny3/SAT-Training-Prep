import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { GameificationProvider } from './context/GameificationContext';
import { useAuth } from './hooks/useAuth';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { QuizzesPage } from './pages/QuizzesPage';
import { QuizTakingPage } from './pages/QuizTakingPage';
import { PracticeTestTakingPage } from './pages/PracticeTestTakingPage';
import { ProfilePage } from './pages/ProfilePage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { PracticeTestsPage } from './pages/PracticeTestsPage';
import { TestResultsPage } from './pages/TestResultsPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import './components/styles/global.css';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignupPage />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Phase 2 Routes */}
      <Route
        path="/lessons"
        element={
          <ProtectedRoute>
            <MainLayout>
              <LessonsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/lessons/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <LessonDetailPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/quizzes"
        element={
          <ProtectedRoute>
            <MainLayout>
              <QuizzesPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/quizzes/:quizId"
        element={
          <ProtectedRoute>
            <MainLayout>
              <QuizTakingPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice-tests"
        element={
          <ProtectedRoute>
            <MainLayout>
              <PracticeTestsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice-tests/:testId"
        element={
          <ProtectedRoute>
            <MainLayout>
              <PracticeTestTakingPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TestResultsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <LeaderboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AdminDashboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}
      <Route
        path="*"
        element={
          <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh' }}>
            <h1>404 - Page Not Found</h1>
            <p>
              <a href="/">Go back home</a>
            </p>
          </div>
        }
      />
    </Routes>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <GameificationProvider>
          <Router>
            <AppContent />
          </Router>
        </GameificationProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;
