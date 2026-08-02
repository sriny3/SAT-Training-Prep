import React, { createContext, useState, useCallback, useEffect } from 'react';
import { User, AuthContextType } from '../types';
import { supabase } from '../lib/supabaseClient';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Maps a row from the `profiles` table (see supabase/schema.sql) into the
// app's User shape.
const mapProfileToUser = (profile: {
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  grade_level: User['gradeLevel'];
  role: User['role'];
  created_at: string;
}): User => ({
  id: profile.id,
  email: profile.email,
  username: profile.username,
  firstName: profile.first_name,
  lastName: profile.last_name,
  avatar: profile.avatar ?? '👤',
  gradeLevel: profile.grade_level,
  role: profile.role,
  createdAt: new Date(profile.created_at),
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'en',
    difficultyLevel: 'beginner',
  },
});

const fetchProfile = async (userId: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error || !data) {
    console.error('Failed to load profile:', error);
    return null;
  }

  return mapProfileToUser(data);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session on load, and keep `user` in sync with Supabase auth
  // state changes (sign in / sign out / token refresh across tabs).
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const profile = await fetchProfile(session.user.id);
        if (isMounted) setUser(profile);
      }
      if (isMounted) setIsLoading(false);
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const profile = await fetchProfile(session.user.id);
        if (isMounted) setUser(profile);
      } else {
        if (isMounted) setUser(null);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.user) {
        throw new Error(error?.message ?? 'Invalid email or password');
      }

      const profile = await fetchProfile(data.user.id);
      if (!profile) {
        throw new Error('Signed in, but no profile was found for this account.');
      }
      setUser(profile);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string,
      gradeLevel: User['gradeLevel']
    ) => {
      setIsLoading(true);
      try {
        const username = email.split('@')[0];

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              first_name: firstName,
              last_name: lastName,
              avatar: '👤',
              grade_level: gradeLevel,
            },
          },
        });

        if (error) {
          throw new Error(error.message);
        }
        if (!data.user) {
          throw new Error('Signup failed. Please try again.');
        }

        // If the Supabase project has "Confirm email" turned on, signUp
        // succeeds but no session is issued yet — the profile can't be
        // read (RLS requires auth.uid()) until the user confirms and logs in.
        if (!data.session) {
          throw new Error(
            'Account created! Check your email to confirm your address, then log in.'
          );
        }

        // The `on_auth_user_created` trigger (supabase/schema.sql) creates
        // the profiles + progress rows server-side. Give it a moment, then
        // fetch the resulting profile.
        let profile = await fetchProfile(data.user.id);
        if (!profile) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          profile = await fetchProfile(data.user.id);
        }

        if (!profile) {
          throw new Error(
            'Account created, but your profile is still being set up. Try logging in again in a few seconds.'
          );
        }

        setUser(profile);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    supabase.auth.signOut();
    setUser(null);
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
};
