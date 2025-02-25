'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import LoginButtons from './OAuthButtons';

interface LoginProps {
  code?: string;
}

export default function Login({ code }: LoginProps) {
  useEffect(() => {
    if (code) {
      console.log('Authorization code:', code);
      // TODO: 여기서 인가 코드를 사용하여 필요한 처리를 수행
    }
  }, [code]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Image
        className="mb-56"
        src="/images/login_pairing_logo.png"
        alt="login"
        width={343}
        height={339}
      />
      <div className="absolute bottom-20 w-full">
        <LoginButtons />
      </div>
    </div>
  );
}
