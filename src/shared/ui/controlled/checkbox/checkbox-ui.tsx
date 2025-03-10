'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/lib/shadcn/utils';

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({
  checked,
  onCheckedChange,
  className,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(
        'flex size-6 items-center justify-center rounded border border-[#0066FF] bg-white transition-all',
        checked && 'bg-[#0066FF] text-white',
        className,
      )}
      {...props}
    >
      {checked && (
        <CheckIcon className="size-4" stroke="white" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Root>
  );
}
