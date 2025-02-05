import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

const VARIANTS = {
  small: 'rounded-[20px] px-[15px] py-[4px]',
  rectangle: 'rounded-[14px] px-[75px] py-[16px]',
  wide: 'rounded-[14px] pl-[15px] py-[13px] w-full',
} as const;

type ChipButtonVariant = keyof typeof VARIANTS;

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipButtonVariant;
  isSelected?: boolean;
}

export default function ChipButton({
  variant = 'small',
  isSelected = false,
  className,
  children,
  ...restprops
}: PropsWithChildren<ChipButtonProps>) {
  return (
    <button
      type="button"
      className={cn(
        'text-[18px] border',
        VARIANTS[variant],
        isSelected
          ? 'border-mainPink1 text-mainPink1'
          : 'border-gray1 text-gray1',
        className,
      )}
      {...restprops}
    >
      {children}
    </button>
  );
}
