import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="relative w-80 h-80 bg-gray1 rounded-xl">
      {/* 닫기 버튼 */}
      <button className="absolute top-3 right-2">
        <Image
          src="/images/profileCard_delete.png"
          alt="프로필카드 닫기"
          width={16}
          height={16}
        />
      </button>

      {/* 사용자 정보 */}
      <div className="absolute items-start flex-col pl-3 bottom-7">
        <div className="pb-2">
          <Image
            src="/images/face-auth.png"
            alt="얼굴 인증마크"
            width={16}
            height={16}
          />
        </div>
        <div className="text-22px font-semiBold text-white space-x-3 pb-2">
          <span>김이름</span>
          <span>20</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/images/ping.png"
            alt="주소 이모티콘"
            width={16}
            height={16}
          />
          <span className="text-14px font-medium text-white">
            서울시 용산구
          </span>
        </div>
      </div>
    </div>
  );
}
