import { Lesson } from '../../types';

export const mathLessons: Lesson[] = [
  // Algebra (5 lessons)
  {
    id: 'lesson-algebra-001',
    title: 'Solving Linear Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'easy',
    duration: 30,
    description: 'Master the fundamental skill of solving linear equations with one variable.',
    content: {
      introduction: 'Linear equations are the single most tested algebra skill on the SAT — nearly every other topic in this course eventually reduces to solving one. The good news is that they follow a completely predictable pattern once you understand the core idea: an equation is a balance, and whatever you do to one side, you must do to the other. By the end of this lesson you\'ll be able to solve any single-variable linear equation quickly and confidently, including ones with fractions, negative numbers, and parentheses.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Makes an Equation "Linear"?'
        },
        {
          type: 'text',
          content: 'A linear equation is any equation where the variable appears only to the first power — no x², no square roots of x, no x in a denominator. Examples include 2x + 3 = 7 and 3a - 5 = 10. The word "linear" comes from the fact that if you graphed the equation, it would form a straight line. On the SAT, linear equations show up constantly, both as standalone problems and buried inside word problems, geometry questions, and data analysis.'
        },
        {
          type: 'heading',
          content: 'The Balance Principle'
        },
        {
          type: 'text',
          content: 'Picture an equation as a two-pan balance scale, with the equals sign as the pivot point. Both sides currently weigh the same. If you add 5 grams to the left pan, the scale tips — unless you also add 5 grams to the right pan. This is the entire logic behind solving equations: any operation (adding, subtracting, multiplying, dividing) is legal as long as you apply it to both sides. This single idea explains every step you\'ll ever take when solving a linear equation.'
        },
        {
          type: 'heading',
          content: 'The Five-Step Process'
        },
        {
          type: 'text',
          content: '1) Simplify each side separately first — combine like terms and distribute any parentheses.\n2) Move all variable terms to one side using addition or subtraction.\n3) Move all constant (number-only) terms to the other side.\n4) Divide both sides by the coefficient of the variable to isolate it.\n5) Check your answer by substituting it back into the ORIGINAL equation — not a simplified version.'
        },
        {
          type: 'heading',
          content: 'Working Backwards Through Order of Operations'
        },
        {
          type: 'text',
          content: 'A helpful mental shortcut: to isolate a variable, undo the operations in the reverse order they were applied. If an expression is built as "multiply by 2, then add 3" (2x + 3), you undo it in reverse: first subtract 3, then divide by 2. This is why you always deal with addition/subtraction before multiplication/division when isolating a variable — it\'s PEMDAS running backwards.'
        },
        {
          type: 'heading',
          content: 'Negative Coefficients and Fractions'
        },
        {
          type: 'text',
          content: 'Two situations trip students up most often. First, dividing by a negative number: the sign of your answer depends on it, so -4x = 16 gives x = -4, not x = 4. Second, fractions: an equation like x/3 + 2 = 8 is solved the same way — subtract 2, then multiply both sides by 3 to clear the fraction. Multiplying by the denominator is always a safe way to eliminate a fraction from an equation.'
        }
      ],
      examples: [
        {
          title: 'Example 1: One-Step Equation',
          problem: 'Solve: x + 7 = 15',
          solution: 'x + 7 = 15\nSubtract 7 from both sides:\nx = 15 - 7\nx = 8',
          explanation: 'We subtract 7 because it undoes the "+7" that was applied to x. Check: 8 + 7 = 15 ✓'
        },
        {
          title: 'Example 2: Isolating with Division',
          problem: 'Solve: 3x = 18',
          solution: '3x = 18\nDivide both sides by 3:\nx = 18 ÷ 3\nx = 6',
          explanation: 'Dividing by 3 (the coefficient) leaves x alone on the left. Check: 3(6) = 18 ✓'
        },
        {
          title: 'Example 3: Two-Step Equation',
          problem: 'Solve: 2x - 5 = 11',
          solution: '2x - 5 = 11\nAdd 5 to both sides:\n2x = 16\nDivide both sides by 2:\nx = 8',
          explanation: 'Working backwards through order of operations: undo subtraction first, then undo multiplication. Check: 2(8) - 5 = 16 - 5 = 11 ✓'
        },
        {
          title: 'Example 4: Negative Coefficient',
          problem: 'Solve: -4x + 3 = 19',
          solution: '-4x + 3 = 19\nSubtract 3 from both sides:\n-4x = 16\nDivide both sides by -4:\nx = -4',
          explanation: 'Dividing a positive by a negative gives a negative result. Check: -4(-4) + 3 = 16 + 3 = 19 ✓'
        }
      ],
      summary: 'Every linear equation, no matter how it\'s dressed up, comes down to the same balance principle: whatever you do to one side, do to the other. Master the five-step process — simplify, gather variables, gather constants, divide to isolate, and check — and you\'ll be able to handle every equation this course throws at you, along with the ones hiding inside word problems and geometry questions later on.'
    },
    keyPoints: [
      'Linear equations have variables with power of 1',
      'The balance principle: apply the same operation to both sides to keep the equation true',
      'Use inverse operations: addition↔subtraction, multiplication↔division',
      'Undo operations in reverse order of operations (PEMDAS backwards)',
      'Always check your solution by substituting into the original equation',
      'Dividing by a negative flips the sign of your result, not the inequality (that only applies to inequalities)'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to do the same operation on BOTH sides',
      'Sign errors when moving terms across the equals sign',
      'Dividing only one term by the coefficient instead of every term',
      'Not checking the final answer in the original equation',
      'Losing track of a negative sign when dividing'
    ],
    tips: [
      'Write out each step instead of doing math in your head — it prevents careless errors',
      'Check your work by substituting your answer back into the original equation',
      'Picture a balance scale to remember why both sides must change together',
      'Practice with a mix of positive, negative, and fractional coefficients to build flexibility',
      'On multi-step problems, simplify each side completely before moving anything across the equals sign'
    ],
    practiceQuestions: ['lesson-alg-exp-001-q01', 'lesson-alg-exp-001-q02', 'lesson-alg-exp-001-q03', 'lesson-alg-exp-001-q04', 'lesson-alg-exp-001-q05', 'lesson-alg-exp-001-q06', 'lesson-alg-exp-001-q07', 'lesson-alg-exp-001-q08', 'lesson-alg-exp-001-q09', 'lesson-alg-exp-001-q10', 'lesson-alg-exp-001-q11', 'lesson-alg-exp-001-q12', 'lesson-alg-exp-001-q13', 'lesson-alg-exp-001-q14', 'lesson-alg-exp-001-q15', 'lesson-alg-exp-001-q16', 'lesson-alg-exp-001-q17', 'lesson-alg-exp-001-q18', 'lesson-alg-exp-001-q19', 'lesson-alg-exp-001-q20'],
    estimatedReadTime: 20,
    orderIndex: 1
  },
  {
    id: 'lesson-algebra-002',
    title: 'Systems of Linear Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 30,
    description: 'Solve systems of equations using substitution, elimination, and graphing methods.',
    content: {
      introduction: 'A system of equations shows up whenever a problem gives you two unknowns and two separate pieces of information relating them — think "two numbers whose sum is 15 and whose difference is 3." Solving a system means finding the one (x, y) pair that makes both equations true simultaneously. The SAT tests three solving methods, and knowing when to reach for each one will save you real time on test day.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a System of Equations?'
        },
        {
          type: 'text',
          content: 'A system is simply two (or more) equations that share the same variables. Graphically, each linear equation represents a line, and the solution to the system is the point where those lines intersect — the one (x, y) pair that lies on both lines at once. A system can have exactly one solution (lines cross once), no solution (lines are parallel and never meet), or infinitely many solutions (the equations describe the same line).'
        },
        {
          type: 'heading',
          content: 'Method 1: Substitution'
        },
        {
          type: 'text',
          content: 'Substitution works best when one equation is already solved for a variable (like y = 2x + 1), or can easily be solved that way. Solve one equation for one variable, then substitute that entire expression into the other equation in place of that variable. This leaves you with a single-variable equation you already know how to solve.'
        },
        {
          type: 'heading',
          content: 'Method 2: Elimination'
        },
        {
          type: 'text',
          content: 'Elimination works best when the coefficients of one variable are the same or easily matched. Multiply one or both equations by a constant so that the coefficients of one variable are opposites (like 3x and -3x), then add the equations together — that variable cancels out, leaving one equation in one variable.'
        },
        {
          type: 'heading',
          content: 'Method 3: Graphing'
        },
        {
          type: 'text',
          content: 'Graphing both equations and reading off the intersection point is the most visual method, but it\'s slow and imprecise by hand — it\'s most useful for understanding WHY a system has one, zero, or infinite solutions, and for questions that already give you a graph.'
        },
        {
          type: 'heading',
          content: 'Choosing the Right Method'
        },
        {
          type: 'text',
          content: 'A quick decision rule: if a variable is already isolated (or nearly isolated) in one equation, use substitution. If both equations are in standard form (Ax + By = C) and one variable\'s coefficients line up nicely, use elimination. When in doubt, substitution always works — it just might involve messier fractions.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Substitution',
          problem: 'Solve: y = 2x and x + y = 9',
          solution: 'Substitute y = 2x into the second equation:\nx + 2x = 9\nCombine like terms: 3x = 9\nDivide: x = 3\nFind y: y = 2(3) = 6\nSolution: (3, 6)',
          explanation: 'Because y was already isolated, we replaced it directly and solved for x first.'
        },
        {
          title: 'Example 2: Elimination',
          problem: 'Solve: 2x + y = 11 and x - y = 1',
          solution: 'Notice the y-coefficients are already opposites (+1 and -1).\nAdd the equations: (2x + y) + (x - y) = 11 + 1\n3x = 12\nx = 4\nSubstitute back: 4 - y = 1, so y = 3\nSolution: (4, 3)',
          explanation: 'Adding the equations directly eliminated y because +y and -y cancel.'
        },
        {
          title: 'Example 3: Elimination with Multiplication',
          problem: 'Solve: 3x + 2y = 16 and x + y = 7',
          solution: 'Multiply the second equation by -2: -2x - 2y = -14\nAdd to the first equation: (3x + 2y) + (-2x - 2y) = 16 + (-14)\nx = 2\nSubstitute back: 2 + y = 7, so y = 5\nSolution: (2, 5)',
          explanation: 'Multiplying first let us cancel the y-terms cleanly.'
        },
        {
          title: 'Example 4: Word Problem System',
          problem: 'The sum of two numbers is 20. Their difference is 4. Find the numbers.',
          solution: 'Let the numbers be x and y.\nx + y = 20\nx - y = 4\nAdd the equations: 2x = 24, so x = 12\nSubstitute: 12 + y = 20, so y = 8',
          explanation: 'Translating "sum" and "difference" into two equations turns this into a standard elimination problem.'
        }
      ],
      summary: 'Systems of equations are everywhere on the SAT, from pure algebra questions to word problems about tickets, mixtures, and rates. Substitution and elimination are the two workhorse methods — practice both until you can instantly recognize which one fits a given system, and always verify your solution works in BOTH original equations.'
    },
    keyPoints: [
      'A system is two or more equations sharing the same variables',
      'The solution is the (x, y) pair that satisfies every equation at once',
      'Substitution: isolate one variable, plug it into the other equation',
      'Elimination: add or subtract equations (after scaling) to cancel a variable',
      'A system can have one solution, no solution, or infinitely many solutions',
      'Always verify your solution in both original equations, not just one'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Only checking the solution in one of the two equations',
      'Arithmetic sign errors when adding or subtracting equations in elimination',
      'Forgetting to multiply every term in an equation when scaling it for elimination',
      'Substituting into the same equation you just solved instead of the other one',
      'Misreading a graph\'s intersection point'
    ],
    tips: [
      'Choose substitution if a variable is already isolated or nearly isolated',
      'Choose elimination if coefficients can be matched with a simple multiplication',
      'Always verify your solution in both original equations before moving on',
      'Label your final answer clearly as an ordered pair (x, y)',
      'If a system produces a false statement like 0 = 5, there is no solution; if it produces a true statement like 0 = 0, there are infinitely many'
    ],
    practiceQuestions: ['lesson-alg-sys-002-q01', 'lesson-alg-sys-002-q02', 'lesson-alg-sys-002-q03', 'lesson-alg-sys-002-q04', 'lesson-alg-sys-002-q05', 'lesson-alg-sys-002-q06', 'lesson-alg-sys-002-q07', 'lesson-alg-sys-002-q08', 'lesson-alg-sys-002-q09', 'lesson-alg-sys-002-q10', 'lesson-alg-sys-002-q11', 'lesson-alg-sys-002-q12', 'lesson-alg-sys-002-q13', 'lesson-alg-sys-002-q14', 'lesson-alg-sys-002-q15', 'lesson-alg-sys-002-q16', 'lesson-alg-sys-002-q17', 'lesson-alg-sys-002-q18', 'lesson-alg-sys-002-q19', 'lesson-alg-sys-002-q20'],
    estimatedReadTime: 20,
    orderIndex: 2
  },
  {
    id: 'lesson-algebra-003',
    title: 'Quadratic Equations',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'hard',
    duration: 35,
    description: 'Solve quadratic equations using factoring, the quadratic formula, and completing the square.',
    content: {
      introduction: 'A quadratic equation is any equation where the highest power of the variable is 2 — the general form is ax² + bx + c = 0. Unlike linear equations, quadratics usually have TWO solutions, because a parabola can cross the x-axis at up to two points. The SAT expects you to be fluent in three solving methods: factoring (fastest when it works), the quadratic formula (works every time), and completing the square (useful for understanding vertex form and for equations that resist factoring).',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Quadratic Equation?'
        },
        {
          type: 'text',
          content: 'The standard form is ax² + bx + c = 0, where a ≠ 0 (if a were 0, the x² term would disappear and it would just be linear). Before applying any solving method, always rearrange the equation so everything is on one side and it equals 0 — this is a required first step, not optional.'
        },
        {
          type: 'heading',
          content: 'Method 1: Factoring'
        },
        {
          type: 'text',
          content: 'When a quadratic factors nicely, this is the fastest method. For x² + bx + c = 0 (where a = 1), find two numbers that multiply to c and add to b. Rewrite as (x + p)(x + q) = 0. Then use the Zero Product Property: if two things multiply to zero, at least one of them must be zero, so x + p = 0 or x + q = 0, giving two solutions.'
        },
        {
          type: 'heading',
          content: 'Method 2: The Quadratic Formula'
        },
        {
          type: 'text',
          content: 'When factoring is difficult or impossible, the quadratic formula always works: x = (-b ± √(b² - 4ac)) / (2a). Plug in a, b, and c directly from the standard form. The ± symbol means you\'ll generally get two answers — one using + and one using -.'
        },
        {
          type: 'heading',
          content: 'The Discriminant: How Many Solutions?'
        },
        {
          type: 'text',
          content: 'The expression under the square root, b² - 4ac, is called the discriminant, and it tells you how many real solutions exist before you even finish solving. If b² - 4ac > 0, there are two real solutions. If it equals 0, there is exactly one repeated solution (the parabola just touches the x-axis). If it\'s negative, there are no real solutions (the parabola never crosses the x-axis).'
        },
        {
          type: 'heading',
          content: 'Method 3: Completing the Square'
        },
        {
          type: 'text',
          content: 'This method rewrites the quadratic as a perfect square trinomial plus a constant, which is useful for finding a parabola\'s vertex. Take half of the b coefficient, square it, and add/subtract it appropriately to create a perfect square. While less commonly needed for solving on the SAT, it explains where the quadratic formula itself comes from.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Simple Factoring',
          problem: 'Solve: x² + 5x + 6 = 0',
          solution: 'Find two numbers that multiply to 6 and add to 5: those are 2 and 3.\nFactor: (x + 2)(x + 3) = 0\nSet each factor to 0: x + 2 = 0 or x + 3 = 0\nSolutions: x = -2 or x = -3',
          explanation: 'Check both: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓ and (-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓'
        },
        {
          title: 'Example 2: Factoring with a Negative Product',
          problem: 'Solve: x² - x - 12 = 0',
          solution: 'Find two numbers that multiply to -12 and add to -1: those are -4 and 3.\nFactor: (x - 4)(x + 3) = 0\nSolutions: x = 4 or x = -3',
          explanation: 'When the constant is negative, the two numbers must have opposite signs.'
        },
        {
          title: 'Example 3: Using the Quadratic Formula',
          problem: 'Solve: 2x² + 3x - 5 = 0',
          solution: 'a = 2, b = 3, c = -5\nx = (-3 ± √(3² - 4(2)(-5))) / (2(2))\nx = (-3 ± √(9 + 40)) / 4\nx = (-3 ± √49) / 4\nx = (-3 ± 7) / 4\nx = 1 or x = -2.5',
          explanation: 'This doesn\'t factor easily with integers, so the formula is the reliable path.'
        },
        {
          title: 'Example 4: Using the Discriminant',
          problem: 'Without fully solving, how many real solutions does x² + 4x + 8 = 0 have?',
          solution: 'a = 1, b = 4, c = 8\nDiscriminant: b² - 4ac = 16 - 32 = -16\nSince -16 < 0, there are no real solutions.',
          explanation: 'A negative discriminant means the parabola never touches the x-axis.'
        }
      ],
      summary: 'Quadratics almost always have two solutions, and the SAT rewards students who can quickly choose the fastest method: try factoring first, and fall back on the quadratic formula when factoring isn\'t obvious. The discriminant is a shortcut for knowing how many solutions to expect before you even finish the problem — use it to sanity-check your work.'
    },
    keyPoints: [
      'Quadratic equations have the standard form ax² + bx + c = 0, with degree 2',
      'They typically have two solutions, but can have one repeated solution or none (in the real numbers)',
      'Factoring is fastest when the equation factors with integers',
      'The quadratic formula x = (-b ± √(b² - 4ac)) / (2a) always works',
      'The discriminant (b² - 4ac) predicts the number of real solutions before you solve',
      'Always set the equation equal to 0 before choosing a solving method'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Forgetting the ± in the quadratic formula, which loses one of the two solutions',
      'Sign errors when factoring, especially with negative constants',
      'Not setting the equation equal to 0 before solving',
      'Forgetting to square b (not multiply by 2) inside the discriminant',
      'Stopping after finding one solution instead of both'
    ],
    tips: [
      'Try factoring first — if the numbers don\'t come quickly, switch to the quadratic formula rather than guessing',
      'Calculate the discriminant first if a question only asks how MANY solutions exist',
      'Always double-check both solutions by substituting them back into the original equation',
      'Write out a, b, and c explicitly before plugging into the quadratic formula to avoid sign mistakes',
      'Remember that "no real solutions" doesn\'t mean you made an error — some parabolas genuinely never cross the x-axis'
    ],
    practiceQuestions: ['lesson-alg-quad-003-q01', 'lesson-alg-quad-003-q02', 'lesson-alg-quad-003-q03', 'lesson-alg-quad-003-q04', 'lesson-alg-quad-003-q05', 'lesson-alg-quad-003-q06', 'lesson-alg-quad-003-q07', 'lesson-alg-quad-003-q08', 'lesson-alg-quad-003-q09', 'lesson-alg-quad-003-q10', 'lesson-alg-quad-003-q11', 'lesson-alg-quad-003-q12', 'lesson-alg-quad-003-q13', 'lesson-alg-quad-003-q14', 'lesson-alg-quad-003-q15', 'lesson-alg-quad-003-q16', 'lesson-alg-quad-003-q17', 'lesson-alg-quad-003-q18', 'lesson-alg-quad-003-q19', 'lesson-alg-quad-003-q20'],
    estimatedReadTime: 22,
    orderIndex: 3
  },
  {
    id: 'lesson-algebra-004',
    title: 'Functions and Function Notation',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 25,
    description: 'Understand functions, function notation, and how to evaluate functions.',
    content: {
      introduction: 'A function is one of the most important ideas in all of mathematics: a rule that takes an input and produces exactly one output. You already use functions constantly without the formal name — "the cost depends on how many items you buy" is a function. On the SAT, functions appear as formulas to evaluate, graphs to interpret, and word problems to model. Getting comfortable with the notation is half the battle.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Function?'
        },
        {
          type: 'text',
          content: 'A function is a relationship between inputs and outputs where every input produces exactly one output. Function notation f(x) is read "f of x" — it does NOT mean f multiplied by x. Instead, f is the name of the function (like a labeled machine), and x is the input you feed into it. f(x) represents the output that machine produces.'
        },
        {
          type: 'heading',
          content: 'Evaluating a Function'
        },
        {
          type: 'text',
          content: 'To evaluate f(5) when f(x) = 2x + 3, simply replace every x in the formula with 5: f(5) = 2(5) + 3 = 13. The number inside the parentheses always tells you what to substitute for x. This works the same way no matter how complicated the formula gets — always substitute first, then simplify using order of operations.'
        },
        {
          type: 'heading',
          content: 'Domain and Range'
        },
        {
          type: 'text',
          content: 'The domain is the complete set of allowed input values (x-values) — some are restricted, like avoiding division by zero or taking the square root of a negative number. The range is the complete set of possible output values (y-values) that result. Understanding domain restrictions is especially important for functions involving fractions or square roots.'
        },
        {
          type: 'heading',
          content: 'The Vertical Line Test'
        },
        {
          type: 'text',
          content: 'Not every graph represents a function. The vertical line test says: if you can draw any vertical line that crosses the graph more than once, it is NOT a function, because that would mean one input has two different outputs. A circle, for example, fails this test — but a straight line or parabola opening upward or downward passes it.'
        },
        {
          type: 'heading',
          content: 'Reading Function Graphs'
        },
        {
          type: 'text',
          content: 'When a function is given as a graph rather than a formula, f(a) means "find the y-value when x = a" — locate a on the x-axis, trace up or down to the curve, and read off the y-coordinate. This graphical interpretation shows up often in SAT data-analysis-style function questions.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Evaluation',
          problem: 'If f(x) = 2x + 3, find f(5)',
          solution: 'f(5) = 2(5) + 3\n= 10 + 3\n= 13',
          explanation: 'Replace every x with 5, then simplify using order of operations.'
        },
        {
          title: 'Example 2: Evaluation with a Negative Input',
          problem: 'If g(x) = x² - 4x + 1, find g(-2)',
          solution: 'g(-2) = (-2)² - 4(-2) + 1\n= 4 + 8 + 1\n= 13',
          explanation: 'Be careful with negative substitutions — (-2)² is positive 4, and -4(-2) becomes +8.'
        },
        {
          title: 'Example 3: Solving for the Input',
          problem: 'If f(x) = 3x - 7 and f(x) = 8, find x',
          solution: '3x - 7 = 8\n3x = 15\nx = 5',
          explanation: 'When you\'re given the OUTPUT and asked for the input, set the formula equal to that output and solve like any linear equation.'
        },
        {
          title: 'Example 4: Reading a Graph',
          problem: 'A graph of h(x) passes through the point (3, 7). What is h(3)?',
          solution: 'h(3) = 7',
          explanation: 'A point (x, y) on the graph of a function h means h(x) = y directly — here x = 3 and y = 7.'
        }
      ],
      summary: 'Function notation is just a labeling system: f(x) names the output of function f for a given input x. Once evaluating f(5), f(-2), or f(a) feels automatic, you\'re ready to handle domain and range questions and graph-reading problems, which build directly on this same substitution skill.'
    },
    keyPoints: [
      'A function maps each input to exactly one output',
      'Function notation f(x) means "the output of function f when the input is x" — it is not multiplication',
      'To evaluate a function, substitute the given value for every x in the formula',
      'Domain is the set of all possible inputs; range is the set of all possible outputs',
      'The vertical line test determines whether a graph represents a function',
      'On a graph, the point (a, b) tells you that f(a) = b'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Reading f(x) as "f times x" instead of "output of f at input x"',
      'Forgetting parentheses when substituting negative numbers, leading to sign errors',
      'Confusing domain (inputs) with range (outputs)',
      'Trying to "solve" f(x) when the question is only asking you to evaluate it',
      'Misreading coordinates when interpreting a function from its graph'
    ],
    tips: [
      'Practice function notation with a variety of formulas until substitution becomes automatic',
      'Always use parentheses around negative numbers when substituting to avoid sign errors',
      'When given f(x) = (a number) and asked for x, set the formula equal to that number and solve',
      'Use the vertical line test whenever you\'re asked if a graph represents a function',
      'Remember: domain = x-values (inputs), range = y-values (outputs) — "d comes before r," and x comes before y'
    ],
    practiceQuestions: ['lesson-alg-poly-004-q01', 'lesson-alg-poly-004-q02', 'lesson-alg-poly-004-q03', 'lesson-alg-poly-004-q04', 'lesson-alg-poly-004-q05', 'lesson-alg-poly-004-q06', 'lesson-alg-poly-004-q07', 'lesson-alg-poly-004-q08', 'lesson-alg-poly-004-q09', 'lesson-alg-poly-004-q10', 'lesson-alg-poly-004-q11', 'lesson-alg-poly-004-q12', 'lesson-alg-poly-004-q13', 'lesson-alg-poly-004-q14', 'lesson-alg-poly-004-q15', 'lesson-alg-poly-004-q16', 'lesson-alg-poly-004-q17', 'lesson-alg-poly-004-q18', 'lesson-alg-poly-004-q19', 'lesson-alg-poly-004-q20'],
    estimatedReadTime: 18,
    orderIndex: 4
  },
  {
    id: 'lesson-algebra-005',
    title: 'Inequalities and Absolute Value',
    subject: 'math',
    topic: 'algebra',
    difficulty: 'medium',
    duration: 25,
    description: 'Solve linear and absolute value inequalities with proper notation and graphing.',
    content: {
      introduction: 'Inequalities describe ranges of values rather than single answers — "you need at least $20" or "the temperature stayed below 50 degrees" are both inequalities. They\'re solved almost exactly like equations, with one critical exception involving negative numbers that trips up nearly every student the first time they see it. Absolute value adds another layer, since it measures distance from zero and therefore usually produces two separate cases to consider.',
      mainContent: [
        {
          type: 'heading',
          content: 'Solving Inequalities: Same Steps, One Key Difference'
        },
        {
          type: 'text',
          content: 'Inequalities (using <, >, ≤, ≥) are solved with the exact same balance-principle steps as equations — EXCEPT for one rule: whenever you multiply or divide both sides by a NEGATIVE number, you must flip the direction of the inequality sign. For example, -2x > 6 becomes x < -3 after dividing by -2 — notice the > became a <.'
        },
        {
          type: 'heading',
          content: 'Why Does the Sign Flip?'
        },
        {
          type: 'text',
          content: 'Think about a true statement like 2 < 5. If you multiply both sides by -1 without flipping, you\'d get -2 < -5, which is false (-2 is actually greater than -5). Flipping the sign to -2 > -5 keeps the statement true. This is why the flip rule exists — it\'s not arbitrary, it\'s necessary to preserve truth.'
        },
        {
          type: 'heading',
          content: 'Graphing Inequality Solutions'
        },
        {
          type: 'text',
          content: 'On a number line, use an open circle for < or > (the endpoint is NOT included) and a closed/filled circle for ≤ or ≥ (the endpoint IS included). Shade the direction that satisfies the inequality — to the right for "greater than," to the left for "less than."'
        },
        {
          type: 'heading',
          content: 'Absolute Value Basics'
        },
        {
          type: 'text',
          content: 'Absolute value, written |x|, represents distance from zero on the number line — always a non-negative result. |5| = 5 and |-5| = 5, because both numbers are 5 units from zero. This "distance" interpretation is the key to solving absolute value equations and inequalities correctly.'
        },
        {
          type: 'heading',
          content: 'Absolute Value Equations and Inequalities'
        },
        {
          type: 'text',
          content: 'Because |x| measures distance, these expressions split into two cases:\n|x| = a means x = a OR x = -a (two specific solutions)\n|x| < a means -a < x < a (a range between two values — think "close to zero")\n|x| > a means x < -a OR x > a (two separate ranges — think "far from zero")\nAlways isolate the absolute value expression first, before splitting into cases.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Inequality (No Flip Needed)',
          problem: 'Solve: 2x + 3 < 11',
          solution: '2x + 3 < 11\nSubtract 3: 2x < 8\nDivide by 2 (positive, no flip): x < 4',
          explanation: 'Since we divided by a positive number, the inequality direction stays the same.'
        },
        {
          title: 'Example 2: Inequality Requiring a Flip',
          problem: 'Solve: -3x + 2 > 8',
          solution: '-3x + 2 > 8\nSubtract 2: -3x > 6\nDivide by -3 (flip the sign!): x < -2',
          explanation: 'Dividing by a negative number flips > into <. Test x = -3: -3(-3) + 2 = 11 > 8 ✓'
        },
        {
          title: 'Example 3: Absolute Value Equation',
          problem: 'Solve: |x - 4| = 6',
          solution: 'Case 1: x - 4 = 6 → x = 10\nCase 2: x - 4 = -6 → x = -2\nSolutions: x = 10 or x = -2',
          explanation: 'x - 4 is 6 units from zero in either direction, giving two possible values.'
        },
        {
          title: 'Example 4: Absolute Value Inequality',
          problem: 'Solve: |2x + 1| < 7',
          solution: 'This becomes: -7 < 2x + 1 < 7\nSubtract 1 from all three parts: -8 < 2x < 6\nDivide all three parts by 2: -4 < x < 3',
          explanation: 'A "less than" absolute value inequality becomes a single compound range — solve it by applying each step to all three parts at once.'
        }
      ],
      summary: 'Inequalities behave just like equations with one crucial exception: flip the sign when multiplying or dividing by a negative number. Absolute value problems require you to think in terms of distance from zero, which naturally splits most problems into two cases. Practice both skills separately before combining them, since absolute value inequalities test both ideas at once.'
    },
    keyPoints: [
      'Solve inequalities using the same steps as equations',
      'Flip the inequality sign when multiplying or dividing both sides by a negative number',
      'Open circles mean the endpoint is excluded; closed circles mean it is included',
      '|x| represents distance from zero, always a non-negative value',
      '|x| < a becomes a range: -a < x < a',
      '|x| > a becomes two separate ranges: x < -a or x > a'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Forgetting to flip the inequality sign when multiplying or dividing by a negative',
      'Only finding one solution to an absolute value equation instead of both cases',
      'Mixing up the "less than" (single range) and "greater than" (two ranges) absolute value patterns',
      'Not isolating the absolute value expression before splitting into cases',
      'Using the wrong circle type (open vs. closed) when graphing'
    ],
    tips: [
      'Say the rule out loud as you work: "multiply or divide by negative — flip the sign"',
      'Test a value from your solution set in the original inequality to verify it',
      'For absolute value, always isolate the |...| completely before splitting into cases',
      'Remember "less than" absolute value = one range in the middle; "greater than" = two ranges on the outside',
      'Sketch a quick number line for any inequality problem you find confusing — visualizing helps'
    ],
    practiceQuestions: ['lesson-alg-ineq-005-q01', 'lesson-alg-ineq-005-q02', 'lesson-alg-ineq-005-q03', 'lesson-alg-ineq-005-q04', 'lesson-alg-ineq-005-q05', 'lesson-alg-ineq-005-q06', 'lesson-alg-ineq-005-q07', 'lesson-alg-ineq-005-q08', 'lesson-alg-ineq-005-q09', 'lesson-alg-ineq-005-q10', 'lesson-alg-ineq-005-q11', 'lesson-alg-ineq-005-q12', 'lesson-alg-ineq-005-q13', 'lesson-alg-ineq-005-q14', 'lesson-alg-ineq-005-q15', 'lesson-alg-ineq-005-q16', 'lesson-alg-ineq-005-q17', 'lesson-alg-ineq-005-q18', 'lesson-alg-ineq-005-q19', 'lesson-alg-ineq-005-q20'],
    estimatedReadTime: 18,
    orderIndex: 5
  },

  // Geometry (5 lessons)
  {
    id: 'lesson-geometry-001',
    title: 'Angles, Triangles, and Polygons',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'easy',
    duration: 30,
    description: 'Learn fundamental angle and triangle relationships that form the basis of geometry.',
    content: {
      introduction: 'Triangles and angles are the building blocks of every geometry topic that follows — circles, coordinate geometry, and 3D solids all lean on the relationships you\'ll learn here. The single most important fact in this entire lesson is that the angles of any triangle always add up to 180°, no matter the triangle\'s size or shape. Once that\'s second nature, most triangle problems become simple arithmetic.',
      mainContent: [
        {
          type: 'heading',
          content: 'Classifying Angles'
        },
        {
          type: 'text',
          content: 'Acute angles measure less than 90°. Right angles measure exactly 90° (marked with a small square in diagrams). Obtuse angles measure more than 90° but less than 180°. Straight angles measure exactly 180° — a straight line. Being able to estimate an angle\'s size at a glance helps you catch errors quickly.'
        },
        {
          type: 'heading',
          content: 'Angle Pair Relationships'
        },
        {
          type: 'text',
          content: 'Complementary angles add up to 90° (they "complete" a right angle). Supplementary angles add up to 180° (they form a straight line together). Vertical angles — the angles across from each other where two lines cross — are always equal to each other. These relationships let you find missing angles without measuring anything.'
        },
        {
          type: 'heading',
          content: 'The Triangle Angle Sum'
        },
        {
          type: 'text',
          content: 'The three interior angles of ANY triangle always sum to exactly 180°. This is true whether the triangle is tiny, huge, skinny, or wide — it never changes. If you know two angles, you can always find the third by subtracting their sum from 180°.'
        },
        {
          type: 'heading',
          content: 'Special Triangles'
        },
        {
          type: 'text',
          content: 'Equilateral triangles have all three sides equal and all three angles equal to 60°. Isosceles triangles have two equal sides and the two angles opposite those sides are also equal to each other. Right triangles have exactly one 90° angle, and the two shorter sides (legs) relate to the longest side (hypotenuse) through the Pythagorean theorem: a² + b² = c².'
        },
        {
          type: 'heading',
          content: 'Polygon Angle Sums'
        },
        {
          type: 'text',
          content: 'This same idea extends beyond triangles: the sum of interior angles in any polygon with n sides is (n - 2) × 180°. A quadrilateral (4 sides) has angles summing to (4-2) × 180° = 360°. A pentagon (5 sides) sums to (5-2) × 180° = 540°. This formula works because any polygon can be split into triangles.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Finding a Missing Triangle Angle',
          problem: 'In a triangle, one angle is 60° and another is 70°. What is the third angle?',
          solution: 'Third angle = 180° - 60° - 70° = 50°',
          explanation: 'All three angles must sum to 180°, so subtract the two known angles from 180°.'
        },
        {
          title: 'Example 2: Isosceles Triangle',
          problem: 'An isosceles triangle has a top angle of 40°. What are the other two angles?',
          solution: 'The remaining 140° (180° - 40°) is split equally between the two base angles.\n140° ÷ 2 = 70°\nEach base angle = 70°',
          explanation: 'In an isosceles triangle, the two angles opposite the equal sides are equal to each other.'
        },
        {
          title: 'Example 3: Complementary Angles',
          problem: 'Two angles are complementary. One measures 35°. What is the other?',
          solution: '90° - 35° = 55°',
          explanation: 'Complementary angles sum to 90°, so subtract the known angle from 90°.'
        },
        {
          title: 'Example 4: Pythagorean Theorem',
          problem: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
          solution: 'a² + b² = c²\n6² + 8² = c²\n36 + 64 = c²\n100 = c²\nc = 10',
          explanation: 'This is the well-known 6-8-10 right triangle (a scaled-up 3-4-5 triangle).'
        }
      ],
      summary: 'Nearly every geometry problem you\'ll encounter builds on angle relationships and the triangle angle sum. Memorize the special triangle properties and the complementary/supplementary/vertical angle rules — together they let you find any missing angle in a diagram using only arithmetic, no measuring required.'
    },
    keyPoints: [
      'Acute < 90°, Right = 90°, Obtuse between 90° and 180°, Straight = 180°',
      'Complementary angles sum to 90°; supplementary angles sum to 180°',
      'Vertical angles (across from each other at an intersection) are always equal',
      'The three angles of any triangle always sum to 180°',
      'Equilateral: all sides and angles equal (60° each); Isosceles: two equal sides and two equal angles',
      'A polygon with n sides has interior angles summing to (n - 2) × 180°'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting the triangle angle sum is 180°, not 360°',
      'Confusing complementary (90°) with supplementary (180°)',
      'Assuming a triangle is isosceles or equilateral without being told or shown tick marks',
      'Applying the Pythagorean theorem to a triangle that is not a right triangle',
      'Mixing up which sides are "legs" versus the "hypotenuse"'
    ],
    tips: [
      'Draw and label diagrams whenever a problem doesn\'t provide one',
      'Write "sum = 180°" next to any triangle to remind yourself of the rule',
      'Look for tick marks (matching sides) and angle arcs (matching angles) in diagrams — they indicate isosceles or equilateral triangles',
      'The hypotenuse is always the longest side and is always opposite the right angle',
      'Memorize common Pythagorean triples like 3-4-5 and 6-8-10 to save calculation time'
    ],
    practiceQuestions: ['lesson-geom-angle-001-q01', 'lesson-geom-angle-001-q02', 'lesson-geom-angle-001-q03', 'lesson-geom-angle-001-q04', 'lesson-geom-angle-001-q05', 'lesson-geom-angle-001-q06', 'lesson-geom-angle-001-q07', 'lesson-geom-angle-001-q08', 'lesson-geom-angle-001-q09', 'lesson-geom-angle-001-q10', 'lesson-geom-angle-001-q11', 'lesson-geom-angle-001-q12', 'lesson-geom-angle-001-q13', 'lesson-geom-angle-001-q14', 'lesson-geom-angle-001-q15', 'lesson-geom-angle-001-q16', 'lesson-geom-angle-001-q17', 'lesson-geom-angle-001-q18', 'lesson-geom-angle-001-q19', 'lesson-geom-angle-001-q20'],
    estimatedReadTime: 20,
    orderIndex: 6
  },
  {
    id: 'lesson-geometry-002',
    title: 'Circles and Circumference',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 25,
    description: 'Understand circle properties, circumference, area, and arc calculations.',
    content: {
      introduction: 'Circles are defined by a single measurement — the radius — and every other circle formula builds from it. The constant π (pi, approximately 3.14159) relates a circle\'s radius to its circumference and area, and it shows up in nearly every circle question on the SAT. Once you\'re comfortable with the four core formulas, arc and sector problems become simple proportion problems layered on top.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Core Circle Vocabulary'
        },
        {
          type: 'text',
          content: 'The radius (r) is the distance from the center to any point on the edge. The diameter (d) is the distance straight across the circle through the center, and it\'s always twice the radius: d = 2r. Every other circle formula is built from the radius, so if a problem gives you the diameter, cut it in half first.'
        },
        {
          type: 'heading',
          content: 'Circumference: The Distance Around'
        },
        {
          type: 'text',
          content: 'Circumference is the perimeter of a circle — the total distance around the outside. The formula is C = 2πr, or equivalently C = πd. Think of π as the fixed ratio between a circle\'s circumference and its diameter — that ratio is the same for every circle in existence, big or small.'
        },
        {
          type: 'heading',
          content: 'Area: The Space Inside'
        },
        {
          type: 'text',
          content: 'Area measures the space enclosed by the circle: A = πr². Notice the radius is squared here, but not doubled like in circumference — mixing these two formulas up is one of the most common errors on circle problems, so it helps to say the formulas out loud as you write them.'
        },
        {
          type: 'heading',
          content: 'Arcs and Sectors: Slices of the Circle'
        },
        {
          type: 'text',
          content: 'An arc is a portion of the circumference (like a curved slice of the outer edge), and a sector is a "pie slice" — the region between two radii and the arc connecting them. Both are found using the same idea: the fraction of the circle\'s full 360° that the slice represents.\nArc length = (θ/360°) × 2πr\nSector area = (θ/360°) × πr²\nwhere θ is the central angle of the slice in degrees.'
        },
        {
          type: 'heading',
          content: 'Exact Answers vs. Decimal Approximations'
        },
        {
          type: 'text',
          content: 'SAT problems often want an "exact" answer in terms of π (like 10π) rather than a decimal approximation (31.4). Read the question carefully — if it says "in terms of π," leave π in your answer rather than multiplying it out.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Circumference from Radius',
          problem: 'A circle has radius 5. What is its circumference?',
          solution: 'C = 2πr\nC = 2π(5)\nC = 10π',
          explanation: 'Substitute r = 5 directly into the circumference formula.'
        },
        {
          title: 'Example 2: Area from Diameter',
          problem: 'A circle has diameter 12. What is its area?',
          solution: 'First find the radius: r = d/2 = 12/2 = 6\nA = πr²\nA = π(6)²\nA = 36π',
          explanation: 'Always convert diameter to radius before using the area formula.'
        },
        {
          title: 'Example 3: Arc Length',
          problem: 'A circle has radius 9. What is the length of an arc with a central angle of 60°?',
          solution: 'Arc length = (θ/360°) × 2πr\n= (60°/360°) × 2π(9)\n= (1/6) × 18π\n= 3π',
          explanation: 'A 60° angle is 1/6 of the full 360°, so the arc is 1/6 of the full circumference.'
        },
        {
          title: 'Example 4: Sector Area',
          problem: 'A circle has radius 8. What is the area of a sector with a central angle of 90°?',
          solution: 'Sector area = (θ/360°) × πr²\n= (90°/360°) × π(8)²\n= (1/4) × 64π\n= 16π',
          explanation: 'A 90° sector is a quarter of the circle, so its area is 1/4 of the total area.'
        }
      ],
      summary: 'Every circle calculation traces back to the radius and the constant π. Keep circumference (2πr) and area (πr²) straight by remembering that area involves squaring, and remember that arcs and sectors are just fractions of the whole circle based on the central angle out of 360°. Watch carefully for whether a question wants an exact answer in terms of π or a rounded decimal.'
    },
    keyPoints: [
      'Radius is the distance from center to edge; diameter = 2 × radius',
      'Circumference (distance around): C = 2πr = πd',
      'Area (space inside): A = πr²',
      'An arc is a fraction of the circumference; a sector is a fraction of the area',
      'Both use the ratio (central angle / 360°) to find their fraction of the whole circle',
      'π appears in nearly every circle formula and calculation'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing diameter with radius, or forgetting to divide by 2',
      'Using the circumference formula (2πr) when area (πr²) was needed, or vice versa',
      'Forgetting to square the radius in the area formula',
      'Using the wrong central angle proportion for arc length or sector area',
      'Giving a decimal answer when the question asked for an answer "in terms of π"'
    ],
    tips: [
      'Say the formulas out loud as you write them to avoid mixing up circumference and area',
      'Convert diameter to radius as your very first step whenever a problem gives diameter',
      'For arc and sector problems, always set up the fraction (angle/360°) first before multiplying',
      'Double-check whether the question wants an exact answer (with π) or a decimal approximation',
      'Sketch the circle and label the given angle — visualizing the "slice" prevents setup errors'
    ],
    practiceQuestions: ['lesson-geom-tri-002-q01', 'lesson-geom-tri-002-q02', 'lesson-geom-tri-002-q03', 'lesson-geom-tri-002-q04', 'lesson-geom-tri-002-q05', 'lesson-geom-tri-002-q06', 'lesson-geom-tri-002-q07', 'lesson-geom-tri-002-q08', 'lesson-geom-tri-002-q09', 'lesson-geom-tri-002-q10', 'lesson-geom-tri-002-q11', 'lesson-geom-tri-002-q12', 'lesson-geom-tri-002-q13', 'lesson-geom-tri-002-q14', 'lesson-geom-tri-002-q15', 'lesson-geom-tri-002-q16', 'lesson-geom-tri-002-q17', 'lesson-geom-tri-002-q18', 'lesson-geom-tri-002-q19', 'lesson-geom-tri-002-q20'],
    estimatedReadTime: 18,
    orderIndex: 7
  },
  {
    id: 'lesson-geometry-003',
    title: 'Volume and Surface Area',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 30,
    description: 'Calculate volume and surface area for various 3D shapes.',
    content: {
      introduction: 'Volume and surface area extend 2D geometry into three dimensions. Volume measures how much space a solid takes up (measured in cubic units, like cm³), while surface area measures the total area of every face covering the solid (measured in square units, like cm²). The SAT provides most of these formulas on a reference sheet, but knowing them cold — and knowing which formula matches which shape — saves valuable time during the test.',
      mainContent: [
        {
          type: 'heading',
          content: 'Volume vs. Surface Area: Two Different Questions'
        },
        {
          type: 'text',
          content: 'Volume answers "how much can this shape hold?" — think of filling a box with water. Surface area answers "how much material would it take to wrap this shape?" — think of wrapping a gift. Keeping this real-world distinction in mind helps you catch it immediately if you accidentally use the wrong formula.'
        },
        {
          type: 'heading',
          content: 'Rectangular Prisms (Boxes)'
        },
        {
          type: 'text',
          content: 'For a box with length l, width w, and height h:\nVolume: V = lwh (just multiply all three dimensions)\nSurface Area: SA = 2(lw + lh + wh) (there are 3 pairs of matching faces, so find each pair\'s area and double the sum)'
        },
        {
          type: 'heading',
          content: 'Cylinders'
        },
        {
          type: 'text',
          content: 'A cylinder is like a circle "extruded" into a tube shape, with radius r and height h:\nVolume: V = πr²h (the circular base area, times the height)\nSurface Area: SA = 2πr² + 2πrh (two circular ends, plus the rectangular label that wraps around the middle)'
        },
        {
          type: 'heading',
          content: 'Spheres, Cones, and Pyramids'
        },
        {
          type: 'text',
          content: 'Sphere (radius r): V = (4/3)πr³, SA = 4πr²\nCone (radius r, height h, slant height l): V = (1/3)πr²h, SA = πr² + πrl\nPyramid (base area B, height h): V = (1/3)Bh\nNotice that cones and pyramids both have a 1/3 factor — they hold exactly one-third the volume of a cylinder or prism with the same base and height.'
        },
        {
          type: 'heading',
          content: 'Working With Formulas Efficiently'
        },
        {
          type: 'text',
          content: 'Rather than memorizing every formula from scratch, notice the pattern: volume formulas involve length-scale measurements cubed or multiplied together three times, and surface area formulas involve them squared or multiplied together twice — which matches the units (cubic vs. square). Checking that your final answer has the right type of unit is a quick way to catch formula mix-ups.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Rectangular Prism Volume',
          problem: 'A box has length 4, width 3, and height 5. What is its volume?',
          solution: 'V = lwh\nV = 4 × 3 × 5\nV = 60 cubic units',
          explanation: 'Simply multiply all three dimensions together.'
        },
        {
          title: 'Example 2: Cylinder Volume',
          problem: 'A cylinder has radius 3 and height 10. What is its volume?',
          solution: 'V = πr²h\nV = π(3)²(10)\nV = π(9)(10)\nV = 90π',
          explanation: 'Square the radius first, then multiply by height and π.'
        },
        {
          title: 'Example 3: Sphere Volume',
          problem: 'A sphere has radius 6. What is its volume?',
          solution: 'V = (4/3)πr³\nV = (4/3)π(6)³\nV = (4/3)π(216)\nV = 288π',
          explanation: 'Cube the radius (6³ = 216) before multiplying by the 4/3 and π.'
        },
        {
          title: 'Example 4: Surface Area of a Box',
          problem: 'A box has length 4, width 3, and height 5. What is its surface area?',
          solution: 'SA = 2(lw + lh + wh)\n= 2((4)(3) + (4)(5) + (3)(5))\n= 2(12 + 20 + 15)\n= 2(47)\n= 94 square units',
          explanation: 'Find the area of each of the three distinct face pairs, add them, then double the total.'
        }
      ],
      summary: 'Volume and surface area formulas are all built from the same basic ideas: volume multiplies dimensions to fill 3D space, while surface area adds up the areas of every face. Keep the shapes and their formulas organized in your mind — and remember that cones and pyramids hold exactly 1/3 the volume of a cylinder or prism sharing the same base and height.'
    },
    keyPoints: [
      'Volume measures the space inside a solid (cubic units); surface area measures the total area of its faces (square units)',
      'Rectangular prism: V = lwh, SA = 2(lw + lh + wh)',
      'Cylinder: V = πr²h, SA = 2πr² + 2πrh',
      'Sphere: V = (4/3)πr³, SA = 4πr²',
      'Cone and pyramid volumes both include a factor of 1/3 compared to a cylinder/prism with the same base and height',
      'Checking your answer\'s units (cubic vs. square) helps catch formula mix-ups'
    ],
    prerequisites: [],
    commonMistakes: [
      'Using the volume formula when surface area was asked, or vice versa',
      'Forgetting to square or cube the radius correctly in circular/spherical formulas',
      'Confusing volume and surface area formulas for the same shape',
      'Forgetting the 1/3 factor in cone and pyramid volume formulas',
      'Mismatching which measurement is the radius versus the height in a word problem'
    ],
    tips: [
      'Memorize the basic formulas, but also understand WHY they work, so you can rebuild them if you forget',
      'Draw and label the 3D figure before plugging numbers into a formula',
      'Check that your final answer\'s units make sense (cubic units for volume, square units for surface area)',
      'For surface area, mentally "unfold" the solid into its flat faces to make sure you\'ve counted every one',
      'When a formula sheet is available, use it to verify — but knowing formulas from memory is faster'
    ],
    practiceQuestions: ['lesson-geom-circle-003-q01', 'lesson-geom-circle-003-q02', 'lesson-geom-circle-003-q03', 'lesson-geom-circle-003-q04', 'lesson-geom-circle-003-q05', 'lesson-geom-circle-003-q06', 'lesson-geom-circle-003-q07', 'lesson-geom-circle-003-q08', 'lesson-geom-circle-003-q09', 'lesson-geom-circle-003-q10', 'lesson-geom-circle-003-q11', 'lesson-geom-circle-003-q12', 'lesson-geom-circle-003-q13', 'lesson-geom-circle-003-q14', 'lesson-geom-circle-003-q15', 'lesson-geom-circle-003-q16', 'lesson-geom-circle-003-q17', 'lesson-geom-circle-003-q18', 'lesson-geom-circle-003-q19', 'lesson-geom-circle-003-q20'],
    estimatedReadTime: 20,
    orderIndex: 8
  },
  {
    id: 'lesson-geometry-004',
    title: 'Coordinate Geometry and Distance',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 28,
    description: 'Use coordinates to find distances, midpoints, and slopes.',
    content: {
      introduction: 'Coordinate geometry is the bridge between algebra and geometry — it lets you answer geometric questions (how far apart are two points? what\'s the steepness of a line?) using pure arithmetic on coordinates. Every formula in this lesson is really just the Pythagorean theorem or a simple average in disguise, so if you understand where they come from, you\'ll never forget them.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Distance Formula'
        },
        {
          type: 'text',
          content: 'The distance between two points (x₁, y₁) and (x₂, y₂) is:\nd = √[(x₂ - x₁)² + (y₂ - y₁)²]\nThis formula is really just the Pythagorean theorem: the horizontal gap and vertical gap between the points form the two legs of a right triangle, and the distance between the points is the hypotenuse.'
        },
        {
          type: 'heading',
          content: 'The Midpoint Formula'
        },
        {
          type: 'text',
          content: 'The midpoint of a segment connecting (x₁, y₁) and (x₂, y₂) is simply the average of the x-coordinates and the average of the y-coordinates:\nM = ((x₁ + x₂)/2, (y₁ + y₂)/2)\nThere\'s no trick here beyond averaging — it finds the exact middle point of the segment.'
        },
        {
          type: 'heading',
          content: 'Slope: Measuring Steepness'
        },
        {
          type: 'text',
          content: 'Slope describes how steep a line is and which direction it tilts. The formula is "rise over run":\nm = (y₂ - y₁)/(x₂ - x₁)\nA positive slope rises left to right; a negative slope falls left to right. A slope of 0 is a horizontal line; a vertical line has an undefined slope (since you\'d be dividing by zero).'
        },
        {
          type: 'heading',
          content: 'Parallel and Perpendicular Lines'
        },
        {
          type: 'text',
          content: 'Parallel lines never intersect and always have the EXACT SAME slope. Perpendicular lines cross at a 90° angle, and their slopes are negative reciprocals of each other — meaning you flip the fraction and change the sign. For example, if one line has slope 2/3, a line perpendicular to it has slope -3/2. As a check, perpendicular slopes always multiply together to equal -1.'
        },
        {
          type: 'heading',
          content: 'Putting It Together'
        },
        {
          type: 'text',
          content: 'These three formulas often combine in a single problem — for instance, finding the midpoint of a segment, then calculating the slope of a different line through that midpoint. Work one formula at a time, and keep your (x₁, y₁) and (x₂, y₂) labels consistent throughout a multi-step problem to avoid sign errors.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Distance Formula',
          problem: 'Find the distance between (1, 2) and (4, 6)',
          solution: 'd = √[(4-1)² + (6-2)²]\n= √[3² + 4²]\n= √[9 + 16]\n= √25\n= 5',
          explanation: 'This is a 3-4-5 right triangle in disguise — the horizontal gap is 3, the vertical gap is 4, and the distance (hypotenuse) is 5.'
        },
        {
          title: 'Example 2: Midpoint Formula',
          problem: 'Find the midpoint of (2, -3) and (8, 5)',
          solution: 'M = ((2+8)/2, (-3+5)/2)\n= (10/2, 2/2)\n= (5, 1)',
          explanation: 'Average the x-coordinates and average the y-coordinates separately.'
        },
        {
          title: 'Example 3: Slope Between Two Points',
          problem: 'Find the slope of the line through (1, 4) and (5, 12)',
          solution: 'm = (12 - 4)/(5 - 1)\n= 8/4\n= 2',
          explanation: 'For every 1 unit you move right, the line rises 2 units.'
        },
        {
          title: 'Example 4: Perpendicular Slope',
          problem: 'A line has slope -4/5. What is the slope of a line perpendicular to it?',
          solution: 'Flip the fraction: 5/4\nChange the sign: -5/4 becomes... \nPerpendicular slope = 5/4',
          explanation: 'Flip -4/5 to -5/4, then change the sign to get 5/4. Check: (-4/5)(5/4) = -20/20 = -1 ✓'
        }
      ],
      summary: 'The distance, midpoint, and slope formulas turn geometric questions about points and lines into pure arithmetic. Remember that distance is really the Pythagorean theorem, midpoint is really just averaging, and perpendicular slopes are negative reciprocals that multiply to -1 — understanding the "why" behind each formula makes them far easier to recall under test pressure.'
    },
    keyPoints: [
      'Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²], built from the Pythagorean theorem',
      'Midpoint formula: average the x-coordinates and the y-coordinates separately',
      'Slope formula: m = (y₂-y₁)/(x₂-x₁), or "rise over run"',
      'Parallel lines have equal slopes',
      'Perpendicular lines have slopes that are negative reciprocals (they multiply to -1)',
      'A horizontal line has slope 0; a vertical line has undefined slope'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Squaring differences incorrectly, or subtracting before squaring in the wrong order',
      'Sign errors when calculating slope, especially with negative coordinates',
      'Forgetting to take the square root at the end of the distance formula',
      'Mixing up which point is (x₁, y₁) and which is (x₂, y₂), though the distance formula gives the same result either way',
      'Forgetting to both flip AND change the sign when finding a perpendicular slope'
    ],
    tips: [
      'Write out the formula first, then substitute values — this prevents skipped steps',
      'Remember slope as "rise over run": vertical change divided by horizontal change',
      'For perpendicular slopes, check your work by multiplying the two slopes — they should equal -1',
      'Sketch the two points on a quick mental (or actual) graph to sanity-check your slope\'s sign',
      'Stay consistent with which point you call (x₁, y₁) throughout a multi-part problem'
    ],
    practiceQuestions: ['lesson-geom-area-004-q01', 'lesson-geom-area-004-q02', 'lesson-geom-area-004-q03', 'lesson-geom-area-004-q04', 'lesson-geom-area-004-q05', 'lesson-geom-area-004-q06', 'lesson-geom-area-004-q07', 'lesson-geom-area-004-q08', 'lesson-geom-area-004-q09', 'lesson-geom-area-004-q10', 'lesson-geom-area-004-q11', 'lesson-geom-area-004-q12', 'lesson-geom-area-004-q13', 'lesson-geom-area-004-q14', 'lesson-geom-area-004-q15', 'lesson-geom-area-004-q16', 'lesson-geom-area-004-q17', 'lesson-geom-area-004-q18', 'lesson-geom-area-004-q19', 'lesson-geom-area-004-q20'],
    estimatedReadTime: 20,
    orderIndex: 9
  },
  {
    id: 'lesson-geometry-005',
    title: 'Transformations and Symmetry',
    subject: 'math',
    topic: 'geometry',
    difficulty: 'medium',
    duration: 25,
    description: 'Understand geometric transformations including reflections, rotations, and translations.',
    content: {
      introduction: 'A transformation moves or changes a figure according to a specific rule — sliding it, flipping it, spinning it, or resizing it. The SAT tests both the visual understanding of transformations and the ability to apply them algebraically to coordinates. The most important distinction to master is between transformations that preserve size and shape (rigid) and the one type that doesn\'t (dilation).',
      mainContent: [
        {
          type: 'heading',
          content: 'The Four Core Transformations'
        },
        {
          type: 'text',
          content: 'Translation slides a figure without rotating or flipping it — every point moves the same direction and the same distance. Reflection flips a figure across a line (like a mirror), creating a mirror image. Rotation turns a figure around a fixed point by a given angle. Dilation enlarges or shrinks a figure by a scale factor, keeping its shape but changing its size.'
        },
        {
          type: 'heading',
          content: 'Rigid Transformations (Congruence)'
        },
        {
          type: 'text',
          content: 'Translations, reflections, and rotations are called "rigid" transformations because they preserve both the size and the shape of the original figure — the image is congruent to the original. Only the position or orientation changes, never the measurements.'
        },
        {
          type: 'heading',
          content: 'Dilation (Similarity)'
        },
        {
          type: 'text',
          content: 'Dilation is the one transformation that is NOT rigid — it changes the size of the figure while keeping its shape and angle measures the same. The result is "similar" to the original, not "congruent." A scale factor greater than 1 enlarges the figure; a scale factor between 0 and 1 shrinks it.'
        },
        {
          type: 'heading',
          content: 'Describing Transformations with Coordinates'
        },
        {
          type: 'text',
          content: 'Translations shift every (x, y) coordinate by the same amount: (x, y) → (x + a, y + b). Reflections across the x-axis flip the sign of y: (x, y) → (x, -y). Reflections across the y-axis flip the sign of x: (x, y) → (-x, y). Dilations from the origin multiply both coordinates by the scale factor k: (x, y) → (kx, ky).'
        },
        {
          type: 'heading',
          content: 'Symmetry'
        },
        {
          type: 'text',
          content: 'A figure has line symmetry if a line can divide it into two mirror-image halves. It has rotational symmetry if rotating it by some angle less than 360° produces the exact same figure. Recognizing symmetry can be a shortcut for solving problems about regular polygons and circles.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Translation',
          problem: 'Translate point (2, 3) right 4 units and up 2 units',
          solution: '(x, y) → (x + 4, y + 2)\n(2, 3) → (2+4, 3+2)\nNew point: (6, 5)',
          explanation: 'Each coordinate shifts independently by the given translation amount.'
        },
        {
          title: 'Example 2: Reflection Across the X-Axis',
          problem: 'Reflect point (3, -5) across the x-axis',
          solution: '(x, y) → (x, -y)\n(3, -5) → (3, -(-5))\nNew point: (3, 5)',
          explanation: 'Reflecting across the x-axis keeps x the same and flips the sign of y.'
        },
        {
          title: 'Example 3: Dilation',
          problem: 'Dilate point (4, 6) from the origin by a scale factor of 1/2',
          solution: '(x, y) → (kx, ky) with k = 1/2\n(4, 6) → (4 × 1/2, 6 × 1/2)\nNew point: (2, 3)',
          explanation: 'A scale factor of 1/2 shrinks the distance from the origin by half.'
        },
        {
          title: 'Example 4: Identifying a Transformation',
          problem: 'Triangle ABC has vertices A(1,1), B(3,1), C(1,4). Triangle A\'B\'C\' has vertices A\'(1,-1), B\'(3,-1), C\'(1,-4). What transformation occurred?',
          solution: 'Compare coordinates: each y-value changed sign while x-values stayed the same.\n(x, y) → (x, -y)\nThis is a reflection across the x-axis.',
          explanation: 'Recognizing the coordinate pattern tells you exactly which transformation was applied.'
        }
      ],
      summary: 'Translations, reflections, and rotations preserve a figure\'s size and shape (rigid transformations, producing congruent figures), while dilation changes size but preserves shape (producing similar figures). Learning the coordinate rules for each transformation lets you apply or identify them quickly, without needing to sketch every problem.'
    },
    keyPoints: [
      'Translation slides a figure; reflection flips it; rotation turns it; dilation resizes it',
      'Translations, reflections, and rotations are rigid — they preserve size and shape (congruence)',
      'Dilation is non-rigid — it preserves shape but changes size (similarity)',
      'Coordinate rules: translation shifts (x,y); reflection over x-axis flips y; reflection over y-axis flips x; dilation multiplies both coordinates by the scale factor',
      'A scale factor > 1 enlarges a figure; a scale factor between 0 and 1 shrinks it',
      'Symmetry can be a shortcut for solving problems about regular shapes'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing which transformation is being described or requested',
      'Reflecting across the wrong axis, or flipping the wrong coordinate',
      'Using the wrong scale factor direction (enlarging when it should shrink, or vice versa)',
      'Assuming dilation preserves size, when it actually only preserves shape',
      'Losing track of coordinate signs during multi-step transformations'
    ],
    tips: [
      'Draw a quick sketch of "before and after" whenever a transformation problem feels confusing',
      'Memorize which coordinate changes sign for each type of reflection',
      'Remember: rigid transformations = same size and shape; dilation = same shape, different size',
      'When identifying an unknown transformation, compare the coordinates of a matching pair of points to spot the pattern',
      'A scale factor between 0 and 1 always shrinks a figure, even though it feels counterintuitive'
    ],
    practiceQuestions: ['lesson-geom-solid-005-q01', 'lesson-geom-solid-005-q02', 'lesson-geom-solid-005-q03', 'lesson-geom-solid-005-q04', 'lesson-geom-solid-005-q05', 'lesson-geom-solid-005-q06', 'lesson-geom-solid-005-q07', 'lesson-geom-solid-005-q08', 'lesson-geom-solid-005-q09', 'lesson-geom-solid-005-q10', 'lesson-geom-solid-005-q11', 'lesson-geom-solid-005-q12', 'lesson-geom-solid-005-q13', 'lesson-geom-solid-005-q14', 'lesson-geom-solid-005-q15', 'lesson-geom-solid-005-q16', 'lesson-geom-solid-005-q17', 'lesson-geom-solid-005-q18', 'lesson-geom-solid-005-q19', 'lesson-geom-solid-005-q20'],
    estimatedReadTime: 20,
    orderIndex: 10
  },

  // Data Analysis (5 lessons)
  {
    id: 'lesson-data-001',
    title: 'Mean, Median, Mode, and Range',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 22,
    description: 'Calculate and interpret measures of central tendency and spread.',
    content: {
      introduction: 'These four measures are the vocabulary of describing a dataset in a single number. Given a list of test scores, temperatures, or prices, mean/median/mode summarize "what\'s typical," while range summarizes "how spread out." The SAT tests both the mechanical calculation and — more importantly — your ability to reason about which measure is most appropriate or how a dataset change affects each one.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Four Measures, Defined'
        },
        {
          type: 'text',
          content: 'Mean is the arithmetic average: add up every value and divide by how many values there are. Median is the middle value once the data is arranged in order (or the average of the two middle values if there\'s an even count). Mode is whichever value appears most often — a dataset can have one mode, multiple modes, or no mode at all. Range is the spread from lowest to highest: maximum minus minimum.'
        },
        {
          type: 'heading',
          content: 'Why the Order Matters for Median'
        },
        {
          type: 'text',
          content: 'The median calculation absolutely requires the data to be sorted first — skipping this step is the single most common error. Once sorted, count to the middle. For an odd number of values, there\'s a single middle value. For an even number of values, average the two values on either side of the middle.'
        },
        {
          type: 'heading',
          content: 'How Outliers Affect Each Measure'
        },
        {
          type: 'text',
          content: 'The mean is sensitive to outliers — one extremely high or low value can pull the average significantly. The median, by contrast, barely moves when you add an outlier, because it only cares about position, not magnitude. This is why median household income (not mean) is typically reported: a few billionaires would distort the mean but barely affect the median.'
        },
        {
          type: 'heading',
          content: 'Choosing the Right Measure'
        },
        {
          type: 'text',
          content: 'Use the mean when data is roughly symmetric with no extreme outliers. Use the median when data is skewed or contains outliers, since it gives a more representative "typical" value. Use the mode for categorical data (like favorite colors) where averaging doesn\'t make sense. Use the range for a quick, simple sense of how spread out the data is.'
        },
        {
          type: 'heading',
          content: 'A Useful Shortcut: Sum from Mean'
        },
        {
          type: 'text',
          content: 'Since Mean = Sum ÷ Count, you can rearrange this to Sum = Mean × Count. This shortcut is extremely useful on SAT problems that give you the mean and ask you to find a missing value, or that ask how adding a new data point changes the mean.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Finding the Mean',
          problem: 'Find the mean of: 2, 4, 6, 8, 10',
          solution: 'Sum = 2 + 4 + 6 + 8 + 10 = 30\nCount = 5\nMean = 30 ÷ 5 = 6',
          explanation: 'Add all the values, then divide by how many there are.'
        },
        {
          title: 'Example 2: Finding the Median (Even Count)',
          problem: 'Find the median of: 7, 2, 9, 4',
          solution: 'Sort first: 2, 4, 7, 9\nThere are 4 values (even), so average the two middle ones:\n(4 + 7) / 2 = 5.5',
          explanation: 'With an even number of values, the median is the average of the two middle numbers after sorting.'
        },
        {
          title: 'Example 3: Using the Sum Shortcut',
          problem: 'The mean of 5 numbers is 12. If four of the numbers are 10, 11, 13, and 14, what is the fifth?',
          solution: 'Sum = Mean × Count = 12 × 5 = 60\nSum of known numbers = 10 + 11 + 13 + 14 = 48\nFifth number = 60 - 48 = 12',
          explanation: 'Use Sum = Mean × Count to find the total, then subtract the known values.'
        },
        {
          title: 'Example 4: Range and Mode',
          problem: 'Find the range and mode of: 3, 7, 7, 2, 9, 7, 5',
          solution: 'Range = highest - lowest = 9 - 2 = 7\nMode = 7 (it appears three times, more than any other value)',
          explanation: 'Range only needs the two extreme values; mode is whichever value repeats most.'
        }
      ],
      summary: 'Mean, median, mode, and range each describe a dataset from a different angle, and the SAT rewards students who know not just how to calculate them but when each one is most appropriate. Remember that the median resists outliers while the mean does not, and keep the Sum = Mean × Count shortcut handy for "missing value" problems.'
    },
    keyPoints: [
      'Mean is the average: sum of values divided by count',
      'Median is the middle value after sorting (average the two middle values if the count is even)',
      'Mode is the most frequently occurring value',
      'Range is the difference between the highest and lowest values',
      'The mean is sensitive to outliers; the median is resistant to them',
      'Sum = Mean × Count is a useful shortcut for missing-value problems'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to sort values before finding the median',
      'Averaging the wrong two values when finding the median of an even-count dataset',
      'Confusing mean and median in word problems',
      'Assuming a dataset always has exactly one mode',
      'Using the mean when a question specifically implies resistance to outliers is needed (a signal to use median)'
    ],
    tips: [
      'Always sort your data first before finding the median — no exceptions',
      'Remember: mean gets pulled around by outliers; median does not',
      'Use Sum = Mean × Count whenever a problem gives you the mean and asks about a missing or added value',
      'Double-check whether a dataset has one mode, multiple modes, or no mode',
      'For large datasets, organize your work in a list before calculating to avoid missing a value'
    ],
    practiceQuestions: ['lesson-data-stat-001-q01', 'lesson-data-stat-001-q02', 'lesson-data-stat-001-q03', 'lesson-data-stat-001-q04', 'lesson-data-stat-001-q05', 'lesson-data-stat-001-q06', 'lesson-data-stat-001-q07', 'lesson-data-stat-001-q08', 'lesson-data-stat-001-q09', 'lesson-data-stat-001-q10', 'lesson-data-stat-001-q11', 'lesson-data-stat-001-q12', 'lesson-data-stat-001-q13', 'lesson-data-stat-001-q14', 'lesson-data-stat-001-q15', 'lesson-data-stat-001-q16', 'lesson-data-stat-001-q17', 'lesson-data-stat-001-q18', 'lesson-data-stat-001-q19', 'lesson-data-stat-001-q20'],
    estimatedReadTime: 16,
    orderIndex: 1
  },
  {
    id: 'lesson-data-002',
    title: 'Probability and Outcomes',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'medium',
    duration: 25,
    description: 'Calculate probabilities and count possible outcomes.',
    content: {
      introduction: 'Probability measures how likely an event is to happen, expressed as a number between 0 (impossible) and 1 (certain). Every probability question, no matter how it\'s dressed up in a word problem about dice, cards, or marbles, comes back to the same core formula: favorable outcomes divided by total outcomes. The challenge is usually in correctly counting each of those two numbers.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Basic Probability Formula'
        },
        {
          type: 'text',
          content: 'P(event) = (number of favorable outcomes) / (total number of possible outcomes)\nProbability is always between 0 and 1 — a probability of 0 means the event can never happen, and a probability of 1 means it\'s guaranteed. Probabilities are often expressed as fractions, decimals, or percentages, and you should be comfortable converting between all three.'
        },
        {
          type: 'heading',
          content: 'Counting Outcomes Carefully'
        },
        {
          type: 'text',
          content: 'The hardest part of most probability problems is correctly identifying both the favorable outcomes and the total outcomes. Read carefully: are you counting individual items, or combinations of items? Make a list or a simple diagram if the situation isn\'t immediately obvious.'
        },
        {
          type: 'heading',
          content: '"And" Problems: Multiply'
        },
        {
          type: 'text',
          content: 'When you need two (or more) events to BOTH happen, multiply their individual probabilities: P(A and B) = P(A) × P(B). Be careful about whether the situation involves replacement — if you draw a card and don\'t put it back, the total number of outcomes for the second draw is one less than the first ("without replacement" changes the second event\'s probability).'
        },
        {
          type: 'heading',
          content: '"Or" Problems: Add (and Subtract Overlap)'
        },
        {
          type: 'text',
          content: 'When you need EITHER of two events to happen, add their probabilities: P(A or B) = P(A) + P(B) - P(A and B). That last term subtracts the overlap so you don\'t double-count outcomes that satisfy both events. If the two events can\'t happen at the same time (mutually exclusive), the overlap is 0 and you simply add.'
        },
        {
          type: 'heading',
          content: 'Complementary Events'
        },
        {
          type: 'text',
          content: 'The complement of an event is "everything except that event," and complementary probabilities always add to 1: P(event) + P(not event) = 1. This is a powerful shortcut — sometimes it\'s much easier to calculate the probability of something NOT happening and subtract from 1.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Probability',
          problem: 'What is the probability of rolling a 3 on a standard six-sided die?',
          solution: 'Favorable outcomes: 1 (just rolling a 3)\nTotal outcomes: 6 (numbers 1 through 6)\nP = 1/6 ≈ 0.167 or about 16.7%',
          explanation: 'There is exactly one favorable outcome out of six equally likely outcomes.'
        },
        {
          title: 'Example 2: "And" with Replacement',
          problem: 'A bag has 5 red and 5 blue marbles. If you draw one, replace it, then draw again, what is the probability both draws are red?',
          solution: 'P(red) = 5/10 = 1/2 for each draw\nP(red and red) = 1/2 × 1/2 = 1/4',
          explanation: 'Since the marble is replaced, both draws have the same probability, and we multiply them.'
        },
        {
          title: 'Example 3: "And" without Replacement',
          problem: 'A bag has 5 red and 5 blue marbles. If you draw two marbles WITHOUT replacement, what is the probability both are red?',
          solution: 'P(first red) = 5/10 = 1/2\nP(second red | first was red) = 4/9 (one red marble is now gone, and only 9 remain total)\nP(both red) = 1/2 × 4/9 = 4/18 = 2/9',
          explanation: 'Without replacement, the second probability changes because the pool of marbles shrank by one.'
        },
        {
          title: 'Example 4: Complementary Probability',
          problem: 'The probability it rains tomorrow is 0.3. What is the probability it does NOT rain?',
          solution: 'P(not rain) = 1 - P(rain) = 1 - 0.3 = 0.7',
          explanation: 'Complementary probabilities always sum to 1.'
        }
      ],
      summary: 'Every probability problem reduces to counting favorable outcomes over total outcomes — the skill is in counting carefully, especially for "and"/"or" combinations and situations with or without replacement. Multiply for "and," add (and subtract overlap) for "or," and remember the complement shortcut when it\'s easier to calculate what you DON\'T want.'
    },
    keyPoints: [
      'P(event) = favorable outcomes / total outcomes, always between 0 and 1',
      '"And" problems: multiply the individual probabilities',
      '"Or" problems: add the probabilities, then subtract the overlap',
      'Without replacement changes the total outcomes for later draws',
      'Complementary events always sum to 1: P(event) + P(not event) = 1',
      'Mutually exclusive events (can\'t both happen) have zero overlap in "or" problems'
    ],
    prerequisites: [],
    commonMistakes: [
      'Using the wrong denominator by miscounting the total possible outcomes',
      'Forgetting to adjust probabilities for "without replacement" situations',
      'Double-counting overlap in "or" problems',
      'Adding probabilities for "and" situations instead of multiplying',
      'Forgetting that probabilities must fall between 0 and 1'
    ],
    tips: [
      'List out all possible outcomes when the situation is small enough to do so',
      'Clearly identify favorable outcomes before writing your fraction',
      'Ask "does the item get put back?" to determine if you need to adjust for replacement',
      'For "or" problems, ask whether the two events can happen together — if not, skip the subtraction step',
      'Use the complement (1 - P) when the "opposite" event is easier to calculate'
    ],
    practiceQuestions: ['lesson-data-prob-002-q01', 'lesson-data-prob-002-q02', 'lesson-data-prob-002-q03', 'lesson-data-prob-002-q04', 'lesson-data-prob-002-q05', 'lesson-data-prob-002-q06', 'lesson-data-prob-002-q07', 'lesson-data-prob-002-q08', 'lesson-data-prob-002-q09', 'lesson-data-prob-002-q10', 'lesson-data-prob-002-q11', 'lesson-data-prob-002-q12', 'lesson-data-prob-002-q13', 'lesson-data-prob-002-q14', 'lesson-data-prob-002-q15', 'lesson-data-prob-002-q16', 'lesson-data-prob-002-q17', 'lesson-data-prob-002-q18', 'lesson-data-prob-002-q19', 'lesson-data-prob-002-q20'],
    estimatedReadTime: 18,
    orderIndex: 2
  },
  {
    id: 'lesson-data-003',
    title: 'Reading and Interpreting Graphs',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 25,
    description: 'Extract information from various types of graphs and charts.',
    content: {
      introduction: 'The SAT presents data through bar graphs, line graphs, pie charts, scatter plots, and histograms, and expects you to extract accurate information quickly under time pressure. The good news is that graph questions rarely require complicated math — the challenge is almost always careful reading. A consistent, methodical approach to every graph you see will prevent the careless errors that cost students easy points.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Five Graph Types You\'ll See'
        },
        {
          type: 'text',
          content: 'Bar graphs compare quantities across categories using the height or length of bars. Line graphs show trends and changes over time, connecting data points with lines. Pie charts show how parts relate to a whole, usually in percentages. Scatter plots show the relationship between two numeric variables using individual dots. Histograms show how data is distributed across ranges (bins), similar to bar graphs but for continuous numeric data.'
        },
        {
          type: 'heading',
          content: 'A Reliable Reading Strategy'
        },
        {
          type: 'text',
          content: '1) Read the title first to understand what the graph represents overall.\n2) Check both axis labels (or the legend, for pie charts) to understand what\'s being measured and in what units.\n3) Note the scale carefully — gridlines might represent 1 unit, 10 units, or 1,000 units depending on the graph.\n4) Locate the specific data point(s) the question asks about.\n5) Answer the question that was actually asked.\n6) Sanity-check: does your answer make sense given the overall shape of the data?'
        },
        {
          type: 'heading',
          content: 'Watch the Scale — Every Time'
        },
        {
          type: 'text',
          content: 'One of the most common traps is a graph where the y-axis doesn\'t start at zero, or where gridlines are spaced unevenly, making differences look bigger or smaller than they really are. Always read the actual numbers on the axis rather than assuming the visual spacing tells the whole story.'
        },
        {
          type: 'heading',
          content: 'Trends and Rates of Change'
        },
        {
          type: 'text',
          content: 'For line graphs, the steepness between two points represents the rate of change — a steep upward line means rapid growth, a flat line means no change, and a downward line means decline. Some SAT questions ask you to find this rate of change directly, which is really just the slope formula applied to two points on the graph.'
        },
        {
          type: 'heading',
          content: 'Scatter Plots and Correlation'
        },
        {
          type: 'text',
          content: 'In a scatter plot, points trending upward together show positive correlation (as one variable increases, so does the other), points trending in opposite directions show negative correlation, and a random scattering with no pattern shows no correlation. A "line of best fit" summarizes the overall trend through the scattered points.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Reading a Bar Graph',
          problem: 'A bar graph shows sales by company, with the y-axis labeled "Sales (in thousands of dollars)." Company A\'s bar reaches the 50 gridline. What were Company A\'s sales?',
          solution: 'Since the y-axis is labeled "Sales (in thousands of dollars)" and the bar reaches 50:\nSales = $50,000',
          explanation: 'The axis label tells you the unit — here, each gridline unit represents $1,000, so 50 means $50,000.'
        },
        {
          title: 'Example 2: Finding Rate of Change on a Line Graph',
          problem: 'A line graph shows a company\'s profit was $20,000 in Year 1 and $50,000 in Year 4. What was the average rate of change per year?',
          solution: 'Change in profit = 50,000 - 20,000 = 30,000\nChange in years = 4 - 1 = 3\nRate = 30,000 / 3 = $10,000 per year',
          explanation: 'This is the slope formula: change in y-value divided by change in x-value.'
        },
        {
          title: 'Example 3: Interpreting a Pie Chart',
          problem: 'A pie chart shows a school\'s 400 students split by grade: 25% are freshmen. How many freshmen are there?',
          solution: 'Freshmen = 25% of 400\n= 0.25 × 400\n= 100 students',
          explanation: 'Convert the percentage to a decimal and multiply by the total.'
        },
        {
          title: 'Example 4: Describing Scatter Plot Correlation',
          problem: 'A scatter plot shows hours studied vs. test scores, with points trending upward from left to right. What does this suggest?',
          solution: 'This shows a positive correlation: as hours studied increases, test scores tend to increase as well.',
          explanation: 'An upward trend in a scatter plot indicates the two variables increase together.'
        }
      ],
      summary: 'Reading graphs accurately is a skill built from a consistent process, not from mathematical difficulty — always check the title, axis labels, and scale before extracting any values. When a graph asks about trends or rates of change, remember that you\'re really just applying the slope formula to two points on the graph.'
    },
    keyPoints: [
      'Bar graphs compare categories; line graphs show trends over time; pie charts show parts of a whole; scatter plots show relationships; histograms show distribution',
      'Always read the title, axis labels, and scale before interpreting any values',
      'Watch for y-axes that don\'t start at zero, which can visually exaggerate differences',
      'Rate of change on a line graph is the slope between two points',
      'Scatter plots reveal positive, negative, or no correlation based on the direction of the trend'
    ],
    prerequisites: [],
    commonMistakes: [
      'Not checking axis labels carefully before answering',
      'Misreading the scale, especially when gridlines don\'t represent single units',
      'Confusing which type of graph is being shown and how to read it',
      'Assuming correlation shown in a scatter plot proves causation',
      'Forgetting to convert percentages to decimals when working with pie chart data'
    ],
    tips: [
      'Always read every label on a graph before attempting to answer the question',
      'Double-check the scale on both axes — don\'t assume each gridline equals 1 unit',
      'For line graphs, calculate rate of change the same way you\'d calculate slope',
      'Sanity check your final answer against the graph\'s overall shape and trend',
      'Remember that correlation in a scatter plot does not automatically mean causation'
    ],
    practiceQuestions: ['lesson-data-pct-003-q01', 'lesson-data-pct-003-q02', 'lesson-data-pct-003-q03', 'lesson-data-pct-003-q04', 'lesson-data-pct-003-q05', 'lesson-data-pct-003-q06', 'lesson-data-pct-003-q07', 'lesson-data-pct-003-q08', 'lesson-data-pct-003-q09', 'lesson-data-pct-003-q10', 'lesson-data-pct-003-q11', 'lesson-data-pct-003-q12', 'lesson-data-pct-003-q13', 'lesson-data-pct-003-q14', 'lesson-data-pct-003-q15', 'lesson-data-pct-003-q16', 'lesson-data-pct-003-q17', 'lesson-data-pct-003-q18', 'lesson-data-pct-003-q19', 'lesson-data-pct-003-q20'],
    estimatedReadTime: 18,
    orderIndex: 3
  },
  {
    id: 'lesson-data-004',
    title: 'Percentages and Ratios',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'easy',
    duration: 25,
    description: 'Calculate percentages, work with ratios, and solve proportion problems.',
    content: {
      introduction: 'Percentages and ratios are two ways of describing the same underlying idea — a comparison between quantities — and together they are among the most frequently tested skills on the entire SAT, appearing in word problems, data questions, and even geometry. Fluency here means recognizing which of the three percentage formulas a problem calls for, and being comfortable solving proportions by cross-multiplication.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Three Percentage Formulas'
        },
        {
          type: 'text',
          content: 'Percent = (part / whole) × 100 — use this when you know the part and the whole, and need the percentage.\nPart = (percent / 100) × whole — use this when you know the percentage and the whole, and need the part.\nWhole = part / (percent / 100) — use this when you know the part and the percentage, and need the whole.\nAll three are really the same relationship, just rearranged to solve for a different unknown.'
        },
        {
          type: 'heading',
          content: 'Percent Increase and Decrease'
        },
        {
          type: 'text',
          content: 'Percent change = (change in value / original value) × 100. To increase a value by a percentage, multiply the original by (1 + the percent as a decimal). To decrease, multiply by (1 - the percent as a decimal). For example, increasing 80 by 25% means 80 × 1.25 = 100.'
        },
        {
          type: 'heading',
          content: 'Ratios: Comparing Two Quantities'
        },
        {
          type: 'text',
          content: 'A ratio compares two related quantities, written as a:b or as the fraction a/b. Like fractions, ratios can be simplified — a ratio of 10:15 simplifies to 2:3. Ratios describe RELATIVE size, not absolute amounts, so a recipe ratio of "2 cups flour to 1 cup sugar" stays the same whether you\'re making a small batch or doubling the recipe.'
        },
        {
          type: 'heading',
          content: 'Solving Proportions'
        },
        {
          type: 'text',
          content: 'A proportion states that two ratios are equal: a/b = c/d. Solve any proportion by cross-multiplying: a × d = b × c. This turns the proportion into a simple equation you can solve using the same balance principle from earlier lessons.'
        },
        {
          type: 'heading',
          content: 'Common Pitfall: Percent of a Different Base'
        },
        {
          type: 'text',
          content: 'Watch carefully when a problem changes what percentage is "of" — for example, "20% more than last year" uses last year\'s value as the base, not this year\'s. Multi-step percent problems (like applying two consecutive discounts) require you to recalculate the base after each step, rather than simply adding the percentages together.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Finding the Part',
          problem: 'What is 25% of 80?',
          solution: 'Part = (percent / 100) × whole\n= (25/100) × 80\n= 0.25 × 80\n= 20',
          explanation: 'Convert the percent to a decimal, then multiply by the whole.'
        },
        {
          title: 'Example 2: Finding the Percent',
          problem: '15 is what percent of 60?',
          solution: 'Percent = (part / whole) × 100\n= (15/60) × 100\n= 0.25 × 100\n= 25%',
          explanation: 'Divide the part by the whole first, then multiply by 100 to convert to a percentage.'
        },
        {
          title: 'Example 3: Percent Increase',
          problem: 'A shirt originally costs $40 and is marked up by 15%. What is the new price?',
          solution: 'New price = original × (1 + percent as decimal)\n= 40 × 1.15\n= $46',
          explanation: 'Multiplying by 1.15 adds the 15% increase in a single step.'
        },
        {
          title: 'Example 4: Solving a Proportion',
          problem: 'If 3 pencils cost $1.50, how much do 8 pencils cost?',
          solution: '3/1.50 = 8/x\nCross-multiply: 3x = 8(1.50)\n3x = 12\nx = 4\nSo 8 pencils cost $4.00',
          explanation: 'Set up equal ratios (pencils to cost) and cross-multiply to solve for the unknown.'
        }
      ],
      summary: 'Percentages and ratios both express relationships between quantities, and most problems are just a matter of choosing the right formula or setting up an accurate proportion. Watch carefully for what the percentage is being taken "of," especially in multi-step problems involving successive increases or decreases — that\'s where most errors happen.'
    },
    keyPoints: [
      'Percent = (part/whole) × 100; rearrange this formula to solve for the part or the whole instead',
      'To increase by a percent, multiply by (1 + decimal); to decrease, multiply by (1 - decimal)',
      'A ratio compares two quantities and can be simplified like a fraction',
      'A proportion sets two ratios equal; solve by cross-multiplying',
      'Always double-check what value a percentage is being calculated "of," especially in multi-step problems'
    ],
    prerequisites: [],
    commonMistakes: [
      'Forgetting to multiply by 100 when converting a part/whole fraction into a percentage',
      'Cross-multiplying in the wrong direction when solving a proportion',
      'Not setting up the proportion with matching units in the same position',
      'Adding percentages directly instead of recalculating the base in multi-step percent problems',
      'Confusing percent increase/decrease with just the raw percentage value'
    ],
    tips: [
      'Write out the full formula before substituting numbers so you don\'t mix up part, whole, and percent',
      'Remember that "percent" literally means "per hundred" — that\'s why you divide by 100',
      'Use cross-multiplication for any proportion — it\'s reliable and fast',
      'For percent increase/decrease, multiplying by (1 ± decimal) is faster than calculating the change separately',
      'In multi-step percent problems, recalculate the new base value after each step rather than combining percentages'
    ],
    practiceQuestions: ['lesson-data-ratio-004-q01', 'lesson-data-ratio-004-q02', 'lesson-data-ratio-004-q03', 'lesson-data-ratio-004-q04', 'lesson-data-ratio-004-q05', 'lesson-data-ratio-004-q06', 'lesson-data-ratio-004-q07', 'lesson-data-ratio-004-q08', 'lesson-data-ratio-004-q09', 'lesson-data-ratio-004-q10', 'lesson-data-ratio-004-q11', 'lesson-data-ratio-004-q12', 'lesson-data-ratio-004-q13', 'lesson-data-ratio-004-q14', 'lesson-data-ratio-004-q15', 'lesson-data-ratio-004-q16', 'lesson-data-ratio-004-q17', 'lesson-data-ratio-004-q18', 'lesson-data-ratio-004-q19', 'lesson-data-ratio-004-q20'],
    estimatedReadTime: 18,
    orderIndex: 4
  },
  {
    id: 'lesson-data-005',
    title: 'Correlation and Causation',
    subject: 'math',
    topic: 'data-analysis',
    difficulty: 'medium',
    duration: 22,
    description: 'Understand the difference between correlation and causation and interpret data responsibly.',
    content: {
      introduction: 'This lesson is less about calculation and more about critical thinking — a skill the SAT tests directly in its data analysis questions. Just because two variables move together doesn\'t mean one causes the other. Learning to spot this distinction, and to identify alternative explanations like confounding variables, is exactly the kind of reasoning the SAT rewards in its "interpret the data" questions.',
      mainContent: [
        {
          type: 'heading',
          content: 'Defining the Two Terms'
        },
        {
          type: 'text',
          content: 'Correlation means two variables tend to change together — as one goes up, the other tends to go up (positive correlation) or down (negative correlation). Causation means one variable directly produces a change in the other. Correlation is a mathematical observation; causation is a claim about cause and effect that requires much stronger evidence.'
        },
        {
          type: 'heading',
          content: 'The Classic Warning Example'
        },
        {
          type: 'text',
          content: 'Ice cream sales and drowning deaths are strongly correlated — both rise and fall together throughout the year. But ice cream doesn\'t cause drowning. Both are actually caused by a third factor: hot summer weather, which leads to more swimming (and more drowning risk) AND more ice cream purchases at the same time. This hidden third factor is called a confounding variable.'
        },
        {
          type: 'heading',
          content: 'Confounding Variables'
        },
        {
          type: 'text',
          content: 'A confounding variable is a hidden third factor that influences both variables you\'re observing, creating the illusion of a direct relationship between them. Whenever you see a correlation claim, it\'s worth asking: "could something else explain both of these trends?"'
        },
        {
          type: 'heading',
          content: 'What It Actually Takes to Establish Causation'
        },
        {
          type: 'text',
          content: 'Scientists generally look for several things before confidently claiming causation: 1) a genuine correlation exists, 2) the cause happens BEFORE the effect in time, 3) confounding variables have been ruled out (often through controlled experiments), 4) there\'s a plausible mechanism explaining HOW one causes the other, and 5) the pattern holds up consistently across different studies or samples.'
        },
        {
          type: 'heading',
          content: 'How This Shows Up on the SAT'
        },
        {
          type: 'text',
          content: 'SAT data questions often present a correlation and ask whether it\'s valid to conclude causation, or ask you to identify a plausible confounding variable. The correct answer almost always resists overreaching — a well-designed controlled experiment (where researchers actively control the variable, rather than just observing) provides much stronger causal evidence than an observational study.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Spotting a Confounding Variable',
          problem: 'Cities with more fire trucks tend to have more fire damage. Does this mean fire trucks cause fire damage?',
          solution: 'No — this is confounded by fire size. Larger fires cause both more fire trucks to respond AND more damage. The number of fire trucks doesn\'t cause the damage; the size of the fire causes both.',
          explanation: 'A third factor (fire size) explains both variables, so it would be wrong to claim fire trucks cause damage.'
        },
        {
          title: 'Example 2: Evaluating Plausible Causation',
          problem: 'Students who study more hours tend to get higher grades. Is it reasonable to conclude that studying causes higher grades?',
          solution: 'Yes, this is a reasonable causal claim — there\'s a plausible mechanism (more practice and review directly builds knowledge and skill), the timing makes sense (studying happens before the test), and it\'s consistent with how learning works.',
          explanation: 'Unlike the ice cream/drowning example, this correlation has a direct, believable mechanism connecting the two variables.'
        },
        {
          title: 'Example 3: Observational vs. Experimental Evidence',
          problem: 'A study observes that people who exercise report better moods. A separate study randomly assigns one group to exercise and another not to, then measures mood. Which study provides stronger evidence for causation?',
          solution: 'The second study (the controlled experiment with random assignment) provides stronger causal evidence, because randomly assigning who exercises rules out many potential confounding variables.',
          explanation: 'Controlled experiments with random assignment are much better at isolating true cause-and-effect than simple observation.'
        },
        {
          title: 'Example 4: Identifying the Confound',
          problem: 'Countries with more TVs per capita tend to have longer life expectancy. What confounding variable might explain this?',
          solution: 'Wealth (GDP per capita) is a strong candidate — wealthier countries tend to afford more TVs AND better healthcare, leading to longer life expectancy. TVs themselves likely aren\'t improving health.',
          explanation: 'Economic wealth influences both variables independently, making it a classic confounding factor.'
        }
      ],
      summary: 'A correlation is just an observation that two things move together; causation is a much stronger claim that requires ruling out confounding variables, establishing correct time order, and (ideally) controlled experimental evidence. Whenever data shows a relationship, practice asking "could something else explain both trends?" before accepting a causal explanation.'
    },
    keyPoints: [
      'Correlation: two variables tend to change together',
      'Causation: one variable directly produces a change in the other',
      'Correlation does not, by itself, prove causation',
      'A confounding variable is a hidden third factor that influences both observed variables',
      'Controlled experiments with random assignment provide much stronger causal evidence than simple observation',
      'Establishing causation requires correlation, correct time order, ruled-out confounders, and a plausible mechanism'
    ],
    prerequisites: ['lesson-data-001'],
    commonMistakes: [
      'Assuming any correlation automatically implies causation',
      'Failing to consider confounding variables that could explain both trends',
      'Getting the time order backwards when evaluating a causal claim',
      'Treating observational study evidence as equally strong as controlled experimental evidence',
      'Dismissing all correlations as meaningless, when some do reflect genuine causal relationships'
    ],
    tips: [
      'Always ask: "could a third factor explain both of these trends?"',
      'Look for a plausible mechanism connecting the two variables before accepting causation',
      'Favor controlled experiments over observational studies as evidence for causation',
      'Check that the proposed cause happens before the proposed effect in time',
      'Remember that some correlations DO reflect real causation — the skill is evaluating evidence, not reflexively doubting everything'
    ],
    practiceQuestions: ['lesson-data-dist-005-q01', 'lesson-data-dist-005-q02', 'lesson-data-dist-005-q03', 'lesson-data-dist-005-q04', 'lesson-data-dist-005-q05', 'lesson-data-dist-005-q06', 'lesson-data-dist-005-q07', 'lesson-data-dist-005-q08', 'lesson-data-dist-005-q09', 'lesson-data-dist-005-q10', 'lesson-data-dist-005-q11', 'lesson-data-dist-005-q12', 'lesson-data-dist-005-q13', 'lesson-data-dist-005-q14', 'lesson-data-dist-005-q15', 'lesson-data-dist-005-q16', 'lesson-data-dist-005-q17', 'lesson-data-dist-005-q18', 'lesson-data-dist-005-q19', 'lesson-data-dist-005-q20'],
    estimatedReadTime: 16,
    orderIndex: 5
  },

  // Word Problems (5 lessons)
  {
    id: 'lesson-wordprob-001',
    title: 'Setting Up Word Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 28,
    description: 'Learn systematic approach to translating word problems into mathematical equations.',
    content: {
      introduction: 'Word problems aren\'t really a different kind of math — they\'re ordinary algebra wearing a costume of English sentences. The skill that separates students who struggle with word problems from those who don\'t isn\'t computational ability; it\'s having a reliable system for translating words into equations. This lesson builds that system, which you\'ll reuse in every word problem lesson that follows.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Six-Step Process'
        },
        {
          type: 'text',
          content: '1) Read the entire problem once for a general understanding before doing any math.\n2) Identify exactly what you know and exactly what you need to find.\n3) Define a variable clearly in words: "Let x = ..." — be specific about what x represents.\n4) Translate the sentences into a mathematical equation, phrase by phrase.\n5) Solve the equation using standard algebra techniques.\n6) Check your answer against the ORIGINAL problem (not just the equation), and make sure you\'re answering the actual question asked.'
        },
        {
          type: 'heading',
          content: 'Translating Key Words and Phrases'
        },
        {
          type: 'text',
          content: 'Certain English phrases consistently translate to specific operations:\nSum, total, combined, increased by → addition\nDifference, less, decreased by, fewer → subtraction\nProduct, times, of (with percentages) → multiplication\nQuotient, per, divided among, split evenly → division\n"More than" → add to the OTHER quantity (watch word order carefully)\n"Less than" → subtract from the OTHER quantity (also watch word order — this one commonly gets reversed by mistake)'
        },
        {
          type: 'heading',
          content: 'The "Less Than" Trap'
        },
        {
          type: 'text',
          content: '"5 less than x" means x - 5, NOT 5 - x. The phrase order in English is the reverse of the math order — the quantity being subtracted appears FIRST in the sentence but goes SECOND in the expression. This single phrase causes more setup errors than almost anything else in word problems, so slow down whenever you see "less than."'
        },
        {
          type: 'heading',
          content: 'Defining Your Variable Precisely'
        },
        {
          type: 'text',
          content: 'A vague variable definition like "let x = the problem" leads to confusion later. Instead, write something specific: "let x = the number of apples John has." When a second unknown quantity is related to the first (like "Maria has 3 more than John"), express it in terms of the SAME variable (Maria = x + 3) rather than introducing a second, unrelated variable whenever possible — this keeps you working with one equation instead of a system.'
        },
        {
          type: 'heading',
          content: 'Verifying Your Answer Makes Sense'
        },
        {
          type: 'text',
          content: 'After solving, plug your answer back into the words of the original problem, not just the equation — this catches setup errors that a pure algebra check would miss. Also make sure your answer is realistic: a problem about "number of people" shouldn\'t produce a negative or fractional answer.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Translation',
          problem: 'Maria has 3 more books than John. Together they have 15 books. How many books does each person have?',
          solution: 'Let x = John\'s books\nThen Maria\'s books = x + 3\nTogether: x + (x + 3) = 15\n2x + 3 = 15\n2x = 12\nx = 6 (John has 6 books)\nMaria = 6 + 3 = 9 books',
          explanation: 'Defining Maria\'s amount in terms of John\'s (the same variable) avoided needing a system of equations.'
        },
        {
          title: 'Example 2: The "Less Than" Trap',
          problem: 'A number decreased by 7 less than three times the number equals 20. Find the number. (Translate: "3 times a number, decreased by 7, equals 20")',
          solution: 'Let x = the number\n3x - 7 = 20\n3x = 27\nx = 9',
          explanation: '"7 less than three times the number" translates to 3x - 7, not 7 - 3x — the subtracted amount goes second.'
        },
        {
          title: 'Example 3: Consecutive Integers',
          problem: 'The sum of three consecutive integers is 54. Find the integers.',
          solution: 'Let x = first integer, x+1 = second, x+2 = third\nx + (x+1) + (x+2) = 54\n3x + 3 = 54\n3x = 51\nx = 17\nThe integers are 17, 18, and 19',
          explanation: 'Consecutive integers are each one more than the last, so defining them all in terms of x keeps the setup simple.'
        },
        {
          title: 'Example 4: Answering the Actual Question',
          problem: 'A rectangle\'s length is twice its width. The perimeter is 36. What is the AREA of the rectangle?',
          solution: 'Let w = width, so length = 2w\nPerimeter: 2(w) + 2(2w) = 36\n2w + 4w = 36\n6w = 36\nw = 6, so length = 12\nArea = length × width = 12 × 6 = 72',
          explanation: 'It\'s easy to stop after finding width and length — always circle back to confirm you\'re answering exactly what was asked (area, not the dimensions).'
        }
      ],
      summary: 'Word problems reward a systematic process far more than raw calculation speed: read carefully, define your variable precisely, translate phrase by phrase (watching especially for "less than" reversals), solve, and verify against the original wording. This six-step approach works identically whether the problem is about books, ages, distances, or investments — which is exactly why it\'s worth mastering before moving on to specific word problem types.'
    },
    keyPoints: [
      'Follow the same six steps for every word problem: read, identify, define, translate, solve, check',
      'Translate key phrases consistently: sum/total = add, difference = subtract, product = multiply, quotient = divide',
      '"Less than" reverses the order: "5 less than x" means x - 5, not 5 - x',
      'Define related unknowns in terms of the same variable when possible, to avoid needing a system',
      'Always verify your answer against the original problem\'s wording, and confirm you answered the actual question asked'
    ],
    prerequisites: ['lesson-algebra-001'],
    commonMistakes: [
      'Defining a variable vaguely instead of specifying exactly what it represents',
      'Reversing the order in "less than" phrases',
      'Solving for one unknown but reporting the wrong one as the final answer',
      'Not checking that the answer makes sense in the real-world context of the problem',
      'Rushing through translation without reading the whole problem first'
    ],
    tips: [
      'Underline or annotate key numbers and phrases as you read',
      'Translate one phrase at a time rather than trying to write the whole equation at once',
      'Say "let x = ..." out loud (or write it out fully) to keep your variable definition precise',
      'For "less than" and "more than," slow down and double check the direction of the subtraction or addition',
      'Always circle back and confirm your final answer addresses the specific question asked'
    ],
    practiceQuestions: ['lesson-word-basic-001-q01', 'lesson-word-basic-001-q02', 'lesson-word-basic-001-q03', 'lesson-word-basic-001-q04', 'lesson-word-basic-001-q05', 'lesson-word-basic-001-q06', 'lesson-word-basic-001-q07', 'lesson-word-basic-001-q08', 'lesson-word-basic-001-q09', 'lesson-word-basic-001-q10', 'lesson-word-basic-001-q11', 'lesson-word-basic-001-q12', 'lesson-word-basic-001-q13', 'lesson-word-basic-001-q14', 'lesson-word-basic-001-q15', 'lesson-word-basic-001-q16', 'lesson-word-basic-001-q17', 'lesson-word-basic-001-q18', 'lesson-word-basic-001-q19', 'lesson-word-basic-001-q20'],
    estimatedReadTime: 20,
    orderIndex: 1
  },
  {
    id: 'lesson-wordprob-002',
    title: 'Distance, Rate, and Time Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 28,
    description: 'Solve motion problems using the relationship: distance = rate × time.',
    content: {
      introduction: 'Every distance-rate-time problem is built on one simple formula, d = rt, but the SAT dresses it up in several different scenarios: two vehicles heading toward each other, one catching up to another, or a single trip broken into multiple legs. Learning to recognize which scenario you\'re looking at — and organizing your information in a table — turns these from intimidating word problems into simple arithmetic.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Core Formula and Its Variations'
        },
        {
          type: 'text',
          content: 'Distance = Rate × Time, usually written d = rt. Rearranged, this also gives you Rate = Distance / Time and Time = Distance / Rate. Which version you need depends on which two quantities the problem gives you — always identify the two knowns before deciding which form of the formula to use.'
        },
        {
          type: 'heading',
          content: 'Organize with a Table'
        },
        {
          type: 'text',
          content: 'For any problem involving more than one object or leg of a trip, build a simple table with columns for Distance, Rate, and Time, and one row per object or trip segment. Filling in the table makes the relationships between quantities much clearer than trying to track everything in your head, and it naturally reveals what equation to set up.'
        },
        {
          type: 'heading',
          content: 'Scenario 1: Objects Moving Toward Each Other'
        },
        {
          type: 'text',
          content: 'When two objects start apart and move toward each other, their combined speed determines how quickly they close the gap. The key equation: (distance covered by object 1) + (distance covered by object 2) = total starting distance apart. Their combined rate is the sum of their individual rates.'
        },
        {
          type: 'heading',
          content: 'Scenario 2: One Object Catching Up to Another'
        },
        {
          type: 'text',
          content: 'When one faster object chases a slower one that has a head start, the key idea is that the faster object closes the gap at a rate equal to the DIFFERENCE of their speeds. Set up the equation so that both objects\' distances are equal at the moment the faster one catches up (assuming they started at the same point but at different times, or from different starting points).'
        },
        {
          type: 'heading',
          content: 'Scenario 3: Multiple Legs of a Single Trip'
        },
        {
          type: 'text',
          content: 'When a single trip has different speeds for different portions (like driving in the city, then on the highway), find the distance and time for EACH leg separately, then add them together for totals. Average speed for the whole trip is total distance divided by total time — it is NOT simply the average of the individual speeds unless the time spent at each speed happens to be equal.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Application',
          problem: 'A car travels 240 miles at a constant speed of 60 mph. How long does the trip take?',
          solution: 't = d/r\nt = 240/60\nt = 4 hours',
          explanation: 'Rearranging d = rt to solve for time, then substituting the given values.'
        },
        {
          title: 'Example 2: Moving Toward Each Other',
          problem: 'Two trains start 300 miles apart and travel toward each other. Train A goes 50 mph, Train B goes 70 mph. How long until they meet?',
          solution: 'Combined rate = 50 + 70 = 120 mph\nTime = distance / combined rate = 300/120 = 2.5 hours',
          explanation: 'Since they\'re closing the gap together, add their speeds to get the combined rate.'
        },
        {
          title: 'Example 3: Catching Up',
          problem: 'A cyclist leaves at 10 mph. Two hours later, a car leaves from the same point going 40 mph in the same direction. How long after the car starts does it catch the cyclist?',
          solution: 'Cyclist\'s head start distance: 10 mph × 2 hours = 20 miles\nThe car closes the gap at a rate of 40 - 10 = 30 mph (the difference in speeds)\nTime to catch up = 20/30 = 2/3 hour = 40 minutes',
          explanation: 'The gap closes at the DIFFERENCE of the two speeds, since both are moving in the same direction.'
        },
        {
          title: 'Example 4: Multiple Legs and Average Speed',
          problem: 'A trip covers 100 miles at 50 mph, then 100 more miles at 25 mph. What is the average speed for the whole trip?',
          solution: 'Time for leg 1: 100/50 = 2 hours\nTime for leg 2: 100/25 = 4 hours\nTotal distance: 200 miles, Total time: 6 hours\nAverage speed = 200/6 ≈ 33.3 mph',
          explanation: 'Average speed uses TOTAL distance over TOTAL time — simply averaging 50 and 25 (which would give 37.5) is incorrect because more time was spent at the slower speed.'
        }
      ],
      summary: 'Every distance-rate-time problem is a variation on d = rt, organized using a simple table of distance, rate, and time. Add speeds for objects moving toward each other, subtract speeds for one object catching up to another, and always calculate average speed as total distance over total time rather than averaging the speeds directly.'
    },
    keyPoints: [
      'Distance = Rate × Time (d = rt), rearranged as needed to solve for rate or time',
      'Organize multi-object or multi-leg problems in a table: distance, rate, time',
      'For objects moving toward each other, add their rates (combined speed)',
      'For one object catching up to another, use the DIFFERENCE of their rates',
      'Average speed = total distance / total time, NOT the simple average of individual speeds',
      'Keep units consistent throughout (don\'t mix hours and minutes without converting)'
    ],
    prerequisites: ['lesson-wordprob-001'],
    commonMistakes: [
      'Mixing units, like combining hours and minutes without converting first',
      'Forgetting to add rates for "toward each other" problems',
      'Forgetting to subtract rates for "catching up" problems',
      'Calculating average speed by simply averaging the two speeds instead of using total distance over total time',
      'Setting up the wrong formula version for what\'s being asked'
    ],
    tips: [
      'Build a table with Distance, Rate, and Time columns for any multi-part problem',
      'Convert all times and rates to the same units before setting up equations',
      'For "meeting" problems, add the rates; for "one chasing another," subtract the rates',
      'Remember average speed requires total distance divided by total time — never average the speeds directly unless the times are equal',
      'Double-check which quantity (distance, rate, or time) the question is actually asking for'
    ],
    practiceQuestions: ['lesson-word-age-002-q01', 'lesson-word-age-002-q02', 'lesson-word-age-002-q03', 'lesson-word-age-002-q04', 'lesson-word-age-002-q05', 'lesson-word-age-002-q06', 'lesson-word-age-002-q07', 'lesson-word-age-002-q08', 'lesson-word-age-002-q09', 'lesson-word-age-002-q10', 'lesson-word-age-002-q11', 'lesson-word-age-002-q12', 'lesson-word-age-002-q13', 'lesson-word-age-002-q14', 'lesson-word-age-002-q15', 'lesson-word-age-002-q16', 'lesson-word-age-002-q17', 'lesson-word-age-002-q18', 'lesson-word-age-002-q19', 'lesson-word-age-002-q20'],
    estimatedReadTime: 20,
    orderIndex: 2
  },
  {
    id: 'lesson-wordprob-003',
    title: 'Work and Rate Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'hard',
    duration: 30,
    description: 'Solve problems where multiple people or machines work together.',
    content: {
      introduction: 'Work problems ask questions like "if two people can paint a room individually in different amounts of time, how long does it take them working together?" These problems intimidate students because the intuitive approach (averaging the times) is wrong — but once you learn to think in terms of RATES instead of times, the pattern becomes just as mechanical as distance-rate-time problems.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Key Insight: Think in Rates, Not Times'
        },
        {
          type: 'text',
          content: 'If someone can complete an entire job in 4 hours, their rate of work is 1/4 of the job per hour — NOT 4 hours per job. Expressing work as "fraction of the job per unit time" is the single most important habit in this lesson, because rates (unlike times) can be directly added together when people work simultaneously.'
        },
        {
          type: 'heading',
          content: 'The Work Formula'
        },
        {
          type: 'text',
          content: 'Work completed = Rate × Time. When an entire job is completed, Work = 1 (representing "one whole job"). So: 1 = (combined rate) × (time working together), which rearranges to Time = 1 / (combined rate).'
        },
        {
          type: 'heading',
          content: 'Combining Rates'
        },
        {
          type: 'text',
          content: 'When multiple people or machines work together on the SAME job at the same time, add their individual rates to find the combined rate:\nCombined rate = rate₁ + rate₂ + rate₃ + ...\nThis is why working together is always faster than either person working alone — the rates stack.'
        },
        {
          type: 'heading',
          content: 'Why You Can\'t Just Average the Times'
        },
        {
          type: 'text',
          content: 'A common (incorrect) instinct is to average 3 hours and 6 hours to get 4.5 hours. But this ignores that the faster worker contributes proportionally more to the combined effort. Since rates add but times don\'t, you must convert to rates, add those, and then convert the combined rate back into a time at the very end.'
        },
        {
          type: 'heading',
          content: 'Sanity-Checking Your Answer'
        },
        {
          type: 'text',
          content: 'The combined time working together must ALWAYS be less than the fastest individual worker\'s time alone — if your answer for "working together" time is longer than someone\'s solo time, you\'ve made an error, since adding help can never slow down a job.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Two Workers Combining Rates',
          problem: 'Alice can paint a room in 3 hours. Bob can paint the same room in 6 hours. Working together, how long will it take?',
          solution: 'Alice\'s rate = 1/3 job per hour\nBob\'s rate = 1/6 job per hour\nCombined rate = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 job per hour\nTime = 1 ÷ (1/2) = 2 hours',
          explanation: 'Working together takes 2 hours — faster than Alice alone (3 hours), which passes the sanity check.'
        },
        {
          title: 'Example 2: Three Workers',
          problem: 'Machine A completes a job in 4 hours, Machine B in 8 hours, and Machine C in 8 hours. How long does it take all three working together?',
          solution: 'Rate A = 1/4, Rate B = 1/8, Rate C = 1/8\nCombined rate = 1/4 + 1/8 + 1/8 = 2/8 + 1/8 + 1/8 = 4/8 = 1/2\nTime = 1 ÷ (1/2) = 2 hours',
          explanation: 'Converting to a common denominator (eighths) makes adding the three rates straightforward.'
        },
        {
          title: 'Example 3: Finding an Unknown Individual Time',
          problem: 'Working together, two pipes fill a pool in 6 hours. One pipe alone would take 10 hours. How long would the other pipe take alone?',
          solution: 'Combined rate = 1/6\nPipe 1 rate = 1/10\nPipe 2 rate = combined - pipe 1 = 1/6 - 1/10\nCommon denominator 30: 5/30 - 3/30 = 2/30 = 1/15\nPipe 2 alone takes 15 hours',
          explanation: 'Subtracting the known rate from the combined rate isolates the unknown pipe\'s individual rate.'
        },
        {
          title: 'Example 4: Partial Work Completed',
          problem: 'A worker can complete a job in 5 hours. After working for 2 hours, what fraction of the job is done?',
          solution: 'Rate = 1/5 job per hour\nWork done = rate × time = (1/5)(2) = 2/5',
          explanation: 'The same Work = Rate × Time formula applies even when the job isn\'t fully completed.'
        }
      ],
      summary: 'The entire trick to work problems is converting times into rates (fraction of the job per hour) before doing anything else — rates add together when people work simultaneously, but raw times do not. Always express individual rates as fractions, add them for combined work, and sanity-check that your combined time is faster than any individual worker\'s time alone.'
    },
    keyPoints: [
      'Convert times to rates: someone who finishes a job in t hours has a rate of 1/t job per hour',
      'Work = Rate × Time, where completing a whole job means Work = 1',
      'Combined rate = sum of individual rates, when working simultaneously',
      'Time working together = 1 / (combined rate)',
      'Combined time must always be LESS than the fastest individual worker\'s time — use this to check your answer',
      'You can subtract a known rate from a combined rate to find an unknown individual rate'
    ],
    prerequisites: ['lesson-wordprob-001', 'lesson-algebra-002'],
    commonMistakes: [
      'Averaging individual times instead of converting to rates and adding',
      'Forgetting to find a common denominator when adding fractional rates',
      'Setting up work = 1 incorrectly, or forgetting this represents "one whole job"',
      'Subtracting rates when they should be added (or vice versa) for combined-work problems',
      'Not sanity-checking that combined time is faster than the quickest individual worker'
    ],
    tips: [
      'Immediately convert every given time into a rate (1/time) as your first step',
      'Add rates directly when workers act simultaneously on the same job',
      'Time = 1 / (combined rate) is the formula to finish almost every work problem',
      'Always check: is your final combined time less than everyone\'s individual time? If not, recheck your work',
      'For "unknown individual rate" problems, subtract the known rate(s) from the combined rate'
    ],
    practiceQuestions: ['lesson-word-distance-003-q01', 'lesson-word-distance-003-q02', 'lesson-word-distance-003-q03', 'lesson-word-distance-003-q04', 'lesson-word-distance-003-q05', 'lesson-word-distance-003-q06', 'lesson-word-distance-003-q07', 'lesson-word-distance-003-q08', 'lesson-word-distance-003-q09', 'lesson-word-distance-003-q10', 'lesson-word-distance-003-q11', 'lesson-word-distance-003-q12', 'lesson-word-distance-003-q13', 'lesson-word-distance-003-q14', 'lesson-word-distance-003-q15', 'lesson-word-distance-003-q16', 'lesson-word-distance-003-q17', 'lesson-word-distance-003-q18', 'lesson-word-distance-003-q19', 'lesson-word-distance-003-q20'],
    estimatedReadTime: 22,
    orderIndex: 3
  },
  {
    id: 'lesson-wordprob-004',
    title: 'Mixture and Percent Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'hard',
    duration: 30,
    description: 'Solve mixture problems involving percentages and concentrations.',
    content: {
      introduction: 'Mixture problems ask you to combine two quantities with different concentrations — like mixing a strong saltwater solution with a weaker one, or blending two grades of coffee beans — and find the resulting concentration or the amounts needed. These problems look intimidating, but they all reduce to a single idea: track the total AMOUNT of the "pure substance" separately from the total VOLUME, then divide.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Core Idea: Track Pure Substance Separately'
        },
        {
          type: 'text',
          content: 'For any mixture, the amount of "pure substance" in a solution equals its concentration (as a decimal) times its volume. If you combine two solutions, the pure substance amounts simply ADD together, and so do the volumes — but the concentrations themselves do NOT simply average unless the volumes happen to be equal.'
        },
        {
          type: 'heading',
          content: 'The General Mixture Equation'
        },
        {
          type: 'text',
          content: 'For mixing an amount x of one concentration with an amount y of another concentration to reach a target concentration:\n(concentration₁ × x) + (concentration₂ × y) = (target concentration) × (x + y)\nThe left side represents the total pure substance from each component; the right side represents the pure substance in the final mixture.'
        },
        {
          type: 'heading',
          content: 'Step-by-Step Strategy'
        },
        {
          type: 'text',
          content: '1) Define variables for each unknown amount.\n2) Convert every percentage to a decimal.\n3) Write an equation for the total pure substance (using the formula above).\n4) Solve the resulting equation.\n5) Sanity-check: the final concentration should always fall BETWEEN the two starting concentrations, never outside that range.'
        },
        {
          type: 'heading',
          content: 'A Helpful Organizing Table'
        },
        {
          type: 'text',
          content: 'Just like distance-rate-time problems, a table helps enormously here. Use columns for Amount, Concentration (%), and Pure Substance (Amount × Concentration), with one row per component and one row for the final mixture. Filling in the table reveals the equation almost automatically.'
        },
        {
          type: 'heading',
          content: 'Percent Problems Beyond Liquids'
        },
        {
          type: 'text',
          content: 'The same technique applies beyond chemistry — combining two groups of students with different pass rates, blending investment portfolios with different returns, or mixing nut mixes with different prices per pound. Any time two things with different "rates" or "concentrations" are combined, this mixture framework applies.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Finding the Resulting Concentration',
          problem: 'Mix 5 liters of a 20% salt solution with 3 liters of a 40% salt solution. What is the final concentration?',
          solution: 'Salt from solution 1: 0.20 × 5 = 1 liter\nSalt from solution 2: 0.40 × 3 = 1.2 liters\nTotal salt: 1 + 1.2 = 2.2 liters\nTotal liquid: 5 + 3 = 8 liters\nConcentration: 2.2/8 = 0.275 = 27.5%',
          explanation: 'The result (27.5%) falls between 20% and 40%, which confirms the answer is reasonable.'
        },
        {
          title: 'Example 2: Finding an Unknown Amount',
          problem: 'How many liters of a 10% acid solution must be added to 4 liters of a 30% acid solution to create a 15% solution?',
          solution: 'Let x = liters of 10% solution\n0.10x + 0.30(4) = 0.15(x + 4)\n0.10x + 1.2 = 0.15x + 0.6\n0.6 = 0.05x\nx = 12 liters',
          explanation: 'Setting the total pure acid on both sides equal, then solving for x, the unknown volume.'
        },
        {
          title: 'Example 3: Mixture Without a Percentage (Price per Pound)',
          problem: 'Coffee A costs $8/lb and Coffee B costs $12/lb. How many pounds of each are needed to make 10 lbs of a blend costing $9.60/lb?',
          solution: 'Let x = lbs of Coffee A, so (10 - x) = lbs of Coffee B\n8x + 12(10 - x) = 9.60(10)\n8x + 120 - 12x = 96\n-4x = -24\nx = 6\nSo 6 lbs of Coffee A and 4 lbs of Coffee B',
          explanation: 'The same mixture framework works with dollar values instead of percentages — "price" plays the role of "concentration."'
        },
        {
          title: 'Example 4: Verifying with the Range Check',
          problem: 'Mix a 25% solution with a 50% solution. Could the result be 60%?',
          solution: 'No — the final concentration must fall between 25% and 50%. A result of 60% is impossible with these two starting solutions and confirms an error would have occurred.',
          explanation: 'This range check is a fast way to catch a computational mistake without redoing the whole problem.'
        }
      ],
      summary: 'Mixture problems all reduce to tracking pure substance (amount × concentration) separately from total volume, then dividing at the end. Organize your work in a table, convert every percentage to a decimal immediately, and always verify that your final concentration falls between the two starting concentrations as a quick sanity check.'
    },
    keyPoints: [
      'Pure substance in a solution = concentration (as a decimal) × volume',
      'General equation: (conc₁ × amount₁) + (conc₂ × amount₂) = (target conc) × (total amount)',
      'Convert every percentage to a decimal before setting up the equation',
      'The final concentration must always fall between the two starting concentrations',
      'The same framework works for price-per-pound and other rate-based mixtures, not just chemical solutions'
    ],
    prerequisites: ['lesson-wordprob-001', 'lesson-data-004'],
    commonMistakes: [
      'Forgetting to convert a percentage to a decimal before multiplying',
      'Not setting up the pure-substance equation, and instead just averaging the two percentages',
      'Confusing the final target concentration with one of the two starting concentrations',
      'Losing track of which variable represents which unknown amount',
      'Skipping the sanity check that would catch an out-of-range answer'
    ],
    tips: [
      'Build a table with Amount, Concentration, and Pure Substance columns for every mixture problem',
      'Convert every percent to a decimal immediately, before writing any equation',
      'Always check that your final answer\'s concentration is between the two starting concentrations',
      'Remember the same technique works for prices, pass rates, and other non-chemical "concentrations"',
      'Define your variable clearly at the start, especially when the two unknown amounts must sum to a known total'
    ],
    practiceQuestions: ['lesson-word-work-004-q01', 'lesson-word-work-004-q02', 'lesson-word-work-004-q03', 'lesson-word-work-004-q04', 'lesson-word-work-004-q05', 'lesson-word-work-004-q06', 'lesson-word-work-004-q07', 'lesson-word-work-004-q08', 'lesson-word-work-004-q09', 'lesson-word-work-004-q10', 'lesson-word-work-004-q11', 'lesson-word-work-004-q12', 'lesson-word-work-004-q13', 'lesson-word-work-004-q14', 'lesson-word-work-004-q15', 'lesson-word-work-004-q16', 'lesson-word-work-004-q17', 'lesson-word-work-004-q18', 'lesson-word-work-004-q19', 'lesson-word-work-004-q20'],
    estimatedReadTime: 22,
    orderIndex: 4
  },
  {
    id: 'lesson-wordprob-005',
    title: 'Investment and Finance Problems',
    subject: 'math',
    topic: 'word-problems',
    difficulty: 'medium',
    duration: 25,
    description: 'Solve problems involving interest, investments, and financial calculations.',
    content: {
      introduction: 'Investment problems apply the same variable-and-equation skills from earlier word problem lessons to a financial context: simple interest and compound interest. These formulas describe how money grows over time, and the SAT tests both direct calculation and the ability to recognize which formula a scenario calls for — a distinction that comes down to whether interest is calculated only on the original amount or on the growing total.',
      mainContent: [
        {
          type: 'heading',
          content: 'Simple Interest'
        },
        {
          type: 'text',
          content: 'Simple interest is calculated only on the original principal, every period, using the formula:\nI = Prt\nwhere I = interest earned, P = principal (original amount invested), r = annual interest rate (as a decimal), and t = time in years.\nThe total amount after t years is A = P + I = P(1 + rt).'
        },
        {
          type: 'heading',
          content: 'Compound Interest'
        },
        {
          type: 'text',
          content: 'Compound interest is calculated on the growing total each period — meaning you earn "interest on interest." The formula for the total amount after t years is:\nA = P(1 + r)ᵗ\nwhere A = final amount, P = principal, r = annual interest rate (as a decimal), and t = time in years. Notice this formula grows faster over time than simple interest, because each year\'s interest is calculated on a larger base.'
        },
        {
          type: 'heading',
          content: 'Recognizing Which Formula to Use'
        },
        {
          type: 'text',
          content: 'Read the problem carefully for the words "simple" or "compound." If a problem describes interest being added to the account and then earning MORE interest in future periods, that\'s compound interest. If it describes a fixed interest amount calculated only on the original investment each period, that\'s simple interest.'
        },
        {
          type: 'heading',
          content: 'Converting the Rate'
        },
        {
          type: 'text',
          content: 'Interest rates are almost always given as a percentage (like "5% annual interest") and MUST be converted to a decimal (0.05) before being used in either formula. This is one of the most common sources of error — forgetting this conversion produces an answer that\'s off by a factor of 100.'
        },
        {
          type: 'heading',
          content: 'Multiple Investments'
        },
        {
          type: 'text',
          content: 'Some problems split a total investment across two accounts with different rates — for example, "invested $5,000 total, part at 4% and part at 6%, earning $260 total interest." These translate into a system: one equation for the total principal, and one equation for the total interest earned (using I = Prt for each part), often solved with substitution.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Simple Interest',
          problem: 'You invest $1,000 at 5% simple interest for 3 years. How much interest do you earn?',
          solution: 'I = Prt\nI = 1000 × 0.05 × 3\nI = $150',
          explanation: 'Convert 5% to 0.05, then multiply principal, rate, and time directly.'
        },
        {
          title: 'Example 2: Total Amount with Simple Interest',
          problem: 'Using the previous example, what is the total amount in the account after 3 years?',
          solution: 'A = P + I = 1000 + 150 = $1,150\n(Or directly: A = P(1 + rt) = 1000(1 + 0.05×3) = 1000(1.15) = $1,150)',
          explanation: 'The total amount is the original principal plus the interest earned.'
        },
        {
          title: 'Example 3: Compound Interest',
          problem: 'You invest $2,000 at 4% annual interest, compounded yearly, for 2 years. What is the final amount?',
          solution: 'A = P(1 + r)ᵗ\nA = 2000(1 + 0.04)²\nA = 2000(1.04)²\nA = 2000(1.0816)\nA = $2,163.20',
          explanation: 'Squaring (1.04) accounts for two full years of compounding, where the second year earns interest on the first year\'s total.'
        },
        {
          title: 'Example 4: Splitting an Investment',
          problem: 'A person invests $5,000 total, split between an account earning 4% and an account earning 6%, earning $260 total interest in one year. How much was invested at each rate?',
          solution: 'Let x = amount at 4%, so (5000 - x) = amount at 6%\n0.04x + 0.06(5000 - x) = 260\n0.04x + 300 - 0.06x = 260\n-0.02x = -40\nx = 2000\nSo $2,000 at 4% and $3,000 at 6%',
          explanation: 'This is structured just like a mixture problem, with interest rates playing the role of "concentration."'
        }
      ],
      summary: 'Financial word problems are a direct application of two formulas: simple interest (I = Prt, growing at a constant rate) and compound interest (A = P(1+r)ᵗ, growing faster over time because interest earns interest). Always convert percentage rates to decimals first, and watch for problems that split a total investment across multiple accounts — those are typically solved the same way as mixture problems.'
    },
    keyPoints: [
      'Simple interest: I = Prt, calculated only on the original principal each period',
      'Compound interest: A = P(1 + r)ᵗ, where interest is earned on a growing total each period',
      'Always convert the percentage rate to a decimal before using either formula',
      'Time should be expressed in years to match the "annual" rate, unless stated otherwise',
      'Split-investment problems (multiple accounts at different rates) are structured like mixture problems'
    ],
    prerequisites: ['lesson-wordprob-001'],
    commonMistakes: [
      'Forgetting to convert the percentage rate to a decimal before calculating',
      'Using the compound interest formula when the problem specifies simple interest, or vice versa',
      'Using the wrong time units (like months when the rate is annual)',
      'Forgetting that A = P + I for simple interest, not just I alone, when asked for the total amount',
      'Setting up split-investment problems with a sign error in the second amount (forgetting it\'s 5000 - x, not just x)'
    ],
    tips: [
      'Always identify principal, rate, and time explicitly before plugging into a formula',
      'Double-check whether the problem describes simple or compound interest — the wording usually gives it away',
      'Convert the percentage to a decimal as your very first step, before any other calculation',
      'For split-investment problems, define one amount as x and the other as (total - x)',
      'Remember: compound interest formulas involve an exponent; simple interest formulas do not'
    ],
    practiceQuestions: ['lesson-word-mixture-005-q01', 'lesson-word-mixture-005-q02', 'lesson-word-mixture-005-q03', 'lesson-word-mixture-005-q04', 'lesson-word-mixture-005-q05', 'lesson-word-mixture-005-q06', 'lesson-word-mixture-005-q07', 'lesson-word-mixture-005-q08', 'lesson-word-mixture-005-q09', 'lesson-word-mixture-005-q10', 'lesson-word-mixture-005-q11', 'lesson-word-mixture-005-q12', 'lesson-word-mixture-005-q13', 'lesson-word-mixture-005-q14', 'lesson-word-mixture-005-q15', 'lesson-word-mixture-005-q16', 'lesson-word-mixture-005-q17', 'lesson-word-mixture-005-q18', 'lesson-word-mixture-005-q19', 'lesson-word-mixture-005-q20'],
    estimatedReadTime: 20,
    orderIndex: 5
  }
];
