import React, { createContext, useState, useCallback, useEffect } from 'react';
import { User, AuthContextType } from '../types';
import { getMockUserByEmail, createMockUser } from '../data/mockUsers';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('satPrepUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to restore user session:', error);
        localStorage.removeItem('satPrepUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (email: string, _password: string) => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundUser = getMockUserByEmail(email);
        if (!foundUser || foundUser.email !== email) {
          throw new Error('Invalid email or password');
        }

        // For demo, we accept any password
        const userData: User = {
          ...foundUser,
          lastLoginAt: new Date(),
        };

        setUser(userData);
        localStorage.setItem('satPrepUser', JSON.stringify(userData));
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const signup = useCallback(
    async (
      email: string,
      _password: string,
      firstName: string,
      lastName: string,
      gradeLevel: User['gradeLevel']
    ) => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Check if user already exists
        const existingUser = getMockUserByEmail(email);
        if (existingUser) {
          throw new Error('Email already registered');
        }

        // Create new user
        const newUser = createMockUser({
          email,
          firstName,
          lastName,
          gradeLevel,
        });

        setUser(newUser);
        localStorage.setItem('satPrepUser', JSON.stringify(newUser));
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('satPrepUser');
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}