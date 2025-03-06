import React from 'react';

import { AppHeader } from '@/shared/ui/header';
import { AppSidebar } from '@/shared/ui/sidebar';
import { SidebarProvider } from '@/shared/ui/sidebar';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';

interface MainLayoutProps {
  breadcrumbs?: TBreadcrumb[];
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  breadcrumbs,
  children,
}) => {
  return (
    <>
      <AppHeader breadcrumbs={breadcrumbs} />
      <div className="flex min-h-[calc(100vh-var(--app-header-height))]">
        <div className="sticky top-[var(--app-header-height)] h-[calc(100vh-var(--app-header-height))] self-start">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </div>
        <div className="my-[var(--app-main-margin)] mr-[var(--app-main-margin)] w-full flex-1">
          <main className="relative z-10 min-h-[calc(100svh-var(--app-header-height)-2*var(--app-main-margin))] w-full rounded-md border-t border-gray-200 bg-white p-4 shadow-md">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};
