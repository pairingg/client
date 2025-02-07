import Image from 'next/image';

export default function Chatroom() {
  return (
    <div className="flex items-center">
      <button className="mr-2">
        <span className="text-20px font-gray1">{'<'}</span>
      </button>

      <div className="flex items-center space-x-2">
        <Image
          src="/images/profile.png"
          alt="프로필 사진"
          width={48}
          height={48}
          className="rounded-full"
        />
        <span className="text-20px font-semiBold">김채팅</span>
      </div>

      <button className="pl-10">
        <Image
          src="/images/more_grey.png"
          alt="더보기 아이콘"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}
