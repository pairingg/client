import { OnboardingProvider } from '@/contexts/OnboardingContext';

import ProfileOnboarding from './steps/profile';

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <ProfileOnboarding />
    </OnboardingProvider>
  );
}
