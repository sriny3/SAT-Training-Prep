import { Question, Subject } from '../../types';

/**
 * LESSON-SPECIFIC PRACTICE QUESTIONS
 * These are original questions unique to each lesson, separate from quiz and practice test questions
 * Each lesson references these by ID via the practiceQuestions array
 *
 * Question ID Naming Convention:
 * lesson-{topic}-{lessonNum}-q{questionNum}
 * Example: lesson-alg-exp-001-q01 (Algebra lesson 1, question 1)
 */

// ============================================================================
// ALGEBRA LESSONS (5 total)
// ============================================================================

// ALGEBRA LESSON 1: LINEAR EQUATIONS (20 questions)
export const algebraLinearEquationsQuestions: Question[] = [
  {
    id: 'lesson-alg-exp-001-q01',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'easy',
    questionText: 'Solve: x + 9 = 14',
    options: [
      { id: 'a', text: 'x = 5', isCorrect: true },
      { id: 'b', text: 'x = 23', isCorrect: false },
      { id: 'c', text: 'x = 4', isCorrect: false },
      { id: 'd', text: 'x = 9', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 9 from both sides: x = 14 - 9 = 5. Check: 5 + 9 = 14 ✓',
    hints: ['Move the +9 to the other side by subtracting'],
    points: 10,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q02',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'easy',
    questionText: 'Solve: x - 6 = 2',
    options: [
      { id: 'a', text: 'x = 8', isCorrect: true },
      { id: 'b', text: 'x = -4', isCorrect: false },
      { id: 'c', text: 'x = 12', isCorrect: false },
      { id: 'd', text: 'x = 3', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Add 6 to both sides: x = 2 + 6 = 8. Check: 8 - 6 = 2 ✓',
    hints: ['To undo subtraction, add to both sides'],
    points: 10,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q03',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'easy',
    questionText: 'Solve: 5x = 35',
    options: [
      { id: 'a', text: 'x = 7', isCorrect: true },
      { id: 'b', text: 'x = 30', isCorrect: false },
      { id: 'c', text: 'x = 40', isCorrect: false },
      { id: 'd', text: 'x = 6', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Divide both sides by 5: x = 35 ÷ 5 = 7. Check: 5(7) = 35 ✓',
    hints: ['Divide both sides by the coefficient'],
    points: 10,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q04',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'easy',
    questionText: 'Solve: x/2 = 9',
    options: [
      { id: 'a', text: 'x = 18', isCorrect: true },
      { id: 'b', text: 'x = 11', isCorrect: false },
      { id: 'c', text: 'x = 7', isCorrect: false },
      { id: 'd', text: 'x = 4.5', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Multiply both sides by 2: x = 9 × 2 = 18. Check: 18/2 = 9 ✓',
    hints: ['Multiply to undo division'],
    points: 10,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q05',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: 2x + 3 = 11',
    options: [
      { id: 'a', text: 'x = 4', isCorrect: true },
      { id: 'b', text: 'x = 7', isCorrect: false },
      { id: 'c', text: 'x = 5', isCorrect: false },
      { id: 'd', text: 'x = 8', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 3: 2x = 8. Divide by 2: x = 4. Check: 2(4) + 3 = 8 + 3 = 11 ✓',
    hints: ['Two steps: subtract first, then divide'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q06',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: 3x - 7 = 8',
    options: [
      { id: 'a', text: 'x = 5', isCorrect: true },
      { id: 'b', text: 'x = 3', isCorrect: false },
      { id: 'c', text: 'x = 1', isCorrect: false },
      { id: 'd', text: 'x = 6', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Add 7: 3x = 15. Divide by 3: x = 5. Check: 3(5) - 7 = 15 - 7 = 8 ✓',
    hints: ['First add 7 to both sides'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q07',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: 4x + 2 = 18',
    options: [
      { id: 'a', text: 'x = 4', isCorrect: true },
      { id: 'b', text: 'x = 5', isCorrect: false },
      { id: 'c', text: 'x = 3', isCorrect: false },
      { id: 'd', text: 'x = 6', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 2: 4x = 16. Divide by 4: x = 4. Check: 4(4) + 2 = 16 + 2 = 18 ✓',
    hints: ['Subtract the constant first'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q08',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: -2x + 5 = 11',
    options: [
      { id: 'a', text: 'x = -3', isCorrect: true },
      { id: 'b', text: 'x = 3', isCorrect: false },
      { id: 'c', text: 'x = 8', isCorrect: false },
      { id: 'd', text: 'x = -8', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 5: -2x = 6. Divide by -2: x = -3. Check: -2(-3) + 5 = 6 + 5 = 11 ✓',
    hints: ['Watch the negative sign when dividing'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q09',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: x/3 - 4 = 2',
    options: [
      { id: 'a', text: 'x = 18', isCorrect: true },
      { id: 'b', text: 'x = 6', isCorrect: false },
      { id: 'c', text: 'x = 12', isCorrect: false },
      { id: 'd', text: 'x = 9', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Add 4: x/3 = 6. Multiply by 3: x = 18. Check: 18/3 - 4 = 6 - 4 = 2 ✓',
    hints: ['Add 4 first, then multiply by 3'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q10',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'medium',
    questionText: 'Solve: 5 + 2x = 13',
    options: [
      { id: 'a', text: 'x = 4', isCorrect: true },
      { id: 'b', text: 'x = 9', isCorrect: false },
      { id: 'c', text: 'x = 3', isCorrect: false },
      { id: 'd', text: 'x = 8', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 5: 2x = 8. Divide by 2: x = 4. Check: 5 + 2(4) = 5 + 8 = 13 ✓',
    hints: ['The constant can be on either side'],
    points: 15,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q11',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: 3(x - 2) = 12',
    options: [
      { id: 'a', text: 'x = 6', isCorrect: true },
      { id: 'b', text: 'x = 4', isCorrect: false },
      { id: 'c', text: 'x = 8', isCorrect: false },
      { id: 'd', text: 'x = 2', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Divide by 3: x - 2 = 4. Add 2: x = 6. Check: 3(6-2) = 3(4) = 12 ✓',
    hints: ['Divide before distributing'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q12',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: 2(x + 3) - 4 = 10',
    options: [
      { id: 'a', text: 'x = 4', isCorrect: true },
      { id: 'b', text: 'x = 7', isCorrect: false },
      { id: 'c', text: 'x = 5', isCorrect: false },
      { id: 'd', text: 'x = 3', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Add 4: 2(x+3) = 14. Divide by 2: x+3 = 7. Subtract 3: x = 4. Check: 2(7) - 4 = 14 - 4 = 10 ✓',
    hints: ['Simplify before distributing'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q13',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: (x + 4)/2 = 6',
    options: [
      { id: 'a', text: 'x = 8', isCorrect: true },
      { id: 'b', text: 'x = 10', isCorrect: false },
      { id: 'c', text: 'x = 4', isCorrect: false },
      { id: 'd', text: 'x = 12', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Multiply by 2: x + 4 = 12. Subtract 4: x = 8. Check: (8+4)/2 = 12/2 = 6 ✓',
    hints: ['Multiply first to clear the fraction'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q14',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: 4x - 2(x - 3) = 12',
    options: [
      { id: 'a', text: 'x = 3', isCorrect: true },
      { id: 'b', text: 'x = 6', isCorrect: false },
      { id: 'c', text: 'x = 2', isCorrect: false },
      { id: 'd', text: 'x = 4', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Distribute: 4x - 2x + 6 = 12. Combine: 2x + 6 = 12. Subtract 6: 2x = 6. Divide: x = 3. Check: 4(3) - 2(0) = 12 ✓',
    hints: ['Distribute the -2 first'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q15',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: -3x + 8 = 2',
    options: [
      { id: 'a', text: 'x = 2', isCorrect: true },
      { id: 'b', text: 'x = -2', isCorrect: false },
      { id: 'c', text: 'x = 3', isCorrect: false },
      { id: 'd', text: 'x = -3', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 8: -3x = -6. Divide by -3: x = 2. Check: -3(2) + 8 = -6 + 8 = 2 ✓',
    hints: ['Dividing negative by negative gives positive'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q16',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: 2x + 3x - 5 = 20',
    options: [
      { id: 'a', text: 'x = 5', isCorrect: true },
      { id: 'b', text: 'x = 4', isCorrect: false },
      { id: 'c', text: 'x = 3', isCorrect: false },
      { id: 'd', text: 'x = 6', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Combine like terms: 5x - 5 = 20. Add 5: 5x = 25. Divide: x = 5. Check: 2(5) + 3(5) - 5 = 10 + 15 - 5 = 20 ✓',
    hints: ['Simplify by combining like terms first'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q17',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'Solve: 0.5x + 2 = 5',
    options: [
      { id: 'a', text: 'x = 6', isCorrect: true },
      { id: 'b', text: 'x = 7', isCorrect: false },
      { id: 'c', text: 'x = 4', isCorrect: false },
      { id: 'd', text: 'x = 14', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 2: 0.5x = 3. Divide by 0.5 (multiply by 2): x = 6. Check: 0.5(6) + 2 = 3 + 2 = 5 ✓',
    hints: ['Dividing by 0.5 is the same as multiplying by 2'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q18',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'A shop sells notebooks for $3 each. If you spend $24, how many notebooks did you buy? Solve: 3x = 24',
    options: [
      { id: 'a', text: 'x = 8 notebooks', isCorrect: true },
      { id: 'b', text: 'x = 6 notebooks', isCorrect: false },
      { id: 'c', text: 'x = 27 notebooks', isCorrect: false },
      { id: 'd', text: 'x = 9 notebooks', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Divide both sides by 3: x = 24 ÷ 3 = 8. You bought 8 notebooks. Check: 3(8) = $24 ✓',
    hints: ['This is a real-world problem requiring linear equation solving'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q19',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'A taxi charges $5 base fare plus $2 per mile. If your total fare is $19, how many miles did you travel? Solve: 5 + 2x = 19',
    options: [
      { id: 'a', text: 'x = 7 miles', isCorrect: true },
      { id: 'b', text: 'x = 9.5 miles', isCorrect: false },
      { id: 'c', text: 'x = 12 miles', isCorrect: false },
      { id: 'd', text: 'x = 6 miles', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Subtract 5: 2x = 14. Divide by 2: x = 7. You traveled 7 miles. Check: 5 + 2(7) = 5 + 14 = $19 ✓',
    hints: ['Identify the base amount and the per-unit cost'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  },
  {
    id: 'lesson-alg-exp-001-q20',
    type: 'multiple-choice',
    subject: 'math',
    difficulty: 'hard',
    questionText: 'If you have $50 and buy items costing $12, $15, and some unknown amount, spending all $50 total, what was the unknown amount? Solve: 12 + 15 + x = 50',
    options: [
      { id: 'a', text: 'x = $23', isCorrect: true },
      { id: 'b', text: 'x = $27', isCorrect: false },
      { id: 'c', text: 'x = $38', isCorrect: false },
      { id: 'd', text: 'x = $25', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Combine: 27 + x = 50. Subtract 27: x = 23. The unknown amount was $23. Check: 12 + 15 + 23 = $50 ✓',
    hints: ['This real-world problem requires combining constants first'],
    points: 20,
    relatedLessonId: 'lesson-algebra-001'
  }
];

// PLACEHOLDER QUESTIONS FOR REMAINING LESSONS (to be expanded)
// These are minimal stub questions to allow the app to run while expansion continues

const createPlaceholderQuestions = (lessonNum: number, topicPrefix: string, subject: Subject = 'math', count: number = 20): Question[] => {
  const questions: Question[] = [];
  for (let i = 1; i <= count; i++) {
    const difficulty = i <= 4 ? 'easy' : i <= 10 ? 'medium' : 'hard';
    const points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 15 : 20;
    questions.push({
      id: `lesson-${topicPrefix}-${String(lessonNum).padStart(3, '0')}-q${String(i).padStart(2, '0')}`,
      type: 'multiple-choice',
      subject,
      difficulty,
      questionText: `Practice question ${i}`,
      options: [
        { id: 'a', text: 'Option A', isCorrect: i % 4 === 0 },
        { id: 'b', text: 'Option B', isCorrect: i % 4 === 1 },
        { id: 'c', text: 'Option C', isCorrect: i % 4 === 2 },
        { id: 'd', text: 'Option D', isCorrect: i % 4 === 3 }
      ],
      correctAnswer: String.fromCharCode(97 + (i % 4)),
      explanation: `This is a practice question.`,
      hints: ['Read the question carefully', 'Try working backwards from the answer choices'],
      points
    });
  }
  return questions;
};

// Generate placeholder questions for remaining lessons
const algebra002 = createPlaceholderQuestions(2, 'alg-sys');
const algebra003 = createPlaceholderQuestions(3, 'alg-quad');
const algebra004 = createPlaceholderQuestions(4, 'alg-poly');
const algebra005 = createPlaceholderQuestions(5, 'alg-ineq');

const geometry001 = createPlaceholderQuestions(1, 'geom-angle');
const geometry002 = createPlaceholderQuestions(2, 'geom-tri');
const geometry003 = createPlaceholderQuestions(3, 'geom-circle');
const geometry004 = createPlaceholderQuestions(4, 'geom-area');
const geometry005 = createPlaceholderQuestions(5, 'geom-solid');

const dataanalysis001 = createPlaceholderQuestions(1, 'data-stat');
const dataanalysis002 = createPlaceholderQuestions(2, 'data-prob');
const dataanalysis003 = createPlaceholderQuestions(3, 'data-pct');
const dataanalysis004 = createPlaceholderQuestions(4, 'data-ratio');
const dataanalysis005 = createPlaceholderQuestions(5, 'data-dist');

const wordproblems001 = createPlaceholderQuestions(1, 'word-basic');
const wordproblems002 = createPlaceholderQuestions(2, 'word-age');
const wordproblems003 = createPlaceholderQuestions(3, 'word-distance');
const wordproblems004 = createPlaceholderQuestions(4, 'word-work');
const wordproblems005 = createPlaceholderQuestions(5, 'word-mixture');

const vocabulary001 = createPlaceholderQuestions(1, 'vocab-context', 'reading-writing');
const vocabulary002 = createPlaceholderQuestions(2, 'vocab-roots', 'reading-writing');
const vocabulary003 = createPlaceholderQuestions(3, 'vocab-synonyms', 'reading-writing');
const vocabulary004 = createPlaceholderQuestions(4, 'vocab-academic', 'reading-writing');
const vocabulary005 = createPlaceholderQuestions(5, 'vocab-advanced', 'reading-writing');

const grammar001 = createPlaceholderQuestions(1, 'gram-agreement', 'reading-writing');
const grammar002 = createPlaceholderQuestions(2, 'gram-tense', 'reading-writing');
const grammar003 = createPlaceholderQuestions(3, 'gram-pronouns', 'reading-writing');
const grammar004 = createPlaceholderQuestions(4, 'gram-modifiers', 'reading-writing');
const grammar005 = createPlaceholderQuestions(5, 'gram-parallel', 'reading-writing');

const reading001 = createPlaceholderQuestions(1, 'read-main', 'reading-writing');
const reading002 = createPlaceholderQuestions(2, 'read-inference', 'reading-writing');
const reading003 = createPlaceholderQuestions(3, 'read-vocab', 'reading-writing');
const reading004 = createPlaceholderQuestions(4, 'read-tone', 'reading-writing');
const reading005 = createPlaceholderQuestions(5, 'read-structure', 'reading-writing');

const essay001 = createPlaceholderQuestions(1, 'essay-thesis', 'essay');
const essay002 = createPlaceholderQuestions(2, 'essay-structure', 'essay');
const essay003 = createPlaceholderQuestions(3, 'essay-evidence', 'essay');
const essay004 = createPlaceholderQuestions(4, 'essay-argument', 'essay');
const essay005 = createPlaceholderQuestions(5, 'essay-revision', 'essay');
const essay006 = createPlaceholderQuestions(6, 'essay-analysis', 'essay');
const essay007 = createPlaceholderQuestions(7, 'essay-synthesis', 'essay');
const essay008 = createPlaceholderQuestions(8, 'essay-rhetorical', 'essay');
const essay009 = createPlaceholderQuestions(9, 'essay-timed', 'essay');
const essay010 = createPlaceholderQuestions(10, 'essay-editing', 'essay');

// Export all lesson questions
export const allLessonPracticeQuestions: Question[] = [
  // Algebra
  ...algebraLinearEquationsQuestions,
  ...algebra002,
  ...algebra003,
  ...algebra004,
  ...algebra005,
  // Geometry
  ...geometry001,
  ...geometry002,
  ...geometry003,
  ...geometry004,
  ...geometry005,
  // Data Analysis
  ...dataanalysis001,
  ...dataanalysis002,
  ...dataanalysis003,
  ...dataanalysis004,
  ...dataanalysis005,
  // Word Problems
  ...wordproblems001,
  ...wordproblems002,
  ...wordproblems003,
  ...wordproblems004,
  ...wordproblems005,
  // Vocabulary
  ...vocabulary001,
  ...vocabulary002,
  ...vocabulary003,
  ...vocabulary004,
  ...vocabulary005,
  // Grammar
  ...grammar001,
  ...grammar002,
  ...grammar003,
  ...grammar004,
  ...grammar005,
  // Reading
  ...reading001,
  ...reading002,
  ...reading003,
  ...reading004,
  ...reading005,
  // Essay
  ...essay001,
  ...essay002,
  ...essay003,
  ...essay004,
  ...essay005,
  ...essay006,
  ...essay007,
  ...essay008,
  ...essay009,
  ...essay010
];
