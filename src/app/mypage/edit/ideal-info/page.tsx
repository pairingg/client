'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import BackIcon from '/src/assets/icons/back_icon.svg';

import AddressOption from '@/components/common/AddressOption';
import Button from '@/components/common/Button';
import ChipButton from '@/components/common/ChipButton';
import OnboardingInput from '@/components/onboarding/Input';
import MBTI_LIST from '@/constants/mbti';
import type { DrinkStatusType, SmokeStatusType } from '@/constants/wellness';
import { DRINK_STATUS, SMOKE_STATUS } from '@/constants/wellness';
import { useGetIdeal } from '@/hooks/apis/mypage/useGetIdeal';
import { usePutIdeal } from '@/hooks/apis/mypage/usePutIdeal';

const DRINK_OPTIONS = Object.entries(DRINK_STATUS);
const SMOKE_OPTIONS = Object.entries(SMOKE_STATUS);

const hobbies = [
  '운동',
  '게임',
  '여행',
  '독서',
  '맛집탐방',
  '카페',
  '영화',
  '산책',
  '쇼핑',
];

export default function IdealEditInfo() {
  const router = useRouter();

  // GET 훅
  const { data: idealData } = useGetIdeal();

  // PUT 훅
  const { mutate: putIdeal } = usePutIdeal();

  // (1) 주소
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [selectedAddresses, setSelectedAddresses] = useState<
    { city: string; district: string }[]
  >([]);

  // (2) MBTI
  const [selectedMbti, setSelectedMbti] = useState<string[]>([]);

  // (3) 나이
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  // (4) 취미
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  // (5) 음주/흡연
  const [wellness, setWellness] = useState<{
    drink?: DrinkStatusType;
    smoke?: SmokeStatusType;
  }>({});

  // 뒤로가기
  const handleToMyPage = () => {
    router.push('/mypage');
  };

  // 초기값 세팅
  useEffect(() => {
    if (!idealData) return;

    // 주소
    if (idealData.address) {
      setSelectedAddresses(idealData.address);
    }

    // MBTI
    if (idealData.mbti) {
      setSelectedMbti(idealData.mbti);
    }

    // 나이
    if (idealData.ageStart !== undefined) {
      setMinAge(String(idealData.ageStart));
    }
    if (idealData.ageEnd !== undefined) {
      setMaxAge(String(idealData.ageEnd));
    }

    // 취미
    if (idealData.hobby) {
      setSelectedHobbies(idealData.hobby);
    }

    // 음주/흡연
    setWellness({
      drink: idealData.drink as DrinkStatusType,
      smoke: idealData.smoke as SmokeStatusType,
    });
  }, [idealData]);

  // 주소 선택 모달
  const handleAddressSelect = (city: string, district: string) => {
    const newAddress = { city, district };
    const exists = selectedAddresses.some(
      (addr) => addr.city === city && addr.district === district,
    );
    const canAddMore = selectedAddresses.length < 3;

    if (!exists && canAddMore) {
      setSelectedAddresses((prev) => [...prev, newAddress]);
    }
    setIsAddressOpen(false);
  };

  // 주소 제거
  const handleRemoveAddress = (index: number) => {
    setSelectedAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  // MBTI 토글
  const toggleMbti = (mbti: string) => {
    setSelectedMbti((prev) =>
      prev.includes(mbti)
        ? prev.filter((item) => item !== mbti)
        : [...prev, mbti],
    );
  };

  // 취미 토글
  const toggleHobby = (hobby: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobby)
        ? prev.filter((item) => item !== hobby)
        : [...prev, hobby],
    );
  };

  // 수정 완료
  const handleSubmit = () => {
    if (!idealData) return;

    const updatedProfile = {
      // mbti
      mbti: selectedMbti,

      // 주소
      address: selectedAddresses,

      // 나이 범위
      ageStart: Number(minAge),
      ageEnd: Number(maxAge),

      // 취미
      hobby: selectedHobbies,

      // 음주 / 흡연
      drink: wellness.drink,
      smoke: wellness.smoke,
    };

    putIdeal(updatedProfile, {
      onSuccess: () => {
        router.push('/mypage');
      },
    });
  };

  return (
    <div className="h-[100dvh] bg-[#FFFFFF] flex flex-col">
      {/* 상단 헤더 */}
      <div className="relative w-full px-5 py-4 gap-6 h-[68px] flex justify-center items-center shadow-md flex-shrink-0">
        <div className="absolute left-[20px]">
          <BackIcon onClick={handleToMyPage} />
        </div>
        <div className="font-18-medium">이상형 정보 수정</div>
      </div>

      {/* 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-5 py-8 flex flex-col gap-10">
          {/* 1) 상대의 성격 (MBTI) */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">상대의 성격</div>
            <div className="font-14-regular text-black">
              상대의 성격에 대해 원하는 MBTI를 선택해주세요.
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {MBTI_LIST.map((mbti) => (
                <ChipButton
                  key={mbti}
                  isSelected={selectedMbti.includes(mbti)}
                  onClick={() => toggleMbti(mbti)}
                >
                  {mbti}
                </ChipButton>
              ))}
            </div>
          </div>

          <hr className="border-gray3 border-b-1" />

          {/* 2) 상대의 거주지 */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">상대의 거주지</div>
            <div className="font-14-regular text-black">
              내가 원하는 상대방의 위치를 최대 3곳 선택해주세요.
            </div>
            <div className="mt-4">
              <input
                type="button"
                value="주소를 선택해주세요"
                onClick={() => setIsAddressOpen(true)}
                className="w-full h-[35px] border-b border-black outline-none bg-transparent text-gray-900 font-18-regular text-start pb-1 cursor-pointer"
              />
            </div>
            {/* 선택된 주소 목록 */}
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedAddresses.map((addr, idx) => (
                <div
                  key={`${addr.city}-${addr.district}-${idx}`}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm flex items-center"
                >
                  {addr.city} {addr.district}
                  <button
                    onClick={() => handleRemoveAddress(idx)}
                    className="bg-gray2 w-5 h-5 flex items-center justify-center rounded-full text-[12px] font-bold text-white ml-2"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 주소 선택 모달 */}
          <AddressOption
            isOpen={isAddressOpen}
            onClose={() => setIsAddressOpen(false)}
            onSelect={handleAddressSelect}
          />

          <hr className="border-gray3 border-b-1" />

          {/* 3) 상대의 나이 */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">상대의 나이</div>
            <div className="font-14-regular text-black">
              내가 원하는 상대방의 나이 범위를 선택해주세요.
            </div>
            <div className="flex items-center gap-2 mt-4">
              <OnboardingInput
                className="w-8"
                value={minAge}
                maxLength={2}
                pattern="\d*"
                inputMode="numeric"
                placeholder="00"
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^0-9]/g, '')
                    .slice(0, 2);
                  setMinAge(value);
                }}
              />
              <span>~</span>
              <OnboardingInput
                className="w-8"
                value={maxAge}
                maxLength={2}
                pattern="\d*"
                inputMode="numeric"
                placeholder="00"
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/[^0-9]/g, '')
                    .slice(0, 2);
                  setMaxAge(value);
                }}
              />
            </div>
          </div>

          <hr className="border-gray3 border-b-1" />

          {/* 4) 상대의 음주 여부 */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">상대의 음주 여부</div>
            <div className="font-14-regular text-black">
              내가 원하는 상대방의 음주 스타일을 선택해주세요.
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {DRINK_OPTIONS.map(([key, label]) => (
                <ChipButton
                  key={key}
                  variant="wide"
                  isSelected={wellness.drink === key}
                  onClick={() =>
                    setWellness((prev) => ({
                      ...prev,
                      drink: key as DrinkStatusType,
                    }))
                  }
                >
                  {label}
                </ChipButton>
              ))}
            </div>
          </div>

          <hr className="border-gray3 border-b-1" />

          {/* 5) 상대의 흡연 여부 */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">상대의 흡연 여부</div>
            <div className="font-14-regular text-black">
              내가 원하는 상대방의 흡연 스타일을 선택해주세요.
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {SMOKE_OPTIONS.map(([key, label]) => (
                <ChipButton
                  key={key}
                  variant="wide"
                  isSelected={wellness.smoke === key}
                  onClick={() =>
                    setWellness((prev) => ({
                      ...prev,
                      smoke: key as SmokeStatusType,
                    }))
                  }
                >
                  {label}
                </ChipButton>
              ))}
            </div>
          </div>

          <hr className="border-gray3 border-b-1" />

          {/* 6) 취미 */}
          <div className="flex flex-col gap-3">
            <div className="font-20-medium">취미</div>
            <div className="font-14-regular text-black">
              내가 원하는 상대의 취미를 0개 이상 선택해주세요.
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {hobbies.map((hobby) => (
                <ChipButton
                  key={hobby}
                  isSelected={selectedHobbies.includes(hobby)}
                  onClick={() => toggleHobby(hobby)}
                >
                  {hobby}
                </ChipButton>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="px-5 py-8">
        <Button
          shape="rectangle"
          variant="filled"
          className="w-full h-[55px]"
          onClick={handleSubmit}
        >
          수정 완료
        </Button>
      </div>
    </div>
  );
}
