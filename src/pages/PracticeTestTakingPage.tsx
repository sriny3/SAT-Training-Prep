import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flag, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { practiceTests } from '../data/tests/practiceTests';
import { testQuestions } from '../data/tests/testQuestions';
import { usePracticeTestRewards } from '../hooks/usePracticeTestRewards';
import './pages.css';

interface TestAnswer {
  questionId: string;
  selectedAnswer: string;
  flagged: boolean;
}

export const PracticeTestTakingPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { completePracticeTest } = usePracticeTestRewards();

  const test = practiceTests.find(t => t.id === testId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(test?.totalTimeLimit ? test.totalTimeLimit * 60 : 0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [testComplete, setTestComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const rewardsLoggedRef = useRef(false);

  // Timer effect
  useEffect(() => {
    if (testComplete || isPaused || !test) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setTestComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testComplete, isPaused, test]);

  // Award points and log this attempt to Supabase exactly once when the
  // test finishes, so the admin dashboard's activity history reflects real
  // scored attempts instead of nothing at all.
  useEffect(() => {
    if (!testComplete || !test || rewardsLoggedRef.current) return;
    rewardsLoggedRef.current = true;

    const correctCount = answers.filter(a => {
      const question = testQuestions.find(q => q.id === a.questionId);
      return question && a.selectedAnswer === question.correctAnswer;
    }).length;
    const timeSpent = test.totalTimeLimit * 60 - timeRemaining;

    completePracticeTest(
      { id: test.id, title: test.title, subject: 'reading-writing', topic: 'full-length-test', difficulty: test.difficulty },
      correctCount,
      testQuestions.length,
      timeSpent
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testComplete, test]);

  if (!test) {
    return (
      <div className="test-page">
        <div className="empty-state">
          <p>Test not found.</p>
          <button className="btn btn-primary" onClick={() => navigate('/practice-tests')}>
            Back to Tests
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = testQuestions[currentQuestionIndex];
  const totalQuestions = testQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isTimeRunning = timeRemaining < 600; // Less than 10 minutes

  const handleAnswerSelect = (optionId: string) => {
    setSelectedAnswer(optionId);
  };

  const handleSaveAnswer = () => {
    if (!selectedAnswer) return;

    const existingIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    if (existingIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingIndex].selectedAnswer = selectedAnswer;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, {
        questionId: currentQuestion.id,
        selectedAnswer,
        flagged: false
      }]);
    }
  };

  const handleToggleFlag = () => {
    const existingIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    if (existingIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingIndex].flagged = !newAnswers[existingIndex].flagged;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, {
        questionId: currentQuestion.id,
        selectedAnswer: selectedAnswer || '',
        flagged: true
      }]);
    }
  };

  const handleNext = () => {
    handleSaveAnswer();
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      const nextAnswer = answers.find(a => a.questionId === testQuestions[nextIndex].id);
      setSelectedAnswer(nextAnswer?.selectedAnswer || null);
    }
  };

  const handlePrevious = () => {
    handleSaveAnswer();
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      const prevAnswer = answers.find(a => a.questionId === testQuestions[prevIndex].id);
      setSelectedAnswer(prevAnswer?.selectedAnswer || null);
    }
  };

  const handleSubmitTest = () => {
    handleSaveAnswer();
    setTestComplete(true);
  };

  if (testComplete) {
    const correctCount = answers.filter(a => {
      const question = testQuestions.find(q => q.id === a.questionId);
      return question && a.selectedAnswer === question.correctAnswer;
    }).length;
    // Scale correctness onto the familiar 400-1600 SAT-style range.
    const score = Math.round(400 + (correctCount / testQuestions.length) * 1200);
    const percentage = Math.round((score / 1600) * 100);
    const answeredCount = answers.length;

    return (
      <div className="test-page">
        <div className="test-complete">
          <div className="complete-header">
            <CheckCircle size={64} color="#10b981" />
            <h1>Test Complete!</h1>
            <p>{test.title}</p>
          </div>

          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-max">/1600</div>
            </div>
            <div className="score-info">
              <p>Percentile: <strong>{percentage}th</strong></p>
              <p>Questions Answered: <strong>{answeredCount}/{totalQuestions}</strong></p>
              <p>Time Used: <strong>{Math.round((test.totalTimeLimit * 60 - timeRemaining) / 60)} min</strong></p>
            </div>
          </div>

          <div className="test-actions">
            <button className="btn btn-primary" onClick={() => navigate('/progress')}>
              View Detailed Results
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/practice-tests')}>
              Back to Tests
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  return (
    <div className="test-page">
      <div className="test-header">
        <div className="test-info">
          <h2>{test.title}</h2>
          <p>Question {currentQuestionIndex + 1} of {totalQuestions}</p>
        </div>

        <div className={`timer ${isTimeRunning ? 'warning' : ''}`}>
          <Clock size={20} />
          <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="test-content">
        <div className="question-card">
          <div className="question-header">
            <div>
              <div className="question-type">{currentQuestion.subject.toUpperCase()}</div>
              <h3>{currentQuestion.questionText}</h3>
            </div>
            <button
              className={`flag-btn ${currentAnswer?.flagged ? 'flagged' : ''}`}
              onClick={handleToggleFlag}
              title="Flag this question for review"
            >
              <Flag size={20} />
            </button>
          </div>

          <div className="options-container">
            {currentQuestion.options?.map(option => (
              <button
                key={option.id}
                className={`option-button ${selectedAnswer === option.id ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(option.id)}
              >
                <span className="option-letter">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="test-sidebar">
          <div className="question-navigator">
            <h4>Questions</h4>
            <div className="question-grid">
              {testQuestions.map((q, idx) => {
                const answer = answers.find(a => a.questionId === q.id);
                const isCurrent = idx === currentQuestionIndex;
                return (
                  <button
                    key={q.id}
                    className={`question-btn ${isCurrent ? 'current' : ''} ${answer ? 'answered' : ''} ${answer?.flagged ? 'flagged' : ''}`}
                    onClick={() => {
                      handleSaveAnswer();
                      setCurrentQuestionIndex(idx);
                      const answer = answers.find(a => a.questionId === q.id);
                      setSelectedAnswer(answer?.selectedAnswer || null);
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="test-stats">
            <div className="stat">
              <span className="stat-label">Answered</span>
              <span className="stat-value">{answers.length}/{totalQuestions}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Flagged</span>
              <span className="stat-value">{answers.filter(a => a.flagged).length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="test-navigation">
        <button
          className="btn btn-secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="nav-center">
          <button
            className="btn btn-outline"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>

        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          Next <ChevronRight size={20} />
        </button>

        {currentQuestionIndex === totalQuestions - 1 && (
          <button
            className="btn btn-primary"
            onClick={handleSubmitTest}
          >
            Submit Test
          </button>
        )}
      </div>
    </div>
  );
};
