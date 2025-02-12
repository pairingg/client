import OnboardingHeader from '@/components/header/OnboardingHeader';

import Title from '../Title';

interface NameProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentStepNumber?: number;
  totalStepsNumber?: number;
}

export default function Name({
  onNext,
  onPrev,
  currentStepNumber = 1,
  totalStepsNumber = 8,
}: NameProps) {
  return (
    <>
      <OnboardingHeader
        onPrev={onPrev}
        currentStep={currentStepNumber}
        totalSteps={totalStepsNumber}
      />
      <div className="w-full px-5 py-8">
        <Title
          title="이름이 무엇인가요?"
          currentStepNumber={currentStepNumber}
          totalStepsNumber={totalStepsNumber}
        />
        <button onClick={onNext}>다음</button>
      </div>
    </>
  );
}
