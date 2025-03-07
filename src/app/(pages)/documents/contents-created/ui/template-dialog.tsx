'use client';

import React, { useState } from 'react';
import TemplateCard from './template-card';
import Image from 'next/image';
import { Checkbox } from '@/shared/ui/controlled/checkbox';

export default function TemplateDialog({
  isOpen,
  onClose,
  onDownload,
  pageTitle,
}) {
  const [selectedTemplates, setSelectedTemplates] = useState([]);

  const templates = [
    {
      id: 1,
      title: 'テンプレート 1',
      image: '/image-test.png',
      type: 'Business Slide Deck',
    },
    {
      id: 2,
      title: 'テンプレート 2',
      image: '/image-test-1.png',
      type: 'Agenda',
    },
    {
      id: 3,
      title: 'テンプレート 3',
      image: '/image-test-2.png',
      type: 'Section Header',
    },
    {
      id: 4,
      title: 'テンプレート 4',
      image: '/image-test.png',
      type: 'Value Proposition',
    },
    {
      id: 5,
      title: 'テンプレート 5',
      image: '/image-test.png',
      type: 'Quick Stats',
    },
    {
      id: 6,
      title: 'テンプレート 6',
      image: '/image-test.png',
      type: 'Opportunities & Challenges',
    },
    {
      id: 7,
      title: 'テンプレート 7',
      image: '/image-test.png',
      type: 'Roadmap',
    },
    {
      id: 8,
      title: 'テンプレート 8',
      image: '/image-test.png',
      type: 'Performance',
    },
    {
      id: 9,
      title: 'テンプレート 9',
      image: '/image-test.png',
      type: 'Section Header',
    },
    {
      id: 10,
      title: 'テンプレート 10',
      image: '/image-test.png',
      type: 'Trending Services',
    },
    {
      id: 11,
      title: 'テンプレート 11',
      image: '/image-test.png',
      type: 'Hierarchy Diagram',
    },
    {
      id: 12,
      title: 'テンプレート 12',
      image: '/image-test.png',
      type: 'About Our Company',
    },
    {
      id: 13,
      title: 'テンプレート 13',
      image: '/image-test.png',
      type: 'About Our Company',
    },
  ];

  const toggleTemplateSelection = (templateId) => {
    setSelectedTemplates((prev) =>
      prev.includes(templateId)
        ? prev.filter((id) => id !== templateId)
        : [...prev, templateId],
    );
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-[#000000BF]">
      <div className="flex h-[696px] w-[1049px] flex-col rounded-lg bg-white">
        <div className="flex h-[58px] items-center justify-between border-b p-3">
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

        <div className="grid flex-grow grid-cols-1 gap-4 overflow-y-auto p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplates.includes(template.id)}
              onSelect={() => toggleTemplateSelection(template.id)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between border-t p-4 bg-[#F7F9FA]">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600"
              checked={selectedTemplates.length > 0}
              readOnly
            />
            <span className="ml-2">
              {selectedTemplates.length}ページが選択されました
            </span>
          </div>
          <button
            onClick={() => onDownload(selectedTemplates)}
            className="rounded-full bg-[#0066FF] px-6 py-2 font-medium text-white"
            disabled={selectedTemplates.length === 0}
          >
            ダウンロード
          </button>
        </div>
      </div>
    </div>
  );
}
