'use client';

import ResetIcon from '/public/assets/icons/text_reset.svg';

import Button from '@/components/common/Button';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import { useInput } from '@/hooks/useInput';

import OnboardingInput from '../Input';
import Title from '../Title';

import type { Dispatch, SetStateAction } from 'react';

import type { Content } from '.';

interface NameProps {
  setContent: Dispatch<SetStateAction<Content>>;
  onNext?: () => void;
  onPrev?: () => void;
  currentStepNumber?: number;
  totalStepsNumber?: number;
}

export default function Name({
  setContent,
  onNext,
  onPrev,
  currentStepNumber = 1,
  totalStepsNumber = 8,
}: NameProps) {
  const { value, setValue } = useInput();

  const handleNext = () => {
    setContent({ name: value });
    onNext?.();
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div className="h-screen">
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
            rightIcon={<ResetIcon onClick={handleReset} />}
          />
        </div>

        <Button
          shape="rectangle"
          variant="filled"
          width="w-full"
          height="55px"
          className=""
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
