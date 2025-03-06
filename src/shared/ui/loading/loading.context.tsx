'use client';
import { createContext } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
  startLoading: () => {},
  stopLoading: () => {},
});
