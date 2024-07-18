import React, { createContext, useContext, useState } from 'react';
import { resources } from '@vhrs/resources';
import { useRItem } from '../components/hooks/useRItem';

export interface UseAuthHook {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: any;
  isLoading: boolean;
}

const AuthContext = createContext<UseAuthHook | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { createItem, isLoading, error } = useRItem(resources.LoginResource);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await createItem({ email, password });
      setIsLoggedIn(true);
    } catch (err) {
      setIsLoggedIn(false);
      throw err; // Ensure the promise rejects if there's an error
    }
  };

  const logout = async (): Promise<void> => {
    try {
      // Add your logout logic here (e.g., API call to invalidate session)
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Failed to logout:', err);
      throw err; // Ensure the promise rejects if there's an error
    }
  };

  const authContextValue: UseAuthHook = {
    isLoggedIn,
    login,
    logout,
    error,
    isLoading,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): UseAuthHook => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
