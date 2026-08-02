import { User } from '../types';

// Demo users - all start fresh with 0 points
const mockUsersDatabase: User[] = [
  {
    id: 'user-demo-1',
    email: 'demo1@sat-prep.app',
    username: 'beginner',
    firstName: 'Demo',
    lastName: 'Student',
    avatar: '👨‍🎓',
    gradeLevel: '11',
    createdAt: new Date(),
    lastLoginAt: new Date(),
    totalPoints: 0,
    currentLevel: 1,
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
      difficultyLevel: 'beginner',
    },
  },
];

export const getMockUserByEmail = (email: string): User | undefined => {
  return mockUsersDatabase.find((u) => u.email === email);
};

export const getAllMockUsers = (): User[] => {
  return [...mockUsersDatabase];
};

export const createMockUser = (data: {
  email: string;
  firstName: string;
  lastName: string;
  gradeLevel: User['gradeLevel'];
}): User => {
  const newUser: User = {
    id: `user-${Date.now()}`,
    email: data.email,
    username: data.email.split('@')[0],
    firstName: data.firstName,
    lastName: data.lastName,
    avatar: '👤',
    gradeLevel: data.gradeLevel,
    createdAt: new Date(),
    lastLoginAt: new Date(),
    totalPoints: 0,
    currentLevel: 1,
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
      difficultyLevel: 'beginner',
    },
  };

  mockUsersDatabase.push(newUser);
  return newUser;
};
