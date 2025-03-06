'use client';

import React, { useState, ReactNode } from 'react';
import { LoadingContext } from './loading.context';
import { LoaderCircle } from 'lucide-react';

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
      {isLoading && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-invert-0">
          <LoaderCircle className="w-12 animate-spin" />
        </div>
      )}
    </LoadingContext.Provider>
  );
};
