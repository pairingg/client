import type { Dispatch, SetStateAction } from 'react';

import type { Content } from '@/components/onboarding/Profile';

export interface OnboardingProps {
  setContent: Dispatch<SetStateAction<Content>>;
  onNext?: () => void;
  onPrev?: () => void;
  currentStepNumber?: number;
  totalStepsNumber?: number;
}
