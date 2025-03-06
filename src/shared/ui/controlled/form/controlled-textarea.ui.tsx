import React from 'react';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Textarea,
} from '@/shared/ui/shadcn';

import { useFormContext } from 'react-hook-form';
import { cn } from '@/shared/lib/shadcn/utils';

interface ControlledFormTextareaProps {
  name: string;
  label?: React.ReactNode;
  rows?: number;
  className?: string;
}

export const ControlledFormTextarea = ({
  name,
  label,
  className,
  rows,
  ...props
}: ControlledFormTextareaProps) => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Textarea
                className={cn(
                  'text-sm focus-visible:ring-[2px] focus-visible:ring-blue-400',
                  className,
                )}
                rows={rows}
                {...field}
                {...props}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
