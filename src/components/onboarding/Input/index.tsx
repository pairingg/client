import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

interface OnboardingInputProps extends ComponentProps<'input'> {
  rightIcon?: React.ReactNode;
  className?: string;
}

export default function OnboardingInput({
  type,
  value,
  onChange,
  rightIcon,
  className,
}: OnboardingInputProps) {
  return (
    <div className="relative border-b border-black w-full pb-2">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={cn('w-full outline-none', className, rightIcon && 'w-[95%]')}
      />
      {rightIcon && <span className="absolute right-0">{rightIcon}</span>}
    </div>
  );
}
