'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TableOfContentsItemProps {
  title: string;
  description: string;
  hasEditButton?: boolean;
}

export function TableOfContentsItem({
  title,
  description,
  hasEditButton = false,
}: TableOfContentsItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
          <Link href="/" className="text-blue-500">
            <Image
              src="/icon-edit.png"
              width={16}
              height={16}
              loading="eager"
              alt="edit title"
              priority
            />
          </Link>
        )}
      </div>

      <div className="flex min-w-0 items-center space-x-2">
        <div className="truncate text-sm font-normal text-[#161717]">
          {description}
        </div>
        {isHovered && (
          <Link href="/" className="text-blue-500">
            <Image
              src="/icon-edit.png"
              width={16}
              height={16}
              loading="eager"
              alt="edit description"
              priority
            />
          </Link>
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
  );
}
