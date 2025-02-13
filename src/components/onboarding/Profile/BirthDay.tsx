import Button from '@/components/common/Button';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import { useInput } from '@/hooks/useInput';
import type { OnboardingProps } from '@/types/onboarding';

import Title from '../Title';

export default function BirthDay({
  setContent,
  onNext,
  onPrev,
  currentStepNumber = 3,
  totalStepsNumber = 8,
}: OnboardingProps) {
  const today = new Date().toISOString().split('T')[0];
  const { value, setValue } = useInput(today);

  const isButtonEnabled = value !== undefined;

  const handleNext = () => {
    if (!isButtonEnabled) return;

    setContent((prev) => ({ ...prev, birth: value || today }));
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
              title="생일은 언제인가요?"
              currentStepNumber={currentStepNumber}
              totalStepsNumber={totalStepsNumber}
            />
          </div>

          <div className="relative border-b border-black w-full pb-2 h-[40px]">
            <input
              type="date"
              value={value}
              onChange={(e) => setValue(e.target.value.trim())}
              className="w-full outline-none border-none"
            />
          </div>
        </div>

        <Button
          shape="rectangle"
          variant={isButtonEnabled ? 'filled' : 'disabled'}
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
