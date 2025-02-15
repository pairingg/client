'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import ProgressBar from '@/components/ProgressBar';
import { useOnboarding } from '@/contexts/OnboardingContext';

import Title from '../../Title';

export default function Complete() {
  const { setCurrentStage } = useOnboarding();
  const router = useRouter();
  const handleNext = () => {
    setCurrentStage(2);
  };

  return (
    <div className="relative h-[100dvh]">
      <div className="w-full mt-14">
        <ProgressBar currentStep={9} totalSteps={8} />
      </div>
      <div className="w-full px-5 py-8 flex flex-col">
        <div>
          <div className="mb-10">
            <Title title="프로필 등록이 완료되었어요." />
            <div className="font-14-regular mt-[10px]">
              이후 이상형 정보 등록이 시작됩니다.
            </div>
          </div>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4">
            <button onClick={() => router.push('/onboarding?step=faceAuth')}>
              개발용: 직접 라우팅
            </button>
            <button onClick={() => router.push('/onboarding?step=profile')}>
              개발용: 프로필로 돌아가기
            </button>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full px-5 py-8">
          <Button
            shape="rectangle"
            variant="filled"
            className="w-full h-[55px]"
            onClick={handleNext}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
