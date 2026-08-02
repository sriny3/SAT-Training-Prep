import { Question } from '../../types';

export const testQuestions: Question[] = [
  // Reading & Writing Questions
  {
    id: 'tq-001',
    type: 'multiple-choice',
    subject: 'reading-writing',
    difficulty: 'easy',
    questionText: 'What does the passage primarily discuss?',
    context: 'The passage is about the history of the internet and its impact on society.',
    options: [
      { id: 'opt-001-a', text: 'The technical architecture of the internet', isCorrect: false },
      { id: 'opt-001-b', text: 'The social and cultural impact of the internet', isCorrect: true },
      { id: 'opt-001-c', text: 'Methods for improving internet security', isCorrect: false },
      { id: 'opt-001-d', text: 'The cost of internet infrastructure', isCorrect: false }
    ],
    correctAnswer: 'opt-001-b',
    explanation: 'The passage focuses on how the internet has changed society and culture, not the technical details or costs.',
    hints: ['Look for the main idea', 'What is discussed throughout the passage?'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-002',
    type: 'multiple-choice',
    subject: 'reading-writing',
    difficulty: 'medium',
    questionText: 'The author\'s tone in this passage is best described as:',
    context: 'The passage discusses the challenges of climate change with both urgency and hope.',
    options: [
      { id: 'opt-002-a', text: 'Pessimistic and dismissive', isCorrect: false },
      { id: 'opt-002-b', text: 'Urgent yet optimistic', isCorrect: true },
      { id: 'opt-002-c', text: 'Sarcastic and critical', isCorrect: false },
      { id: 'opt-002-d', text: 'Neutral and informative', isCorrect: false }
    ],
    correctAnswer: 'opt-002-b',
    explanation: 'The passage balances the serious nature of climate change with hope for solutions.',
    hints: ['Notice the balance between challenges and solutions', 'What feeling does the author convey?'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-003',
    type: 'multiple-choice',
    subject: 'reading-writing',
    difficulty: 'hard',
    questionText: 'Which choice best maintains parallel structure in the sentence?',
    context: 'The student likes reading books, ___, and to solve math problems.',
    options: [
      { id: 'opt-003-a', text: 'writing essays', isCorrect: true },
      { id: 'opt-003-b', text: 'to write essays', isCorrect: false },
      { id: 'opt-003-c', text: 'the writing of essays', isCorrect: false },
      { id: 'opt-003-d', text: 'essays writing', isCorrect: false }
    ],
    correctAnswer: 'opt-003-a',
    explanation: 'Parallel structure requires "reading books, writing essays, and solving math problems" - all gerunds/present participles.',
    hints: ['Check if all items in the list follow the same grammatical form', 'What form are the other items in?'],
    points: 10,
    timeLimit: 60
  },

  // Math Questions
  {
    id: 'tq-004',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'easy',
    questionText: 'Solve for x: 2x + 5 = 13',
    options: [
      { id: 'opt-004-a', text: 'x = 3', isCorrect: false },
      { id: 'opt-004-b', text: 'x = 4', isCorrect: true },
      { id: 'opt-004-c', text: 'x = 5', isCorrect: false },
      { id: 'opt-004-d', text: 'x = 6', isCorrect: false }
    ],
    correctAnswer: 'opt-004-b',
    explanation: '2x + 5 = 13 → 2x = 8 → x = 4',
    hints: ['Subtract 5 from both sides', 'Then divide by 2'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-005',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'If a right triangle has legs of length 3 and 4, what is the length of the hypotenuse?',
    options: [
      { id: 'opt-005-a', text: '5', isCorrect: true },
      { id: 'opt-005-b', text: '6', isCorrect: false },
      { id: 'opt-005-c', text: '7', isCorrect: false },
      { id: 'opt-005-d', text: 'sqrt(25)', isCorrect: false }
    ],
    correctAnswer: 'opt-005-a',
    explanation: 'Using the Pythagorean theorem: a² + b² = c² → 3² + 4² = 9 + 16 = 25 → c = 5',
    hints: ['Use the Pythagorean theorem', 'a² + b² = c²'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-006',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'If f(x) = x² - 3x + 2, find f(4)',
    options: [
      { id: 'opt-006-a', text: '4', isCorrect: false },
      { id: 'opt-006-b', text: '6', isCorrect: true },
      { id: 'opt-006-c', text: '8', isCorrect: false },
      { id: 'opt-006-d', text: '10', isCorrect: false }
    ],
    correctAnswer: 'opt-006-b',
    explanation: 'f(4) = 4² - 3(4) + 2 = 16 - 12 + 2 = 6',
    hints: ['Substitute 4 for x', 'Follow order of operations'],
    points: 10,
    timeLimit: 60
  },

  // Essay Questions
  {
    id: 'tq-007',
    type: 'essay',
    subject: 'essay',
    difficulty: 'medium',
    questionText: 'Write an essay analyzing the main argument of the provided passage and evaluate its effectiveness.',
    context: 'A passage about renewable energy sources and their importance for the future.',
    correctAnswer: 'See rubric for scoring criteria',
    explanation: 'Your essay should identify the main claim, analyze supporting evidence, and evaluate the argument\'s persuasiveness.',
    hints: ['Start with identifying the thesis', 'Analyze how evidence supports the claim', 'Consider counterarguments'],
    points: 50,
    timeLimit: 50
  },

  {
    id: 'tq-008',
    type: 'multiple-choice',
    subject: 'reading-writing',
    difficulty: 'medium',
    questionText: 'Which revision of the sentence is most effective?',
    context: 'The experiment was conducted by scientists, which was important for understanding the disease.',
    options: [
      { id: 'opt-008-a', text: 'The experiment conducted by scientists was important for understanding the disease.', isCorrect: true },
      { id: 'opt-008-b', text: 'Scientists conducted an important experiment that was for understanding the disease.', isCorrect: false },
      { id: 'opt-008-c', text: 'The disease was understood by scientists conducting an important experiment.', isCorrect: false },
      { id: 'opt-008-d', text: 'Important for understanding the disease, scientists conducted the experiment.', isCorrect: false }
    ],
    correctAnswer: 'opt-008-a',
    explanation: 'This version is most concise and clear, eliminating the awkward "which was" construction.',
    hints: ['Look for the most concise phrasing', 'Avoid weak "which" clauses'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-009',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'What percent of 80 is 20?',
    options: [
      { id: 'opt-009-a', text: '20%', isCorrect: false },
      { id: 'opt-009-b', text: '25%', isCorrect: true },
      { id: 'opt-009-c', text: '30%', isCorrect: false },
      { id: 'opt-009-d', text: '40%', isCorrect: false }
    ],
    correctAnswer: 'opt-009-b',
    explanation: '20/80 = 1/4 = 0.25 = 25%',
    hints: ['Set up the equation: x% × 80 = 20', 'Solve for x'],
    points: 10,
    timeLimit: 60
  },

  {
    id: 'tq-010',
    type: 'multiple-choice',
    subject: 'reading-writing',
    difficulty: 'hard',
    questionText: 'The author\'s reference to "the digital age" serves to:',
    context: 'Passage discusses how technology has transformed workplace communication.',
    options: [
      { id: 'opt-010-a', text: 'Criticize the loss of personal interaction', isCorrect: false },
      { id: 'opt-010-b', text: 'Establish a timeframe for the changes discussed', isCorrect: true },
      { id: 'opt-010-c', text: 'Introduce a historical comparison', isCorrect: false },
      { id: 'opt-010-d', text: 'Provide a technical definition of the term', isCorrect: false }
    ],
    correctAnswer: 'opt-010-b',
    explanation: 'The reference to "the digital age" establishes when these workplace changes occurred.',
    hints: ['What does "the digital age" help establish?', 'How does it relate to the main topic?'],
    points: 10,
    timeLimit: 60
  }
];

/**
 * Get test questions by subject
 */
export const getQuestionsBySubject = (subject: 'reading-writing' | 'math' | 'essay') => {
  return testQuestions.filter(q => q.subject === subject);
};

/**
 * Get test questions by difficulty
 */
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
  return testQuestions.filter(q => q.difficulty === difficulty);
};

/**
 * Get random questions for a test
 */
export const getRandomQuestions = (count: number, subject?: string, difficulty?: string): Question[] => {
  let filtered = testQuestions;

  if (subject) {
    filtered = filtered.filter(q => q.subject === subject);
  }

  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  // Shuffle and return
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

/**
 * Calculate test statistics
 */
export const getTestQuestionStats = () => {
  return {
    totalQuestions: testQuestions.length,
    bySubject: {
      'reading-writing': getQuestionsBySubject('reading-writing').length,
      'math': getQuestionsBySubject('math').length,
      'essay': getQuestionsBySubject('essay').length
    },
    byDifficulty: {
      'easy': getQuestionsByDifficulty('easy').length,
      'medium': getQuestionsByDifficulty('medium').length,
      'hard': getQuestionsByDifficulty('hard').length
    }
  };
};
