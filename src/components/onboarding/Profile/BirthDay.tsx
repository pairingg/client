import Button from '@/components/common/Button';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import { useInput } from '@/hooks/useInput';
import type { OnboardingProps } from '@/types/onboarding';

import OnboardingInput from '../Input';
import Title from '../Title';

export default function BirthDay({
  setContent,
  onNext,
  onPrev,
  currentStepNumber = 3,
  totalStepsNumber = 8,
}: OnboardingProps) {
  const { value, setValue } = useInput();

  const handleNext = () => {
    setContent((prev) => ({ ...prev, birth: value || '1990-01-01' }));
    onNext?.();
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
              title="생일은 언제인가요?"
              currentStepNumber={currentStepNumber}
              totalStepsNumber={totalStepsNumber}
            />
          </div>
          <div className="relative">
            <OnboardingInput
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value.trim())}
            />
          </div>
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
