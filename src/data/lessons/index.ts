import { readingWritingLessons } from './readingWriting';
import { mathLessons } from './math';
import { essayLessons } from './essay';
import { Lesson } from '../../types';

export const allLessons: Lesson[] = [
  ...readingWritingLessons,
  ...mathLessons,
  ...essayLessons
];

export const getLessonById = (id: string): Lesson | undefined => {
  return allLessons.find(lesson => lesson.id === id);
};

export const getLessonsBySubject = (subject: string): Lesson[] => {
  return allLessons.filter(lesson => lesson.subject === subject);
};

export const getLessonsByTopic = (topic: string): Lesson[] => {
  return allLessons.filter(lesson => lesson.topic === topic);
};

export const getLessonsByDifficulty = (difficulty: string): Lesson[] => {
  return allLessons.filter(lesson => lesson.difficulty === difficulty);
};
