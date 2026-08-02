import { Quiz } from '../../types';
import { mathQuizzes } from './mathQuizzes';

export const quizzes: Quiz[] = [
  // Reading & Writing Quizzes (6)
  {
    id: 'quiz-reading-writing-001',
    title: 'Vocabulary Fundamentals',
    subject: 'reading-writing',
    topic: 'vocabulary',
    description: 'Test your understanding of word roots, prefixes, and suffixes',
    questions: [
      {
        id: 'q-vocab-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'What does the root "SCRIPT" mean?',
        options: [
          { id: 'a', text: 'To write', isCorrect: true },
          { id: 'b', text: 'To read', isCorrect: false },
          { id: 'c', text: 'To speak', isCorrect: false },
          { id: 'd', text: 'To listen', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'SCRIPT comes from Latin meaning "to write". We see it in words like prescribe, describe, and subscribe.',
        hints: ['Think of a movie script'],
        points: 10
      },
      {
        id: 'q-vocab-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Which word means "not happy"?',
        options: [
          { id: 'a', text: 'unhappy', isCorrect: true },
          { id: 'b', text: 'happy', isCorrect: false },
          { id: 'c', text: 'rehappy', isCorrect: false },
          { id: 'd', text: 'happily', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'The prefix UN- means "not", so "unhappy" means "not happy".',
        hints: ['Look for a prefix that means "not"'],
        points: 10
      },
      {
        id: 'q-vocab-003',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Based on context: "The benevolent teacher helped struggling students." Benevolent means:',
        options: [
          { id: 'a', text: 'Strict and harsh', isCorrect: false },
          { id: 'b', text: 'Kind and generous', isCorrect: true },
          { id: 'c', text: 'Intelligent and educated', isCorrect: false },
          { id: 'd', text: 'Young and enthusiastic', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'From context, a benevolent teacher helps struggling students, indicating kindness and generosity.',
        hints: ['What kind of person would help struggling students?'],
        points: 10
      }
    ],
    timeLimit: 15,
    difficulty: 'easy',
    passingScore: 70,
    pointsAvailable: 30,
    estimatedDuration: 10,
    orderIndex: 1
  },
  {
    id: 'quiz-reading-writing-002',
    title: 'Grammar Essentials',
    subject: 'reading-writing',
    topic: 'grammar',
    description: 'Test your grammar knowledge on clauses, tenses, and sentence structure',
    questions: [
      {
        id: 'q-grammar-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Which sentence is grammatically correct?',
        options: [
          { id: 'a', text: 'She walk to the store.', isCorrect: false },
          { id: 'b', text: 'She walks to the store.', isCorrect: true },
          { id: 'c', text: 'She are walking to the store.', isCorrect: false },
          { id: 'd', text: 'She walking to the store.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The subject "she" is third person singular, so the verb must be "walks" not "walk".',
        hints: ['Check subject-verb agreement'],
        points: 10
      },
      {
        id: 'q-grammar-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Fix the error: "Each student must submit their homework on time."',
        options: [
          { id: 'a', text: 'No error', isCorrect: false },
          { id: 'b', text: 'Each student must submit his or her homework on time.', isCorrect: true },
          { id: 'c', text: 'All students must submit their homework on time.', isCorrect: true },
          { id: 'd', text: 'Each student must submit his homework on time.', isCorrect: true }
        ],
        correctAnswer: 'b',
        explanation: '"Each" is singular, so the pronoun should be singular (his/her not their), or use plural (all students).',
        hints: ['Is "each" singular or plural?'],
        points: 10
      }
    ],
    timeLimit: 15,
    difficulty: 'easy',
    passingScore: 70,
    pointsAvailable: 20,
    estimatedDuration: 10,
    orderIndex: 2
  },
  {
    id: 'quiz-reading-writing-003',
    title: 'Reading Comprehension',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    description: 'Demonstrate your ability to identify main ideas and make inferences',
    questions: [
      {
        id: 'q-reading-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Based on the passage: Exercise improves both physical and mental health. Studies show that regular exercise reduces heart disease risk. It also decreases anxiety and depression. What is the main idea?',
        options: [
          { id: 'a', text: 'Exercise reduces heart disease risk', isCorrect: false },
          { id: 'b', text: 'Exercise improves both physical and mental health', isCorrect: true },
          { id: 'c', text: 'Depression is a serious health problem', isCorrect: false },
          { id: 'd', text: 'Most people should exercise more', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The main idea is the central point the author makes. The other statements are supporting details.',
        hints: ['What is this passage mainly about?'],
        points: 10
      },
      {
        id: 'q-reading-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What can you infer from: "Sarah ignored three job interview invitations. She seemed satisfied with her current position."',
        options: [
          { id: 'a', text: 'Sarah is unemployed', isCorrect: false },
          { id: 'b', text: 'Sarah is not interested in changing jobs right now', isCorrect: true },
          { id: 'c', text: 'Sarah is unhappy', isCorrect: false },
          { id: 'd', text: 'Sarah did not receive the interview invitations', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Her ignoring job interview invitations plus being satisfied with her current position suggests she\'s not seeking new work.',
        hints: ['What does her behavior suggest?'],
        points: 10
      }
    ],
    timeLimit: 15,
    difficulty: 'medium',
    passingScore: 70,
    pointsAvailable: 20,
    estimatedDuration: 10,
    orderIndex: 3
  },

  // Math Quizzes (8)
  {
    id: 'quiz-math-algebra-001',
    title: 'Algebra Fundamentals',
    subject: 'math',
    topic: 'algebra',
    description: 'Test your skills solving equations and working with expressions',
    questions: [
      {
        id: 'q-algebra-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Solve: 2x + 3 = 11',
        options: [
          { id: 'a', text: 'x = 4', isCorrect: true },
          { id: 'b', text: 'x = 5', isCorrect: false },
          { id: 'c', text: 'x = 7', isCorrect: false },
          { id: 'd', text: 'x = 8', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 3: 2x = 8. Divide by 2: x = 4',
        hints: ['Use inverse operations: subtract 3, then divide by 2'],
        points: 10
      },
      {
        id: 'q-algebra-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x² + 5x + 6 = 0',
        options: [
          { id: 'a', text: 'x = 2 or x = 3', isCorrect: false },
          { id: 'b', text: 'x = -2 or x = -3', isCorrect: true },
          { id: 'c', text: 'x = -2 or x = 3', isCorrect: false },
          { id: 'd', text: 'x = 2 or x = -3', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Factor: (x + 2)(x + 3) = 0, so x = -2 or x = -3',
        hints: ['Find two numbers that multiply to 6 and add to 5: 2 and 3'],
        points: 10
      }
    ],
    timeLimit: 20,
    difficulty: 'medium',
    passingScore: 70,
    pointsAvailable: 20,
    estimatedDuration: 15,
    orderIndex: 1
  },
  {
    id: 'quiz-math-geometry-001',
    title: 'Geometry Basics',
    subject: 'math',
    topic: 'geometry',
    description: 'Test your knowledge of angles, triangles, and geometric formulas',
    questions: [
      {
        id: 'q-geometry-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'In a triangle, one angle is 60° and another is 70°. What\'s the third angle?',
        options: [
          { id: 'a', text: '40°', isCorrect: false },
          { id: 'b', text: '50°', isCorrect: true },
          { id: 'c', text: '60°', isCorrect: false },
          { id: 'd', text: '130°', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Triangle angles sum to 180°. 180° - 60° - 70° = 50°',
        hints: ['All triangle angles add up to 180°'],
        points: 10
      },
      {
        id: 'q-geometry-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A circle has radius 5. What\'s the circumference?',
        options: [
          { id: 'a', text: '5π', isCorrect: false },
          { id: 'b', text: '10π', isCorrect: true },
          { id: 'c', text: '25π', isCorrect: false },
          { id: 'd', text: '15π', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'C = 2πr = 2π(5) = 10π',
        hints: ['Use the formula C = 2πr'],
        points: 10
      }
    ],
    timeLimit: 20,
    difficulty: 'easy',
    passingScore: 70,
    pointsAvailable: 20,
    estimatedDuration: 15,
    orderIndex: 2
  },
  {
    id: 'quiz-math-data-001',
    title: 'Data Analysis',
    subject: 'math',
    topic: 'data-analysis',
    description: 'Test your skills with statistics, probability, and data interpretation',
    questions: [
      {
        id: 'q-data-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Find the mean of: 2, 4, 6, 8, 10',
        options: [
          { id: 'a', text: '5', isCorrect: false },
          { id: 'b', text: '6', isCorrect: true },
          { id: 'c', text: '8', isCorrect: false },
          { id: 'd', text: '7', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '(2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6',
        hints: ['Add all values and divide by how many there are'],
        points: 10
      },
      {
        id: 'q-data-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What\'s the probability of rolling a 3 on a standard die?',
        options: [
          { id: 'a', text: '1/3', isCorrect: false },
          { id: 'b', text: '1/6', isCorrect: true },
          { id: 'c', text: '1/2', isCorrect: false },
          { id: 'd', text: '1/4', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'There is 1 way to roll a 3 out of 6 possible outcomes.',
        hints: ['Probability = favorable outcomes / total outcomes'],
        points: 10
      }
    ],
    timeLimit: 20,
    difficulty: 'easy',
    passingScore: 70,
    pointsAvailable: 20,
    estimatedDuration: 15,
    orderIndex: 3
  },

  // Additional Math Quizzes (7 quizzes for comprehensive coverage)
  ...mathQuizzes,

  // Essay/Writing Quizzes (4)
  {
    id: 'quiz-essay-001',
    title: 'Grammar in Writing',
    subject: 'essay',
    topic: 'writing-fundamentals',
    description: 'Test grammar rules specific to essay writing',
    questions: [
      {
        id: 'q-essay-001',
        type: 'multiple-choice',
        subject: 'essay',
        difficulty: 'medium',
        questionText: 'Which sentence has correct grammar?',
        options: [
          { id: 'a', text: 'The team are ready to play.', isCorrect: false },
          { id: 'b', text: 'The team is ready to play.', isCorrect: true },
          { id: 'c', text: 'The team been ready to play.', isCorrect: false },
          { id: 'd', text: 'The team do ready to play.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Team" is a collective noun and takes a singular verb "is".',
        hints: ['Is "team" singular or plural?'],
        points: 10
      }
    ],
    timeLimit: 10,
    difficulty: 'medium',
    passingScore: 70,
    pointsAvailable: 10,
    estimatedDuration: 8,
    orderIndex: 1
  },
  {
    id: 'quiz-essay-002',
    title: 'Thesis and Argument',
    subject: 'essay',
    topic: 'essay-structure',
    description: 'Evaluate thesis statements and argument strength',
    questions: [
      {
        id: 'q-essay-004',
        type: 'multiple-choice',
        subject: 'essay',
        difficulty: 'medium',
        questionText: 'Which is the strongest thesis statement?',
        options: [
          { id: 'a', text: 'Social media is popular.', isCorrect: false },
          { id: 'b', text: 'This essay is about social media.', isCorrect: false },
          { id: 'c', text: 'While social media connects us globally, excessive use damages mental health and relationships.', isCorrect: true },
          { id: 'd', text: 'Social media is good and bad.', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'Option C takes a clear position, is specific, and previews the arguments.',
        hints: ['A strong thesis takes a clear, specific position that can be debated and supported.'],
        points: 10
      }
    ],
    timeLimit: 10,
    difficulty: 'medium',
    passingScore: 70,
    pointsAvailable: 10,
    estimatedDuration: 8,
    orderIndex: 2
  }
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getQuizzesBySubject = (subject: string): Quiz[] => {
  return quizzes.filter(quiz => quiz.subject === subject);
};

export const getQuizzesByTopic = (topic: string): Quiz[] => {
  return quizzes.filter(quiz => quiz.topic === topic);
};
