import { Lesson } from '../../types';

/**
 * EXPANDED LESSON FORMAT WITH 20+ ORIGINAL PRACTICE QUESTIONS
 * This serves as a template for all other lessons
 * Each lesson now includes detailed questions specific to its content
 */

export const mathLessonsExpanded: Lesson[] = [
  // COMPREHENSIVE ALGEBRA LESSON WITH 20+ ORIGINAL QUESTIONS
  {
    id: 'lesson-algebra-expanded-001',
    title: 'Solving Linear Equations - Complete Mastery',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'easy',
    duration: 35, // Increased from 20
    description: 'Complete mastery of linear equations with 20+ practice questions, real-world applications, and detailed explanations.',
    content: {
      introduction: 'Linear equations are the foundation of algebra. In this comprehensive lesson, you\'ll master not just solving, but understanding why each step works. By the end, you\'ll be able to solve any single-variable linear equation confidently.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Linear Equation?'
        },
        {
          type: 'text',
          content: 'A linear equation is an equation where the variable has a power of 1. Examples: 2x + 3 = 7, 5 - 3x = 8, 4x = 20. Linear equations appear everywhere in real life: calculating costs, determining distances, predicting trends. The key principle: whatever operation you do to one side, you must do to the other side.'
        },
        {
          type: 'heading',
          content: 'The Balance Method - Core Concept'
        },
        {
          type: 'text',
          content: 'Think of an equation like a balanced scale. Both sides have equal weight. To keep it balanced, if you add weight to one side, you must add the same weight to the other. This is the fundamental principle behind solving equations.'
        },
        {
          type: 'heading',
          content: 'Step-by-Step Process'
        },
        {
          type: 'text',
          content: 'Step 1: Simplify both sides separately (combine like terms)\nStep 2: Move all variable terms to one side using addition/subtraction\nStep 3: Move all constants to the other side using addition/subtraction\nStep 4: Divide both sides by the coefficient to isolate the variable\nStep 5: Check your answer by substituting back into the original equation'
        },
        {
          type: 'heading',
          content: 'Real-World Application'
        },
        {
          type: 'text',
          content: 'Movie theater ticket problem: A ticket costs $12. If you spend $60 total, how many tickets did you buy? Equation: 12x = 60. Solution: x = 5 tickets. This simple linear equation solves a real problem!'
        }
      ],
      examples: [
        {
          title: 'Example 1: Simple Addition/Subtraction',
          problem: 'Solve: x + 7 = 15',
          solution: 'x + 7 = 15\nSubtract 7 from both sides\nx = 15 - 7\nx = 8',
          explanation: 'We subtract 7 (the addend) to isolate x. Check: 8 + 7 = 15 ✓'
        },
        {
          title: 'Example 2: Multiplication/Division',
          problem: 'Solve: 3x = 18',
          solution: '3x = 18\nDivide both sides by 3\nx = 18 ÷ 3\nx = 6',
          explanation: 'We divide by 3 (the coefficient) to get x alone. Check: 3(6) = 18 ✓'
        },
        {
          title: 'Example 3: Two-Step Equation',
          problem: 'Solve: 2x - 5 = 11',
          solution: '2x - 5 = 11\nAdd 5 to both sides\n2x = 16\nDivide by 2\nx = 8',
          explanation: 'First undo subtraction, then undo multiplication. Always work backwards from order of operations. Check: 2(8) - 5 = 16 - 5 = 11 ✓'
        },
        {
          title: 'Example 4: Negative Numbers',
          problem: 'Solve: -4x + 3 = 19',
          solution: '-4x + 3 = 19\nSubtract 3\n-4x = 16\nDivide by -4\nx = -4',
          explanation: 'When dividing by a negative, the result maintains the sign. Check: -4(-4) + 3 = 16 + 3 = 19 ✓'
        },
        {
          title: 'Example 5: Fractions',
          problem: 'Solve: x/3 + 2 = 8',
          solution: 'x/3 + 2 = 8\nSubtract 2\nx/3 = 6\nMultiply by 3\nx = 18',
          explanation: 'Division is undone by multiplication. Check: 18/3 + 2 = 6 + 2 = 8 ✓'
        }
      ],
      summary: 'Linear equations follow a predictable pattern. Master the process, and you can solve any single-variable equation. Practice until the steps become automatic. The balance principle (whatever you do to one side, do to the other) is the most important concept to remember.'
    },
    keyPoints: [
      'Linear equations have variables with power of 1',
      'The balance method: keep both sides equal',
      'Use inverse operations: addition↔subtraction, multiplication↔division',
      'Always check your answer by substituting back',
      'Order matters: undo operations in reverse order of operations',
      'Negative signs are part of the coefficient',
      'Fractions can be eliminated by multiplying both sides'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to do the same operation on BOTH sides',
      'Sign errors when moving negative terms',
      'Dividing only one term by the coefficient instead of all terms',
      'Not checking the final answer',
      'Forgetting to flip the sign when multiplying/dividing by negatives'
    ],
    tips: [
      'Always write out each step to avoid errors',
      'Check your work by substituting back into the original equation',
      'If confused, draw a balance scale and visualize keeping both sides equal',
      'Practice with different equation types to build pattern recognition',
      'Verify using a calculator before finalizing your answer'
    ],
    // 20+ ORIGINAL PRACTICE QUESTIONS SPECIFIC TO THIS LESSON
    practiceQuestions: [
      'lesson-alg-exp-001-q01', 'lesson-alg-exp-001-q02', 'lesson-alg-exp-001-q03',
      'lesson-alg-exp-001-q04', 'lesson-alg-exp-001-q05', 'lesson-alg-exp-001-q06',
      'lesson-alg-exp-001-q07', 'lesson-alg-exp-001-q08', 'lesson-alg-exp-001-q09',
      'lesson-alg-exp-001-q10', 'lesson-alg-exp-001-q11', 'lesson-alg-exp-001-q12',
      'lesson-alg-exp-001-q13', 'lesson-alg-exp-001-q14', 'lesson-alg-exp-001-q15',
      'lesson-alg-exp-001-q16', 'lesson-alg-exp-001-q17', 'lesson-alg-exp-001-q18',
      'lesson-alg-exp-001-q19', 'lesson-alg-exp-001-q20'
    ],
    estimatedReadTime: 30,
    orderIndex: 1
  }
];
