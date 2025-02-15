import StageIndicator from '@/components/onboarding/StageIndicator';
import ProgressBar from '@/components/ProgressBar';
import { useOnboarding } from '@/contexts/OnboardingContext';

import BackIcon from '/public/assets/icons/back_icon.svg';

interface Props {
  onPrev?: () => void;
  currentStep: number;
  totalSteps: number;
}

export default function OnboardingHeader({
  onPrev,
  currentStep,
  totalSteps,
}: Props) {
  const { currentStage } = useOnboarding();
  console.log(currentStage);

  return (
    <div>
      <div className="w-full px-5 py-4 gap-6 flex justify-between">
        <div className="cursor-pointer flex items-center justify-center">
          <BackIcon onClick={onPrev} />
        </div>
        <StageIndicator currentStage={currentStage} />
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
}
