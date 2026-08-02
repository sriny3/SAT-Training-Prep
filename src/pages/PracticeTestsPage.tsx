import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, BarChart3, AlertCircle } from 'lucide-react';
import { practiceTests, getTestStatistics } from '../data/tests/practiceTests';
import { getUserTestResults, getUserTestStatistics } from '../data/tests/testResults';
import './pages.css';

export const PracticeTestsPage: React.FC = () => {
  const navigate = useNavigate();

  const userId = 'user-001';
  const userResults = getUserTestResults(userId);
  const userStats = getUserTestStatistics(userId);

  const getTestStatus = (testId: string) => {
    const results = userResults.filter(r => r.testId === testId);
    if (results.length === 0) {
      return { status: 'not-started', attempts: 0, bestScore: 0 };
    }
    const bestResult = results.reduce((best, current) =>
      current.score > best.score ? current : best
    );
    return {
      status: 'completed',
      attempts: results.length,
      bestScore: bestResult.score,
      bestPercentage: bestResult.percentage
    };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '#10b981';
      case 'medium':
        return '#f59e0b';
      case 'hard':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="practice-tests-page">
      <div className="page-header">
        <h1>📝 Practice Tests</h1>
        <p>Full-length SAT/PSAT practice exams under realistic conditions</p>
      </div>

      {userStats && (
        <div className="test-statistics">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <p className="stat-label">Tests Completed</p>
              <p className="stat-value">{userStats.testsTaken}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <p className="stat-label">Best Score</p>
              <p className="stat-value">{userStats.highestScore}/1600</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <p className="stat-label">Average Score</p>
              <p className="stat-value">{userStats.averageScore}/1600</p>
            </div>
          </div>
          {userStats.improvement && (
            <div className="stat-card">
              <div className="stat-icon">{userStats.improvement.improved ? '📈' : '📉'}</div>
              <div className="stat-content">
                <p className="stat-label">Total Improvement</p>
                <p className="stat-value" style={{ color: userStats.improvement.improved ? '#10b981' : '#ef4444' }}>
                  {userStats.improvement.improved ? '+' : ''}{userStats.improvement.difference} pts
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="practice-tests-container">
        <h2>Available Tests</h2>
        <div className="tests-grid">
          {practiceTests.map(test => {
            const status = getTestStatus(test.id);
            const stats = getTestStatistics(test.id) || { totalQuestions: 150, pointsPossible: 1600 };

            return (
              <div key={test.id} className="test-card">
                <div className="test-header">
                  <h3>
                    <span className="test-number">Test {test.testNumber}</span>
                    {status.status === 'completed' && <span className="test-badge">✓ Completed</span>}
                  </h3>
                  <div className="difficulty-tag" style={{ background: getDifficultyColor(test.difficulty) }}>
                    {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
                  </div>
                </div>

                <p className="test-description">{test.description}</p>

                <div className="test-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{test.totalTimeLimit} minutes</span>
                  </div>
                  <div className="detail-item">
                    <BookOpen size={16} />
                    <span>{stats.totalQuestions} questions</span>
                  </div>
                  <div className="detail-item">
                    <BarChart3 size={16} />
                    <span>{stats.pointsPossible} points</span>
                  </div>
                </div>

                {status.status === 'completed' && (
                  <div className="test-results">
                    <p className="results-label">Best Score</p>
                    <p className="results-score">{status.bestScore}/1600</p>
                    <p className="results-percentage">
                      {Math.round((status.bestScore / 1600) * 100)}% • {status.attempts} attempt{status.attempts > 1 ? 's' : ''}
                    </p>
                  </div>
                )}

                <div className="test-actions">
                  <button className="btn btn-primary" onClick={() => navigate(`/practice-tests/${test.id}`)}>
                    {status.status === 'completed' ? 'Retake' : 'Start'} Test
                  </button>
                  {status.status === 'completed' && (
                    <button className="btn btn-secondary" onClick={() => navigate('/progress')}>View Results</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="test-guidelines">
        <h2>📋 Test Guidelines</h2>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <h4>⏱️ Time Management</h4>
            <p>Each test takes approximately 3 hours to complete. Plan your study session accordingly.</p>
          </div>
          <div className="guideline-card">
            <h4>🎯 Best Practices</h4>
            <p>Complete tests in a quiet environment, use scratch paper for calculations, and aim to simulate real test conditions.</p>
          </div>
          <div className="guideline-card">
            <h4>📊 Review Results</h4>
            <p>After completing, review your answers, understand mistakes, and focus on weak areas in your studies.</p>
          </div>
          <div className="guideline-card">
            <h4>📈 Track Progress</h4>
            <p>Take tests regularly to monitor improvement and identify which topics need more practice.</p>
          </div>
        </div>
      </section>

      <section className="score-conversion">
        <h2>📌 Score Scale Reference</h2>
        <div className="conversion-table">
          <table>
            <thead>
              <tr>
                <th>Score Range</th>
                <th>Percentile</th>
                <th>Performance Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1500-1600</td>
                <td>99th percentile</td>
                <td className="level-excellent">Excellent</td>
              </tr>
              <tr>
                <td>1400-1499</td>
                <td>95-98th percentile</td>
                <td className="level-very-good">Very Good</td>
              </tr>
              <tr>
                <td>1300-1399</td>
                <td>85-94th percentile</td>
                <td className="level-good">Good</td>
              </tr>
              <tr>
                <td>1200-1299</td>
                <td>70-84th percentile</td>
                <td className="level-average">Average</td>
              </tr>
              <tr>
                <td>Below 1200</td>
                <td>Below 70th percentile</td>
                <td className="level-needs-work">Needs Work</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="important-notice">
        <AlertCircle size={20} />
        <div>
          <h4>💡 Pro Tip</h4>
          <p>
            These practice tests are most effective when taken under real test conditions. Take the entire test in one sitting,
            use a timer, and avoid looking up answers during the test. Review your results thoroughly afterward.
          </p>
        </div>
      </div>
    </div>
  );
};
