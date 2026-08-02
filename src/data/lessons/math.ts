import { Lesson } from '../../types';

export const mathLessons: Lesson[] = [
  // Algebra (5 lessons)
  {
    id: 'lesson-algebra-001',
    title: 'Solving Linear Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'easy',
    duration: 20,
    description: 'Master the fundamental skill of solving linear equations with one variable.',
    content: {
      introduction: 'Linear equations are fundamental in algebra. Learning to solve them efficiently is essential for success in math.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Linear Equation?'
        },
        {
          type: 'text',
          content: 'A linear equation is an equation with one or more variables where the highest power is 1. Examples: 2x + 3 = 7, 3a - 5 = 10'
        },
        {
          type: 'heading',
          content: 'Steps to Solve'
        },
        {
          type: 'text',
          content: '1) Simplify both sides if needed\n2) Get all variables on one side\n3) Get all constants on the other side\n4) Divide both sides by the coefficient of the variable\n5) Check your answer'
        }
      ],
      examples: [
        {
          title: 'Example 1',
          problem: 'Solve: 2x + 3 = 11',
          solution: 'Subtract 3: 2x = 8\nDivide by 2: x = 4',
          explanation: 'Check: 2(4) + 3 = 8 + 3 = 11 ✓'
        }
      ],
      summary: 'Linear equations are solved by isolating the variable. Practice these steps until they become automatic.'
    },
    keyPoints: [
      'Linear equations have variables with power of 1',
      'Use inverse operations to isolate the variable',
      'Always check your solution',
      'The steps are the foundation for more complex equations'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to do the same operation on both sides',
      'Sign errors when moving terms',
      'Not checking the answer'
    ],
    tips: [
      'Work step-by-step methodically',
      'Check your work by substituting back',
      'Remember: whatever you do to one side, do to the other'
    ],
    practiceQuestions: ['lesson-alg-exp-001-q01', 'lesson-alg-exp-001-q02', 'lesson-alg-exp-001-q03', 'lesson-alg-exp-001-q04', 'lesson-alg-exp-001-q05', 'lesson-alg-exp-001-q06', 'lesson-alg-exp-001-q07', 'lesson-alg-exp-001-q08', 'lesson-alg-exp-001-q09', 'lesson-alg-exp-001-q10', 'lesson-alg-exp-001-q11', 'lesson-alg-exp-001-q12', 'lesson-alg-exp-001-q13', 'lesson-alg-exp-001-q14', 'lesson-alg-exp-001-q15', 'lesson-alg-exp-001-q16', 'lesson-alg-exp-001-q17', 'lesson-alg-exp-001-q18', 'lesson-alg-exp-001-q19', 'lesson-alg-exp-001-q20'],
    estimatedReadTime: 15,
    orderIndex: 1
  },
  {
    id: 'lesson-algebra-002',
    title: 'Systems of Linear Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 25,
    description: 'Solve systems of equations using substitution, elimination, and graphing methods.',
    content: {
      introduction: 'Systems of equations appear frequently on the SAT. Master multiple solving methods.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a System of Equations?'
        },
        {
          type: 'text',
          content: 'A system is two or more equations with the same variables. The solution is the point(s) that satisfy all equations.'
        },
        {
          type: 'heading',
          content: 'Solving Methods'
        },
        {
          type: 'text',
          content: 'Substitution: Solve one equation for a variable, substitute into the other\nElimination: Multiply equations to eliminate a variable by adding/subtracting\nGraphing: Graph both lines and find the intersection'
        }
      ],
      examples: [
        {
          title: 'Substitution Example',
          problem: 'Solve: y = 2x and x + y = 9',
          solution: 'Substitute: x + 2x = 9\nCombine: 3x = 9\nSolve: x = 3\nFind y: y = 2(3) = 6\nSolution: (3, 6)',
          explanation: 'We substituted the expression for y from the first equation into the second.'
        }
      ],
      summary: 'Systems of equations have real-world applications. Practice all three methods to choose the most efficient for each problem.'
    },
    keyPoints: [
      'Systems have two or more equations and multiple variables',
      'The solution satisfies all equations simultaneously',
      'Three main solving methods exist',
      'Always verify your solution'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Not checking both equations with the solution',
      'Arithmetic errors when using elimination',
      'Misreading the point of intersection on a graph'
    ],
    tips: [
      'Choose substitution if one equation is already solved for a variable',
      'Choose elimination if coefficients allow easy elimination',
      'Always check your solution in both original equations'
    ],
    practiceQuestions: ['lesson-alg-sys-002-q01', 'lesson-alg-sys-002-q02', 'lesson-alg-sys-002-q03', 'lesson-alg-sys-002-q04', 'lesson-alg-sys-002-q05', 'lesson-alg-sys-002-q06', 'lesson-alg-sys-002-q07', 'lesson-alg-sys-002-q08', 'lesson-alg-sys-002-q09', 'lesson-alg-sys-002-q10', 'lesson-alg-sys-002-q11', 'lesson-alg-sys-002-q12', 'lesson-alg-sys-002-q13', 'lesson-alg-sys-002-q14', 'lesson-alg-sys-002-q15', 'lesson-alg-sys-002-q16', 'lesson-alg-sys-002-q17', 'lesson-alg-sys-002-q18', 'lesson-alg-sys-002-q19', 'lesson-alg-sys-002-q20'],
    estimatedReadTime: 15,
    orderIndex: 2
  },
  {
    id: 'lesson-algebra-003',
    title: 'Quadratic Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'hard',
    duration: 25,
    description: 'Solve quadratic equations using factoring, the quadratic formula, and completing the square.',
    content: {
      introduction: 'Quadratic equations are polynomial equations of degree 2. They appear frequently on standardized tests.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Quadratic Equation?'
        },
        {
          type: 'text',
          content: 'A quadratic equation has the form ax² + bx + c = 0 where a ≠ 0.'
        },
        {
          type: 'heading',
          content: 'Solving Methods'
        },
        {
          type: 'text',
          content: 'Factoring: Factor into (px + q)(rx + s) = 0\nQuadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)\nCompleting the Square: Create a perfect square trinomial'
        }
      ],
      examples: [
        {
          title: 'Factoring Example',
          problem: 'Solve: x² + 5x + 6 = 0',
          solution: 'Factor: (x + 2)(x + 3) = 0\nSolutions: x = -2 or x = -3',
          explanation: 'Find two numbers that multiply to 6 and add to 5: that\'s 2 and 3.'
        }
      ],
      summary: 'Quadratic equations often have two solutions. The quadratic formula always works, even when factoring fails.'
    },
    keyPoints: [
      'Quadratic equations have degree 2',
      'Often have two solutions (but can have 0 or 1)',
      'Multiple solving methods exist',
      'The discriminant tells you how many solutions exist'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Forgetting the ± in the quadratic formula',
      'Sign errors when factoring',
      'Not setting the equation equal to 0 before solving'
    ],
    tips: [
      'Try factoring first; if it doesn\'t work easily, use the quadratic formula',
      'The discriminant (b² - 4ac) tells you the number of real solutions',
      'Always check your solutions by substituting back'
    ],
    practiceQuestions: ['lesson-alg-quad-003-q01', 'lesson-alg-quad-003-q02', 'lesson-alg-quad-003-q03', 'lesson-alg-quad-003-q04', 'lesson-alg-quad-003-q05', 'lesson-alg-quad-003-q06', 'lesson-alg-quad-003-q07', 'lesson-alg-quad-003-q08', 'lesson-alg-quad-003-q09', 'lesson-alg-quad-003-q10', 'lesson-alg-quad-003-q11', 'lesson-alg-quad-003-q12', 'lesson-alg-quad-003-q13', 'lesson-alg-quad-003-q14', 'lesson-alg-quad-003-q15', 'lesson-alg-quad-003-q16', 'lesson-alg-quad-003-q17', 'lesson-alg-quad-003-q18', 'lesson-alg-quad-003-q19', 'lesson-alg-quad-003-q20'],
    estimatedReadTime: 15,
    orderIndex: 3
  },
  {
    id: 'lesson-algebra-004',
    title: 'Functions and Function Notation',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 20,
    description: 'Understand functions, function notation, and how to evaluate functions.',
    content: {
      introduction: 'Functions are fundamental to algebra and appear throughout mathematics. Understanding them is essential.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Function?'
        },
        {
          type: 'text',
          content: 'A function is a relationship between inputs (x) and outputs (y) where each input has exactly one output. Notation: f(x) means "f of x" or the output of function f when input is x.'
        },
        {
          type: 'heading',
          content: 'Domain and Range'
        },
        {
          type: 'text',
          content: 'Domain: All possible input values (x-values)\nRange: All possible output values (y-values)\nVertical Line Test: If a vertical line crosses a graph more than once, it\'s not a function.'
        }
      ],
      examples: [
        {
          title: 'Function Evaluation Example',
          problem: 'If f(x) = 2x + 3, find f(5)',
          solution: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
          explanation: 'Substitute 5 for x and calculate.'
        }
      ],
      summary: 'Functions are the language of algebra. Practice evaluating functions and identifying domain and range.'
    },
    keyPoints: [
      'Functions map each input to exactly one output',
      'Function notation: f(x) means the output when input is x',
      'Domain is all possible inputs; range is all possible outputs',
      'The vertical line test identifies functions'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Confusing domain and range',
      'Forgetting parentheses when substituting',
      'Including values in range that aren\'t possible'
    ],
    tips: [
      'Practice function notation until it feels natural',
      'Always think about what values are possible (domain) and what outputs result (range)',
      'Use the vertical line test for graphs'
    ],
    practiceQuestions: ['lesson-alg-poly-004-q01', 'lesson-alg-poly-004-q02', 'lesson-alg-poly-004-q03', 'lesson-alg-poly-004-q04', 'lesson-alg-poly-004-q05', 'lesson-alg-poly-004-q06', 'lesson-alg-poly-004-q07', 'lesson-alg-poly-004-q08', 'lesson-alg-poly-004-q09', 'lesson-alg-poly-004-q10', 'lesson-alg-poly-004-q11', 'lesson-alg-poly-004-q12', 'lesson-alg-poly-004-q13', 'lesson-alg-poly-004-q14', 'lesson-alg-poly-004-q15', 'lesson-alg-poly-004-q16', 'lesson-alg-poly-004-q17', 'lesson-alg-poly-004-q18', 'lesson-alg-poly-004-q19', 'lesson-alg-poly-004-q20'],
    estimatedReadTime: 15,
    orderIndex: 4
  },
  {
    id: 'lesson-algebra-005',
    title: 'Inequalities and Absolute Value',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 20,
    description: 'Solve linear and absolute value inequalities with proper notation and graphing.',
    content: {
      introduction: 'Inequalities express relationships between quantities. Mastering them is important for SAT math.',
      mainContent: [
        {
          type: 'heading',
          content: 'Solving Inequalities'
        },
        {
          type: 'text',
          content: 'Solve like equations, BUT:\nWhen multiplying/dividing by a negative number, flip the inequality sign!\nExample: -2x > 6 becomes x < -3 (notice the flip)'
        },
        {
          type: 'heading',
          content: 'Absolute Value'
        },
        {
          type: 'text',
          content: '|x| = a means x = a or x = -a\n|x| < a means -a < x < a\n|x| > a means x < -a or x > a'
        }
      ],
      examples: [
        {
          title: 'Inequality Example',
          problem: 'Solve: -3x + 2 > 8',
          solution: '-3x > 6\nx < -2 (flip the sign!)',
          explanation: 'When dividing by -3, the inequality sign flips.'
        }
      ],
      summary: 'Remember the key difference from equations: flip the inequality sign when multiplying/dividing by negatives.'
    },
    keyPoints: [
      'Solve inequalities like equations',
      'Flip the sign when multiplying/dividing by negatives',
      'Absolute value has special rules',
      'Graph solutions on number lines or coordinates'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Forgetting to flip the sign with negatives',
      'Incorrect absolute value solution',
      'Not graphing the solution properly'
    ],
    tips: [
      'Remember: multiply/divide by negative = flip!',
      'Test a value to verify your solution',
      'Graph your solutions to visualize them'
    ],
    practiceQuestions: ['lesson-alg-ineq-005-q01', 'lesson-alg-ineq-005-q02', 'lesson-alg-ineq-005-q03', 'lesson-alg-ineq-005-q04', 'lesson-alg-ineq-005-q05', 'lesson-alg-ineq-005-q06', 'lesson-alg-ineq-005-q07', 'lesson-alg-ineq-005-q08', 'lesson-alg-ineq-005-q09', 'lesson-alg-ineq-005-q10', 'lesson-alg-ineq-005-q11', 'lesson-alg-ineq-005-q12', 'lesson-alg-ineq-005-q13', 'lesson-alg-ineq-005-q14', 'lesson-alg-ineq-005-q15', 'lesson-alg-ineq-005-q16', 'lesson-alg-ineq-005-q17', 'lesson-alg-ineq-005-q18', 'lesson-alg-ineq-005-q19', 'lesson-alg-ineq-005-q20'],
    estimatedReadTime: 15,
    orderIndex: 5
  },

  // Geometry (5 lessons)
  {
    id: 'lesson-geometry-001',
    title: 'Angles, Triangles, and Polygons',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'easy',
    duration: 20,
    description: 'Learn fundamental angle and triangle relationships that form the basis of geometry.',
    content: {
      introduction: 'Angles and triangles are everywhere in geometry. Understanding their properties is essential.',
      mainContent: [
        {
          type: 'heading',
          content: 'Angles'
        },
        {
          type: 'text',
          content: 'Acute: < 90°\nRight: = 90°\nObtuse: > 90°\nStraight: = 180°\n\nComplementary angles add to 90°\nSupplementary angles add to 180°'
        },
        {
          type: 'heading',
          content: 'Triangles'
        },
        {
          type: 'text',
          content: 'All angles in a triangle sum to 180°\nEquilateral: All sides equal, all angles 60°\nIsosceles: Two equal sides, two equal angles\nRight Triangle: One 90° angle, a² + b² = c²'
        }
      ],
      examples: [
        {
          title: 'Triangle Angle Example',
          problem: 'In a triangle, one angle is 60° and another is 70°. What\'s the third angle?',
          solution: 'Third angle = 180° - 60° - 70° = 50°',
          explanation: 'Triangle angles always sum to 180°.'
        }
      ],
      summary: 'Triangle properties appear constantly in SAT geometry. Memorize the key relationships.'
    },
    keyPoints: [
      'Angle types and measures',
      'Triangle angles sum to 180°',
      'Special triangles have unique properties',
      'Complementary and supplementary angles are important'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting triangle angle sum is 180°',
      'Confusing angle types',
      'Not using Pythagorean theorem correctly'
    ],
    tips: [
      'Draw diagrams to visualize relationships',
      'Remember: all triangle angles sum to 180°',
      'Memorize properties of special triangles'
    ],
    practiceQuestions: ['lesson-geom-angle-001-q01', 'lesson-geom-angle-001-q02', 'lesson-geom-angle-001-q03', 'lesson-geom-angle-001-q04', 'lesson-geom-angle-001-q05', 'lesson-geom-angle-001-q06', 'lesson-geom-angle-001-q07', 'lesson-geom-angle-001-q08', 'lesson-geom-angle-001-q09', 'lesson-geom-angle-001-q10', 'lesson-geom-angle-001-q11', 'lesson-geom-angle-001-q12', 'lesson-geom-angle-001-q13', 'lesson-geom-angle-001-q14', 'lesson-geom-angle-001-q15', 'lesson-geom-angle-001-q16', 'lesson-geom-angle-001-q17', 'lesson-geom-angle-001-q18', 'lesson-geom-angle-001-q19', 'lesson-geom-angle-001-q20'],
    estimatedReadTime: 15,
    orderIndex: 6
  },
  {
    id: 'lesson-geometry-002',
    title: 'Circles and Circumference',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 20,
    description: 'Understand circle properties, circumference, area, and arc calculations.',
    content: {
      introduction: 'Circles have unique properties that appear on the SAT. Understanding them is important.',
      mainContent: [
        {
          type: 'heading',
          content: 'Circle Basics'
        },
        {
          type: 'text',
          content: 'Radius: Distance from center to edge\nDiameter: Distance across through center (d = 2r)\nCircumference: Distance around the circle (C = 2πr or C = πd)\nArea: Space inside the circle (A = πr²)'
        },
        {
          type: 'heading',
          content: 'Arc and Sector'
        },
        {
          type: 'text',
          content: 'Arc: Part of the circumference\nSector: Pie slice of the circle\nArc length = (θ/360°) × 2πr\nSector area = (θ/360°) × πr²'
        }
      ],
      examples: [
        {
          title: 'Circumference Example',
          problem: 'A circle has radius 5. What\'s the circumference?',
          solution: 'C = 2πr = 2π(5) = 10π',
          explanation: 'Use the formula C = 2πr and substitute r = 5.'
        }
      ],
      summary: 'Circle formulas are essential. Practice calculating circumference and area frequently.'
    },
    keyPoints: [
      'Key circle formulas: C = 2πr, A = πr²',
      'Radius and diameter are related by factor of 2',
      'Arcs and sectors use angle proportions',
      'π appears in almost all circle problems'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing diameter with radius',
      'Forgetting to square the radius in area',
      'Not using correct angle proportions for arcs'
    ],
    tips: [
      'Write out formulas before solving',
      'Remember: area has r², circumference has 2r or d',
      'Watch for problems that ask for exact answers (with π) vs. decimal'
    ],
    practiceQuestions: ['lesson-geom-tri-002-q01', 'lesson-geom-tri-002-q02', 'lesson-geom-tri-002-q03', 'lesson-geom-tri-002-q04', 'lesson-geom-tri-002-q05', 'lesson-geom-tri-002-q06', 'lesson-geom-tri-002-q07', 'lesson-geom-tri-002-q08', 'lesson-geom-tri-002-q09', 'lesson-geom-tri-002-q10', 'lesson-geom-tri-002-q11', 'lesson-geom-tri-002-q12', 'lesson-geom-tri-002-q13', 'lesson-geom-tri-002-q14', 'lesson-geom-tri-002-q15', 'lesson-geom-tri-002-q16', 'lesson-geom-tri-002-q17', 'lesson-geom-tri-002-q18', 'lesson-geom-tri-002-q19', 'lesson-geom-tri-002-q20'],
    estimatedReadTime: 15,
    orderIndex: 7
  },
  {
    id: 'lesson-geometry-003',
    title: 'Volume and Surface Area',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 25,
    description: 'Calculate volume and surface area for various 3D shapes.',
    content: {
      introduction: '3D geometry formulas appear on the SAT. Learning them saves time during the test.',
      mainContent: [
        {
          type: 'heading',
          content: 'Common Formulas'
        },
        {
          type: 'text',
          content: 'Rectangular Prism: V = lwh, SA = 2(lw + lh + wh)\nCylinder: V = πr²h, SA = 2πr² + 2πrh\nSphere: V = (4/3)πr³, SA = 4πr²\nCone: V = (1/3)πr²h, SA = πr² + πrl\nPyramid: V = (1/3)Bh (B = base area)'
        }
      ],
      examples: [
        {
          title: 'Volume Example',
          problem: 'A cylinder has radius 3 and height 10. What\'s the volume?',
          solution: 'V = πr²h = π(3)²(10) = 90π',
          explanation: 'Substitute into the formula and calculate.'
        }
      ],
      summary: 'Having formulas memorized saves valuable test time. Practice applying them to various problems.'
    },
    keyPoints: [
      'Different shapes have different formulas',
      'Volume is measured in cubic units',
      'Surface area is measured in square units',
      'Knowing formulas prevents having to derive them'
    ],
    prerequisites: [],
    commonMistakes: [
      'Using wrong formula for the shape',
      'Forgetting square or cube in formulas',
      'Confusing volume and surface area'
    ],
    tips: [
      'Memorize the basic formulas',
      'Draw and label 3D figures',
      'Check that units make sense (cubic vs. square)'
    ],
    practiceQuestions: ['lesson-geom-circle-003-q01', 'lesson-geom-circle-003-q02', 'lesson-geom-circle-003-q03', 'lesson-geom-circle-003-q04', 'lesson-geom-circle-003-q05', 'lesson-geom-circle-003-q06', 'lesson-geom-circle-003-q07', 'lesson-geom-circle-003-q08', 'lesson-geom-circle-003-q09', 'lesson-geom-circle-003-q10', 'lesson-geom-circle-003-q11', 'lesson-geom-circle-003-q12', 'lesson-geom-circle-003-q13', 'lesson-geom-circle-003-q14', 'lesson-geom-circle-003-q15', 'lesson-geom-circle-003-q16', 'lesson-geom-circle-003-q17', 'lesson-geom-circle-003-q18', 'lesson-geom-circle-003-q19', 'lesson-geom-circle-003-q20'],
    estimatedReadTime: 18,
    orderIndex: 8
  },
  {
    id: 'lesson-geometry-004',
    title: 'Coordinate Geometry and Distance',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 20,
    description: 'Use coordinates to find distances, midpoints, and slopes.',
    content: {
      introduction: 'Coordinate geometry combines algebra and geometry. It\'s essential for SAT problem-solving.',
      mainContent: [
        {
          type: 'heading',
          content: 'Distance Formula'
        },
        {
          type: 'text',
          content: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]'
        },
        {
          type: 'heading',
          content: 'Midpoint Formula'
        },
        {
          type: 'text',
          content: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2)'
        },
        {
          type: 'heading',
          content: 'Slope'
        },
        {
          type: 'text',
          content: 'm = (y₂ - y₁)/(x₂ - x₁)\nParallel lines have equal slopes\nPerpendicular lines have slopes that multiply to -1'
        }
      ],
      examples: [
        {
          title: 'Distance Formula Example',
          problem: 'Find distance between (1, 2) and (4, 6)',
          solution: 'd = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5',
          explanation: 'Apply the distance formula directly.'
        }
      ],
      summary: 'These formulas connect coordinates to geometric properties. Practice until they\'re automatic.'
    },
    keyPoints: [
      'Distance formula uses Pythagorean theorem',
      'Midpoint is average of coordinates',
      'Slope describes line steepness and direction',
      'Parallel and perpendicular relationships use slope'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Squaring differences before subtracting',
      'Sign errors in slope calculations',
      'Forgetting to take the square root in distance'
    ],
    tips: [
      'Write formulas before substituting',
      'Remember slope: rise over run',
      'Parallel = same slope; perpendicular = negative reciprocal'
    ],
    practiceQuestions: ['lesson-geom-area-004-q01', 'lesson-geom-area-004-q02', 'lesson-geom-area-004-q03', 'lesson-geom-area-004-q04', 'lesson-geom-area-004-q05', 'lesson-geom-area-004-q06', 'lesson-geom-area-004-q07', 'lesson-geom-area-004-q08', 'lesson-geom-area-004-q09', 'lesson-geom-area-004-q10', 'lesson-geom-area-004-q11', 'lesson-geom-area-004-q12', 'lesson-geom-area-004-q13', 'lesson-geom-area-004-q14', 'lesson-geom-area-004-q15', 'lesson-geom-area-004-q16', 'lesson-geom-area-004-q17', 'lesson-geom-area-004-q18', 'lesson-geom-area-004-q19', 'lesson-geom-area-004-q20'],
    estimatedReadTime: 15,
    orderIndex: 9
  },
  {
    id: 'lesson-geometry-005',
    title: 'Transformations and Symmetry',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 20,
    description: 'Understand geometric transformations including reflections, rotations, and translations.',
    content: {
      introduction: 'Transformations show how figures move and change. Understanding them is important for geometry.',
      mainContent: [
        {
          type: 'heading',
          content: 'Types of Transformations'
        },
        {
          type: 'text',
          content: 'Translation: Sliding a figure (all points move same direction/distance)\nReflection: Flipping across a line (creates mirror image)\nRotation: Turning around a point\nDilation: Enlarging or shrinking'
        },
        {
          type: 'heading',
          content: 'Rigid vs. Non-Rigid'
        },
        {
          type: 'text',
          content: 'Rigid (congruent): Translation, reflection, rotation - shape and size stay same\nNon-rigid (similar): Dilation - shape stays same but size changes'
        }
      ],
      examples: [
        {
          title: 'Translation Example',
          problem: 'Translate point (2, 3) right 4 and up 2',
          solution: 'New point: (2+4, 3+2) = (6, 5)',
          explanation: 'Each coordinate changes by the translation amount.'
        }
      ],
      summary: 'Transformations are visual and algebraic. Practice applying them to various figures.'
    },
    keyPoints: [
      'Four main transformation types',
      'Rigid transformations preserve shape and size',
      'Dilations change size but preserve shape',
      'Transformations can be described algebraically or visually'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing transformation types',
      'Getting direction of reflection wrong',
      'Wrong dilation scale factors'
    ],
    tips: [
      'Draw diagrams of transformations',
      'Remember: rigid = same size/shape',
      'Use coordinates to track transformations'
    ],
    practiceQuestions: ['lesson-geom-solid-005-q01', 'lesson-geom-solid-005-q02', 'lesson-geom-solid-005-q03', 'lesson-geom-solid-005-q04', 'lesson-geom-solid-005-q05', 'lesson-geom-solid-005-q06', 'lesson-geom-solid-005-q07', 'lesson-geom-solid-005-q08', 'lesson-geom-solid-005-q09', 'lesson-geom-solid-005-q10', 'lesson-geom-solid-005-q11', 'lesson-geom-solid-005-q12', 'lesson-geom-solid-005-q13', 'lesson-geom-solid-005-q14', 'lesson-geom-solid-005-q15', 'lesson-geom-solid-005-q16', 'lesson-geom-solid-005-q17', 'lesson-geom-solid-005-q18', 'lesson-geom-solid-005-q19', 'lesson-geom-solid-005-q20'],
    estimatedReadTime: 15,
    orderIndex: 10
  },

  // Data Analysis (5 lessons)
  {
    id: 'lesson-data-001',
    title: 'Mean, Median, Mode, and Range',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 15,
    description: 'Calculate and interpret measures of central tendency and spread.',
    content: {
      introduction: 'These basic statistical measures describe datasets. They appear frequently on standardized tests.',
      mainContent: [
        {
          type: 'heading',
          content: 'Measures of Central Tendency'
        },
        {
          type: 'text',
          content: 'Mean: Average of all values\nMedian: Middle value when ordered\nMode: Most frequent value\nRange: Difference between highest and lowest'
        },
        {
          type: 'heading',
          content: 'When to Use Each'
        },
        {
          type: 'text',
          content: 'Mean: Most common, but affected by outliers\nMedian: Better for skewed data\nMode: Useful for categorical data\nRange: Shows spread of data'
        }
      ],
      examples: [
        {
          title: 'Mean Example',
          problem: 'Find mean of: 2, 4, 6, 8, 10',
          solution: 'Sum = 30, Count = 5, Mean = 30/5 = 6',
          explanation: 'Add all values and divide by count.'
        }
      ],
      summary: 'These measures give you quick understanding of a dataset. Practice calculating all four regularly.'
    },
    keyPoints: [
      'Mean is the average',
      'Median is the middle value',
      'Mode is the most frequent',
      'Range measures spread'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to order values before finding median',
      'Including outliers when you shouldn\'t',
      'Confusing mean and median'
    ],
    tips: [
      'Always order data for median',
      'Mean is affected by outliers; median isn\'t',
      'Use calculator for large datasets'
    ],
    practiceQuestions: ['q-data-001', 'q-data-002'],
    estimatedReadTime: 12,
    orderIndex: 1
  },
  {
    id: 'lesson-data-002',
    title: 'Probability and Outcomes',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'medium',
    duration: 20,
    description: 'Calculate probabilities and count possible outcomes.',
    content: {
      introduction: 'Probability is the likelihood of an event. Understanding probability helps with decision-making.',
      mainContent: [
        {
          type: 'heading',
          content: 'Probability Formula'
        },
        {
          type: 'text',
          content: 'P(event) = (favorable outcomes) / (total possible outcomes)\nProbability ranges from 0 (impossible) to 1 (certain)'
        },
        {
          type: 'heading',
          content: 'Compound Probability'
        },
        {
          type: 'text',
          content: 'And: P(A and B) = P(A) × P(B|A) (with or without replacement)\nOr: P(A or B) = P(A) + P(B) - P(A and B)'
        }
      ],
      examples: [
        {
          title: 'Probability Example',
          problem: 'What\'s probability of rolling a 3 on a die?',
          solution: 'P = 1/6 ≈ 0.167 or about 17%',
          explanation: 'One favorable outcome (rolling 3) out of six possible.'
        }
      ],
      summary: 'Probability problems have consistent structure. Practice setting them up correctly.'
    },
    keyPoints: [
      'Probability = favorable / total',
      'Ranges from 0 to 1',
      'And: multiply; Or: add (subtract overlap)',
      'Replacement matters in compound probability'
    ],
    prerequisites: [],
    commonMistakes: [
      'Wrong denominator (forgetting total outcomes)',
      'Not accounting for replacement',
      'Double-counting in "or" problems'
    ],
    tips: [
      'List all possible outcomes',
      'Clearly identify favorable outcomes',
      'Remember replacement in compound probability'
    ],
    practiceQuestions: ['q-data-003', 'q-data-004'],
    estimatedReadTime: 15,
    orderIndex: 2
  },
  {
    id: 'lesson-data-003',
    title: 'Reading and Interpreting Graphs',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 20,
    description: 'Extract information from various types of graphs and charts.',
    content: {
      introduction: 'The ability to read graphs quickly and accurately is essential for standardized tests.',
      mainContent: [
        {
          type: 'heading',
          content: 'Graph Types'
        },
        {
          type: 'text',
          content: 'Bar Graph: Compares quantities\nLine Graph: Shows trends over time\nPie Chart: Shows parts of a whole\nScatter Plot: Shows relationships\nHistogram: Distribution of data'
        },
        {
          type: 'heading',
          content: 'Reading Strategy'
        },
        {
          type: 'text',
          content: '1) Read the title\n2) Check axis labels\n3) Note the scale\n4) Identify data points\n5) Answer the question\n6) Verify your answer makes sense'
        }
      ],
      examples: [
        {
          title: 'Bar Graph Example',
          problem: 'If the bar for Company A reaches 50, what does this represent?',
          solution: 'Check the y-axis label to see what unit is being measured',
          explanation: 'The meaning depends on the axis labels.'
        }
      ],
      summary: 'Graph reading is straightforward once you develop a consistent reading strategy. Practice with various graph types.'
    },
    keyPoints: [
      'Different graphs show different relationships',
      'Always check titles and labels',
      'Scale matters - read carefully',
      'Extract exact values or approximate them'
    ],
    prerequisites: [],
    commonMistakes: [
      'Not checking axis labels carefully',
      'Misreading the scale',
      'Confusing different graph types'
    ],
    tips: [
      'Read all labels before interpreting',
      'Check scale on both axes',
      'Make sure your answer makes sense with the data'
    ],
    practiceQuestions: ['q-data-005', 'q-data-006'],
    estimatedReadTime: 15,
    orderIndex: 3
  },
  {
    id: 'lesson-data-004',
    title: 'Percentages and Ratios',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 20,
    description: 'Calculate percentages, work with ratios, and solve proportion problems.',
    content: {
      introduction: 'Percentages and ratios appear in word problems and data analysis. Master these fundamentals.',
      mainContent: [
        {
          type: 'heading',
          content: 'Percentages'
        },
        {
          type: 'text',
          content: 'Percent = (part / whole) × 100\nPart = (percent / 100) × whole\nWhole = part / (percent / 100)'
        },
        {
          type: 'heading',
          content: 'Ratios and Proportions'
        },
        {
          type: 'text',
          content: 'Ratio: Comparison of two quantities (a:b or a/b)\nProportion: Two equal ratios (a/b = c/d)\nCross-multiply to solve: ad = bc'
        }
      ],
      examples: [
        {
          title: 'Percentage Example',
          problem: 'What is 25% of 80?',
          solution: 'Part = (25/100) × 80 = 0.25 × 80 = 20',
          explanation: 'Use the percentage formula directly.'
        }
      ],
      summary: 'Percentages and ratios are used constantly. These skills are essential for higher math and real-world applications.'
    },
    keyPoints: [
      'Three percentage formulas - learn all three',
      'Proportions use cross-multiplication',
      'Ratios can be simplified',
      'Percentages can be greater than 100% or less than 0%'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to multiply by 100 for percentage',
      'Wrong direction in cross-multiplication',
      'Not setting up proportion correctly'
    ],
    tips: [
      'Write out the formula before substituting',
      'Remember: percent means "per hundred"',
      'Use cross-multiplication for proportions'
    ],
    practiceQuestions: ['q-data-007', 'q-data-008'],
    estimatedReadTime: 15,
    orderIndex: 4
  },
  {
    id: 'lesson-data-005',
    title: 'Correlation and Causation',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'medium',
    duration: 20,
    description: 'Understand the difference between correlation and causation and interpret data responsibly.',
    content: {
      introduction: 'Just because two things are related doesn\'t mean one causes the other. Understanding this distinction is critical.',
      mainContent: [
        {
          type: 'heading',
          content: 'Correlation vs. Causation'
        },
        {
          type: 'text',
          content: 'Correlation: Two things vary together\nCausation: One thing causes changes in the other\nCorrelation doesn\'t prove causation!\nExample: Ice cream sales correlate with drowning deaths, but ice cream doesn\'t cause drowning (both increase in summer)'
        },
        {
          type: 'heading',
          content: 'Recognizing Causation'
        },
        {
          type: 'text',
          content: 'Requirements for causation:\n1) Correlation exists\n2) Correct time order\n3) No confounding variables\n4) Plausible mechanism\n5) Consistent evidence'
        }
      ],
      examples: [
        {
          title: 'Correlation Example',
          problem: 'Students who study more get higher grades. Does studying cause higher grades?',
          solution: 'Likely yes - study skills and effort cause grade improvement',
          explanation: 'Correlation + plausible mechanism + logical time order = likely causation'
        }
      ],
      summary: 'Critical thinking about data requires understanding these concepts. Don\'t accept claimed causation without evidence.'
    },
    keyPoints: [
      'Correlation: two things vary together',
      'Causation: one causes the other',
      'Correlation ≠ causation',
      'Confounding variables often explain correlations'
    ],
    prerequisites: ['lesson-data-001'],
    commonMistakes: [
      'Assuming correlation means causation',
      'Missing confounding variables',
      'Wrong time order for causation'
    ],
    tips: [
      'Always ask: could something else explain this?',
      'Look for alternative explanations',
      'Require strong evidence for causation claims'
    ],
    practiceQuestions: ['q-data-009'],
    estimatedReadTime: 15,
    orderIndex: 5
  },

  // Word Problems (5 lessons)
  {
    id: 'lesson-wordprob-001',
    title: 'Setting Up Word Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn systematic approach to translating word problems into mathematical equations.',
    content: {
      introduction: 'Word problems challenge you to translate English into mathematics. A systematic approach makes them manageable.',
      mainContent: [
        {
          type: 'heading',
          content: 'Problem-Solving Steps'
        },
        {
          type: 'text',
          content: '1) Read carefully - identify what you know and what you need to find\n2) Define variables - let x = ?\n3) Set up equation - translate words to math\n4) Solve the equation\n5) Check your answer - does it make sense?\n6) Answer the question asked'
        },
        {
          type: 'heading',
          content: 'Key Words and Phrases'
        },
        {
          type: 'text',
          content: 'Sum/total = add\nDifference = subtract\nProduct = multiply\nQuotient/rate = divide\n"More than" = add\n"Less than" = subtract'
        }
      ],
      examples: [
        {
          title: 'Word Problem Example',
          problem: 'Maria has 3 more books than John. Together they have 15 books. How many does each have?',
          solution: 'Let x = John\'s books\nMaria = x + 3\nx + (x + 3) = 15\n2x + 3 = 15\n2x = 12\nx = 6 (John), Maria = 9',
          explanation: 'Define variables, set up equation, solve, and verify.'
        }
      ],
      summary: 'Systematic problem-solving works for all types of word problems. Practice the steps consistently.'
    },
    keyPoints: [
      'Follow consistent steps every time',
      'Define variables clearly',
      'Translate carefully from words to symbols',
      'Always check your answer'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Not defining variables clearly',
      'Misunderstanding what the variable represents',
      'Not checking that answer makes sense',
      'Answering the wrong question'
    ],
    tips: [
      'Underline key information as you read',
      'Translate one phrase at a time',
      'Check: does the answer make sense in context?',
      'Answer what was actually asked'
    ],
    practiceQuestions: ['q-wordprob-001', 'q-wordprob-002'],
    estimatedReadTime: 15,
    orderIndex: 1
  },
  {
    id: 'lesson-wordprob-002',
    title: 'Distance, Rate, and Time Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 20,
    description: 'Solve motion problems using the relationship: distance = rate × time.',
    content: {
      introduction: 'Distance-rate-time problems appear frequently on the SAT. The formula is simple but problems can be tricky.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Formula'
        },
        {
          type: 'text',
          content: 'Distance = Rate × Time\nd = rt\n\nAlso:\nRate = Distance / Time\nTime = Distance / Rate'
        },
        {
          type: 'heading',
          content: 'Common Problem Types'
        },
        {
          type: 'text',
          content: 'Two objects moving toward each other: combined rate\nTwo objects moving same direction, one faster: difference of rates\nOne object, multiple legs: add up individual distances or times'
        }
      ],
      examples: [
        {
          title: 'Distance Problem Example',
          problem: 'A car travels 240 miles at 60 mph. How long does it take?',
          solution: 't = d/r = 240/60 = 4 hours',
          explanation: 'Use the distance formula rearranged for time.'
        }
      ],
      summary: 'Distance-rate-time problems require careful setup. Use a table to organize information.'
    },
    keyPoints: [
      'Distance = Rate × Time (always)',
      'Watch units - keep them consistent',
      'Table helps organize information',
      'Consider relative speeds when comparing objects'
    ],
    prerequisites: ['lesson-wordprob-001'],
    commonMistakes: [
      'Unit inconsistency (mixing hours and minutes)',
      'Forgetting to combine or subtract rates',
      'Wrong formula setup'
    ],
    tips: [
      'Make a table: distance, rate, time',
      'Keep units consistent throughout',
      'For "meeting" problems, add the rates',
      'For "one catches up to other," subtract rates'
    ],
    practiceQuestions: ['q-wordprob-003', 'q-wordprob-004'],
    estimatedReadTime: 15,
    orderIndex: 2
  },
  {
    id: 'lesson-wordprob-003',
    title: 'Work and Rate Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'hard',
    duration: 25,
    description: 'Solve problems where multiple people or machines work together.',
    content: {
      introduction: 'Work problems involve rates of work. The key is expressing work as fractions of a job.',
      mainContent: [
        {
          type: 'heading',
          content: 'Work Formula'
        },
        {
          type: 'text',
          content: 'Work = Rate × Time\n1 job = (combined rate) × time\n\nRates are expressed as "fraction of job per unit time"\nExample: If someone completes a job in 4 hours, their rate is 1/4 job per hour'
        },
        {
          type: 'heading',
          content: 'Combined Work'
        },
        {
          type: 'text',
          content: 'When multiple workers work together, add their rates:\nCombined rate = rate₁ + rate₂ + rate₃...\nTime to complete = 1 / (combined rate)'
        }
      ],
      examples: [
        {
          title: 'Work Problem Example',
          problem: 'Alice can paint a room in 3 hours. Bob can paint it in 6 hours. Working together, how long?',
          solution: 'Alice\'s rate = 1/3 per hour\nBob\'s rate = 1/6 per hour\nCombined = 1/3 + 1/6 = 1/2 per hour\nTime = 1 ÷ (1/2) = 2 hours',
          explanation: 'Add rates, then find time needed.'
        }
      ],
      summary: 'Work problems follow a consistent pattern. Define rates as fractions, then solve.'
    },
    keyPoints: [
      'Express work as fractions of a job',
      'Rate = 1 / (time to complete whole job)',
      'Combined rate = sum of individual rates',
      'Always set up as fractions first'
    ],
    prerequisites: ['lesson-wordprob-001', 'lesson-algebra-002'],
    commonMistakes: [
      'Subtracting rates instead of adding',
      'Treating work like distance problems',
      'Forgetting that combined rate speeds up completion'
    ],
    tips: [
      'Express each rate as a fraction of the job',
      'Add rates for combined work',
      'Time = 1 / (combined rate)',
      'Check: combined rate > any individual rate'
    ],
    practiceQuestions: ['q-wordprob-005'],
    estimatedReadTime: 18,
    orderIndex: 3
  },
  {
    id: 'lesson-wordprob-004',
    title: 'Mixture and Percent Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'hard',
    duration: 25,
    description: 'Solve mixture problems involving percentages and concentrations.',
    content: {
      introduction: 'Mixture problems combine quantities of different concentrations. They require careful setup.',
      mainContent: [
        {
          type: 'heading',
          content: 'Mixture Problem Strategy'
        },
        {
          type: 'text',
          content: '1) Define variables for each amount\n2) Set up equations for total amount and total solute\n3) Total solute: (% as decimal) × (amount) for each component\n4) Final concentration = (total solute) / (total amount) × 100'
        },
        {
          type: 'heading',
          content: 'Setup Example'
        },
        {
          type: 'text',
          content: 'For mixing 10% solution with 30% solution:\n0.10x + 0.30y = 0.25(x + y)\n\nLeft side: amount of pure substance from each\nRight side: desired concentration × final amount'
        }
      ],
      examples: [
        {
          title: 'Mixture Example',
          problem: 'Mix 5 liters of 20% salt with 3 liters of 40% salt. What\'s the final concentration?',
          solution: 'Salt from first: 0.20(5) = 1\nSalt from second: 0.40(3) = 1.2\nTotal salt: 2.2, Total liquid: 8\nConcentration: 2.2/8 = 0.275 = 27.5%',
          explanation: 'Calculate amount of pure substance from each, add, divide by total.'
        }
      ],
      summary: 'Organize mixture problems carefully. Use a table if it helps.'
    },
    keyPoints: [
      'Set up equations for amount and pure substance',
      'Convert percents to decimals',
      'Total pure substance is sum of parts',
      'Final % = total substance / total amount'
    ],
    prerequisites: ['lesson-wordprob-001', 'lesson-data-004'],
    commonMistakes: [
      'Forgetting to convert percent to decimal',
      'Not setting up the pure substance equation',
      'Confusing final concentration with one of the inputs'
    ],
    tips: [
      'Use a table: amount, %, pure substance',
      'Convert % to decimal immediately',
      'Check: final % should be between the input %s'
    ],
    practiceQuestions: ['q-wordprob-006'],
    estimatedReadTime: 18,
    orderIndex: 4
  },
  {
    id: 'lesson-wordprob-005',
    title: 'Investment and Finance Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 20,
    description: 'Solve problems involving interest, investments, and financial calculations.',
    content: {
      introduction: 'Financial problems appear on the SAT. Understanding interest and investment formulas helps solve them.',
      mainContent: [
        {
          type: 'heading',
          content: 'Simple Interest'
        },
        {
          type: 'text',
          content: 'I = Prt\nWhere: I = interest, P = principal, r = rate (as decimal), t = time (years)\nA = P + I = P(1 + rt)'
        },
        {
          type: 'heading',
          content: 'Compound Interest'
        },
        {
          type: 'text',
          content: 'A = P(1 + r)ᵗ\nWhere: A = final amount, P = principal, r = rate (as decimal), t = time'
        }
      ],
      examples: [
        {
          title: 'Simple Interest Example',
          problem: 'Invest $1000 at 5% simple interest for 3 years. How much interest?',
          solution: 'I = Prt = 1000(0.05)(3) = $150',
          explanation: 'Apply the simple interest formula directly.'
        }
      ],
      summary: 'Financial problems are straightforward with the right formulas. Memorize both interest formulas.'
    },
    keyPoints: [
      'Simple interest: I = Prt',
      'Compound interest: A = P(1 + r)ᵗ',
      'Convert percent rate to decimal',
      'Time should be in years'
    ],
    prerequisites: ['lesson-wordprob-001'],
    commonMistakes: [
      'Forgetting to convert percent to decimal',
      'Using compound when simple is asked',
      'Wrong time units'
    ],
    tips: [
      'Identify: principal, rate, time',
      'Check: is it simple or compound interest?',
      'Convert % to decimal before plugging in'
    ],
    practiceQuestions: ['q-wordprob-007'],
    estimatedReadTime: 15,
    orderIndex: 5
  }
];
