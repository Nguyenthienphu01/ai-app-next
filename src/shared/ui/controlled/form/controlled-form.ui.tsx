import React from 'react';
import { Form } from '@/shared/ui/shadcn';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues = FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
};

export const ControlledForm = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: Props<T>) => {
  return (
    <Form {...form}>
      <form
        className={className}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        {children}
      </form>
    </Form>
  );
};
