'use client';

import Button from '@/components/common/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src="/images/onboarding-complete.png"
          alt="sign_in_complete"
          width={335}
          height={335}
        />

        <div className="flex flex-col items-center mt-0">
          <p className="font-18-medium text-mainPink1 pb-1">
            일시적인 오류입니다.
          </p>
          <p className="font-14-regular text-gray1 pb-2">
            잠시 후에 다시 시도해 주세요.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Button shape="circle" variant="disabled" onClick={() => router.back()}>
          이전으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
