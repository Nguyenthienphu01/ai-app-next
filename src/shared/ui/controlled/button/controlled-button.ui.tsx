import { cn } from '@/shared/lib/shadcn/utils';
import { Button } from '@/shared/ui/shadcn';

type ControlledButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

import { LoaderCircle } from 'lucide-react';

export const ControlledButton = (props: ControlledButtonProps) => {
  const { children, onClick, loading, disabled, className, ...rest } = props;
  return (
    <Button
      onClick={onClick}
      {...rest}
      disabled={loading || disabled}
      className={cn(
        'h-[48px] w-[140px] cursor-pointer rounded-[40px]',
        className,
      )}
      variant="outline"
    >
      {loading && <LoaderCircle className="animate-spin" />}
      {children}
    </Button>
  );
};
