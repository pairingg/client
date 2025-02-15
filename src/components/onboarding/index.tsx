'use client';

import { useOnboarding } from '@/contexts/OnboardingContext';

import FaceAuthOnboarding from './steps/FaceAuthOnboarding';
import IdealTypeOnboarding from './steps/idealType';
import ProfileOnboarding from './steps/profile';

export default function Onboarding() {
  const { currentStage } = useOnboarding();

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <ProfileOnboarding />;
      case 2:
        return <IdealTypeOnboarding />;
      case 3:
        return <FaceAuthOnboarding />;
      default:
        return <ProfileOnboarding />;
    }
  };

  return renderStage();
}
