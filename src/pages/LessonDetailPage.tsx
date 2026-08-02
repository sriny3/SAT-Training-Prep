import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getLessonById } from '../data/lessons';
import { useLessonRewards } from '../hooks/useLessonRewards';
import { BookOpen, Clock, ArrowLeft, CheckCircle, ChevronDown, ChevronUp, Lightbulb, AlertTriangle, Star } from 'lucide-react';
import './pages.css';

export const LessonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = id ? getLessonById(id) : undefined;
  const { completeLesson } = useLessonRewards();

  const [showTips, setShowTips] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleMarkComplete = () => {
    if (lesson) {
      completeLesson(lesson.duration);
      setCompleted(true);
    }
  };

  if (!lesson) {
    return (
      <div className="lesson-detail-page">
        <div className="empty-state" style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Lesson not found</h2>
          <p>This lesson doesn't exist or may have been moved.</p>
          <Link to="/lessons" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
            ← Back to Lessons
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case 'reading-writing': return '📖 Reading & Writing';
      case 'math': return '🔢 Math';
      case 'essay': return '✍️ Essay/Writing';
      default: return subject;
    }
  };

  const renderContentBlock = (block: { type: string; content: string }, index: number) => {
    switch (block.type) {
      case 'heading':
        return <h3 key={index} className="lesson-content-heading">{block.content}</h3>;
      case 'subheading':
        return <h4 key={index} className="lesson-content-subheading">{block.content}</h4>;
      case 'formula':
        return (
          <div key={index} className="lesson-formula">
            <code>{block.content}</code>
          </div>
        );
      case 'code':
        return (
          <pre key={index} className="lesson-code">
            <code>{block.content}</code>
          </pre>
        );
      default:
        return (
          <p key={index} className="lesson-content-text">
            {block.content.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < block.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
    }
  };

  return (
    <div className="lesson-detail-page">
      {/* Back button */}
      <button className="btn btn-ghost back-btn" onClick={() => navigate('/lessons')}>
        <ArrowLeft size={16} />
        Back to Lessons
      </button>

      {/* Header */}
      <div className="lesson-detail-header">
        <div className="lesson-detail-meta">
          <span className="subject-tag">{getSubjectLabel(lesson.subject)}</span>
          <span
            className="difficulty-badge"
            style={{ backgroundColor: getDifficultyColor(lesson.difficulty) }}
          >
            {lesson.difficulty}
          </span>
        </div>
        <h1>{lesson.title}</h1>
        <p className="lesson-detail-description">{lesson.description}</p>
        <div className="lesson-detail-stats">
          <div className="meta-item">
            <Clock size={16} />
            <span>{lesson.duration} min</span>
          </div>
          <div className="meta-item">
            <BookOpen size={16} />
            <span>{lesson.keyPoints.length} key concepts</span>
          </div>
          <div className="meta-item">
            <Star size={16} />
            <span>{lesson.estimatedReadTime} min read</span>
          </div>
        </div>
      </div>

      <div className="lesson-detail-body">
        {/* Main content column */}
        <div className="lesson-main-column">

          {/* Introduction */}
          <div className="lesson-section-card">
            <h2>Introduction</h2>
            <p>{lesson.content.introduction}</p>
          </div>

          {/* Main Content */}
          <div className="lesson-section-card">
            <h2>Lesson Content</h2>
            <div className="lesson-content-blocks">
              {lesson.content.mainContent.map((block, index) =>
                renderContentBlock(block, index)
              )}
            </div>
          </div>

          {/* Examples */}
          {lesson.content.examples.length > 0 && (
            <div className="lesson-section-card">
              <h2>Worked Examples</h2>
              <div className="examples-list">
                {lesson.content.examples.map((example, index) => (
                  <div key={index} className="example-block">
                    <h4>{example.title}</h4>
                    <div className="example-problem">
                      <span className="example-label">Problem:</span>
                      <p>{example.problem}</p>
                    </div>
                    <div className="example-solution">
                      <span className="example-label">Solution:</span>
                      <p style={{ whiteSpace: 'pre-line' }}>{example.solution}</p>
                    </div>
                    <div className="example-explanation">
                      <span className="example-label">Explanation:</span>
                      <p>{example.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="lesson-section-card lesson-summary">
            <h2>Summary</h2>
            <p>{lesson.content.summary}</p>
          </div>

          {/* Complete button */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {completed ? (
              <div className="completion-badge">
                <CheckCircle size={24} color="#10b981" />
                <span>Lesson Completed! Points awarded.</span>
              </div>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleMarkComplete}
              >
                Mark as Complete & Earn Points
              </button>
            )}
          </div>
        </div>

        {/* Sidebar column */}
        <div className="lesson-side-column">

          {/* Key Points */}
          <div className="lesson-section-card">
            <h3>Key Points</h3>
            <ul className="key-points-list">
              {lesson.keyPoints.map((point, index) => (
                <li key={index}>
                  <CheckCircle size={14} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips (collapsible) */}
          {lesson.tips.length > 0 && (
            <div className="lesson-section-card collapsible-card">
              <button
                className="collapsible-header"
                onClick={() => setShowTips(!showTips)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lightbulb size={16} color="#f59e0b" />
                  <h3 style={{ margin: 0 }}>Tips</h3>
                </div>
                {showTips ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showTips && (
                <ul className="tips-list">
                  {lesson.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Common Mistakes (collapsible) */}
          {lesson.commonMistakes.length > 0 && (
            <div className="lesson-section-card collapsible-card">
              <button
                className="collapsible-header"
                onClick={() => setShowMistakes(!showMistakes)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={16} color="#ef4444" />
                  <h3 style={{ margin: 0 }}>Common Mistakes</h3>
                </div>
                {showMistakes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showMistakes && (
                <ul className="mistakes-list">
                  {lesson.commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Prerequisites */}
          {lesson.prerequisites.length > 0 && (
            <div className="lesson-section-card">
              <h3>Prerequisites</h3>
              <ul className="prerequisites-list">
                {lesson.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Go to Quizzes */}
          <div className="lesson-section-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '0.75rem' }}>
              Ready to test your knowledge?
            </p>
            <Link to="/quizzes" className="btn btn-secondary" style={{ width: '100%', display: 'block' }}>
              Practice Quizzes →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
