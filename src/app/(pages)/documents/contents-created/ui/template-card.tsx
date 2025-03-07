'use client';

import React from 'react';

export default function TemplateCard({ template, isSelected, onSelect }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200">
      <div className="relative aspect-[4/3] bg-gray-100">
        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full object-cover"
        />

        <div
          onClick={onSelect}
          className={`absolute top-2 right-2 h-6 w-6 rounded ${
            isSelected ? 'bg-blue-500' : 'border border-gray-300 bg-white'
          } flex cursor-pointer items-center justify-center transition-colors`}
        >
          {isSelected && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          )}
        </div>
      </div>

      <div className="p-2 text-center">
        <p className="text-sm font-medium">{template.title}</p>
        {template.type && (
          <p className="text-xs text-gray-500">{template.type}</p>
        )}
      </div>
    </div>
  );
}
