import Button from '@/components/common/Button';
import ChipButton from '@/components/common/ChipButton';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { useInput } from '@/hooks/useInput';
import type { OnboardingProps } from '@/types/onboarding';

import Title from '../../Title';

export default function Gender({
  onNext,
  onPrev,
  currentStepNumber = 2,
  totalStepsNumber = 8,
}: OnboardingProps) {
  const { data, updateData } = useOnboarding();
  const { value, setValue } = useInput<'MALE' | 'FEMALE'>(
    data?.profile?.gender,
  );

  const isButtonEnabled = value !== undefined;

  const handleNext = () => {
    if (!isButtonEnabled) return;

    updateData({ profile: { ...data?.profile, gender: value } });
    onNext?.();
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
              title="성별은 무엇인가요?"
              currentStepNumber={currentStepNumber}
              totalStepsNumber={totalStepsNumber}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ChipButton
              variant="wide"
              className="text-center font-18-medium pl-0"
              onClick={() => setValue('MALE')}
              isSelected={value === 'MALE'}
            >
              남성
            </ChipButton>
            <ChipButton
              variant="wide"
              className="text-center font-18-medium pl-0"
              onClick={() => setValue('FEMALE')}
              isSelected={value === 'FEMALE'}
            >
              여성
            </ChipButton>
          </div>
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
