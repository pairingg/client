import { OnboardingProvider } from '@/contexts/OnboardingContext';

import ProfileOnboarding from './Profile';

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <ProfileOnboarding />
    </OnboardingProvider>
  );
}
