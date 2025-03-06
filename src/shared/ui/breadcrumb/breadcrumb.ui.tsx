import React from 'react';
import type { Breadcrumb as TBreadcrumb } from '@/shared/types/breadcrumb';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/shadcn';
import { cn } from '@/shared/lib/shadcn/utils';

interface Props {
  breadcrumbs: TBreadcrumb[];
}

export const AppBreadcrumb: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const className = cn(
            'text-[14px] text-white hover:text-gray-200',
            breadcrumb.active
              ? 'text-[rgba(253,198,0,1)] hover:text-[rgba(253,198,0,0.9)]'
              : '',
          );

          return (
            <React.Fragment key={`breadcrumb-${index}-${breadcrumb.label}`}>
              <BreadcrumbItem>
                {breadcrumb.href ? (
                  <BreadcrumbLink href={breadcrumb.href} className={className}>
                    {breadcrumb.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className={className}>
                    {breadcrumb.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator className="text-white" />
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
