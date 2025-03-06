import type { Metadata } from 'next';
import { MainLayout } from '@/shared/ui/main-layout';
import { MainTitle } from '@/shared/ui/main-title';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page',
};

export default function DashboardPage() {
  const breadcrumbs: TBreadcrumb[] = [];

  return (
    <MainLayout breadcrumbs={breadcrumbs}>
      <MainTitle content="概要を入れてください" />
      <div></div>
    </MainLayout>
  );
}
