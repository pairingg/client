import { useState } from 'react';

import AddressOption from '@/components/common/AddressOption';
import Button from '@/components/common/Button';
import OnboardingHeader from '@/components/header/OnboardingHeader';
import type { OnboardingProps } from '@/types/onboarding';

import Title from '../Title';

export default function Address({
  setContent,
  onNext,
  onPrev,
  currentStepNumber = 4,
  totalStepsNumber = 8,
}: OnboardingProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [address, setAddress] = useState<{ city: string; district: string }>({
    city: '',
    district: '',
  });

  const handleAddressSelect = (city: string, district: string) => {
    setAddress({ city, district });
  };

  const handleNext = () => {
    setContent((prev) => ({ ...prev, address: address }));
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
              title="거주지는 어디인가요?"
              currentStepNumber={currentStepNumber}
              totalStepsNumber={totalStepsNumber}
            />
          </div>
          <input
            type="button"
            value={
              address.city || address.district
                ? `${address.city} ${address.district}`
                : '주소를 선택해주세요'
            }
            onClick={() => setIsOpen(true)}
            className="w-full h-[35px] outline-none border-b border-black text-gray-900 font-18-regular text-start pb-1"
          />
        </div>

        <AddressOption
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSelect={handleAddressSelect}
        />

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
