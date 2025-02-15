import StageIndicator from '@/components/onboarding/StageIndicator';
import ProgressBar from '@/components/ProgressBar';

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
  const getCurrentStage = () => {
    if (totalSteps === 9) return 1; // profile
    if (totalSteps === 6) return 2; // ideal
    if (totalSteps === 3) return 3; // face auth
    return 1;
  };

  return (
    <div>
      <div className="w-full px-5 py-4 gap-6 flex justify-between">
        <div className="cursor-pointer flex items-center justify-center">
          <BackIcon onClick={onPrev} />
        </div>
        <StageIndicator currentStage={getCurrentStage()} />
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
}
