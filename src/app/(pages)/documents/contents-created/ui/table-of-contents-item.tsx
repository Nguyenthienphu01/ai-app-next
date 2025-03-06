'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EditDialog } from './edit-dialog';

interface TableOfContentsItemProps {
  title: string;
  description: string;
  hasEditButton?: boolean;
  onUpdateTitle?: (newTitle: string) => void;
  onUpdateDescription?: (newDescription: string) => void;
}

export function TableOfContentsItem({
  title,
  description,
  hasEditButton = false,
  onUpdateTitle,
  onUpdateDescription,
}: TableOfContentsItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    type: '',
    title: '',
    value: '',
  });

  const handleEditClick =
    (type: 'title' | 'description') => (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (type === 'title') {
        setDialogState({
          isOpen: true,
          type: 'title',
          title: 'タイトルを編集',
          value: title,
        });
      } else {
        setDialogState({
          isOpen: true,
          type: 'description',
          title: `${title}について`,
          value: description,
        });
      }
    };

  const handleDialogCancel = () => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleDialogSave = (value: string) => {
    if (dialogState.type === 'title' && onUpdateTitle) {
      onUpdateTitle(value);
    } else if (dialogState.type === 'description' && onUpdateDescription) {
      onUpdateDescription(value);
    }
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleDialogChange = (value: string) => {
    setDialogState((prev) => ({ ...prev, value }));
  };

  return (
    <>
      <div
        className={`mb-1 grid h-[46px] cursor-pointer grid-cols-[150px_1fr_50px] items-center rounded-[8px] px-4 ${
          isHovered ? 'bg-[#0066FF12]' : 'bg-[#F7F9FA] hover:bg-gray-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex min-w-[100px] items-center space-x-2">
          <div className="text-sm font-bold text-[#161717]">{title}</div>
          {isHovered && (
            <button
              onClick={handleEditClick('title')}
              className="text-blue-500"
            >
              <Image
                src="/icon-edit.png"
                width={16}
                height={16}
                loading="eager"
                alt="edit title"
                priority
              />
            </button>
          )}
        </div>

        <div className="flex min-w-0 items-center space-x-2">
          <div className="truncate text-sm font-normal text-[#161717]">
            {description}
          </div>
          {isHovered && (
            <button
              onClick={handleEditClick('description')}
              className="text-blue-500"
            >
              <Image
                src="/icon-edit.png"
                width={16}
                height={16}
                loading="eager"
                alt="edit description"
                priority
              />
            </button>
          )}
        </div>

        <div className="flex justify-end">
          {isHovered && (
            <Link href="/" className="text-gray-500">
              <Image
                src="/more-horizontal-menu.png"
                width={24}
                height={24}
                loading="eager"
                alt="more options"
                priority
              />
            </Link>
          )}
        </div>
      </div>

      <EditDialog
        isOpen={dialogState.isOpen}
        title={dialogState.title}
        value={dialogState.value}
        onCancel={handleDialogCancel}
        onSave={handleDialogSave}
        onChange={handleDialogChange}
      />
    </>
  );
}
