import React, { useState } from 'react';
import { TrendingUp, Award, Clock, Target, ChevronDown } from 'lucide-react';
import { getUserTestResults, getUserTestStatistics, calculatePerformanceMetrics } from '../data/tests/testResults';
import { getPracticeTestById } from '../data/tests/practiceTests';
import './pages.css';

export const TestResultsPage: React.FC = () => {
  const [expandedResult, setExpandedResult] = useState<string | null>(null);

  // Mock user ID - in real app, get from auth context
  const userId = 'user-001';
  const testResults = getUserTestResults(userId);
  const testStats = getUserTestStatistics(userId);

  if (!testStats) {
    return (
      <div className="test-results-page">
        <div className="page-header">
          <h1>📊 Test Results</h1>
          <p>Track your practice test performance and progress</p>
        </div>
        <div className="empty-state">
          <p>No test results yet. <a href="/practice-tests">Take your first practice test!</a></p>
        </div>
      </div>
    );
  }

  const sortedResults = [...testResults].sort(
    (a, b) => new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime()
  );

  return (
    <div className="test-results-page">
      <div className="page-header">
        <h1>📊 Test Results & Analytics</h1>
        <p>Detailed performance analysis and progress tracking</p>
      </div>

      {/* Overall Statistics */}
      <div className="results-statistics">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <p className="stat-label">Tests Completed</p>
            <p className="stat-value">{testStats.testsTaken}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <p className="stat-label">Best Score</p>
            <p className="stat-value">{testStats.highestScore}</p>
            <p className="stat-subtitle">{Math.round((testStats.highestScore / 1600) * 100)}%</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <p className="stat-label">Average Score</p>
            <p className="stat-value">{testStats.averageScore}</p>
            <p className="stat-subtitle">{Math.round((testStats.averageScore / 1600) * 100)}%</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <p className="stat-label">Consistency</p>
            <p className="stat-value">85%</p>
            <p className="stat-subtitle">Similar scores across tests</p>
          </div>
        </div>
      </div>

      {/* Progress Chart Section */}
      <div className="progress-section">
        <h2>Score Progression</h2>
        <div className="score-chart">
          <div className="chart-container">
            {sortedResults.map((result, index) => {
              const test = getPracticeTestById(result.testId);
              const percentage = (result.score / 1600) * 100;

              return (
                <div key={result.id} className="chart-bar-container">
                  <div className="chart-bar">
                    <div className="chart-bar-fill" style={{ height: `${percentage}%` }}></div>
                  </div>
                  <p className="chart-label">Test {test?.testNumber || index + 1}</p>
                  <p className="chart-value">{result.score}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="subject-performance">
        <h2>Performance by Subject</h2>
        <div className="performance-grid">
          <div className="performance-card">
            <h3>Reading & Writing</h3>
            <div className="performance-bar">
              <div className="performance-fill" style={{ width: '85%' }}></div>
            </div>
            <p className="performance-text">85% Average</p>
          </div>
          <div className="performance-card">
            <h3>Math</h3>
            <div className="performance-bar">
              <div className="performance-fill" style={{ width: '78%' }}></div>
            </div>
            <p className="performance-text">78% Average</p>
          </div>
          <div className="performance-card">
            <h3>Essay/Writing</h3>
            <div className="performance-bar">
              <div className="performance-fill" style={{ width: '88%' }}></div>
            </div>
            <p className="performance-text">88% Average</p>
          </div>
        </div>
      </div>

      {/* Recent Test Results */}
      <div className="results-list">
        <h2>Recent Test Results</h2>
        {sortedResults.map(result => {
          const test = getPracticeTestById(result.testId);
          const metrics = calculatePerformanceMetrics(result);
          const isExpanded = expandedResult === result.id;

          return (
            <div key={result.id} className="result-item">
              <div
                className="result-header"
                onClick={() => setExpandedResult(isExpanded ? null : result.id)}
              >
                <div className="result-info">
                  <h3>
                    {test?.title || 'Practice Test'}
                    <span className="result-date">
                      {result.completedAt ? new Date(result.completedAt).toLocaleDateString() : 'In Progress'}
                    </span>
                  </h3>
                  <div className="result-meta">
                    <span className="meta-item">
                      <Target size={14} /> {metrics.correctAnswers}/{metrics.totalQuestions} correct
                    </span>
                    <span className="meta-item">
                      <Clock size={14} /> {Math.round(result.timeSpent / 60)} minutes
                    </span>
                  </div>
                </div>
                <div className="result-score">
                  <p className="score-value">{result.score}</p>
                  <p className="score-percentage">{Math.round(result.percentage)}%</p>
                  <ChevronDown
                    size={20}
                    className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="result-details">
                  <div className="details-grid">
                    <div className="detail">
                      <p className="detail-label">Accuracy</p>
                      <p className="detail-value">{metrics.accuracy}%</p>
                    </div>
                    <div className="detail">
                      <p className="detail-label">Avg Time/Question</p>
                      <p className="detail-value">{metrics.averageTimePerQuestion}s</p>
                    </div>
                    <div className="detail">
                      <p className="detail-label">Total Time</p>
                      <p className="detail-value">{Math.round(result.timeSpent / 60)}m</p>
                    </div>
                    <div className="detail">
                      <p className="detail-label">Questions Correct</p>
                      <p className="detail-value">{metrics.correctAnswers}/{metrics.totalQuestions}</p>
                    </div>
                  </div>

                  <div className="review-actions">
                    <button className="btn btn-secondary">Review Answers</button>
                    <button className="btn btn-secondary">View Explanations</button>
                    <button className="btn btn-primary">Practice Weak Areas</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h2>📋 Recommendations</h2>
        <div className="recommendations-list">
          <div className="recommendation-card">
            <Award size={24} />
            <div>
              <h4>Focus on Math</h4>
              <p>Your math score is lower than reading. Spend extra time on algebra and data analysis topics.</p>
            </div>
          </div>
          <div className="recommendation-card">
            <TrendingUp size={24} />
            <div>
              <h4>Improve Pacing</h4>
              <p>You're spending more time than needed on reading. Practice speed without sacrificing accuracy.</p>
            </div>
          </div>
          <div className="recommendation-card">
            <Target size={24} />
            <div>
              <h4>Review Mistakes</h4>
              <p>Analyze questions you missed. Understanding patterns will help you avoid similar errors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
