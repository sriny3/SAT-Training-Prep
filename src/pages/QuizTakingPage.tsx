import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { useQuizRewards } from '../hooks/useQuizRewards';
import './pages.css';

interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  points: number;
}

export const QuizTakingPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { completeQuiz } = useQuizRewards();

  const quiz = quizzes.find(q => q.id === quizId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!quiz) {
    return (
      <div className="quiz-page">
        <div className="empty-state">
          <p>Quiz not found.</p>
          <button className="btn btn-primary" onClick={() => navigate('/quizzes')}>
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (optionId: string) => {
    if (!showResult) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const points = isCorrect ? currentQuestion.points : 0;

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      points
    };

    setUserAnswers([...userAnswers, newAnswer]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const totalScore = userAnswers.reduce((sum, a) => sum + a.points, 0);
      const maxScore = quiz.questions.reduce((sum, q) => sum + q.points, 0);
      completeQuiz(
        { id: quiz.id, title: quiz.title, subject: quiz.subject, topic: quiz.topic },
        totalScore,
        maxScore,
        quiz.difficulty
      );
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const previousAnswer = userAnswers.find(a => a.questionId === quiz.questions[currentQuestionIndex - 1].id);
      setSelectedAnswer(previousAnswer?.selectedAnswer || null);
      setShowResult(true);
    }
  };

  if (quizComplete) {
    const totalScore = userAnswers.reduce((sum, a) => sum + a.points, 0);
    const maxScore = quiz.questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);
    const correctCount = userAnswers.filter(a => a.isCorrect).length;

    return (
      <div className="quiz-page">
        <div className="quiz-complete">
          <div className="complete-header">
            <CheckCircle size={64} color="#10b981" />
            <h1>Quiz Complete!</h1>
            <p>{quiz.title}</p>
          </div>

          <div className="score-display">
            <div className="score-circle">
              <div className="score-percentage">{percentage}%</div>
              <div className="score-text">Score</div>
            </div>
            <div className="score-details">
              <p><strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> correct</p>
              <p>Points earned: <strong>{totalScore}/{maxScore}</strong></p>
            </div>
          </div>

          <div className="quiz-actions">
            <button className="btn btn-primary" onClick={() => navigate('/quizzes')}>
              Back to Quizzes
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="quiz-title">
          <h1>{quiz.title}</h1>
          <p>{currentQuestionIndex + 1} of {totalQuestions}</p>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-card">
          <div className="question-number">Question {currentQuestionIndex + 1}</div>
          <h2>{currentQuestion.questionText}</h2>

          <div className="options-container">
            {currentQuestion.options?.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrect = option.isCorrect;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={option.id}
                  className={`option-button ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={showResult}
                >
                  <div className="option-content">
                    <span className="option-letter">{option.id.toUpperCase()}</span>
                    <span className="option-text">{option.text}</span>
                  </div>
                  {showCorrect && <CheckCircle size={20} color="#10b981" />}
                  {showIncorrect && <XCircle size={20} color="#ef4444" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="result-box">
              <div className="result-header">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle size={24} color="#10b981" />
                    <h3>Correct!</h3>
                  </>
                ) : (
                  <>
                    <XCircle size={24} color="#ef4444" />
                    <h3>Incorrect</h3>
                  </>
                )}
              </div>
              <p className="explanation">{currentQuestion.explanation}</p>
              {currentQuestion.hints && currentQuestion.hints.length > 0 && (
                <div className="hints">
                  <p><strong>Hint:</strong> {currentQuestion.hints[0]}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="quiz-navigation">
        <button
          className="btn btn-secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="nav-spacer"></div>

        {!showResult ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleNext}
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next'} <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
