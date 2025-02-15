'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import ProgressBar from '@/components/ProgressBar';
import { useOnboarding } from '@/contexts/OnboardingContext';

import Title from '../../Title';

export default function Complete() {
  const { setCurrentStage } = useOnboarding();
  const router = useRouter();

  return (
    <div className="h-[100dvh]">
      <div className="w-full mt-14">
        <ProgressBar currentStep={6} totalSteps={5} />
      </div>
      <div className="w-full px-5 py-8 flex flex-col h-[calc(100%-68px)] justify-between">
        <div>
          <div className="mb-10">
            <Title title="이상형 등록이 완료되었어요." />
            <div className="font-14-regular mt-[10px]">
              이제 마지막으로 본인 인증을 진행합니다.
            </div>
          </div>
        </div>

        <Button
          shape="rectangle"
          variant="filled"
          className="w-full h-[55px]"
          onClick={() => setCurrentStage(3)}
        >
          다음
        </Button>

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
      </div>
    </div>
  );
}
