'use client';
import React from 'react';
import { SidebarContext } from './sidebar.context';

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const value = {
    collapsed,
    setCollapsed,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
