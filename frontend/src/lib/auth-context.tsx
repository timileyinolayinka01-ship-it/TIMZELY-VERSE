'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { createSupabaseBrowserClient } from './supabase';
import type { Database } from './database.types';

interface UserProfile extends Database['public']['Tables']['user_profiles']['Row'] {}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseBrowserClient();

  // Initialize session and fetch user profile
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(data.session?.user || null);

        // Fetch user profile if authenticated
        if (data.session?.user) {
          await fetchUserProfile(data.session.user.id);
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user || null);

        if (newSession?.user) {
          await fetchUserProfile(newSession.user.id);
        } else {
          setUserProfile(null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Failed to fetch user profile:', error);
        return;
      }

      setUserProfile(data as UserProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) throw signUpError;

    // Fetch the new user to create their profile
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      await createUserProfile(data.session.user);
    }
  };

  const createUserProfile = async (user: User) => {
    try {
      // Create user profile
      const { error: profileError } = await supabase.from('user_profiles').insert([
        {
          user_id: user.id,
          theme: 'system',
          language: 'en',
          notifications_enabled: true,
        },
      ]);

      if (profileError) throw profileError;

      // Create default credits
      const { error: creditsError } = await supabase.from('credits').insert([
        {
          user_id: user.id,
          balance: 10, // Free tier gets 10 credits
          total_earned: 10,
          total_used: 0,
        },
      ]);

      if (creditsError) throw creditsError;

      // Create default subscription
      const { error: subscriptionError } = await supabase.from('subscriptions').insert([
        {
          user_id: user.id,
          plan: 'free',
          status: 'active',
          started_at: new Date().toISOString(),
        },
      ]);

      if (subscriptionError) throw subscriptionError;

      // Create default user settings
      const { error: settingsError } = await supabase
        .from('user_settings')
        .insert([
          {
            user_id: user.id,
            email_notifications: true,
            marketing_emails: false,
            sms_notifications: false,
            two_factor_enabled: false,
            default_export_format: 'png',
            auto_save: true,
          },
        ]);

      if (settingsError) throw settingsError;

      await fetchUserProfile(user.id);
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setSession(null);
    setUser(null);
    setUserProfile(null);
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
  };

  const updatePassword = async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) throw new Error('No user session');

    const { error } = await supabase
      .from('user_profiles')
      .update(data)
      .eq('user_id', user.id);

    if (error) throw error;

    await fetchUserProfile(user.id);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        userProfile,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
        resetPassword,
        updatePassword,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
