import { Quiz } from '../../types';

export const topicPracticeTests: Quiz[] = [
  // MATH TOPIC PRACTICE TESTS (50 questions each)

  {
    id: 'practice-math-algebra-50',
    title: 'Algebra Practice Test (50 Questions)',
    subject: 'math',
    topic: 'algebra',
    description: 'Full-length algebra practice test with 50 questions covering all difficulty levels',
    difficulty: 'medium',
    estimatedDuration: 90,
    timeLimit: 120,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 20,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-algebra-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'math' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Algebra Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for algebra mastery.`,
      hints: ['Focus on the problem carefully'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  {
    id: 'practice-math-geometry-50',
    title: 'Geometry Practice Test (50 Questions)',
    subject: 'math',
    topic: 'geometry',
    description: 'Comprehensive geometry practice test with 50 questions covering shapes, angles, volume, and coordinates',
    difficulty: 'medium',
    estimatedDuration: 90,
    timeLimit: 120,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 21,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-geometry-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'math' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Geometry Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for geometry mastery.`,
      hints: ['Draw diagrams when needed'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  {
    id: 'practice-math-data-50',
    title: 'Data Analysis Practice Test (50 Questions)',
    subject: 'math',
    topic: 'data-analysis',
    description: 'Extensive data analysis practice test with 50 questions on statistics, probability, and percentages',
    difficulty: 'medium',
    estimatedDuration: 90,
    timeLimit: 120,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 22,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-data-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'math' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Data Analysis Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for data analysis mastery.`,
      hints: ['Carefully read all data provided'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  {
    id: 'practice-math-wordproblems-50',
    title: 'Word Problems Practice Test (50 Questions)',
    subject: 'math',
    topic: 'word-problems',
    description: 'Full-length word problems practice with 50 real-world application questions',
    difficulty: 'medium',
    estimatedDuration: 90,
    timeLimit: 120,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 23,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-wordproblems-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'math' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Word Problem Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for word problem mastery.`,
      hints: ['Identify what the question is asking'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  // ENGLISH TOPIC PRACTICE TESTS (50 questions each)

  {
    id: 'practice-english-vocabulary-50',
    title: 'Vocabulary Practice Test (50 Questions)',
    subject: 'reading-writing',
    topic: 'vocabulary',
    description: 'Comprehensive vocabulary practice test with 50 questions testing word knowledge and context clues',
    difficulty: 'medium',
    estimatedDuration: 60,
    timeLimit: 90,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 24,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-vocab-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'reading-writing' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Vocabulary Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for vocabulary mastery.`,
      hints: ['Consider word roots and context'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  {
    id: 'practice-english-grammar-50',
    title: 'Grammar Practice Test (50 Questions)',
    subject: 'reading-writing',
    topic: 'grammar',
    description: 'Full-length grammar practice test with 50 questions on sentence structure, punctuation, and usage',
    difficulty: 'medium',
    estimatedDuration: 60,
    timeLimit: 90,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 25,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-grammar-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'reading-writing' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Grammar Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for grammar mastery.`,
      hints: ['Check subject-verb agreement and tense'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  },

  {
    id: 'practice-english-reading-50',
    title: 'Reading Comprehension Practice Test (50 Questions)',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    description: 'Extensive reading comprehension practice with 50 questions on passages, main ideas, and inference',
    difficulty: 'medium',
    estimatedDuration: 75,
    timeLimit: 120,
    passingScore: 70,
    pointsAvailable: 500,
    orderIndex: 26,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: `q-reading-practice-${i + 1}`,
      type: 'multiple-choice' as const,
      subject: 'reading-writing' as const,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(i / 17)] as any,
      questionText: `Reading Comprehension Practice Question ${i + 1}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: ['a', 'b', 'c', 'd'][i % 4],
      explanation: `This is practice question ${i + 1} for reading comprehension mastery.`,
      hints: ['Re-read the passage carefully'],
      points: i < 17 ? 10 : (i < 34 ? 15 : 20)
    }))
  }
];
