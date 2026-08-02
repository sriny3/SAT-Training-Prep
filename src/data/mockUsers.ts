import { User } from '../types';

const mockUsersDatabase: User[] = [
  {
    id: 'user-1',
    email: 'student1@example.com',
    username: 'student1',
    firstName: 'Alex',
    lastName: 'Johnson',
    avatar: '👨‍🎓',
    gradeLevel: '9',
    createdAt: new Date('2024-01-15'),
    lastLoginAt: new Date(),
    totalPoints: 1250,
    currentLevel: 2,
    currentStreak: 5,
    longestStreak: 12,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
      difficultyLevel: 'beginner',
    },
  },
  {
    id: 'user-2',
    email: 'student2@example.com',
    username: 'student2',
    firstName: 'Sarah',
    lastName: 'Williams',
    avatar: '👩‍🎓',
    gradeLevel: '8',
    createdAt: new Date('2024-02-10'),
    lastLoginAt: new Date(),
    totalPoints: 3450,
    currentLevel: 4,
    currentStreak: 8,
    longestStreak: 15,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'dark',
      notifications: true,
      language: 'en',
      difficultyLevel: 'intermediate',
    },
  },
  {
    id: 'user-3',
    email: 'student3@example.com',
    username: 'student3',
    firstName: 'Michael',
    lastName: 'Chen',
    avatar: '👨‍💼',
    gradeLevel: '10',
    createdAt: new Date('2023-12-01'),
    lastLoginAt: new Date(),
    totalPoints: 5800,
    currentLevel: 5,
    currentStreak: 22,
    longestStreak: 28,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
      difficultyLevel: 'advanced',
    },
  },
  {
    id: 'user-4',
    email: 'student4@example.com',
    username: 'student4',
    firstName: 'Emma',
    lastName: 'Davis',
    avatar: '👩‍🏫',
    gradeLevel: '9',
    createdAt: new Date('2024-01-20'),
    lastLoginAt: new Date(),
    totalPoints: 2100,
    currentLevel: 3,
    currentStreak: 10,
    longestStreak: 10,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'light',
      notifications: false,
      language: 'en',
      difficultyLevel: 'intermediate',
    },
  },
  {
    id: 'user-5',
    email: 'student5@example.com',
    username: 'student5',
    firstName: 'James',
    lastName: 'Wilson',
    avatar: '👨‍🔬',
    gradeLevel: '8',
    createdAt: new Date('2024-02-05'),
    lastLoginAt: new Date(),
    totalPoints: 890,
    currentLevel: 1,
    currentStreak: 3,
    longestStreak: 7,
    lastActivityDate: new Date(),
    preferences: {
      theme: 'dark',
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
