'use client';

import { useContext } from 'react';
import { SidebarContext } from '@/shared/ui/sidebar';
export const useSidebar = () => useContext(SidebarContext);
