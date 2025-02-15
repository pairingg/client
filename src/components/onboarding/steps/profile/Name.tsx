'use client';

import ResetIcon from '/public/assets/icons/text_reset.svg';

import Button from '@/components/common/Button';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { useInput } from '@/hooks/useInput';
import type { OnboardingProps } from '@/types/onboarding';

import OnboardingInput from '../../Input';
import Title from '../../Title';

export default function Name({
  onNext,
  onPrev,
  currentStepNumber = 1,
  totalStepsNumber = 8,
}: OnboardingProps) {
  const { data, updateData } = useOnboarding();
  const { value, setValue } = useInput(data?.profile?.name || '');

  const isButtonEnabled = value !== '';

  const handleNext = () => {
    if (!isButtonEnabled) return;

    updateData({ profile: { ...data?.profile, name: value } });
    onNext?.();
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div className="h-[100dvh]">
      <OnboardingHeader
        onPrev={onPrev}
        currentStep={currentStepNumber}
        totalSteps={totalStepsNumber}
      />
      <div className="w-full px-5 py-8 flex flex-col h-[calc(100%-56px)] justify-between">
        <div>
          <div className="mb-10">
            <Title
              title="이름이 무엇인가요?"
              currentStepNumber={currentStepNumber}
              totalStepsNumber={totalStepsNumber}
            />
          </div>
          <OnboardingInput
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
            rightIcon={value ? <ResetIcon onClick={handleReset} /> : undefined}
          />
        </div>

        <Button
          shape="rectangle"
          variant={isButtonEnabled ? 'filled' : 'disabled'}
          className="w-full h-[55px]"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
