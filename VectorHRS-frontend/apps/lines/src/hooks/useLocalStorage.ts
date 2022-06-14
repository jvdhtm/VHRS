import { useState } from "react";
import {parse,stringify} from 'flatted';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (s: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      localStorage.setItem(key,stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  }

  return [storedValue, setValue];
}