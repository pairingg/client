'use client';
import { useState } from 'react';

import Link from 'next/link';

import BottomNavBar from '@/components/BottomNavBar';
import KeywordRecommendation from '@/components/KeywordRecommendation';
import ProfileCard from '@/components/ProfileCard';

import SameHobbyIcon from '/src/assets/icons/keyword_hobby.svg';
import LocationIcon from '/src/assets/icons/keyword_location.svg';
import SameAgeIcon from '/src/assets/icons/keyword_sameAge.svg';
import SameGenderIcon from '/src/assets/icons/keyword_sameGender.svg';
import UnderAgeIcon from '/src/assets/icons/keyword_underAge.svg';
import UpAgeIcon from '/src/assets/icons/keyword_upAge.svg';
import LogoIcon from '/src/assets/icons/logo_letter.svg';

import { useGetIdealRecommend } from '@/hooks/apis/idealRecommend/useGetIdealRecommend';
import { useGetKeywordRecommend } from '@/hooks/apis/idealRecommend/useGetKeywordRecommend';
import type { keywordsList } from '@/types/ideal/ideal';

export default function MainPage() {
  // 선택된 키워드 id 관리
  const [selectedKeywordId, setSelectedKeywordId] = useState<number | null>(
    null,
  );

  // 일반 추천 데이터
  const {
    data: idealRecommendations,
    isLoading: isIdealLoading,
    error: idealError,
  } = useGetIdealRecommend();

  // 키워드 추천 데이터
  const {
    data: keywordRecommendations,
    isLoading: isKeywordLoading,
    error: keywordError,
    refetch: refetchKeywordRecommendations,
  } = useGetKeywordRecommend(selectedKeywordId as number, !!selectedKeywordId);

  // 키워드 목록
  const keywords: keywordsList[] = [
    { keywordId: 1, icon: <SameHobbyIcon />, title: '같은 취미' },
    { keywordId: 2, icon: <LocationIcon />, title: '같은 위치' },
    { keywordId: 3, icon: <UpAgeIcon />, title: '연상' },
    { keywordId: 4, icon: <UnderAgeIcon />, title: '연하' },
    { keywordId: 5, icon: <SameAgeIcon />, title: '동갑' },
    { keywordId: 6, icon: <SameGenderIcon />, title: '같은 성별' },
  ];

  return (
    <div className="relative min-h-screen p-6 bg-[#f9f9f9]">
      <div className="flex flex-col pb-24">
        <div className="flex flex-col">
          {/* 로고 영역 */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-start">
              <Link href="/pAIring">
                <LogoIcon />
              </Link>
            </div>

            {/* 프로필카드 영역 */}
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

          {/* 추천 키워드 영역 */}
          <div className="flex flex-col mt-6">
            <p className="font-24-bold mb-5">맞춤 추천</p>
            <div className="flex justify-center">
              <KeywordRecommendation
                keywords={keywords}
                onKeywordSelected={(id: number) => {
                  setSelectedKeywordId(id);
                  // 키워드 버튼 클릭 시, API에서 해당 키워드 추천 데이터를 불러오기 위해 refetch 호출
                  refetchKeywordRecommendations();
                }}
              />
            </div>
          </div>

          {/* 추천 리스트 영역: 선택된 키워드에 해당하는 키워드 추천 데이터를 렌더링 */}
          {selectedKeywordId && (
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
