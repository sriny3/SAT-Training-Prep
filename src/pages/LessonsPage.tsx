import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allLessons } from '../data/lessons';
import { BookOpen, Clock, BarChart3 } from 'lucide-react';
import './pages.css';

export const LessonsPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filtered = allLessons.filter(lesson => {
    if (selectedSubject && lesson.subject !== selectedSubject) return false;
    if (selectedDifficulty && lesson.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const subjects = ['reading-writing', 'math', 'essay'];
  const difficulties = ['easy', 'medium', 'hard'];

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

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case 'reading-writing':
        return '📖 Reading & Writing';
      case 'math':
        return '🔢 Math';
      case 'essay':
        return '✍️ Essay/Writing';
      default:
        return subject;
    }
  };

  return (
    <div className="lessons-page">
      <div className="page-header">
        <h1>📚 Lesson Library</h1>
        <p>Choose lessons to master SAT/PSAT content</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <h3>Subject</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${!selectedSubject ? 'active' : ''}`}
              onClick={() => setSelectedSubject(null)}
            >
              All
            </button>
            {subjects.map(subject => (
              <button
                key={subject}
                className={`filter-btn ${selectedSubject === subject ? 'active' : ''}`}
                onClick={() => setSelectedSubject(subject)}
              >
                {getSubjectLabel(subject)}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Difficulty</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${!selectedDifficulty ? 'active' : ''}`}
              onClick={() => setSelectedDifficulty(null)}
            >
              All
            </button>
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                className={`filter-btn ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
                style={{
                  borderColor: selectedDifficulty === difficulty ? getDifficultyColor(difficulty) : undefined
                }}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="lessons-grid">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No lessons match your filters.</p>
          </div>
        ) : (
          filtered.map(lesson => (
            <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="lesson-card">
              <div className="lesson-header">
                <h3>{lesson.title}</h3>
                <span
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(lesson.difficulty) }}
                >
                  {lesson.difficulty}
                </span>
              </div>

              <p className="lesson-description">{lesson.description}</p>

              <div className="lesson-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{lesson.duration} min</span>
                </div>
                <div className="meta-item">
                  <BookOpen size={16} />
                  <span>{lesson.keyPoints.length} concepts</span>
                </div>
                <div className="meta-item">
                  <BarChart3 size={16} />
                  <span>{lesson.practiceQuestions.length} questions</span>
                </div>
              </div>

              <div className="lesson-footer">
                <button className="btn btn-primary btn-sm">Start Lesson</button>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="stats-box">
        <div className="stat">
          <p className="stat-number">{allLessons.length}</p>
          <p className="stat-label">Total Lessons</p>
        </div>
        <div className="stat">
          <p className="stat-number">{filtered.length}</p>
          <p className="stat-label">Matching Your Filter</p>
        </div>
        <div className="stat">
          <p className="stat-number">45+</p>
          <p className="stat-label">Hours of Content</p>
        </div>
      </div>
    </div>
  );
};
