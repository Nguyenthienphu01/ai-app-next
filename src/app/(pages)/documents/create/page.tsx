import React from 'react';
import { MainLayout } from '@/shared/ui/main-layout';
import { MainTitle } from '@/shared/ui/main-title';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';
import { CreateDocumentForm } from './ui/create-document-form';

export default function CreateDocumentPage() {
  const breadcrumbs: TBreadcrumb[] = [
    { label: '資料を生成', href: '/documents' },
    { label: '概要を入力', active: true },
  ];

  return (
    <>
      <MainLayout breadcrumbs={breadcrumbs}>
        <MainTitle content="概要を入れてください" />
        <div className="mt-10">
          <div className="max-w-[686px]">
            <CreateDocumentForm />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
