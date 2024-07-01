// useAuth.ts
import { useRItem } from "./useRItem";
import { useEffect, useState } from 'react';
import { LoginResource } from "../../annotates/login";

interface UseAuthHook {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: any;
  isLoading: boolean;
}

export const useAuth = (): UseAuthHook => {
  const { fetchItem, saveItem, deleteItem, data, isLoading, error } = useRItem(LoginResource);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await fetchItem(false, "status");
        setIsLoggedIn(!!data?.status?.isLoggedIn);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkAuthStatus();
  }, [data, fetchItem]);

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
