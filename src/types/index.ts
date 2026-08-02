// User & Authentication Types
//
// `User` now represents a Supabase-backed account profile (see
// src/lib/supabaseClient.ts + supabase/schema.sql). Runtime gamification
// stats (points, level, streak, badges) live separately in the `progress`
// table / UserGameification (src/context/GameificationContext.tsx) — the
// same decoupling this codebase already used for localStorage, just backed
// by a real database now.
export type UserRole = 'admin' | 'student';

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  gradeLevel: '7' | '8' | '9' | '10' | '11';
  createdAt: Date;
  role: UserRole;
  preferences: UserPreferences;
}

// Rows the admin dashboard reads back from Supabase to build each
// student's activity history.
export interface LessonCompletionRecord {
  id: string;
  userId: string;
  lessonId: string;
  lessonTitle: string;
  subject: Subject;
  topic: string;
  pointsEarned: number;
  completedAt: string;
}

export interface QuizAttemptRecord {
  id: string;
  userId: string;
  quizId: string;
  quizTitle: string;
  subject: Subject;
  topic: string;
  score: number;
  maxScore: number;
  percentage: number;
  pointsEarned: number;
  completedAt: string;
}

export interface PracticeTestAttemptRecord {
  id: string;
  userId: string;
  testId: string;
  testTitle: string;
  subject: Subject;
  topic: string;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  pointsEarned: number;
  timeSpentSeconds: number;
  completedAt: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: 'en' | 'es';
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
}

// Subject & Topic Types
export type Subject = 'reading-writing' | 'math' | 'essay';

export type TopicType =
  // Reading & Writing
  | 'vocabulary'
  | 'grammar'
  | 'reading-comprehension'
  // Math
  | 'algebra'
  | 'geometry'
  | 'data-analysis'
  | 'word-problems'
  // Essay
  | 'writing-fundamentals'
  | 'essay-structure'
  | 'argument-development';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  subject: Subject;
  topic: TopicType;
  difficulty: DifficultyLevel;
  duration: number; // minutes
  description: string;
  content: LessonContent;
  keyPoints: string[];
  prerequisites: string[];
  commonMistakes: string[];
  tips: string[];
  practiceQuestions: string[];
  estimatedReadTime: number;
  orderIndex: number;
}

export interface LessonContent {
  introduction: string;
  mainContent: ContentBlock[];
  examples: Example[];
  summary: string;
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'subheading' | 'code' | 'formula';
  content: string;
}

export interface Example {
  title: string;
  problem: string;
  solution: string;
  explanation: string;
}

export interface LessonProgress {
  lessonId: string;
  completedAt?: Date;
  timeSpent: number;
  isBookmarked: boolean;
}

// Question & Quiz Types
export type QuestionType =
  | 'multiple-choice'
  | 'multiple-select'
  | 'short-answer'
  | 'essay'
  | 'fill-blank';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  subject: Subject;
  difficulty: DifficultyLevel;
  questionText: string;
  context?: string;
  options?: QuestionOption[];
  correctAnswer: string | string[];
  explanation: string;
  hints: string[];
  points: number;
  timeLimit?: number;
  relatedLessonId?: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: Subject;
  topic: TopicType;
  description: string;
  questions: Question[];
  timeLimit?: number;
  difficulty: DifficultyLevel;
  passingScore: number;
  pointsAvailable: number;
  estimatedDuration: number;
  orderIndex: number;
}

export interface QuizAttempt {
  attemptNumber: number;
  score: number;
  percentage: number;
  answers: UserAnswer[];
  completedAt: Date;
  timeSpent: number;
}

export interface UserAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  timeSpent: number;
}

// Practice Test Types
export interface PracticeTest {
  id: string;
  title: string;
  testNumber: number;
  description: string;
  sections: TestSection[];
  totalPoints: number;
  totalTimeLimit: number;
  passingScore: number;
  difficulty: DifficultyLevel;
  releaseDate?: Date;
  estimatedDuration: number;
}

export interface TestSection {
  id: string;
  name: string;
  subject: Subject;
  questions: Question[];
  timeLimit: number;
  sectionNumber: number;
}

export interface TestAttempt {
  id: string;
  userId: string;
  testId: string;
  startedAt: Date;
  completedAt?: Date;
  answers: UserAnswer[];
  score: number;
  percentage: number;
  timeSpent: number;
  status: 'in-progress' | 'completed' | 'abandoned';
}

// Progress Types
export interface UserProgress {
  userId: string;
  lessonsCompleted: LessonProgress[];
  quizzesCompleted: QuizProgress[];
  testsCompleted: TestAttempt[];
  totalStudyTime: number;
  lastActivityDate: Date;
  performanceBySubject: PerformanceMetrics[];
}

export interface QuizProgress {
  quizId: string;
  attempts: QuizAttempt[];
  bestScore: number;
  lastAttemptDate: Date;
}

export interface PerformanceMetrics {
  subject: Subject;
  averageScore: number;
  totalQuestionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
  trendDirection: 'up' | 'down' | 'stable';
}

// Gamification Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: BadgeCategory;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
  progress?: number;
  requirement: BadgeRequirement;
}

export type BadgeCategory =
  | 'streak'
  | 'score'
  | 'subject-master'
  | 'milestone'
  | 'special-event'
  | 'challenge';

export interface BadgeRequirement {
  type:
    | 'quiz-score'
    | 'streak-days'
    | 'lessons-completed'
    | 'tests-passed'
    | 'perfect-score';
  value: number;
  subject?: Subject;
}

export interface Level {
  level: number;
  requiredPoints: number;
  title: string;
  description: string;
  icon: string;
  rewards?: Reward[];
}

export interface Reward {
  type: 'points' | 'badge' | 'unlock-feature';
  value: string | number;
  description: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar: string;
  totalPoints: number;
  level: number;
  streak: number;
  weeklyPoints?: number;
  monthlyPoints?: number;
}

export interface PointsTransaction {
  userId: string;
  points: number;
  reason: PointsReason;
  relatedItemId?: string;
  timestamp: Date;
}

export type PointsReason =
  | 'quiz-completed'
  | 'test-completed'
  | 'lesson-completed'
  | 'perfect-score'
  | 'streak-bonus'
  | 'daily-login'
  | 'badge-unlocked';

// Auth Context Types
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gradeLevel: User['gradeLevel']
  ) => Promise<void>;
  logout: () => void;
}

// Progress Context Types
export interface ProgressContextType {
  userProgress: UserProgress | null;
  isLoading: boolean;
  updateProgress: (progress: Partial<UserProgress>) => void;
  getSubjectPerformance: (subject: Subject) => PerformanceMetrics | undefined;
}

// Notification Types
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export interface NotificationContextType {
  toasts: Toast[];
  addToast: (message: string, type?: Toast['type'], duration?: number) => void;
  removeToast: (id: string) => void;
}
