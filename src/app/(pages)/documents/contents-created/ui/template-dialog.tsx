'use client';

import React, { useState } from 'react';
import TemplateCard from './template-card';

export default function TemplateDialog({
  isOpen,
  onClose,
  onDownload,
  pageTitle,
}) {
  const [selectedTemplates, setSelectedTemplates] = useState([2]);

  const templates = [
    {
      id: 1,
      title: 'テンプレート 1',
      image: '/template1.jpg',
      type: 'Business Slide Deck',
    },
    { id: 2, title: 'テンプレート 2', image: '/template2.jpg', type: 'Agenda' },
    {
      id: 3,
      title: 'テンプレート 3',
      image: '/template3.jpg',
      type: 'Section Header',
    },
    {
      id: 4,
      title: 'テンプレート 4',
      image: '/template4.jpg',
      type: 'Value Proposition',
    },
    {
      id: 5,
      title: 'テンプレート 5',
      image: '/template5.jpg',
      type: 'Quick Stats',
    },
    {
      id: 6,
      title: 'テンプレート 6',
      image: '/template6.jpg',
      type: 'Opportunities & Challenges',
    },
    {
      id: 7,
      title: 'テンプレート 7',
      image: '/template7.jpg',
      type: 'Roadmap',
    },
    {
      id: 8,
      title: 'テンプレート 8',
      image: '/template8.jpg',
      type: 'Performance',
    },
    {
      id: 9,
      title: 'テンプレート 9',
      image: '/template9.jpg',
      type: 'Section Header',
    },
    {
      id: 10,
      title: 'テンプレート 10',
      image: '/template10.jpg',
      type: 'Trending Services',
    },
    {
      id: 11,
      title: 'テンプレート 11',
      image: '/template11.jpg',
      type: 'Hierarchy Diagram',
    },
    {
      id: 12,
      title: 'テンプレート 12',
      image: '/template12.jpg',
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
      <div className="max-h-[696px] w-[1049px] overflow-y-auto rounded-lg bg-white">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">
              ページを選択する「{pageTitle}」
            </h2>
            <span className="ml-2 text-blue-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </span>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-medium">
              AIを活用した営業管理ツールのご提案
            </h2>
            <span className="ml-2 text-blue-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
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

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplates.includes(template.id)}
              onSelect={() => toggleTemplateSelection(template.id)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between border-t p-4">
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
            className="rounded-full bg-blue-500 px-6 py-2 font-medium text-white"
            disabled={selectedTemplates.length === 0}
          >
            ダウンロード
          </button>
        </div>
      </div>
    </div>
  );
}
