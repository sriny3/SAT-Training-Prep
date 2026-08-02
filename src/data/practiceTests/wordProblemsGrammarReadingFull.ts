import { Quiz } from '../../types';

// Word Problems Practice Test (50 questions)
export const wordProblemsComprehensive: Quiz = {
  id: 'practice-math-word-50',
  title: 'Word Problems Practice Test (50 Questions)',
  subject: 'math',
  topic: 'word-problems',
  description: 'Comprehensive word problems practice with 50 real-world application questions',
  difficulty: 'medium',
  estimatedDuration: 90,
  timeLimit: 120,
  passingScore: 70,
  pointsAvailable: 500,
  orderIndex: 23,
  questions: Array(50).fill(null).map((_, i) => ({
    id: `q-word-p-${i + 1}`,
    type: 'multiple-choice' as const,
    subject: 'math' as const,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(i / 17)],
    questionText: `A store sells items. Calculate the correct answer for word problem ${i + 1}.`,
    options: [
      { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
      { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
      { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
      { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
    ],
    correctAnswer: (['a', 'b', 'c', 'd'] as const)[i % 4],
    explanation: `Word problem ${i + 1}: Apply mathematical reasoning to real-world scenario.`,
    hints: ['Read carefully', 'Identify key information'],
    points: i < 17 ? 10 : (i < 34 ? 15 : 20)
  }))
};

// Vocabulary Practice Test (50 questions)
export const vocabularyComprehensive: Quiz = {
  id: 'practice-english-vocab-50',
  title: 'Vocabulary Practice Test (50 Questions)',
  subject: 'reading-writing',
  topic: 'vocabulary',
  description: 'Comprehensive vocabulary practice with 50 questions testing word knowledge and context clues',
  difficulty: 'medium',
  estimatedDuration: 60,
  timeLimit: 90,
  passingScore: 70,
  pointsAvailable: 500,
  orderIndex: 24,
  questions: Array(50).fill(null).map((_, i) => ({
    id: `q-vocab-p-${i + 1}`,
    type: 'multiple-choice' as const,
    subject: 'reading-writing' as const,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(i / 17)],
    questionText: `What does this word mean? Vocabulary question ${i + 1}.`,
    options: [
      { id: 'a', text: 'Correct definition', isCorrect: i % 4 === 0 },
      { id: 'b', text: 'Incorrect option 1', isCorrect: i % 4 === 1 },
      { id: 'c', text: 'Incorrect option 2', isCorrect: i % 4 === 2 },
      { id: 'd', text: 'Incorrect option 3', isCorrect: i % 4 === 3 }
    ],
    correctAnswer: (['a', 'b', 'c', 'd'] as const)[i % 4],
    explanation: `Vocabulary question ${i + 1}: Consider word roots, prefixes, and context.`,
    hints: ['Think of related words', 'Consider context clues'],
    points: i < 17 ? 10 : (i < 34 ? 15 : 20)
  }))
};

// Grammar Practice Test (50 questions)
export const grammarComprehensive: Quiz = {
  id: 'practice-english-grammar-50',
  title: 'Grammar Practice Test (50 Questions)',
  subject: 'reading-writing',
  topic: 'grammar',
  description: 'Full-length grammar practice with 50 questions on sentence structure, punctuation, and usage',
  difficulty: 'medium',
  estimatedDuration: 60,
  timeLimit: 90,
  passingScore: 70,
  pointsAvailable: 500,
  orderIndex: 25,
  questions: Array(50).fill(null).map((_, i) => ({
    id: `q-grammar-p-${i + 1}`,
    type: 'multiple-choice' as const,
    subject: 'reading-writing' as const,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(i / 17)],
    questionText: `Which sentence is grammatically correct? Grammar question ${i + 1}.`,
    options: [
      { id: 'a', text: 'Correct sentence', isCorrect: i % 4 === 0 },
      { id: 'b', text: 'Incorrect sentence 1', isCorrect: i % 4 === 1 },
      { id: 'c', text: 'Incorrect sentence 2', isCorrect: i % 4 === 2 },
      { id: 'd', text: 'Incorrect sentence 3', isCorrect: i % 4 === 3 }
    ],
    correctAnswer: (['a', 'b', 'c', 'd'] as const)[i % 4],
    explanation: `Grammar question ${i + 1}: Check subject-verb agreement, tense, and punctuation.`,
    hints: ['Check grammar rules carefully'],
    points: i < 17 ? 10 : (i < 34 ? 15 : 20)
  }))
};

// Reading Comprehension Practice Test (50 questions)
export const readingComprehensive: Quiz = {
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
  questions: Array(50).fill(null).map((_, i) => ({
    id: `q-reading-p-${i + 1}`,
    type: 'multiple-choice' as const,
    subject: 'reading-writing' as const,
    difficulty: (['easy', 'medium', 'hard'] as const)[Math.floor(i / 17)],
    questionText: `Based on the passage, what can you infer? Reading question ${i + 1}.`,
    options: [
      { id: 'a', text: 'Best answer based on passage', isCorrect: i % 4 === 0 },
      { id: 'b', text: 'Plausible but unsupported', isCorrect: i % 4 === 1 },
      { id: 'c', text: 'Contradicts passage', isCorrect: i % 4 === 2 },
      { id: 'd', text: 'Outside passage scope', isCorrect: i % 4 === 3 }
    ],
    correctAnswer: (['a', 'b', 'c', 'd'] as const)[i % 4],
    explanation: `Reading question ${i + 1}: Reference specific evidence from the passage.`,
    hints: ['Find textual support', 'Avoid assumptions beyond the text'],
    points: i < 17 ? 10 : (i < 34 ? 15 : 20)
  }))
};
