'use client';

import React from 'react';
import { cn } from '@/shared/lib/shadcn/utils';
import Image from 'next/image';

interface Template {
  image: string;
  title: string;
  page: number;
}

interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  isSelected,
  onSelect,
}) => {
  return (
    <div className="h-[162px] w-[240px] backdrop-filter-none">
      <div
        className={`relative w-full ${
          isSelected ? 'rounded-lg outline-2 outline-blue-500' : ''
        }`}
      >
        <div
          className="absolute top-2 left-2 cursor-pointer"
          onClick={onSelect}
        >
          <Image
            src="/i-close-1.png"
            width={20}
            height={20}
            loading="eager"
            alt="close title"
            priority
          />
        </div>

        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex items-center justify-between py-2 text-center">
        <p
          className={cn(
            'text-sm',
            isSelected
              ? 'font-black text-[#0066FF]'
              : 'font-normal text-[#161717]',
          )}
        >
          {template.title}
        </p>
        <span className="text-sm font-normal text-[#161717]">
          {template.page}
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;
