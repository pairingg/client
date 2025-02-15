import ProfileImage from '@/components/common/ProfileImage';
import MoreGrayIcon from '/public/assets/icons/more_gray.svg';

interface PostCardHeaderProps {
  name: string;
  age: number;
  location: string;
}

export default function PostCardHeader({
  name,
  age,
  location,
}: PostCardHeaderProps) {
  return (
    <div className="relative flex items-center m-4">
      {/* 프로필 이미지 */}
      <div className="mr-3">
        <ProfileImage src="/images/profile.png" size={80} />
      </div>

      {/* 알림 내용 */}
      <div className="flex-1">
        <p className="font-18-medium pb-1">{name}</p>
        <p className="pb-3">
          <span>{age}, </span>
          <span>{location}</span>
        </p>
      </div>

      <button className="absolute right-0 top-0 p-2">
        <MoreGrayIcon />
      </button>
    </div>
  );
}
