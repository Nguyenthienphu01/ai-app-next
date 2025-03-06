'use client';

import React, { useState } from 'react';
import { MainLayout } from '@/shared/ui/main-layout';
import { MainTitle } from '@/shared/ui/main-title';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';
import { ControlledButton } from '@/shared/ui/controlled/button';
import { TableOfContentsItem } from './ui/table-of-contents-item';

export default function CreateDocumentPage() {
  const breadcrumbs: TBreadcrumb[] = [
    { label: '資料を生成', href: '/documents' },
    { label: '概要を入力', active: true },
  ];

  const [contents, setContents] = useState([
    {
      title: '表紙',
      description: 'AIを活用した営業管理ツールのご提案',
      hasEditButton: true,
    },
    {
      title: '当社について',
      description: 'bravesoftのご紹介',
      hasEditButton: true,
    },
    {
      title: 'コンセプト',
      description:
        '今回のコンセプトは、いかに営業の工数を下げて成長を上げるツールを作成するかです',
    },
    {
      title: '与件の整理',
      description: '頂いている要望について整理しました。',
    },
    {
      title: '提案の特徴',
      description: '生成AIを積極的に活用し、徹底的な自動化を実現します',
    },
    {
      title: '工数見積',
      description: '提案内容をもとに概算見積を作成しました',
    },
    {
      title: 'スケジュール',
      description: '今回の提案内容を実現する場合のスケジュールです',
    },
    {
      title: '実績紹介',
      description: '今回の開発に類似する実績を紹介します',
    },
    {
      title: '最後に',
      description: '最後となりますが、当社からのメッセージです',
    },
  ]);

  const [promptText, setPromptText] = useState('');

  const handleTitleUpdate = (index: number, newTitle: string) => {
    const updatedContents = [...contents];
    updatedContents[index].title = newTitle;
    setContents(updatedContents);
  };

  const handleDescriptionUpdate = (index: number, newDescription: string) => {
    const updatedContents = [...contents];
    updatedContents[index].description = newDescription;
    setContents(updatedContents);
  };

  return (
    <MainLayout breadcrumbs={breadcrumbs}>
      <div className="flex items-center justify-between">
        <MainTitle content="目次が作成されました" />
        <ControlledButton
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
        >
          次へ
        </ControlledButton>
      </div>

      <div className="mt-10 text-sm font-normal text-[#404446]">
        実際のプレゼンに合わせて編集してください。目次をタップして各ページを選択してください
      </div>

      <div className="mt-4">
        {contents.map((item, index) => (
          <TableOfContentsItem
            key={index}
            title={item.title}
            description={item.description}
            hasEditButton={item.hasEditButton}
            onUpdateTitle={(newTitle) => handleTitleUpdate(index, newTitle)}
            onUpdateDescription={(newDescription) =>
              handleDescriptionUpdate(index, newDescription)
            }
          />
        ))}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          プロンプトを再入力
        </label>
        <div className="mt-2 flex gap-5">
          <textarea
            className="h-[120px] w-full resize-none rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500"
            rows={3}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
          ></textarea>
          <ControlledButton
            type="submit"
            className="bg-[#4C5769] text-white hover:bg-gray-600 hover:text-white"
          >
            更新
          </ControlledButton>
        </div>
      </div>
    </MainLayout>
  );
}
