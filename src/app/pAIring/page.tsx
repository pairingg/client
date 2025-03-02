'use client';
import { useState } from 'react';

import Link from 'next/link';

import BottomNavBar from '@/components/BottomNavBar';
import KeywordRecommendation from '@/components/KeywordRecommendation';
import ProfileCard from '@/components/ProfileCard';

import LogoIcon from '/src/assets/icons/logo_letter.svg';

import { useGetIdealRecommend } from '@/hooks/apis/idealRecommend/useGetIdealRecommend';
import { useGetKeywordRecommend } from '@/hooks/apis/idealRecommend/useGetKeywordRecommend';
import type { keywordsList } from '@/types/ideal/ideal';

export default function MainPage() {
  // 수정: 선택된 키워드 객체 관리 (숫자 id에서 keywordsList 전체 객체로 변경)
  const [selectedKeyword, setSelectedKeyword] = useState<keywordsList | null>(
    null,
  );

  // 일반 추천 데이터
  const {
    data: idealRecommendations,
    isLoading: isIdealLoading,
    error: idealError,
  } = useGetIdealRecommend();

  // 수정: 키워드 추천 데이터 API 호출 시, selectedKeyword의 keyword 값을 전달
  const {
    data: keywordRecommendations,
    isLoading: isKeywordLoading,
    error: keywordError,
    refetch: refetchKeywordRecommendations,
  } = useGetKeywordRecommend(
    selectedKeyword?.keyword as string,
    !!selectedKeyword,
  );

  // 수정: 키워드 목록 데이터 구조 변경 (keyword, keywordIconUrl)
  const keywords: keywordsList[] = [
    { keyword: '같은 취미', keywordIconUrl: 'https://placehold.co/600x400' },
    { keyword: '같은 위치', keywordIconUrl: 'https://placehold.co/600x400' },
    { keyword: '연상', keywordIconUrl: 'https://placehold.co/600x400' },
    { keyword: '연하', keywordIconUrl: 'https://placehold.co/600x400' },
    { keyword: '동갑', keywordIconUrl: 'https://placehold.co/600x400' },
    { keyword: '같은 성별', keywordIconUrl: 'https://placehold.co/600x400' },
  ];

  return (
    <div className="relative min-h-screen p-6 bg-[#f9f9f9]">
      <div className="flex flex-col pb-24">
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex justify-start">
              <Link href="/pAIring">
                <LogoIcon />
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              {isIdealLoading && <p>데이터 로딩 중</p>}
              {idealError && <p>데이터를 불러오지 못했습니다.</p>}
              {idealRecommendations &&
                idealRecommendations.map((item, index) => (
                  <ProfileCard
                    key={index}
                    name={item.name}
                    age={item.age}
                    city={item.city}
                    district={item.district}
                    images={item.images}
                  />
                ))}
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <p className="font-24-bold mb-5">맞춤 추천</p>
            <div className="flex justify-center">
              <KeywordRecommendation
                keywords={keywords}
                // 수정: onKeywordSelected 콜백이 키워드 전체 객체를 받도록 변경
                onKeywordSelected={(keyword: keywordsList) => {
                  setSelectedKeyword(keyword);
                  setTimeout(() => {
                    refetchKeywordRecommendations();
                  }, 0);
                }}
              />
            </div>
          </div>

          {/* 수정: selectedKeyword가 존재할 때 렌더링 */}
          {selectedKeyword && (
            <div className="flex flex-col pt-8">
              {isKeywordLoading && <p>데이터 로딩 중</p>}
              {keywordError && <p>데이터를 불러오지 못했습니다.</p>}
              {keywordRecommendations && (
                <div className="flex flex-col items-center gap-5">
                  {keywordRecommendations.map((item, index) => (
                    <ProfileCard
                      key={index}
                      name={item.name}
                      age={item.age}
                      city={item.city}
                      district={item.district}
                      images={item.images}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
