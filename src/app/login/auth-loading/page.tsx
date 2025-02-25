'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { Progress } from '@/components/Progress';
import { usePostOAuthLogin } from '@/hooks/apis/login/usePostLogin';

export default function AuthLoadingPage() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate: loginMutate, isPending, isSuccess } = usePostOAuthLogin();

  // 프로그레스 바 애니메이션 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // API 요청 중일 때는 95%까지만 증가
        if (isPending && prevProgress >= 95) {
          return 95;
        }
        // API 요청이 완료되면 더 빠르게 증가
        const increment = isPending ? 5 : 10;
        return Math.min(prevProgress + increment, 95);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isPending]);

  useEffect(() => {
    const authCode = searchParams.get('code');
    const state = searchParams.get('state');

    if (!authCode) {
      router.push('/login');
      return;
    }

    let provider: 'KAKAO' | 'NAVER' = 'KAKAO';

    if (state === 'naver_login') {
      provider = 'NAVER';
    } else if (state === 'kakao_login') {
      provider = 'KAKAO';
    }

    const timer = setTimeout(() => {
      loginMutate({ code: authCode, type: provider });
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, searchParams, loginMutate]);

  useEffect(() => {
    if (isSuccess && progress >= 95) {
      setProgress(100);
    }
  }, [isSuccess, progress]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src="/images/onboarding-complete.png"
          alt="로고"
          width={335}
          height={335}
        />

        <div className="flex flex-col items-center mt-0">
          <p className="font-18-medium text-mainPink1 pb-1">
            잠시만 기다려주세요.
          </p>
          <p className="font-14-regular text-gray1 pb-2">
            {isPending
              ? '로그인 정보를 확인하고 있습니다.'
              : isSuccess
                ? '로그인 성공! 페이지로 이동합니다.'
                : '로그인 정보를 확인하고 있습니다.'}
          </p>
        </div>
      </div>

      <div className="mt-4 w-[60%]">
        <Progress value={progress} />
      </div>
    </div>
  );
}
