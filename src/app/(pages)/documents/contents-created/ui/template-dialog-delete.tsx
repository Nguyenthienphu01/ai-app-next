'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ControlledButton } from '@/shared/ui/controlled/button';
import { cn } from '@/shared/lib/shadcn/utils';
import TemplateCard from './template-card-delete';

interface Template {
  id: number;
  title: string;
  image: string;
  page: number;
}

interface TemplateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (selectedTemplates: number[]) => void;
  pageTitle: string;
}

export default function TemplateDialog({
  isOpen,
  onClose,
  onDownload,
  pageTitle,
}: TemplateDialogProps) {
  const [selectedTemplates, setSelectedTemplates] = useState<number[]>([]);

  const templates: Template[] = [
    { id: 1, title: 'テンプレート', page: 1, image: '/image-test.png' },
    { id: 2, title: 'テンプレート', page: 2, image: '/image-test-1.png' },
    { id: 3, title: 'テンプレート', page: 3, image: '/image-test-2.png' },
    { id: 4, title: 'テンプレート', page: 4, image: '/image-test-2.png' },
    { id: 5, title: 'テンプレート', page: 5, image: '/image-test-2.png' },
  ];

  const toggleTemplateSelection = (templateId: number) => {
    setSelectedTemplates((prev) =>
      prev.includes(templateId)
        ? prev.filter((id) => id !== templateId)
        : [...prev, templateId],
    );
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-[#000000BF]">
      <div className="flex h-[696px] w-[1049px] flex-col rounded-2xl bg-white">
        <div className="flex h-[58px] items-center justify-between border-b p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">
              ページを選択する「{pageTitle}」
            </h2>
            <span className="ml-2 text-[#0066FF]">
              <Image
                src="/icon-edit.png"
                width={16}
                height={16}
                loading="eager"
                alt="edit title"
                priority
              />
            </span>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-medium">
              AIを活用した営業管理ツールのご提案
            </h2>
            <span className="ml-2 text-[#0066FF]">
              <Image
                src="/icon-edit.png"
                width={16}
                height={16}
                loading="eager"
                alt="edit title"
                priority
              />
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-[8px] mb-[8px] flex flex-wrap gap-4 p-4">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplates.includes(template.id)}
              onSelect={() => toggleTemplateSelection(template.id)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between rounded-b-2xl bg-[#F7F9FA] p-4">
          <ControlledButton
            type="button"
            className={cn(
              'h-[40px] w-[148px] rounded-full bg-[#FF702E] text-base font-bold text-white',
            )}
            onClick={() => onDownload(selectedTemplates)}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/i-download.png"
                width={20}
                height={20}
                loading="eager"
                alt="edit title"
                priority
              />
              <span>レビュー</span>
            </div>
          </ControlledButton>

          <ControlledButton
            type="submit"
            className={cn(
              'h-[40px] w-[148px] rounded-full bg-[#0066FF] text-base font-bold text-white',
            )}
            onClick={() => onDownload(selectedTemplates)}
          >
            ダウンロード
          </ControlledButton>
        </div>
      </div>
    </div>
  );
}
