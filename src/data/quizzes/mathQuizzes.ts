import { Quiz } from '../../types';

export const mathQuizzes: Quiz[] = [
  // Algebra Quizzes
  {
    id: 'quiz-algebra-001',
    title: 'Linear Equations Basics',
    subject: 'math',
    topic: 'algebra',
    description: 'Test your skills solving linear equations with one variable',
    difficulty: 'easy',
    estimatedDuration: 10,
    timeLimit: 15,
    passingScore: 70,
    pointsAvailable: 50,
    orderIndex: 5,
    questions: [
      {
        id: 'q-algebra-101',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Solve: 2x + 5 = 13',
        options: [
          { id: 'a', text: 'x = 4', isCorrect: true },
          { id: 'b', text: 'x = 3', isCorrect: false },
          { id: 'c', text: 'x = 5', isCorrect: false },
          { id: 'd', text: 'x = 9', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4',
        hints: ['Isolate the variable by using inverse operations'],
        points: 10
      },
      {
        id: 'q-algebra-102',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'Solve: 3x - 7 = 5',
        options: [
          { id: 'a', text: 'x = 2', isCorrect: false },
          { id: 'b', text: 'x = 4', isCorrect: true },
          { id: 'c', text: 'x = 1', isCorrect: false },
          { id: 'd', text: 'x = 6', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Add 7 to both sides: 3x = 12. Divide by 3: x = 4',
        hints: ['Remember to reverse the sign when moving terms'],
        points: 10
      },
      {
        id: 'q-algebra-103',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: -2x + 8 = 2',
        options: [
          { id: 'a', text: 'x = 3', isCorrect: true },
          { id: 'b', text: 'x = -3', isCorrect: false },
          { id: 'c', text: 'x = 5', isCorrect: false },
          { id: 'd', text: 'x = -5', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 8: -2x = -6. Divide by -2: x = 3',
        hints: ['Be careful with negative coefficients'],
        points: 15
      },
      {
        id: 'q-algebra-104',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: x/2 + 3 = 7',
        options: [
          { id: 'a', text: 'x = 8', isCorrect: true },
          { id: 'b', text: 'x = 10', isCorrect: false },
          { id: 'c', text: 'x = 4', isCorrect: false },
          { id: 'd', text: 'x = 6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Subtract 3: x/2 = 4. Multiply by 2: x = 8',
        hints: ['Multiply to eliminate fractions'],
        points: 15
      }
    ]
  },

  {
    id: 'quiz-algebra-002',
    title: 'Systems of Equations',
    subject: 'math',
    topic: 'algebra',
    description: 'Solve systems of linear equations using multiple methods',
    difficulty: 'medium',
    estimatedDuration: 15,
    timeLimit: 20,
    passingScore: 70,
    pointsAvailable: 50,
    orderIndex: 6,
    questions: [
      {
        id: 'q-algebra-201',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve the system: x + y = 5, x - y = 1',
        options: [
          { id: 'a', text: 'x = 3, y = 2', isCorrect: true },
          { id: 'b', text: 'x = 2, y = 3', isCorrect: false },
          { id: 'c', text: 'x = 4, y = 1', isCorrect: false },
          { id: 'd', text: 'x = 1, y = 4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Add the equations: 2x = 6, so x = 3. Substitute: 3 + y = 5, so y = 2',
        hints: ['Use elimination method by adding or subtracting equations'],
        points: 15
      },
      {
        id: 'q-algebra-202',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'Solve: y = 2x and x + y = 9',
        options: [
          { id: 'a', text: 'x = 3, y = 6', isCorrect: true },
          { id: 'b', text: 'x = 2, y = 4', isCorrect: false },
          { id: 'c', text: 'x = 4, y = 8', isCorrect: false },
          { id: 'd', text: 'x = 1, y = 2', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Substitute y = 2x into second equation: x + 2x = 9, so 3x = 9, x = 3. Then y = 6',
        hints: ['Use substitution when one equation is solved for a variable'],
        points: 15
      },
      {
        id: 'q-algebra-203',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Solve: 2x + 3y = 12, x - y = 1',
        options: [
          { id: 'a', text: 'x = 3, y = 2', isCorrect: true },
          { id: 'b', text: 'x = 2, y = 1', isCorrect: false },
          { id: 'c', text: 'x = 4, y = 3', isCorrect: false },
          { id: 'd', text: 'x = 5, y = 4', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'From equation 2: x = y + 1. Substitute: 2(y+1) + 3y = 12, so 5y + 2 = 12, y = 2, x = 3',
        hints: ['Solve one equation for a variable first, then substitute'],
        points: 20
      }
    ]
  },

  {
    id: 'quiz-algebra-003',
    title: 'Quadratic Equations',
    subject: 'math',
    topic: 'algebra',
    description: 'Solve quadratic equations using various methods',
    difficulty: 'hard',
    estimatedDuration: 20,
    timeLimit: 25,
    passingScore: 70,
    pointsAvailable: 40,
    orderIndex: 7,
    questions: [
      {
        id: 'q-algebra-301',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
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
        points: 20
      },
      {
        id: 'q-algebra-302',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'Solve: x² - 4 = 0',
        options: [
          { id: 'a', text: 'x = ±2', isCorrect: true },
          { id: 'b', text: 'x = 4', isCorrect: false },
          { id: 'c', text: 'x = 2', isCorrect: false },
          { id: 'd', text: 'x = ±1', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Factor: (x - 2)(x + 2) = 0, or use difference of squares: x² = 4, so x = ±2',
        hints: ['This is a difference of squares pattern'],
        points: 20
      }
    ]
  },

  // Geometry Quizzes
  {
    id: 'quiz-geometry-001',
    title: 'Shapes and Area',
    subject: 'math',
    topic: 'geometry',
    description: 'Calculate areas and perimeters of common shapes',
    difficulty: 'easy',
    estimatedDuration: 12,
    timeLimit: 15,
    passingScore: 70,
    pointsAvailable: 35,
    orderIndex: 8,
    questions: [
      {
        id: 'q-geometry-101',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the area of a rectangle with length 8 and width 5?',
        options: [
          { id: 'a', text: '40', isCorrect: true },
          { id: 'b', text: '26', isCorrect: false },
          { id: 'c', text: '13', isCorrect: false },
          { id: 'd', text: '64', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = length × width = 8 × 5 = 40',
        hints: ['Area of rectangle is length times width'],
        points: 10
      },
      {
        id: 'q-geometry-102',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'easy',
        questionText: 'What is the circumference of a circle with radius 3?',
        options: [
          { id: 'a', text: '6π', isCorrect: true },
          { id: 'b', text: '3π', isCorrect: false },
          { id: 'c', text: '9π', isCorrect: false },
          { id: 'd', text: '12π', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Circumference = 2πr = 2π(3) = 6π',
        hints: ['Use the formula C = 2πr'],
        points: 10
      },
      {
        id: 'q-geometry-103',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the area of a triangle with base 6 and height 4?',
        options: [
          { id: 'a', text: '12', isCorrect: true },
          { id: 'b', text: '24', isCorrect: false },
          { id: 'c', text: '10', isCorrect: false },
          { id: 'd', text: '15', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Area = (1/2) × base × height = (1/2) × 6 × 4 = 12',
        hints: ['Remember the 1/2 factor for triangle area'],
        points: 15
      }
    ]
  },

  {
    id: 'quiz-geometry-002',
    title: 'Angles and Triangles',
    subject: 'math',
    topic: 'geometry',
    description: 'Work with angles, triangles, and their properties',
    difficulty: 'medium',
    estimatedDuration: 15,
    timeLimit: 20,
    passingScore: 70,
    pointsAvailable: 50,
    orderIndex: 9,
    questions: [
      {
        id: 'q-geometry-201',
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
        hints: ['This is a fundamental property of triangles'],
        points: 10
      },
      {
        id: 'q-geometry-202',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'In a right triangle, if one angle is 35°, what is the other non-right angle?',
        options: [
          { id: 'a', text: '55°', isCorrect: true },
          { id: 'b', text: '45°', isCorrect: false },
          { id: 'c', text: '65°', isCorrect: false },
          { id: 'd', text: '90°', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Sum of angles = 180°. One angle is 90°, one is 35°, so the third = 180° - 90° - 35° = 55°',
        hints: ['One angle in a right triangle is always 90°'],
        points: 15
      },
      {
        id: 'q-geometry-203',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'What is the hypotenuse of a right triangle with legs 3 and 4?',
        options: [
          { id: 'a', text: '5', isCorrect: true },
          { id: 'b', text: '7', isCorrect: false },
          { id: 'c', text: '6', isCorrect: false },
          { id: 'd', text: '8', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Using Pythagorean theorem: c² = 3² + 4² = 9 + 16 = 25, so c = 5',
        hints: ['Use the Pythagorean theorem: a² + b² = c²'],
        points: 15
      }
    ]
  },

  // Data Analysis Quizzes
  {
    id: 'quiz-data-001',
    title: 'Statistics and Probability',
    subject: 'math',
    topic: 'data-analysis',
    description: 'Test your understanding of statistics and probability concepts',
    difficulty: 'medium',
    estimatedDuration: 15,
    timeLimit: 20,
    passingScore: 70,
    pointsAvailable: 35,
    orderIndex: 10,
    questions: [
      {
        id: 'q-data-101',
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
        explanation: 'Arrange in order: 1, 2, 3, 5, 8. The middle value is 3',
        hints: ['The median is the middle value when data is ordered'],
        points: 10
      },
      {
        id: 'q-data-102',
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
        hints: ['Mean is the average of all values'],
        points: 10
      },
      {
        id: 'q-data-103',
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
        explanation: 'Numbers greater than 2: 3, 4, 5, 6 (4 outcomes out of 6). Probability = 4/6 = 2/3',
        hints: ['Count favorable outcomes over total possible outcomes'],
        points: 15
      }
    ]
  },

  // Word Problems
  {
    id: 'quiz-word-problems-001',
    title: 'Math Word Problems',
    subject: 'math',
    topic: 'word-problems',
    description: 'Apply math skills to real-world scenarios',
    difficulty: 'medium',
    estimatedDuration: 18,
    timeLimit: 25,
    passingScore: 70,
    pointsAvailable: 50,
    orderIndex: 11,
    questions: [
      {
        id: 'q-word-101',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'If a book costs $12 and you get a 25% discount, how much do you pay?',
        options: [
          { id: 'a', text: '$9', isCorrect: true },
          { id: 'b', text: '$10', isCorrect: false },
          { id: 'c', text: '$8', isCorrect: false },
          { id: 'd', text: '$6', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Discount = 25% of $12 = 0.25 × 12 = $3. Price = $12 - $3 = $9',
        hints: ['Find 25% of the original price, then subtract'],
        points: 15
      },
      {
        id: 'q-word-102',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'medium',
        questionText: 'A train travels 300 miles in 5 hours. What is its average speed?',
        options: [
          { id: 'a', text: '60 mph', isCorrect: true },
          { id: 'b', text: '50 mph', isCorrect: false },
          { id: 'c', text: '75 mph', isCorrect: false },
          { id: 'd', text: '80 mph', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Average speed = distance / time = 300 / 5 = 60 mph',
        hints: ['Use the formula: speed = distance / time'],
        points: 15
      },
      {
        id: 'q-word-103',
        type: 'multiple-choice',
        subject: 'math',
        difficulty: 'hard',
        questionText: 'If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many girls?',
        options: [
          { id: 'a', text: '12', isCorrect: true },
          { id: 'b', text: '18', isCorrect: false },
          { id: 'c', text: '15', isCorrect: false },
          { id: 'd', text: '20', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Ratio 3:2 means 3/(3+2) = 3/5 are boys, 2/5 are girls. Girls = 2/5 × 30 = 12',
        hints: ['Use the ratio to find the proportion of each group'],
        points: 20
      }
    ]
  }
];
