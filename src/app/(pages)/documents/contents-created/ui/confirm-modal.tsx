import Image from 'next/image';
import { ControlledButton } from '@/shared/ui/controlled/button';
import { cn } from '@/shared/lib/shadcn/utils';

interface ConfirmModalProps {
  isOpen: boolean;
  type: 'success' | 'confirm';
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function ConfirmModal({
  isOpen,
  type,
  message,
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  const isConfirm = type === 'confirm';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="h-[254px] w-[378px] rounded-2xl bg-white p-6 text-center shadow-lg">
        <Image
          src={isConfirm ? '/i-confirm.png' : '/i-success.png'}
          className="mx-auto mt-[8px]"
          width={56}
          height={56}
          loading="eager"
          alt={isConfirm ? 'confirm' : 'success'}
          priority
        />

        <p className="mt-6 text-lg font-bold">{message}</p>

        <div className="mt-6 flex justify-center space-x-3">
          {isConfirm && (
            <ControlledButton
              type="button"
              className="h-[40px] w-[120px] bg-[#E9E9E9] text-base font-bold text-[#6C7072]"
              onClick={onClose}
            >
              キャンセル
            </ControlledButton>
          )}
          <ControlledButton
            type="button"
            className={cn(
              'h-[40px] w-[120px] text-base font-bold',
              isConfirm
                ? 'bg-[#FF1E00] text-white'
                : 'bg-[#E9E9E9] text-[#6C7072]',
            )}
            onClick={isConfirm ? onConfirm : onClose}
          >
            {isConfirm ? '削除' : '閉じる'}
          </ControlledButton>
        </div>
      </div>
    </div>
  );
}
