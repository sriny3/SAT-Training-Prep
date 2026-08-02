import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { Clock, Target, CheckCircle } from 'lucide-react';
import './pages.css';

export const QuizzesPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filtered = selectedSubject
    ? quizzes.filter(quiz => quiz.subject === selectedSubject)
    : quizzes;

  const subjects = ['reading-writing', 'math', 'essay'];

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
    <div className="quizzes-page">
      <div className="page-header">
        <h1>❓ Practice Quizzes</h1>
        <p>Test your knowledge and track your progress</p>
      </div>

      {/* Subject Filter */}
      <div className="subject-filter">
        <button
          className={`filter-btn ${!selectedSubject ? 'active' : ''}`}
          onClick={() => setSelectedSubject(null)}
        >
          All Subjects
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

      {/* Quizzes Grid */}
      <div className="quizzes-grid">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No quizzes available for this subject yet.</p>
            <p>More quizzes coming soon!</p>
          </div>
        ) : (
          filtered.map(quiz => (
            <Link key={quiz.id} to={`/quizzes/${quiz.id}`} className="quiz-card">
              <div className="quiz-header">
                <h3>{quiz.title}</h3>
                <span className="difficulty-badge">{quiz.difficulty}</span>
              </div>

              <p className="quiz-description">{quiz.description}</p>

              <div className="quiz-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{quiz.estimatedDuration} min</span>
                </div>
                <div className="meta-item">
                  <Target size={16} />
                  <span>{quiz.questions.length} questions</span>
                </div>
                <div className="meta-item">
                  <CheckCircle size={16} />
                  <span>{quiz.passingScore}% to pass</span>
                </div>
              </div>

              <div className="quiz-footer">
                <button className="btn btn-primary btn-sm">Start Quiz</button>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Quiz Types */}
      <section className="quiz-types">
        <h2>Quiz Types</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>📖 Reading & Writing</h3>
            <p>{quizzes.filter(q => q.subject === 'reading-writing').length} quizzes</p>
            <p className="description">Vocabulary, grammar, comprehension</p>
          </div>
          <div className="type-card">
            <h3>🔢 Math</h3>
            <p>{quizzes.filter(q => q.subject === 'math').length} quizzes</p>
            <p className="description">Algebra, geometry, data analysis</p>
          </div>
          <div className="type-card">
            <h3>✍️ Essay/Writing</h3>
            <p>{quizzes.filter(q => q.subject === 'essay').length} quizzes</p>
            <p className="description">Grammar, structure, arguments</p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="tips-section">
        <h2>Quiz Tips</h2>
        <ul>
          <li>✓ Take quizzes after completing related lessons</li>
          <li>✓ Review your answers to understand mistakes</li>
          <li>✓ Retake quizzes to improve your score</li>
          <li>✓ Start with easy quizzes and progress to harder ones</li>
        </ul>
      </section>
    </div>
  );
};
