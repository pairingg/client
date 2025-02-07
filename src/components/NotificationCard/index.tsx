import Image from 'next/image';
import NotificationIcon from '/public/assets/icons/Notification_sign.svg';

export default function NotificationCard() {
  return (
    <div className="relative flex items-center bg-white w-[340px] h-[110px] rounded-xl m-4 shadow-md">
      <NotificationIcon className="absolute top-2 right-2" />

      {/* 프로필 이미지 */}
      <div className="rounded-full overflow-hidden mr-2">
        <Image
          src="/images/profile.png"
          alt="프로필 이미지"
          width={90}
          height={90}
          className="object-cover"
        />
      </div>

      {/* 알림 내용 */}
      <div className="flex-1">
        <p className="text-sm font-semiBold pb-1">
          <span>이름</span>님이 하트를 보냈어요.
        </p>
        <p className="pb-3">
          <span>22,</span>
          <span>거주지</span>
        </p>
        <p className="text-14px text-gray1 mt-1">PM 9:41</p>
      </div>

      {/* 버튼 */}
      <button className=" absolute bottom-3 right-4 text-14px text-gray1 bg-gray2 rounded-3xl px-3 py-1">
        프로필 보기
      </button>
    </div>
  );
}
