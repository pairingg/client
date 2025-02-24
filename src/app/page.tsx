'use client';

import { useEffect, useState } from 'react';

import MainOnboarding from '@/components/MainOnboarding';
import Splash from '@/components/Splash';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 스플래시를 3초 정도 보여준 뒤에 false로 전환
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <Splash /> : <MainOnboarding />}</>;
}
