// useAuth.ts
import { useRItem } from "./useRItem";
import { useEffect, useState } from 'react';
import { resources } from "@vhrs/resources";

interface UseAuthHook {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: any;
  isLoading: boolean;
}

export const useAuth = (): UseAuthHook => {
  const { fetchItem, saveItem, deleteItem, data, isLoading, error } = useRItem(resources.UserResource);
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
  }, [fetchItem]); // Only run once on mount

  const login = async (username: string, password: string): Promise<void> => {
    try {
      await saveItem("login", { username, password });
      setIsLoggedIn(true);
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await deleteItem("logout");
      setIsLoggedIn(false);
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return { isLoggedIn, login, logout, error, isLoading };
};
