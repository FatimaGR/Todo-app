import { useState } from "react";

export function useLocalStorage (key, initialValue){
  const [savedValue, setSavedValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error){
      return initialValue
    }
  });

  const setValue = value => {
    try {
      setSavedValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error){
      console.error(error);
    }
  }
  return [savedValue, setValue]
}