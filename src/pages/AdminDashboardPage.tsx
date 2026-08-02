import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { ShieldAlert, Users, Zap, Flame, Award, ChevronDown, ChevronUp, BookOpen, ClipboardList, FileText } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabaseClient';
import {
  LessonCompletionRecord,
  QuizAttemptRecord,
  PracticeTestAttemptRecord,
} from '../types';
import '../pages/pages.css';

interface StudentRow {
  id: string;
  name: string;
  email: string;
  role: string;
  gradeLevel: string;
  points: number;
  level: number;
  currentStreak: number;
  bestStreak: number;
  badgeCount: number;
  lastStudyDate: string | null;
}

type ActivityItem =
  | { kind: 'lesson'; data: LessonCompletionRecord }
  | { kind: 'quiz'; data: QuizAttemptRecord }
  | { kind: 'test'; data: PracticeTestAttemptRecord };

const fetchStudentRows = async (): Promise<StudentRow[]> => {
  const [{ data: profiles, error: profilesError }, { data: progress, error: progressError }] =
    await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: true }),
      supabase.from('progress').select('*'),
    ]);

  if (profilesError) throw profilesError;
  if (progressError) throw progressError;

  const progressByUser = new Map((progress ?? []).map((p) => [p.user_id, p]));

  return (profiles ?? []).map((p) => {
    const prog = progressByUser.get(p.id);
    return {
      id: p.id,
      name: `${p.first_name} ${p.last_name}`.trim() || p.username,
      email: p.email,
      role: p.role,
      gradeLevel: p.grade_level,
      points: prog?.points ?? 0,
      level: prog?.current_level ?? 1,
      currentStreak: prog?.current_streak ?? 0,
      bestStreak: prog?.best_streak ?? 0,
      badgeCount: prog?.unlocked_badges?.length ?? 0,
      lastStudyDate: prog?.last_study_date ?? null,
    };
  });
};

const fetchActivityForUser = async (userId: string): Promise<ActivityItem[]> => {
  const [lessons, quizzes, tests] = await Promise.all([
    supabase
      .from('lesson_completions')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false }),
    supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false }),
    supabase
      .from('practice_test_attempts')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false }),
  ]);

  const items: ActivityItem[] = [
    ...(lessons.data ?? []).map((row): ActivityItem => ({
      kind: 'lesson',
      data: {
        id: row.id,
        userId: row.user_id,
        lessonId: row.lesson_id,
        lessonTitle: row.lesson_title,
        subject: row.subject,
        topic: row.topic,
        pointsEarned: row.points_earned,
        completedAt: row.completed_at,
      },
    })),
    ...(quizzes.data ?? []).map((row): ActivityItem => ({
      kind: 'quiz',
      data: {
        id: row.id,
        userId: row.user_id,
        quizId: row.quiz_id,
        quizTitle: row.quiz_title,
        subject: row.subject,
        topic: row.topic,
        score: row.score,
        maxScore: row.max_score,
        percentage: row.percentage,
        pointsEarned: row.points_earned,
        completedAt: row.completed_at,
      },
    })),
    ...(tests.data ?? []).map((row): ActivityItem => ({
      kind: 'test',
      data: {
        id: row.id,
        userId: row.user_id,
        testId: row.test_id,
        testTitle: row.test_title,
        subject: row.subject,
        topic: row.topic,
        correctCount: row.correct_count,
        totalQuestions: row.total_questions,
        percentage: row.percentage,
        pointsEarned: row.points_earned,
        timeSpentSeconds: row.time_spent_seconds,
        completedAt: row.completed_at,
      },
    })),
  ];

  return items.sort(
    (a, b) => new Date(b.data.completedAt).getTime() - new Date(a.data.completedAt).getTime()
  );
};

export const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [rows, setRows] = useState<StudentRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [activityByUser, setActivityByUser] = useState<Record<string, ActivityItem[]>>({});
  const [activityLoadingId, setActivityLoadingId] = useState<string | null>(null);

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (!isAdmin) return;
    setIsLoading(true);
    fetchStudentRows()
      .then(setRows)
      .catch((err) => setLoadError(err.message ?? 'Failed to load student data'))
      .finally(() => setIsLoading(false));
  }, [isAdmin]);

  const toggleExpand = useCallback(
    (studentId: string) => {
      if (expandedUserId === studentId) {
        setExpandedUserId(null);
        return;
      }
      setExpandedUserId(studentId);
      if (!activityByUser[studentId]) {
        setActivityLoadingId(studentId);
        fetchActivityForUser(studentId)
          .then((items) => setActivityByUser((prev) => ({ ...prev, [studentId]: items })))
          .catch((err) => console.error('Failed to load activity history:', err))
          .finally(() => setActivityLoadingId(null));
      }
    },
    [expandedUserId, activityByUser]
  );

  const totals = useMemo(() => {
    const students = rows.filter((r) => r.role !== 'admin');
    return {
      totalStudents: students.length,
      totalPoints: rows.reduce((sum, r) => sum + r.points, 0),
      activeStreaks: rows.filter((r) => r.currentStreak > 0).length,
    };
  }, [rows]);

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="page-container leaderboard-page">
      <div className="leaderboard-header">
        <h1><ShieldAlert size={28} style={{ verticalAlign: 'middle', marginRight: 8 }} />Admin Dashboard</h1>
        <p>Live progress for every account, pulled from Supabase</p>
      </div>

      {loadError && (
        <div className="auth-error" style={{ marginBottom: 'var(--spacing-6)' }}>
          Couldn't load student data: {loadError}
        </div>
      )}

      <div className="leaderboard-stats" style={{ marginBottom: 'var(--spacing-8)' }}>
        <div className="stat-card">
          <h3><Users size={16} /> Total Students</h3>
          <div className="stat-value">{totals.totalStudents}</div>
          <p className="stat-subtitle">Registered accounts</p>
        </div>
        <div className="stat-card">
          <h3><Zap size={16} /> Total Points Earned</h3>
          <div className="stat-value">{totals.totalPoints.toLocaleString()}</div>
          <p className="stat-subtitle">Across all users</p>
        </div>
        <div className="stat-card">
          <h3><Flame size={16} /> Active Streaks</h3>
          <div className="stat-value">{totals.activeStreaks}</div>
          <p className="stat-subtitle">Users studying today</p>
        </div>
      </div>

      <div className="leaderboard-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading students…</p>
          </div>
        ) : (
          <div className="leaderboard-table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="col-name">User</th>
                  <th className="col-name">Role</th>
                  <th className="col-points"><Zap size={16} /> Points</th>
                  <th className="col-level">Level</th>
                  <th className="col-streak">Streak</th>
                  <th className="col-badges"><Award size={16} /> Badges</th>
                  <th className="col-name">Last Studied</th>
                  <th className="col-name">Activity</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <tr className="leaderboard-row">
                      <td className="col-name">
                        <div className="name-cell">
                          <span className="user-name">{row.name}</span>
                          <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                            {row.email}
                          </span>
                        </div>
                      </td>
                      <td className="col-name">
                        <span className="level-badge">{row.role}</span>
                      </td>
                      <td className="col-points">
                        <span className="points-value">{row.points.toLocaleString()}</span>
                      </td>
                      <td className="col-level">
                        <span className="level-badge">Level {row.level}</span>
                      </td>
                      <td className="col-streak">
                        <span className="streak-indicator">🔥 {row.currentStreak}</span>
                      </td>
                      <td className="col-badges">
                        <span className="badge-count">🎖️ {row.badgeCount}</span>
                      </td>
                      <td className="col-name">{row.lastStudyDate ?? '—'}</td>
                      <td className="col-name">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={() => toggleExpand(row.id)}
                        >
                          {expandedUserId === row.id ? (
                            <>Hide <ChevronUp size={14} /></>
                          ) : (
                            <>View <ChevronDown size={14} /></>
                          )}
                        </button>
                      </td>
                    </tr>
                    {expandedUserId === row.id && (
                      <tr>
                        <td colSpan={8} style={{ background: 'var(--gray-50)', padding: '1rem 1.5rem' }}>
                          {activityLoadingId === row.id ? (
                            <p>Loading activity…</p>
                          ) : (
                            <ActivityHistory items={activityByUser[row.id] ?? []} />
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="leaderboard-info">
        <h3>📊 About This Dashboard</h3>
        <ul>
          <li>Data is read live from Supabase, so it's the same for every device and browser — not just this one.</li>
          <li>Click "View" on any student to see their full lesson, quiz, and practice test history.</li>
          <li>Row-level security ensures only accounts with the admin role can see other users' data.</li>
        </ul>
      </div>
    </div>
  );
};

const ActivityHistory: React.FC<{ items: ActivityItem[] }> = ({ items }) => {
  if (items.length === 0) {
    return <p style={{ color: 'var(--gray-500)', margin: 0 }}>No activity recorded yet.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item) => (
        <li
          key={`${item.kind}-${item.data.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.9rem',
            padding: '0.5rem 0',
            borderBottom: '1px solid var(--gray-200)',
          }}
        >
          {item.kind === 'lesson' && <BookOpen size={16} color="#6366f1" />}
          {item.kind === 'quiz' && <ClipboardList size={16} color="#f59e0b" />}
          {item.kind === 'test' && <FileText size={16} color="#10b981" />}

          {item.kind === 'lesson' && (
            <span>
              Completed lesson <strong>{item.data.lessonTitle}</strong> ({item.data.subject}) — +{item.data.pointsEarned} pts
            </span>
          )}
          {item.kind === 'quiz' && (
            <span>
              Quiz <strong>{item.data.quizTitle}</strong> — {item.data.score}/{item.data.maxScore} ({item.data.percentage}%) — +{item.data.pointsEarned} pts
            </span>
          )}
          {item.kind === 'test' && (
            <span>
              Practice test <strong>{item.data.testTitle}</strong> — {item.data.correctCount}/{item.data.totalQuestions} correct ({item.data.percentage}%) — +{item.data.pointsEarned} pts
            </span>
          )}

          <span style={{ marginLeft: 'auto', color: 'var(--gray-500)', fontSize: '0.8rem' }}>
            {new Date(item.data.completedAt).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};
