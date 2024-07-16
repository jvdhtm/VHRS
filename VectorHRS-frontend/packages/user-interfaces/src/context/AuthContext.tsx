// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
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
  const { fetchItem, createItem, isLoading, error } = useRItem(resources.LoginResource);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetchItem(false);
        setIsLoggedIn(!!response?.status?.isLoggedIn);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    //checkAuthStatus();
  }, [fetchItem]);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await createItem({ email, password });
      setIsLoggedIn(true);
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {

      setIsLoggedIn(false);
    } catch (err) {
      console.error('Failed to logout:', err);
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
