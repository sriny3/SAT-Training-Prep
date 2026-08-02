import { PracticeTest } from '../../types';

export const practiceTests: PracticeTest[] = [
  {
    id: 'ptest-001',
    title: 'Practice Test 1',
    testNumber: 1,
    description: 'Full-length SAT/PSAT diagnostic test. Complete all sections in one sitting to get an accurate score estimate.',
    sections: [
      {
        id: 'ptest-001-reading',
        name: 'Reading & Writing',
        subject: 'reading-writing',
        timeLimit: 65,
        sectionNumber: 1,
        questions: [] // Will be populated from question bank
      },
      {
        id: 'ptest-001-math-1',
        name: 'Math Module 1',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 2,
        questions: []
      },
      {
        id: 'ptest-001-math-2',
        name: 'Math Module 2',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 3,
        questions: []
      },
      {
        id: 'ptest-001-essay',
        name: 'Essay/Writing',
        subject: 'essay',
        timeLimit: 50,
        sectionNumber: 4,
        questions: []
      }
    ],
    totalPoints: 1600,
    totalTimeLimit: 185, // 3 hours 5 minutes
    passingScore: 1000,
    difficulty: 'medium',
    estimatedDuration: 205, // Including breaks
    releaseDate: new Date('2024-01-01')
  },

  {
    id: 'ptest-002',
    title: 'Practice Test 2',
    testNumber: 2,
    description: 'Official SAT practice test #2. Focus on time management and section strategy.',
    sections: [
      {
        id: 'ptest-002-reading',
        name: 'Reading & Writing',
        subject: 'reading-writing',
        timeLimit: 65,
        sectionNumber: 1,
        questions: []
      },
      {
        id: 'ptest-002-math-1',
        name: 'Math Module 1',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 2,
        questions: []
      },
      {
        id: 'ptest-002-math-2',
        name: 'Math Module 2',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 3,
        questions: []
      },
      {
        id: 'ptest-002-essay',
        name: 'Essay/Writing',
        subject: 'essay',
        timeLimit: 50,
        sectionNumber: 4,
        questions: []
      }
    ],
    totalPoints: 1600,
    totalTimeLimit: 185,
    passingScore: 1000,
    difficulty: 'medium',
    estimatedDuration: 205,
    releaseDate: new Date('2024-02-01')
  },

  {
    id: 'ptest-003',
    title: 'Practice Test 3',
    testNumber: 3,
    description: 'Advanced practice test for intermediate learners. Contains harder questions across all sections.',
    sections: [
      {
        id: 'ptest-003-reading',
        name: 'Reading & Writing',
        subject: 'reading-writing',
        timeLimit: 65,
        sectionNumber: 1,
        questions: []
      },
      {
        id: 'ptest-003-math-1',
        name: 'Math Module 1',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 2,
        questions: []
      },
      {
        id: 'ptest-003-math-2',
        name: 'Math Module 2',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 3,
        questions: []
      },
      {
        id: 'ptest-003-essay',
        name: 'Essay/Writing',
        subject: 'essay',
        timeLimit: 50,
        sectionNumber: 4,
        questions: []
      }
    ],
    totalPoints: 1600,
    totalTimeLimit: 185,
    passingScore: 1000,
    difficulty: 'hard',
    estimatedDuration: 205,
    releaseDate: new Date('2024-03-01')
  },

  {
    id: 'ptest-004',
    title: 'Practice Test 4',
    testNumber: 4,
    description: 'Final full-length practice test. Test your skills under realistic exam conditions.',
    sections: [
      {
        id: 'ptest-004-reading',
        name: 'Reading & Writing',
        subject: 'reading-writing',
        timeLimit: 65,
        sectionNumber: 1,
        questions: []
      },
      {
        id: 'ptest-004-math-1',
        name: 'Math Module 1',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 2,
        questions: []
      },
      {
        id: 'ptest-004-math-2',
        name: 'Math Module 2',
        subject: 'math',
        timeLimit: 35,
        sectionNumber: 3,
        questions: []
      },
      {
        id: 'ptest-004-essay',
        name: 'Essay/Writing',
        subject: 'essay',
        timeLimit: 50,
        sectionNumber: 4,
        questions: []
      }
    ],
    totalPoints: 1600,
    totalTimeLimit: 185,
    passingScore: 1000,
    difficulty: 'hard',
    estimatedDuration: 205,
    releaseDate: new Date('2024-04-01')
  }
];

/**
 * Get practice test by ID
 */
export const getPracticeTestById = (testId: string): PracticeTest | undefined => {
  return practiceTests.find(test => test.id === testId);
};

/**
 * Get all practice tests
 */
export const getAllPracticeTests = (): PracticeTest[] => {
  return practiceTests;
};

/**
 * Get practice test by test number
 */
export const getPracticeTestByNumber = (testNumber: number): PracticeTest | undefined => {
  return practiceTests.find(test => test.testNumber === testNumber);
};

/**
 * Get practice test section
 */
export const getTestSection = (testId: string, sectionId: string) => {
  const test = getPracticeTestById(testId);
  if (!test) return undefined;
  return test.sections.find(section => section.id === sectionId);
};

/**
 * Calculate practice test statistics
 */
export const getTestStatistics = (testId: string) => {
  const test = getPracticeTestById(testId);
  if (!test) return null;

  return {
    totalQuestions: test.sections.reduce((sum, section) => sum + section.questions.length, 0),
    readingQuestions: test.sections.find(s => s.subject === 'reading-writing')?.questions.length || 0,
    mathQuestions: test.sections.filter(s => s.subject === 'math').reduce((sum, s) => sum + s.questions.length, 0),
    essayQuestions: test.sections.find(s => s.subject === 'essay')?.questions.length || 0,
    totalTime: test.totalTimeLimit,
    pointsPossible: test.totalPoints,
    passingScore: test.passingScore
  };
};
