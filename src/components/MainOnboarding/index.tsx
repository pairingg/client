import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../common/Button';

import BackIcon from '/src/assets/icons/back_icon.svg';

export default function MainOnboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const pages = [
    {
      title: 'AI 얼굴 인증',
      content: '으로\n신뢰할 수 있는 프로필',
      description:
        '얼굴 인증을 통해 신뢰성을 높이고,\n만남을 위한 안전한 환경을 제공합니다.',
      image: '/images/main_faceAuth_logo.png',
    },
    {
      title: '실시간 AI 추천',
      content: '으로\n나와 맞는 사람을 발견하세요!',
      description:
        '취향, 대화 스타일, 호감도를 분석하는 AI가\n당신과 가장 잘 맞는 상대를 실시간으로 추천해줍니다.',
      image: '/images/main_match_logo.png',
    },
    {
      title: '채팅 요약 & 감정도 분석',
      content: '으로\n대화 흐름을 한눈에!',
      description:
        'AI가 채팅 내용을 요약하고 호감도를 분석하여,\n상대와의 대화 흐름을 더 쉽게 파악하고\n자연스럽게 이어갈 수 있습니다.',
      image: '/images/main_chat_logo.png',
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/login');
    }
  };

  const { title, content, description, image } = pages[currentIndex];

  return (
    <div className="relative min-h-screen px-6">
      {/* 상단 영역 */}
      <div className="w-full py-4 gap-6 h-[68px] flex justify-between items-center cursor-pointer">
        <BackIcon onClick={handlePrev} />
      </div>

      {/* 메인 텍스트 영역 */}
      <div className="mt-6 mb-4 pb-10">
        {/* 큰 제목 부분 */}
        <h1 className="text-24px font-bold">
          <span className="text-mainPink1">{title}</span>
          <span className="whitespace-pre-line text-black"> {content}</span>
        </h1>

        {/* 설명 부분 */}
        <p className="mt-3 font-14-regular text-gray1 whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* 이미지 영역 */}
      <div className="mb-8 flex items-center justify-center">
        <Image src={image} alt="온보딩 이미지" width={250} height={200} />
      </div>

      {/* 하단 버튼 영역 */}
      <div className="absolute bottom-0 left-0 w-full px-5 py-8">
        <Button
          shape="rectangle"
          variant="filled"
          className="w-full h-[55px]"
          onClick={handleNext}
        >
          {currentIndex < pages.length - 1
            ? '다음'
            : '로그인/회원가입 하러 가기'}
        </Button>
      </div>
    </div>
  );
}
