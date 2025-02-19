'use client';

import DirectIcon from '/public/assets/icons/button_direct.svg';
import HeartIcon from '/public/assets/icons/button_heart.svg';
import FaceAuthIcon from '/public/assets/icons/face_auth.svg';
import LocationIcon from '/public/assets/icons/location.svg';

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';

interface ProfileCardProps {
  name: string;
  age?: React.ReactNode;
  location: string;
  // images?: string;
}

export default function ProfileCard({
  name,
  age,
  location,
  // images,
}: ProfileCardProps) {
  return (
    <div className="relative w-full aspect-square rounded-xl shadow-lg overflow-hidden">
      {/* 이미지 캐러셀 */}
      <Carousel>
        {/* 삭제 하면 안됨 */}

        {/* <CarouselContent>
          {images.map((imgUrl, index) => (
            <CarouselItem key={index}>
              <Image
                src={imgUrl}
                alt={`Profile image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent> */}
        {/* 좌우 이동 버튼 */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-mainPink2 via-transparent to-transparent rounded-xl z-10" />

      {/* 사용자 정보 */}
      <div className="absolute left-5 bottom-6 z-20">
        <div className="pb-2">
          <FaceAuthIcon />
        </div>
        <div className="font-24-medium text-white space-x-3 pb-2">
          <span>{name}</span>
          <span>{age}</span>
        </div>
        <div className="flex items-center space-x-2">
          <LocationIcon />
          <span className="text-14px font-medium text-white">{location}</span>
        </div>
      </div>

      {/* 버튼 */}
      <div className="absolute right-3 bottom-3 z-20 flex items-start">
        <button>
          <DirectIcon />
        </button>
        <button>
          <HeartIcon />
        </button>
      </div>
    </div>
  );
}
