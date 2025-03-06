'use client';

import React from 'react';

interface EditDialogProps {
  isOpen: boolean;
  title: string;
  value: string;
  onCancel: () => void;
  onSave: (value: string) => void;
  onChange: (value: string) => void;
}

export function EditDialog({
  isOpen,
  title,
  value,
  onCancel,
  onSave,
  onChange,
}: EditDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000BF]">
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
        <textarea
          className="h-[120px] w-full resize-none rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            キャンセル
          </button>
          <button
            onClick={() => onSave(value)}
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
