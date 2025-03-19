'use client';
import { useState } from 'react';

import Link from 'next/link';

import DataError from '@/components/ exception/dataError';
import DataLoading from '@/components/ exception/dataLoading';
import BottomNavBar from '@/components/BottomNavBar';
import KeywordRecommendation from '@/components/KeywordRecommendation';
import ProfileCard from '@/components/ProfileCard';

import LogoIcon from '/src/assets/icons/logo_letter.svg';

import { useGetIdealRecommend } from '@/hooks/apis/idealRecommend/useGetIdealRecommend';
import { useGetKeyword } from '@/hooks/apis/idealRecommend/useGetKeyword';
import { useGetKeywordRecommend } from '@/hooks/apis/idealRecommend/useGetKeywordRecommend';
import type { keywordsList } from '@/types/ideal/ideal';

export default function MainPage() {
  // 선택된 키워드 객체 관리
  const [selectedKeyword, setSelectedKeyword] = useState<keywordsList | null>(
    null,
  );

  // 이상형 추천 GET 요청
  const {
    data: idealRecommendations,
    isLoading: isIdealLoading,
    error: idealError,
  } = useGetIdealRecommend();

  // 키워드 목록 GET 요청
  const {
    data: keywords,
    isLoading: isKeywordsLoading,
    error: keywordsError,
  } = useGetKeyword();

  // 키워드 이상형 추천 GET 요청
  const {
    data: keywordRecommendations,
    isLoading: isKeywordLoading,
    error: keywordError,
    refetch: refetchKeywordRecommendations,
  } = useGetKeywordRecommend(
    selectedKeyword?.keyword as string,
    !!selectedKeyword,
  );

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

            {/* 이상형 추천 영역 */}
            <div className="flex flex-col justify-center items-center gap-5">
              {isIdealLoading && <DataLoading />}
              {idealError && <DataError />}
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

          {/* 키워드 리스트 영역 */}
          <div className="flex flex-col mt-6">
            <p className="font-24-bold mb-5">맞춤 추천</p>
            <div className="flex justify-center">
              {isKeywordsLoading && <DataLoading />}
              {keywordsError && <DataError />}
              {keywords && (
                <KeywordRecommendation
                  keywords={keywords}
                  onKeywordSelected={(keyword: keywordsList) => {
                    setSelectedKeyword(keyword);
                    setTimeout(() => {
                      refetchKeywordRecommendations();
                    }, 0);
                  }}
                />
              )}
            </div>
          </div>

          {/* 키워드 이상형 추천 영역 */}
          {selectedKeyword && (
            <div className="flex flex-col pt-8">
              {isKeywordLoading && <DataLoading />}
              {keywordError && <DataError />}
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
