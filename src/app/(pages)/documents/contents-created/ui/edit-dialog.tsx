'use client';

import React from 'react';
import { ControlledButton } from '@/shared/ui/controlled/button';

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
      <div className="flex h-[280px] w-[502px] flex-col rounded-lg bg-white p-5 shadow-lg">
        <textarea
          className="h-[176px] w-[462px] resize-none rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="mt-auto flex justify-end space-x-2">
          <ControlledButton
            onClick={onCancel}
            type="submit"
            className="h-[40px] w-[120px] bg-[#E9E9E9] text-base font-bold text-[#6C7072] hover:bg-gray-600 hover:text-white"
          >
            キャンセル
          </ControlledButton>
          <ControlledButton
            onClick={() => onSave(value)}
            type="submit"
            className="h-[40px] w-[120px] bg-[#0066FF] text-base font-bold text-[#FFFFFF] hover:bg-blue-600 hover:text-white"
          >
            保存
          </ControlledButton>
        </div>
      </div>
    </div>
  );
}
