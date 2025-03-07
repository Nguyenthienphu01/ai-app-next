'use client';

import React from 'react';
import { Checkbox } from '@/shared/ui/controlled/checkbox';

interface Template {
  image: string;
  title: string;
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
    <div className="h-[162px] w-[240px]">
      <div
        className={`relative w-full ${
          isSelected ? 'rounded-lg outline outline-2 outline-blue-500' : ''
        }`}
      >
        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full"
        />

        <div className="absolute right-2 bottom-2">
          <Checkbox checked={isSelected} onCheckedChange={onSelect} />
        </div>
      </div>

      <div className="py-2 text-center">
        <p
          className={`text-sm font-semibold ${
            isSelected ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          {template.title}
        </p>
      </div>
    </div>
  );
};

export default TemplateCard;
