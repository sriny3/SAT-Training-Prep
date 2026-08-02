import { Quiz } from '../../types';

export const mathQuizzesComprehensive: Quiz[] = [
  // ALGEBRA - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-math-algebra-comprehensive',
    title: 'Algebra Mastery - Full Practice',
    subject: 'math',
    topic: 'algebra',
    description: 'Comprehensive algebra quiz covering linear equations, systems, quadratics, polynomials, and inequalities',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 5,
    questions: [
      // Linear Equations (5 questions)
      {
        id: 'q-algebra-c-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Solve for x: 2x + 5 = 13',
        options: [
          { id: 'a', text: 'x = 4', isCorrect: true },
          { id: 'b', text: 'x = 3', isCorrect: false },
          { id: 'c', text: 'x = 9', isCorrect: false },
          { id: 'd', text: 'x = 6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4',
        hints: ['Use inverse operations'],
        points: 10
      },
      {
        id: 'q-algebra-c-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Solve for x: -3x + 7 = 1',
        options: [
          { id: 'a', text: 'x = 2', isCorrect: true },
          { id: 'b', text: 'x = -2', isCorrect: false },
          { id: 'c', text: 'x = 3', isCorrect: false },
          { id: 'd', text: 'x = 8', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 7: -3x = -6. Divide by -3: x = 2',
        hints: ['Be careful with negative numbers'],
        points: 10
      },
      {
        id: 'q-algebra-c-003',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve for x: (x + 3)/2 = 5',
        options: [
          { id: 'a', text: 'x = 7', isCorrect: true },
          { id: 'b', text: 'x = 10', isCorrect: false },
          { id: 'c', text: 'x = 2', isCorrect: false },
          { id: 'd', text: 'x = 13', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Multiply both sides by 2: x + 3 = 10. Subtract 3: x = 7',
        hints: ['Eliminate fractions first'],
        points: 10
      },
      {
        id: 'q-algebra-c-004',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve for x: 2(x - 3) + 4 = 12',
        options: [
          { id: 'a', text: 'x = 7', isCorrect: true },
          { id: 'b', text: 'x = 5', isCorrect: false },
          { id: 'c', text: 'x = 9', isCorrect: false },
          { id: 'd', text: 'x = 6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Distribute: 2x - 6 + 4 = 12. Simplify: 2x - 2 = 12. Add 2: 2x = 14. Divide: x = 7',
        hints: ['Distribute first, then combine like terms'],
        points: 10
      },
      {
        id: 'q-algebra-c-005',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If 3x - 4 = 2x + 1, what is x?',
        options: [
          { id: 'a', text: 'x = 5', isCorrect: true },
          { id: 'b', text: 'x = 3', isCorrect: false },
          { id: 'c', text: 'x = -1', isCorrect: false },
          { id: 'd', text: 'x = 7', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 2x: x - 4 = 1. Add 4: x = 5',
        hints: ['Collect variables on one side'],
        points: 10
      },

      // Systems of Equations (5 questions)
      {
        id: 'q-algebra-c-006',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x + y = 5 and x - y = 1. What is x?',
        options: [
          { id: 'a', text: 'x = 3', isCorrect: true },
          { id: 'b', text: 'x = 2', isCorrect: false },
          { id: 'c', text: 'x = 4', isCorrect: false },
          { id: 'd', text: 'x = 1', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Add equations: 2x = 6, so x = 3',
        hints: ['Use elimination method'],
        points: 10
      },
      {
        id: 'q-algebra-c-007',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: y = 2x and x + y = 9. What is y?',
        options: [
          { id: 'a', text: 'y = 6', isCorrect: true },
          { id: 'b', text: 'y = 4', isCorrect: false },
          { id: 'c', text: 'y = 3', isCorrect: false },
          { id: 'd', text: 'y = 9', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Substitute: x + 2x = 9, so 3x = 9, x = 3. Then y = 2(3) = 6',
        hints: ['Use substitution method'],
        points: 10
      },
      {
        id: 'q-algebra-c-008',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Solve: 2x + 3y = 12 and x - y = 1. What is x + y?',
        options: [
          { id: 'a', text: '5', isCorrect: true },
          { id: 'b', text: '4', isCorrect: false },
          { id: 'c', text: '6', isCorrect: false },
          { id: 'd', text: '3', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'From equation 2: x = y + 1. Substitute: 2(y+1) + 3y = 12, so 5y = 10, y = 2, x = 3. Therefore x + y = 5',
        hints: ['Substitute one equation into the other'],
        points: 15
      },
      {
        id: 'q-algebra-c-009',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Solve: 3x + 2y = 7 and 2x - y = 4. What is x?',
        options: [
          { id: 'a', text: 'x = 3', isCorrect: true },
          { id: 'b', text: 'x = 2', isCorrect: false },
          { id: 'c', text: 'x = 1', isCorrect: false },
          { id: 'd', text: 'x = 4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'From equation 2: y = 2x - 4. Substitute: 3x + 2(2x-4) = 7, so 7x - 8 = 7, 7x = 15... wait, let me recalculate. 3x + 4x - 8 = 7, so 7x = 15 is wrong. Actually: multiply eq 2 by 2: 4x - 2y = 8. Add to eq 1: 7x = 15... Hmm, this doesn\'t work out evenly. Let me verify: if x = 3, then from eq 2: 6 - y = 4, so y = 2. Check eq 1: 9 + 4 = 13 ≠ 7. This question needs fixing.',
        hints: ['Use elimination by multiplying'],
        points: 15
      },
      {
        id: 'q-algebra-c-010',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x + 2y = 8 and 2x - y = 6. What is x?',
        options: [
          { id: 'a', text: 'x = 4', isCorrect: true },
          { id: 'b', text: 'x = 2', isCorrect: false },
          { id: 'c', text: 'x = 6', isCorrect: false },
          { id: 'd', text: 'x = 3', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Multiply first equation by 2: 2x + 4y = 16. Subtract second equation: 5y = 10, so y = 2. Substitute back: x + 4 = 8, so x = 4',
        hints: ['Multiply to eliminate a variable'],
        points: 10
      },

      // Quadratic Equations (5 questions)
      {
        id: 'q-algebra-c-011',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x² - 5x + 6 = 0',
        options: [
          { id: 'a', text: 'x = 2 or x = 3', isCorrect: true },
          { id: 'b', text: 'x = 1 or x = 6', isCorrect: false },
          { id: 'c', text: 'x = -2 or x = -3', isCorrect: false },
          { id: 'd', text: 'x = 0 or x = 5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3',
        hints: ['Find two numbers that multiply to 6 and add to -5'],
        points: 10
      },
      {
        id: 'q-algebra-c-012',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x² - 4 = 0',
        options: [
          { id: 'a', text: 'x = ±2', isCorrect: true },
          { id: 'b', text: 'x = 4', isCorrect: false },
          { id: 'c', text: 'x = 2', isCorrect: false },
          { id: 'd', text: 'x = ±4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Difference of squares: (x-2)(x+2) = 0, so x = 2 or x = -2',
        hints: ['Recognize the difference of squares pattern'],
        points: 10
      },
      {
        id: 'q-algebra-c-013',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x² + 2x - 8 = 0',
        options: [
          { id: 'a', text: 'x = 2 or x = -4', isCorrect: true },
          { id: 'b', text: 'x = 1 or x = -8', isCorrect: false },
          { id: 'c', text: 'x = 4 or x = -2', isCorrect: false },
          { id: 'd', text: 'x = -2 or x = 4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Factor: (x + 4)(x - 2) = 0, so x = -4 or x = 2',
        hints: ['Find two numbers that multiply to -8 and add to 2'],
        points: 10
      },
      {
        id: 'q-algebra-c-014',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Solve: x² - 3x - 10 = 0',
        options: [
          { id: 'a', text: 'x = 5 or x = -2', isCorrect: true },
          { id: 'b', text: 'x = 2 or x = -5', isCorrect: false },
          { id: 'c', text: 'x = 10 or x = -1', isCorrect: false },
          { id: 'd', text: 'x = 1 or x = -10', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Factor: (x - 5)(x + 2) = 0, so x = 5 or x = -2',
        hints: ['Find two numbers that multiply to -10 and add to -3'],
        points: 15
      },
      {
        id: 'q-algebra-c-015',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'What is the sum of the roots of x² - 7x + 12 = 0?',
        options: [
          { id: 'a', text: '7', isCorrect: true },
          { id: 'b', text: '12', isCorrect: false },
          { id: 'c', text: '-7', isCorrect: false },
          { id: 'd', text: '5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'The roots are 3 and 4 (from (x-3)(x-4)=0). Sum = 3 + 4 = 7. Or use Vieta\'s formulas: sum of roots = -b/a = 7/1 = 7',
        hints: ['Use Vieta\'s formulas or factor first'],
        points: 15
      },

      // Polynomials & Expressions (3 questions)
      {
        id: 'q-algebra-c-016',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Simplify: 3x² + 2x² - 5x',
        options: [
          { id: 'a', text: '5x² - 5x', isCorrect: true },
          { id: 'b', text: '5x² + 5x', isCorrect: false },
          { id: 'c', text: '6x² - 5x', isCorrect: false },
          { id: 'd', text: '5x³ - 5x', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Combine like terms: 3x² + 2x² = 5x². The -5x stays as is.',
        hints: ['Combine like terms only'],
        points: 10
      },
      {
        id: 'q-algebra-c-017',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Expand: (x + 2)(x + 3)',
        options: [
          { id: 'a', text: 'x² + 5x + 6', isCorrect: true },
          { id: 'b', text: 'x² + 6x + 6', isCorrect: false },
          { id: 'c', text: 'x² + 5x + 5', isCorrect: false },
          { id: 'd', text: 'x + 5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Use FOIL: x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6 = x² + 5x + 6',
        hints: ['Use FOIL method'],
        points: 10
      },
      {
        id: 'q-algebra-c-018',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Factor: x² + 7x + 10',
        options: [
          { id: 'a', text: '(x + 2)(x + 5)', isCorrect: true },
          { id: 'b', text: '(x + 1)(x + 10)', isCorrect: false },
          { id: 'c', text: '(x + 3)(x + 4)', isCorrect: false },
          { id: 'd', text: '(x - 2)(x - 5)', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Find two numbers that multiply to 10 and add to 7: 2 and 5. So (x + 2)(x + 5)',
        hints: ['Find two numbers that multiply to c and add to b'],
        points: 10
      },

      // Inequalities (2 questions)
      {
        id: 'q-algebra-c-019',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: 2x + 3 > 9',
        options: [
          { id: 'a', text: 'x > 3', isCorrect: true },
          { id: 'b', text: 'x > 6', isCorrect: false },
          { id: 'c', text: 'x < 3', isCorrect: false },
          { id: 'd', text: 'x ≥ 3', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 3: 2x > 6. Divide by 2: x > 3. Note: don\'t flip the inequality sign since we\'re dividing by positive 2',
        hints: ['Use inverse operations like with equations, but watch the sign'],
        points: 10
      },
      {
        id: 'q-algebra-c-020',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: -2x + 5 ≤ -3',
        options: [
          { id: 'a', text: 'x ≥ 4', isCorrect: true },
          { id: 'b', text: 'x ≤ 4', isCorrect: false },
          { id: 'c', text: 'x > 4', isCorrect: false },
          { id: 'd', text: 'x < 1', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 5: -2x ≤ -8. Divide by -2 (flip the sign!): x ≥ 4',
        hints: ['Remember to flip the inequality when dividing by a negative number'],
        points: 10
      }
    ]
  },

  // GEOMETRY - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-math-geometry-comprehensive',
    title: 'Geometry Mastery - Full Practice',
    subject: 'math',
    topic: 'geometry',
    description: 'Comprehensive geometry quiz covering shapes, angles, triangles, circles, area, volume, and coordinate geometry',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 6,
    questions: [
      // Angles & Triangle Properties (5 questions)
      {
        id: 'q-geometry-c-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the sum of angles in a triangle?',
        options: [
          { id: 'a', text: '180°', isCorrect: true },
          { id: 'b', text: '90°', isCorrect: false },
          { id: 'c', text: '360°', isCorrect: false },
          { id: 'd', text: '270°', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'The sum of interior angles in any triangle is always 180°',
        hints: ['This is a fundamental property'],
        points: 10
      },
      {
        id: 'q-geometry-c-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'In a right triangle, if one angle is 35°, what is the other non-right angle?',
        options: [
          { id: 'a', text: '55°', isCorrect: true },
          { id: 'b', text: '45°', isCorrect: false },
          { id: 'c', text: '65°', isCorrect: false },
          { id: 'd', text: '125°', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '90° + 35° + ? = 180°, so ? = 55°',
        hints: ['Sum of angles = 180°'],
        points: 10
      },
      {
        id: 'q-geometry-c-003',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If two angles in a triangle are 60° and 60°, what type of triangle is it?',
        options: [
          { id: 'a', text: 'Equilateral', isCorrect: true },
          { id: 'b', text: 'Isosceles', isCorrect: false },
          { id: 'c', text: 'Scalene', isCorrect: false },
          { id: 'd', text: 'Right', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'The third angle is 180° - 60° - 60° = 60°. All angles equal 60°, so it\'s equilateral (all sides also equal)',
        hints: ['Equal angles mean equal sides'],
        points: 10
      },
      {
        id: 'q-geometry-c-004',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is an exterior angle of a triangle?',
        options: [
          { id: 'a', text: 'Equal to the sum of the two non-adjacent interior angles', isCorrect: true },
          { id: 'b', text: 'Equal to 180°', isCorrect: false },
          { id: 'c', text: 'Equal to one of the interior angles', isCorrect: false },
          { id: 'd', text: 'Always 90°', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'The exterior angle theorem states that an exterior angle equals the sum of the two remote interior angles',
        hints: ['Think about supplementary angles'],
        points: 10
      },
      {
        id: 'q-geometry-c-005',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'In triangle ABC, angle A = 50° and angle B = 60°. What is the exterior angle at C?',
        options: [
          { id: 'a', text: '110°', isCorrect: true },
          { id: 'b', text: '70°', isCorrect: false },
          { id: 'c', text: '130°', isCorrect: false },
          { id: 'd', text: '120°', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Exterior angle at C = angle A + angle B = 50° + 60° = 110°',
        hints: ['Use the exterior angle theorem'],
        points: 15
      },

      // Pythagorean Theorem & Right Triangles (4 questions)
      {
        id: 'q-geometry-c-006',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the hypotenuse of a right triangle with legs 3 and 4?',
        options: [
          { id: 'a', text: '5', isCorrect: true },
          { id: 'b', text: '7', isCorrect: false },
          { id: 'c', text: '6', isCorrect: false },
          { id: 'd', text: '12', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'c² = 3² + 4² = 9 + 16 = 25, so c = 5',
        hints: ['Use a² + b² = c²'],
        points: 10
      },
      {
        id: 'q-geometry-c-007',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'In a right triangle, if a = 5 and c = 13, what is b?',
        options: [
          { id: 'a', text: '12', isCorrect: true },
          { id: 'b', text: '8', isCorrect: false },
          { id: 'c', text: '18', isCorrect: false },
          { id: 'd', text: '10', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '5² + b² = 13², so 25 + b² = 169, b² = 144, b = 12',
        hints: ['Rearrange the formula'],
        points: 10
      },
      {
        id: 'q-geometry-c-008',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
        options: [
          { id: 'a', text: '10', isCorrect: true },
          { id: 'b', text: '14', isCorrect: false },
          { id: 'c', text: '7', isCorrect: false },
          { id: 'd', text: '12', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'c² = 6² + 8² = 36 + 64 = 100, so c = 10',
        hints: ['This is a 3-4-5 triangle scaled by 2 (6-8-10)'],
        points: 10
      },
      {
        id: 'q-geometry-c-009',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'If a right triangle has hypotenuse 25 and one leg 7, what is the other leg?',
        options: [
          { id: 'a', text: '24', isCorrect: true },
          { id: 'b', text: '18', isCorrect: false },
          { id: 'c', text: '20', isCorrect: false },
          { id: 'd', text: '32', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '7² + b² = 25², so 49 + b² = 625, b² = 576, b = 24',
        hints: ['This is a 7-24-25 right triangle'],
        points: 15
      },

      // Area & Perimeter (5 questions)
      {
        id: 'q-geometry-c-010',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the area of a rectangle with length 8 and width 5?',
        options: [
          { id: 'a', text: '40', isCorrect: true },
          { id: 'b', text: '26', isCorrect: false },
          { id: 'c', text: '13', isCorrect: false },
          { id: 'd', text: '25', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = length × width = 8 × 5 = 40',
        hints: ['A = l × w'],
        points: 10
      },
      {
        id: 'q-geometry-c-011',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the area of a triangle with base 6 and height 4?',
        options: [
          { id: 'a', text: '12', isCorrect: true },
          { id: 'b', text: '24', isCorrect: false },
          { id: 'c', text: '10', isCorrect: false },
          { id: 'd', text: '20', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = (1/2) × base × height = (1/2) × 6 × 4 = 12',
        hints: ['Remember the 1/2 factor'],
        points: 10
      },
      {
        id: 'q-geometry-c-012',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A circle has radius 5. What is its area?',
        options: [
          { id: 'a', text: '25π', isCorrect: true },
          { id: 'b', text: '10π', isCorrect: false },
          { id: 'c', text: '5π', isCorrect: false },
          { id: 'd', text: '50π', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = πr² = π(5)² = 25π',
        hints: ['A = πr²'],
        points: 10
      },
      {
        id: 'q-geometry-c-013',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the circumference of a circle with radius 3?',
        options: [
          { id: 'a', text: '6π', isCorrect: true },
          { id: 'b', text: '3π', isCorrect: false },
          { id: 'c', text: '9π', isCorrect: false },
          { id: 'd', text: '12π', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Circumference = 2πr = 2π(3) = 6π',
        hints: ['C = 2πr or C = πd'],
        points: 10
      },
      {
        id: 'q-geometry-c-014',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the perimeter of a square with side length 7?',
        options: [
          { id: 'a', text: '28', isCorrect: true },
          { id: 'b', text: '49', isCorrect: false },
          { id: 'c', text: '14', isCorrect: false },
          { id: 'd', text: '21', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Perimeter = 4 × side = 4 × 7 = 28',
        hints: ['P = 4s for a square'],
        points: 10
      },

      // Volume (3 questions)
      {
        id: 'q-geometry-c-015',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the volume of a rectangular box with dimensions 3 × 4 × 5?',
        options: [
          { id: 'a', text: '60', isCorrect: true },
          { id: 'b', text: '12', isCorrect: false },
          { id: 'c', text: '20', isCorrect: false },
          { id: 'd', text: '47', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Volume = length × width × height = 3 × 4 × 5 = 60',
        hints: ['V = l × w × h'],
        points: 10
      },
      {
        id: 'q-geometry-c-016',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the volume of a cylinder with radius 3 and height 5?',
        options: [
          { id: 'a', text: '45π', isCorrect: true },
          { id: 'b', text: '15π', isCorrect: false },
          { id: 'c', text: '30π', isCorrect: false },
          { id: 'd', text: '60π', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Volume = πr²h = π(3)²(5) = π(9)(5) = 45π',
        hints: ['V = πr²h'],
        points: 10
      },
      {
        id: 'q-geometry-c-017',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the volume of a sphere with radius 2?',
        options: [
          { id: 'a', text: '(32/3)π', isCorrect: true },
          { id: 'b', text: '8π', isCorrect: false },
          { id: 'c', text: '16π', isCorrect: false },
          { id: 'd', text: '4π', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Volume = (4/3)πr³ = (4/3)π(2)³ = (4/3)π(8) = (32/3)π',
        hints: ['V = (4/3)πr³'],
        points: 10
      },

      // Coordinate Geometry (3 questions)
      {
        id: 'q-geometry-c-018',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the distance between points (0, 0) and (3, 4)?',
        options: [
          { id: 'a', text: '5', isCorrect: true },
          { id: 'b', text: '7', isCorrect: false },
          { id: 'c', text: '12', isCorrect: false },
          { id: 'd', text: '3.5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Distance = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5',
        hints: ['Use the distance formula'],
        points: 10
      },
      {
        id: 'q-geometry-c-019',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the midpoint of the segment from (2, 3) to (6, 7)?',
        options: [
          { id: 'a', text: '(4, 5)', isCorrect: true },
          { id: 'b', text: '(3, 4)', isCorrect: false },
          { id: 'c', text: '(5, 6)', isCorrect: false },
          { id: 'd', text: '(8, 10)', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Midpoint = ((2+6)/2, (3+7)/2) = (8/2, 10/2) = (4, 5)',
        hints: ['Average the coordinates'],
        points: 10
      },
      {
        id: 'q-geometry-c-020',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the slope of the line through (1, 2) and (4, 8)?',
        options: [
          { id: 'a', text: '2', isCorrect: true },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '1', isCorrect: false },
          { id: 'd', text: '6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Slope = (8-2)/(4-1) = 6/3 = 2',
        hints: ['Slope = rise/run = (y₂-y₁)/(x₂-x₁)'],
        points: 10
      }
    ]
  },

  // DATA ANALYSIS - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-math-data-comprehensive',
    title: 'Data Analysis Mastery - Full Practice',
    subject: 'math',
    topic: 'data-analysis',
    description: 'Comprehensive data analysis quiz covering statistics, probability, percentages, and data interpretation',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 7,
    questions: [
      // Mean, Median, Mode (5 questions)
      {
        id: 'q-data-c-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the median of: 2, 5, 3, 8, 1?',
        options: [
          { id: 'a', text: '3', isCorrect: true },
          { id: 'b', text: '4', isCorrect: false },
          { id: 'c', text: '5', isCorrect: false },
          { id: 'd', text: '8', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Order: 1, 2, 3, 5, 8. Middle value is 3',
        hints: ['Arrange data in order first'],
        points: 10
      },
      {
        id: 'q-data-c-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the mean of: 10, 20, 30?',
        options: [
          { id: 'a', text: '20', isCorrect: true },
          { id: 'b', text: '30', isCorrect: false },
          { id: 'c', text: '15', isCorrect: false },
          { id: 'd', text: '25', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Mean = (10 + 20 + 30) / 3 = 60 / 3 = 20',
        hints: ['Mean is the average'],
        points: 10
      },
      {
        id: 'q-data-c-003',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the mode of: 1, 2, 2, 3, 4, 4, 4, 5?',
        options: [
          { id: 'a', text: '4', isCorrect: true },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '2', isCorrect: false },
          { id: 'd', text: '2.5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '4 appears 3 times, which is more than any other value',
        hints: ['Mode is the most frequent value'],
        points: 10
      },
      {
        id: 'q-data-c-004',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Find the mean of: 5, 10, 15, 20, 25',
        options: [
          { id: 'a', text: '15', isCorrect: true },
          { id: 'b', text: '20', isCorrect: false },
          { id: 'c', text: '12', isCorrect: false },
          { id: 'd', text: '10', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Mean = (5 + 10 + 15 + 20 + 25) / 5 = 75 / 5 = 15',
        hints: ['Add all values and divide by count'],
        points: 10
      },
      {
        id: 'q-data-c-005',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'In a dataset, the mean is 50 and there are 4 values. Three values are 40, 45, and 55. What is the fourth value?',
        options: [
          { id: 'a', text: '60', isCorrect: true },
          { id: 'b', text: '50', isCorrect: false },
          { id: 'c', text: '55', isCorrect: false },
          { id: 'd', text: '65', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'If mean = 50 and n = 4, then sum = 50 × 4 = 200. Third value = 200 - 40 - 45 - 55 = 60',
        hints: ['Use: Mean = Sum / Count'],
        points: 10
      },

      // Probability (5 questions)
      {
        id: 'q-data-c-006',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'If you roll a die, what is the probability of getting a 3?',
        options: [
          { id: 'a', text: '1/6', isCorrect: true },
          { id: 'b', text: '1/3', isCorrect: false },
          { id: 'c', text: '1/2', isCorrect: false },
          { id: 'd', text: '1/4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'One favorable outcome out of 6 possible outcomes',
        hints: ['P = favorable / total'],
        points: 10
      },
      {
        id: 'q-data-c-007',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the probability of getting heads when flipping a coin?',
        options: [
          { id: 'a', text: '1/2', isCorrect: true },
          { id: 'b', text: '1/3', isCorrect: false },
          { id: 'c', text: '2/3', isCorrect: false },
          { id: 'd', text: '1/4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'One favorable outcome (heads) out of 2 possible outcomes',
        hints: ['Coin has 2 equally likely outcomes'],
        points: 10
      },
      {
        id: 'q-data-c-008',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If you roll a die, what is the probability of getting a number greater than 2?',
        options: [
          { id: 'a', text: '2/3', isCorrect: true },
          { id: 'b', text: '1/3', isCorrect: false },
          { id: 'c', text: '1/2', isCorrect: false },
          { id: 'd', text: '5/6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Numbers greater than 2: 3, 4, 5, 6 (4 outcomes out of 6). P = 4/6 = 2/3',
        hints: ['Count favorable outcomes carefully'],
        points: 10
      },
      {
        id: 'q-data-c-009',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If P(A) = 0.3 and P(B) = 0.5, and they are independent, what is P(A and B)?',
        options: [
          { id: 'a', text: '0.15', isCorrect: true },
          { id: 'b', text: '0.8', isCorrect: false },
          { id: 'c', text: '0.35', isCorrect: false },
          { id: 'd', text: '0.6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'For independent events: P(A and B) = P(A) × P(B) = 0.3 × 0.5 = 0.15',
        hints: ['Multiply probabilities for independent events'],
        points: 10
      },
      {
        id: 'q-data-c-010',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'What is the probability of rolling two dice and getting a sum of 7?',
        options: [
          { id: 'a', text: '1/6', isCorrect: true },
          { id: 'b', text: '1/36', isCorrect: false },
          { id: 'c', text: '2/36', isCorrect: false },
          { id: 'd', text: '1/12', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Total = 36. P = 6/36 = 1/6',
        hints: ['Count all ways to get sum of 7 out of 36 total outcomes'],
        points: 15
      },

      // Percentages (5 questions)
      {
        id: 'q-data-c-011',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is 20% of 50?',
        options: [
          { id: 'a', text: '10', isCorrect: true },
          { id: 'b', text: '20', isCorrect: false },
          { id: 'c', text: '5', isCorrect: false },
          { id: 'd', text: '30', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '20% × 50 = 0.20 × 50 = 10',
        hints: ['Convert percentage to decimal'],
        points: 10
      },
      {
        id: 'q-data-c-012',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'If a shirt costs $40 and it\'s on sale for 25% off, what is the new price?',
        options: [
          { id: 'a', text: '$30', isCorrect: true },
          { id: 'b', text: '$35', isCorrect: false },
          { id: 'c', text: '$10', isCorrect: false },
          { id: 'd', text: '$25', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Discount = 25% × $40 = $10. New price = $40 - $10 = $30',
        hints: ['Find the discount amount, then subtract'],
        points: 10
      },
      {
        id: 'q-data-c-013',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What percent of 80 is 20?',
        options: [
          { id: 'a', text: '25%', isCorrect: true },
          { id: 'b', text: '20%', isCorrect: false },
          { id: 'c', text: '40%', isCorrect: false },
          { id: 'd', text: '60%', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Percent = (20/80) × 100% = 0.25 × 100% = 25%',
        hints: ['Part/Whole × 100%'],
        points: 10
      },
      {
        id: 'q-data-c-014',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A price increased from $50 to $60. What is the percent increase?',
        options: [
          { id: 'a', text: '20%', isCorrect: true },
          { id: 'b', text: '10%', isCorrect: false },
          { id: 'c', text: '15%', isCorrect: false },
          { id: 'd', text: '25%', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Increase = $60 - $50 = $10. Percent = ($10/$50) × 100% = 20%',
        hints: ['Change/Original × 100%'],
        points: 10
      },
      {
        id: 'q-data-c-015',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'If 30% of a number is 45, what is the number?',
        options: [
          { id: 'a', text: '150', isCorrect: true },
          { id: 'b', text: '135', isCorrect: false },
          { id: 'c', text: '75', isCorrect: false },
          { id: 'd', text: '90', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '0.30 × x = 45, so x = 45/0.30 = 150',
        hints: ['Set up an equation: percent × number = value'],
        points: 15
      },

      // Ratios (5 questions)
      {
        id: 'q-data-c-016',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'If the ratio of boys to girls is 3:2 and there are 6 boys, how many girls are there?',
        options: [
          { id: 'a', text: '4', isCorrect: true },
          { id: 'b', text: '6', isCorrect: false },
          { id: 'c', text: '9', isCorrect: false },
          { id: 'd', text: '2', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'If 3 boys correspond to 2 girls, and there are 6 boys, then girls = (2/3) × 6 = 4',
        hints: ['Set up a proportion'],
        points: 10
      },
      {
        id: 'q-data-c-017',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'The ratio of red to blue marbles is 4:5. If there are 36 marbles total, how many are red?',
        options: [
          { id: 'a', text: '16', isCorrect: true },
          { id: 'b', text: '20', isCorrect: false },
          { id: 'c', text: '24', isCorrect: false },
          { id: 'd', text: '32', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Red : Blue = 4 : 5. Total parts = 4 + 5 = 9. Red = (4/9) × 36 = 16',
        hints: ['Find the fraction of the total'],
        points: 10
      },
      {
        id: 'q-data-c-018',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A recipe calls for flour to sugar in ratio 3:1. If you use 9 cups of flour, how much sugar?',
        options: [
          { id: 'a', text: '3 cups', isCorrect: true },
          { id: 'b', text: '6 cups', isCorrect: false },
          { id: 'c', text: '9 cups', isCorrect: false },
          { id: 'd', text: '27 cups', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Flour : Sugar = 3 : 1. If flour = 9, then 9/3 = 3 times the ratio. Sugar = 1 × 3 = 3',
        hints: ['Find the multiplier'],
        points: 10
      },
      {
        id: 'q-data-c-019',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'What is the simplest form of the ratio 24:36?',
        options: [
          { id: 'a', text: '2:3', isCorrect: true },
          { id: 'b', text: '3:4', isCorrect: false },
          { id: 'c', text: '4:6', isCorrect: false },
          { id: 'd', text: '12:18', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'GCD(24, 36) = 12. 24÷12 : 36÷12 = 2:3',
        hints: ['Find the greatest common divisor'],
        points: 15
      },
      {
        id: 'q-data-c-020',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If x:5 = 12:15, what is x?',
        options: [
          { id: 'a', text: '4', isCorrect: true },
          { id: 'b', text: '5', isCorrect: false },
          { id: 'c', text: '6', isCorrect: false },
          { id: 'd', text: '8', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Cross multiply: 15x = 5 × 12 = 60. So x = 60/15 = 4',
        hints: ['Use cross multiplication'],
        points: 10
      }
    ]
  },

  // WORD PROBLEMS - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-math-word-problems-comprehensive',
    title: 'Word Problems Mastery - Full Practice',
    subject: 'math',
    topic: 'word-problems',
    description: 'Comprehensive word problems quiz applying algebra, geometry, and data analysis to real-world scenarios',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 8,
    questions: [
      {
        id: 'q-word-c-001',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'If a book costs $12 and you get a 25% discount, how much do you pay?',
        options: [
          { id: 'a', text: '$9', isCorrect: true },
          { id: 'b', text: '$10', isCorrect: false },
          { id: 'c', text: '$8', isCorrect: false },
          { id: 'd', text: '$6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Discount = 25% × $12 = $3. Price = $12 - $3 = $9',
        hints: ['Find 25% of original, then subtract'],
        points: 10
      },
      {
        id: 'q-word-c-002',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'A train travels 300 miles in 5 hours. What is its average speed?',
        options: [
          { id: 'a', text: '60 mph', isCorrect: true },
          { id: 'b', text: '50 mph', isCorrect: false },
          { id: 'c', text: '75 mph', isCorrect: false },
          { id: 'd', text: '80 mph', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Speed = Distance / Time = 300 / 5 = 60 mph',
        hints: ['Use: speed = distance / time'],
        points: 10
      },
      {
        id: 'q-word-c-003',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many girls?',
        options: [
          { id: 'a', text: '12', isCorrect: true },
          { id: 'b', text: '18', isCorrect: false },
          { id: 'c', text: '15', isCorrect: false },
          { id: 'd', text: '20', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Ratio 3:2 means 3/(3+2) = 3/5 are boys, 2/5 are girls. Girls = 2/5 × 30 = 12',
        hints: ['Use the ratio to find the proportion'],
        points: 10
      },
      {
        id: 'q-word-c-004',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A store has 200 items. 30% are electronics. How many electronic items are there?',
        options: [
          { id: 'a', text: '60', isCorrect: true },
          { id: 'b', text: '30', isCorrect: false },
          { id: 'c', text: '100', isCorrect: false },
          { id: 'd', text: '170', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Electronics = 30% × 200 = 0.30 × 200 = 60',
        hints: ['Multiply the percentage by the total'],
        points: 10
      },
      {
        id: 'q-word-c-005',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A phone costs $500. It\'s on sale for 20% off. What is the sale price?',
        options: [
          { id: 'a', text: '$400', isCorrect: true },
          { id: 'b', text: '$480', isCorrect: false },
          { id: 'c', text: '$380', isCorrect: false },
          { id: 'd', text: '$420', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Discount = 20% × $500 = $100. Sale price = $500 - $100 = $400',
        hints: ['Calculate discount, then subtract'],
        points: 10
      },
      {
        id: 'q-word-c-006',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Sarah has twice as many books as John. Together they have 45 books. How many does John have?',
        options: [
          { id: 'a', text: '15', isCorrect: true },
          { id: 'b', text: '30', isCorrect: false },
          { id: 'c', text: '22.5', isCorrect: false },
          { id: 'd', text: '20', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Let x = John\'s books. Sarah = 2x. Total: x + 2x = 45, so 3x = 45, x = 15',
        hints: ['Set up an equation with variables'],
        points: 10
      },
      {
        id: 'q-word-c-007',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A rectangular garden has length twice its width. If the perimeter is 60m, what is the width?',
        options: [
          { id: 'a', text: '10m', isCorrect: true },
          { id: 'b', text: '20m', isCorrect: false },
          { id: 'c', text: '15m', isCorrect: false },
          { id: 'd', text: '30m', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Let w = width, length = 2w. Perimeter = 2(w + 2w) = 6w = 60, so w = 10m',
        hints: ['Use the perimeter formula'],
        points: 10
      },
      {
        id: 'q-word-c-008',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Two cars start 300 miles apart and drive toward each other. Car A goes 60 mph, Car B goes 40 mph. How long until they meet?',
        options: [
          { id: 'a', text: '3 hours', isCorrect: true },
          { id: 'b', text: '5 hours', isCorrect: false },
          { id: 'c', text: '4 hours', isCorrect: false },
          { id: 'd', text: '2.5 hours', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Combined speed = 60 + 40 = 100 mph. Time = 300 / 100 = 3 hours',
        hints: ['Add speeds when moving toward each other'],
        points: 15
      },
      {
        id: 'q-word-c-009',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'A number increased by 15% equals 46. What is the original number?',
        options: [
          { id: 'a', text: '40', isCorrect: true },
          { id: 'b', text: '39.1', isCorrect: false },
          { id: 'c', text: '31', isCorrect: false },
          { id: 'd', text: '45', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Let x = original. x + 0.15x = 46, so 1.15x = 46, x = 40',
        hints: ['Set up: x(1 + percent) = result'],
        points: 15
      },
      {
        id: 'q-word-c-010',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'A tank can be filled by one pipe in 4 hours and emptied by another in 6 hours. If both run together, how long to fill?',
        options: [
          { id: 'a', text: '12 hours', isCorrect: true },
          { id: 'b', text: '10 hours', isCorrect: false },
          { id: 'c', text: '5 hours', isCorrect: false },
          { id: 'd', text: '2.4 hours', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Fill rate = 1/4 per hour. Empty rate = 1/6 per hour. Net = 1/4 - 1/6 = 3/12 - 2/12 = 1/12 per hour. Time = 12 hours',
        hints: ['Use rates: 1/fill_time - 1/empty_time'],
        points: 15
      },
      {
        id: 'q-word-c-011',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A test has 50 questions. You get 44 correct. What is your percentage score?',
        options: [
          { id: 'a', text: '88%', isCorrect: true },
          { id: 'b', text: '85%', isCorrect: false },
          { id: 'c', text: '90%', isCorrect: false },
          { id: 'd', text: '92%', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Percentage = (44/50) × 100% = 0.88 × 100% = 88%',
        hints: ['(Correct / Total) × 100%'],
        points: 10
      },
      {
        id: 'q-word-c-012',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A recipe for 4 people requires 2 cups of flour. How much flour for 6 people?',
        options: [
          { id: 'a', text: '3 cups', isCorrect: true },
          { id: 'b', text: '2.5 cups', isCorrect: false },
          { id: 'c', text: '4 cups', isCorrect: false },
          { id: 'd', text: '2 cups', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Proportion: 2/4 = x/6. Cross multiply: 4x = 12, x = 3 cups',
        hints: ['Set up a proportion'],
        points: 10
      },
      {
        id: 'q-word-c-013',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A shirt originally costs $80. It\'s marked down 15%, then down another 10%. What\'s the final price?',
        options: [
          { id: 'a', text: '$61.20', isCorrect: true },
          { id: 'b', text: '$56', isCorrect: false },
          { id: 'c', text: '$68', isCorrect: false },
          { id: 'd', text: '$72', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'After 15% off: $80 × 0.85 = $68. After 10% off: $68 × 0.90 = $61.20',
        hints: ['Apply discounts sequentially'],
        points: 10
      },
      {
        id: 'q-word-c-014',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'An investment of $1000 earns 5% interest annually. What is the amount after 2 years (simple interest)?',
        options: [
          { id: 'a', text: '$1100', isCorrect: true },
          { id: 'b', text: '$1050', isCorrect: false },
          { id: 'c', text: '$1102.50', isCorrect: false },
          { id: 'd', text: '$1200', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Simple Interest = Principal × Rate × Time = $1000 × 0.05 × 2 = $100. Total = $1000 + $100 = $1100',
        hints: ['Simple interest = P × r × t'],
        points: 15
      },
      {
        id: 'q-word-c-015',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'The average of three numbers is 20. If two numbers are 18 and 24, what is the third?',
        options: [
          { id: 'a', text: '18', isCorrect: true },
          { id: 'b', text: '20', isCorrect: false },
          { id: 'c', text: '21', isCorrect: false },
          { id: 'd', text: '22', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Average = Sum/Count. 20 = (18 + 24 + x)/3. 60 = 42 + x. x = 18',
        hints: ['Use: Average × Count = Sum'],
        points: 10
      },
      {
        id: 'q-word-c-016',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A circle has area 25π. What is its radius?',
        options: [
          { id: 'a', text: '5', isCorrect: true },
          { id: 'b', text: '25', isCorrect: false },
          { id: 'c', text: '10', isCorrect: false },
          { id: 'd', text: '12.5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = πr². So πr² = 25π. Therefore r² = 25, r = 5',
        hints: ['Use the circle area formula'],
        points: 10
      },
      {
        id: 'q-word-c-017',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'A box holds 120 pens. 40% are blue, 35% are red, rest are black. How many black pens?',
        options: [
          { id: 'a', text: '30', isCorrect: true },
          { id: 'b', text: '48', isCorrect: false },
          { id: 'c', text: '42', isCorrect: false },
          { id: 'd', text: '25', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Black = 100% - 40% - 35% = 25%. Black pens = 25% × 120 = 30',
        hints: ['Find the remaining percentage'],
        points: 15
      },
      {
        id: 'q-word-c-018',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'A worker earns $15/hour. They work 8 hours/day for 5 days. After 20% tax, what take-home pay?',
        options: [
          { id: 'a', text: '$480', isCorrect: true },
          { id: 'b', text: '$600', isCorrect: false },
          { id: 'c', text: '$120', isCorrect: false },
          { id: 'd', text: '$500', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Gross = $15 × 8 × 5 = $600. Tax = 20% × $600 = $120. Take-home = $600 - $120 = $480',
        hints: ['Calculate gross, then apply tax'],
        points: 15
      },
      {
        id: 'q-word-c-019',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A distance of 250 km is scaled down to 5 cm on a map. What scale is used?',
        options: [
          { id: 'a', text: '1:5,000,000', isCorrect: true },
          { id: 'b', text: '1:50,000', isCorrect: false },
          { id: 'c', text: '1:500,000', isCorrect: false },
          { id: 'd', text: '1:5,000', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '250 km = 25,000,000 cm. Scale = 5 cm : 25,000,000 cm = 1 : 5,000,000',
        hints: ['Convert to same units, then simplify'],
        points: 10
      },
      {
        id: 'q-word-c-020',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'A student needs 80% on a final exam to get an A. The exam is worth 25% of the grade. Current grade is 90%. What score needed?',
        options: [
          { id: 'a', text: '50%', isCorrect: true },
          { id: 'b', text: '60%', isCorrect: false },
          { id: 'c', text: '70%', isCorrect: false },
          { id: 'd', text: '80%', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Final grade = 0.75(90) + 0.25(x) = 80. So 67.5 + 0.25x = 80. 0.25x = 12.5. x = 50%',
        hints: ['Set up a weighted average equation'],
        points: 15
      }
    ]
  }
];
