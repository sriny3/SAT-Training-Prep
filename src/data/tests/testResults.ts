import { TestAttempt } from '../../types';

/**
 * Sample test results for demonstration
 */
export const sampleTestResults: TestAttempt[] = [
  {
    id: 'attempt-001',
    userId: 'user-001',
    testId: 'ptest-001',
    startedAt: new Date('2026-04-15T09:00:00'),
    completedAt: new Date('2026-04-15T12:05:00'),
    answers: [
      {
        questionId: 'tq-001',
        answer: 'opt-001-b',
        isCorrect: true,
        timeSpent: 45
      },
      {
        questionId: 'tq-002',
        answer: 'opt-002-b',
        isCorrect: true,
        timeSpent: 60
      },
      {
        questionId: 'tq-003',
        answer: 'opt-003-a',
        isCorrect: true,
        timeSpent: 120
      },
      {
        questionId: 'tq-004',
        answer: 'opt-004-b',
        isCorrect: true,
        timeSpent: 30
      },
      {
        questionId: 'tq-005',
        answer: 'opt-005-a',
        isCorrect: true,
        timeSpent: 50
      },
      {
        questionId: 'tq-006',
        answer: 'opt-006-b',
        isCorrect: false,
        timeSpent: 90
      },
      {
        questionId: 'tq-007',
        answer: 'An essay about renewable energy',
        isCorrect: true,
        timeSpent: 2400
      },
      {
        questionId: 'tq-008',
        answer: 'opt-008-a',
        isCorrect: true,
        timeSpent: 45
      },
      {
        questionId: 'tq-009',
        answer: 'opt-009-b',
        isCorrect: true,
        timeSpent: 40
      },
      {
        questionId: 'tq-010',
        answer: 'opt-010-a',
        isCorrect: false,
        timeSpent: 85
      }
    ],
    score: 1420,
    percentage: 88.75,
    timeSpent: 3965,
    status: 'completed'
  },

  {
    id: 'attempt-002',
    userId: 'user-001',
    testId: 'ptest-002',
    startedAt: new Date('2026-04-22T09:00:00'),
    completedAt: new Date('2026-04-22T12:05:00'),
    answers: [
      {
        questionId: 'tq-001',
        answer: 'opt-001-b',
        isCorrect: true,
        timeSpent: 40
      },
      {
        questionId: 'tq-002',
        answer: 'opt-002-b',
        isCorrect: true,
        timeSpent: 55
      },
      {
        questionId: 'tq-003',
        answer: 'opt-003-b',
        isCorrect: false,
        timeSpent: 120
      },
      {
        questionId: 'tq-004',
        answer: 'opt-004-b',
        isCorrect: true,
        timeSpent: 25
      },
      {
        questionId: 'tq-005',
        answer: 'opt-005-a',
        isCorrect: true,
        timeSpent: 45
      },
      {
        questionId: 'tq-006',
        answer: 'opt-006-b',
        isCorrect: true,
        timeSpent: 80
      },
      {
        questionId: 'tq-007',
        answer: 'An essay about renewable energy with better analysis',
        isCorrect: true,
        timeSpent: 2500
      },
      {
        questionId: 'tq-008',
        answer: 'opt-008-a',
        isCorrect: true,
        timeSpent: 50
      },
      {
        questionId: 'tq-009',
        answer: 'opt-009-b',
        isCorrect: true,
        timeSpent: 35
      },
      {
        questionId: 'tq-010',
        answer: 'opt-010-b',
        isCorrect: true,
        timeSpent: 90
      }
    ],
    score: 1480,
    percentage: 92.5,
    timeSpent: 3840,
    status: 'completed'
  }
];

/**
 * Calculate test performance metrics
 */
export const calculatePerformanceMetrics = (result: TestAttempt) => {
  const correctAnswers = result.answers.filter(a => a.isCorrect).length;
  const totalQuestions = result.answers.length;
  const accuracy = (correctAnswers / totalQuestions) * 100;
  const averageTimePerQuestion = result.timeSpent / totalQuestions;

  return {
    correctAnswers,
    totalQuestions,
    accuracy: Math.round(accuracy),
    averageTimePerQuestion: Math.round(averageTimePerQuestion),
    timePercentage: Math.round((result.timeSpent / (result.answers.length * 120)) * 100) // Assuming 2 min per question
  };
};

/**
 * Calculate score by section
 */
export const calculateSectionScores = (result: TestAttempt, sections: any[]) => {
  const sectionScores: Record<string, { correct: number; total: number; percentage: number }> = {};

  sections.forEach(section => {
    const sectionAnswers = result.answers.filter(a =>
      section.questions.some((q: any) => q.id === a.questionId)
    );

    const correct = sectionAnswers.filter(a => a.isCorrect).length;
    const total = sectionAnswers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    sectionScores[section.name] = { correct, total, percentage };
  });

  return sectionScores;
};

/**
 * Get test result by ID
 */
export const getTestResultById = (resultId: string): TestAttempt | undefined => {
  return sampleTestResults.find(r => r.id === resultId);
};

/**
 * Get all test results for a user
 */
export const getUserTestResults = (userId: string): TestAttempt[] => {
  return sampleTestResults.filter(r => r.userId === userId);
};

/**
 * Get test results by test ID
 */
export const getTestResults = (testId: string): TestAttempt[] => {
  return sampleTestResults.filter(r => r.testId === testId);
};

/**
 * Calculate improvement between tests
 */
export const calculateImprovement = (previousScore: number, currentScore: number) => {
  const difference = currentScore - previousScore;
  const percentage = previousScore > 0 ? ((difference / previousScore) * 100).toFixed(1) : '0';

  return {
    difference,
    percentage: parseFloat(percentage),
    improved: difference > 0
  };
};

/**
 * Get user's test statistics
 */
export const getUserTestStatistics = (userId: string) => {
  const results = getUserTestResults(userId);

  if (results.length === 0) {
    return null;
  }

  const scores = results.map(r => r.score);
  const percentages = results.map(r => r.percentage);

  return {
    testsTaken: results.length,
    averageScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
    highestScore: Math.max(...scores),
    lowestScore: Math.min(...scores),
    averagePercentage: Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length),
    lastTestDate: results[results.length - 1].completedAt,
    improvement: results.length > 1 ? calculateImprovement(results[0].score, results[results.length - 1].score) : null
  };
};
