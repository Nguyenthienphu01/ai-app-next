'use client';

import { useContext } from 'react';
import { LoadingContext } from '@/shared/ui/loading';
export const useLoading = () => useContext(LoadingContext);
