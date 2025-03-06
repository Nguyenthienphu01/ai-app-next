import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { AppBreadcrumb } from '@/shared/ui/breadcrumb';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';

interface Props {
  breadcrumbs?: TBreadcrumb[];
}

export const AppHeader: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <>
      <div className="sticky top-0 z-50 h-[var(--app-header-height)] w-full">
        <div className="flex h-full items-center bg-gradient-to-r from-[#0066ff] to-[#277dff]">
          <Link href="/">
            <Image
              src="/logo.png"
              width={228}
              height={56}
              loading="eager"
              alt="logo"
              priority
            />
          </Link>
          <div className="relative flex h-full flex-1 items-center border-t-3 border-t-white text-sm text-white before:absolute before:-top-[4px] before:-left-[2px] before:h-1 before:w-1 before:bg-white before:content-['']">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <AppBreadcrumb breadcrumbs={breadcrumbs} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
