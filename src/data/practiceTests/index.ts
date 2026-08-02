import { Quiz } from '../../types';
import { algebraPracticeFull } from './algebraPracticeFull';
import { geometryPracticeFull } from './geometryPracticeFull';
import { dataAnalysisPracticeFull } from './dataAnalysisPracticeFull';
import { wordProblemsComprehensive, vocabularyComprehensive, grammarComprehensive, readingComprehensive } from './wordProblemsGrammarReadingFull';

// Topic-specific practice tests with 50 questions each
// Organized as: 17 Easy + 17 Medium + 16 Hard for progress tracking
export const topicPracticeTests: Quiz[] = [
  // Math Practice Tests
  algebraPracticeFull,
  geometryPracticeFull,
  dataAnalysisPracticeFull,
  wordProblemsComprehensive,
  // English Practice Tests
  vocabularyComprehensive,
  grammarComprehensive,
  readingComprehensive
];

// Practice test structure for reference:
// Each 50-question test is organized as:
// - Questions 1-17: Easy difficulty (10 points each = 170 points)
// - Questions 18-34: Medium difficulty (15 points each = 255 points)
// - Questions 35-50: Hard difficulty (20 points each = 320 points)
// Total: 50 questions, 500-750 points per test

export const getPracticeTestsByTopic = (topic: string): Quiz[] => {
  return topicPracticeTests.filter(test => test.topic === topic);
};

export const getPracticeTestById = (id: string): Quiz | undefined => {
  return topicPracticeTests.find(test => test.id === id);
};
