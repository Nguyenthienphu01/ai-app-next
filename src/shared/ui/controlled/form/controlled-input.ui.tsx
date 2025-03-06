import React, { InputHTMLAttributes } from 'react';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from '@/shared/ui/shadcn';

import { useFormContext } from 'react-hook-form';
import { cn } from '@/shared/lib/shadcn/utils';

interface ControlledFormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: React.ReactNode;
  className?: string;
}

export const ControlledFormInput = ({
  name,
  label,
  type = 'text',
  className,
  ...props
}: ControlledFormInputProps) => {
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
              <Input
                className={cn(
                  className,
                  'text-sm focus-visible:ring-[2px] focus-visible:ring-blue-400',
                )}
                type={type}
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
